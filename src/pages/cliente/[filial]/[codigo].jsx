import Layout from "../../../Components/Layout";
import {useRouter} from "next/router";
import { useEffect } from "react";

export default function ClientePorCodigo() {
    const router = useRouter()

    useEffect(() => {console.log(router.query.codigo)}, []);
    return (
        <Layout titulo = "Navegação Dinâmica">
            <div>
                <p>Código = {router.query.codigo}</p>
                <p>Filial = {router.query.filial}</p>
            </div>
        </Layout>
    )
}