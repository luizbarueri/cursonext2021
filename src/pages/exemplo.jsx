import { getClientBuildManifest } from "next/dist/client/route-loader";
import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";
import Rodape from "../components/Rodape";
//import styles from '../styles/Estiloso.module.css'

export default function Exemplo() {
    // props é somente leitura    
    return (
        <Layout titulo = "Usando Componentes">
            <Cabecalho titulo = "Familia Silva" data = {Date().toString()}/>
            <Rodape />
        </Layout>
    )
}