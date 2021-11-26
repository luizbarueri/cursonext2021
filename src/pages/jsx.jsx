import Layout from "../components/Layout";

export default function jsx() {
    function testeLetsCode() {
        var b = 3
        var aleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

        for (let i = 1; i < aleatorio; i++) {
            b = b + (i * 2)
        }
        return (
            <div>
                <p>Numero aleatorio entre (1 e 10): {aleatorio}, Resultado de b = b + (i * 2)=: {b}</p>
            </div>
        )
    }
    
    //objeto
    const obj = {nome: 'João', idade: 30}
    const  titulo = <h1>JSX é um conceito Central</h1>
    return (
        <Layout titulo = "Entendendo o JSX">
             <div>
                {titulo}
                {testeLetsCode()}
                <p>toUpperCase, Passa um texto para maiusculo: exemplo: {'exemplo'.toUpperCase()}</p>
                <p>JSON.stringify(), transforma um objeto em estring detro de {'chaves'},exemplo: {JSON.stringify({nome: 'João', idade: 30})}</p>
            </div>
        </Layout>

    )
       
}
