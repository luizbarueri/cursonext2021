export default function Pessoas(req, res) {
    const url ='http://localhost:3000/api/pessoas?nome=Luiz&idade=30'
    return (
        res.status(200).json(
            {
                teste: 'Teste API',
                time: 'Palmeiras',
                method: req.method,
                nome: req.query.nome, //passar parametro na url
                idade: +req.query.idade,
                params: JSON.stringify(req.query)
            }
        )
    )
}