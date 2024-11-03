import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/notFound/NotFound";
import { ProdutoPage } from "../pages/produto/Produto";
import { Layout } from "../Layout/Layout";
import { TesteProdutosPage } from "../pages/testeProdutos/Teste";
import { TesteCadastroPage } from "../pages/testeCadastro/Teste";
import { SobrePage } from "../pages/sobre/Sobre";

export function Rotas() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ProdutoPage/>} />
                    <Route path="teste" element={<TesteProdutosPage/>} />
                    <Route path="cadastro" element={<TesteCadastroPage/>} />
                    <Route path="sobre" element={<SobrePage/>} />
                    {/*<Route path="carrinho" element={<CarrinhoPage />} />*/}
                    {/*<Route path="login" element={<LoginPage />} />*/}
                    {/*<Route path="cadastro" element={<CadastroPage />} />*/}
                </Route>
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </>
    )
}