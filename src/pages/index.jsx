import Navegador from '../components/Navegador'

export default function Home() {
    return (
        <>
        <h1>Home - Familia Silva</h1>
        <div style = {{
            display: 'flex',
            justfyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino = "/estiloso" cor="dodgerblue"/>
            <Navegador texto = "Exemplo" destino = "/exemplo" cor="darkviolet" />
            <Navegador texto  = "JSX" destino = "/jsx" cor ="crimson"/>
            <Navegador texto  = "Navegação #01" destino = "/navegacao/" cor ="green"/>
            <Navegador texto  = "Navegação #02" destino = "/cliente/sp-2/cod-123" cor ="green"/>
            <Navegador texto  = "Componente com Estado" destino = "/estado" cor ="#a45b71"/>
            <Navegador texto  = "Integração com API #01" destino = "/integracao_1/" cor ="#42a9a9"/>
            <Navegador texto  = "Conteúdo Estático" destino = "/estatico/" cor ="#fa054a"/>

        </div>
        </>
    )
}