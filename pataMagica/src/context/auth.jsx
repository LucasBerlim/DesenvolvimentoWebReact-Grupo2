import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadingStoreData = async () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storageToken = localStorage.getItem("@Auth:token");
    
            if(storageUser && storageToken) {
                setUser(JSON.parse(storageUser));
                api.defaults.headers.common["Authorization"] = `Bearer ${storageToken}`;
            }
        };
        loadingStoreData();
    }, []);
    
    const signIn = async ({email, cpf}) => {
        try{
            const response = await api.post("/clientes/login", {
                email,
                cpf,
            });

            if(response.data.error){
                alert(response.data.error);
                return;
            } 
            const { token, user } = response.data;            
            setUser(user);
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`;
            localStorage.setItem("@Auth:token", response.data.token);
            localStorage.setItem("@Auth:user", JSON.stringify(user));
        } catch (error) {
            console.error("Erro ao fazer login.", error);
            alert("Erro ao tentar fazer login.")
        }
    };



        // if(response.data.token){
        //     setUser(response.data.user);
        //     api.defaults.headers.common[
        //         "Authorization"] = `Bearer ${response.data.token}`;
        //         localStorage.setItem("@Auth:token", response.data.token);
        //         localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
        // } else {
        //     alert(response.data.error);
        // }

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("@Auth:user");
        localStorage.removeItem("@Auth:token");
    };

    return(
        <AuthContext.Provider value={{
            user,
            signed: !!user, 
            signIn,
            signOut,
        }}>
            {children}
        </AuthContext.Provider>
    );
}