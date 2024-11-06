import "./App.css";
import { Rotas } from "./routes/Routes";
import { AuthProvider } from "./context/auth";
import { CarrinhoProvider } from "./context/carrinhoContext";

function App() {
  return (
    <>
    <AuthProvider>
      <CarrinhoProvider>
        <Rotas />
      </CarrinhoProvider>
    </AuthProvider>
    </>
  );
}

export default App;
