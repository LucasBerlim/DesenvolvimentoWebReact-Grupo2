import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/notFound/NotFound";
import { ProdutoPage } from "../pages/produto/Produto";

export function Rotas() {
    return(
        <>
            <Routes>
                <Route>
                    <Route index element={<ProdutoPage/>} />
                    {/*<Route path="sobre" element={<SobrePage />} />*/}
                    {/*<Route path="carrinho" element={<CarrinhoPage />} />*/}
                    {/*<Route path="login" element={<LoginPage />} />*/}
                    {/*<Route path="cadastro" element={<CadastroPage />} />*/}
                </Route>
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </>
    )
}