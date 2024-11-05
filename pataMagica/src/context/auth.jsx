import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const loadingStoreData = async () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storageToken = localStorage.getItem("@Auth:token");
            const storageEmail = localStorage.getItem("@Auth:email")
    
            if(storageUser && storageToken && storageEmail) {
                setUser(JSON.parse(storageUser));
                setEmail(JSON.parse(storageEmail));
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
            setEmail(email);
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`;
            localStorage.setItem("@Auth:token", response.data.token);
            localStorage.setItem("@Auth:email", JSON.stringify(email));
            localStorage.setItem("@Auth:user", JSON.stringify(user));
        } catch (error) {
            console.error("Erro ao fazer login.", error);
            alert("Erro ao tentar fazer login.")
        }
    };

    const signOut = () => {
        setUser(null);
        setEmail(null);
        localStorage.removeItem("@Auth:email");
        localStorage.removeItem("@Auth:token");
        localStorage.removeItem("@Auth:user");
    };

    return(
        <AuthContext.Provider value={{
            user,
            email,
            signed: !!email, 
            signIn,
            signOut,
        }}>
            {children}
        </AuthContext.Provider>
    );
}