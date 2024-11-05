import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/notFound/NotFound";
import { ProdutoPage } from "../pages/produto/Produto";
import { Layout } from "../Layout/Layout";
import { TesteProdutosPage } from "../pages/testeProdutos/Teste";
import { SobrePage } from "../pages/sobre/Sobre";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { CarrinhoPage } from "../pages/carrinho/Carrinho";
import { LoginPage } from "../pages/login/Login";
import { PrivateRoute } from "./privateRoutes"

export function Rotas() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route path="/carrinho" element={<PrivateRoute />}>
                    <Route path="/carrinho" element={<CarrinhoPage/>} />
                </Route>
                    <Route index element={<ProdutoPage/>} />
                    <Route path="/teste" element={<TesteProdutosPage/>} />
                    <Route path="/cadastro" element={<Cadastro/>} />
                    <Route path="/sobre" element={<SobrePage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    {/*<Route path="cadastro" element={<CadastroPage />} />*/}
                </Route>
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </>
    )
}