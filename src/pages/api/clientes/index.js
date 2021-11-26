export default function handler(req, res) {
    // res.status(204).send() - 204 = sem conteudo!
    // - 200 = envia alguma coisa
    if(req.method === 'GET' ) {
        handleGet(req, res)
    } else {
        res.status(405).send() // 405 - rrl nçao suportada]]
    }    
}

function handleGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: "Maira Nunes",
        email:  "anamaria@teste.com"
    })
}