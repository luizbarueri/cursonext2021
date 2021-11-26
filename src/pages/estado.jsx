import { useState } from "react";
import Layout from "../Components/Layout";

export default function Estado() {
   const [numero, setNumero] = useState(0) // React Hooks
   
    function Incrementar() {
        setNumero(numero + 1)
        //console.log(numero)
    }
    return (
        <Layout titulo="Componente com Estado">
            <p><span>{numero}</span></p>
            <button onClick={Incrementar}>Incrementar</button>
        </Layout>
    )
}