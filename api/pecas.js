module.exports = app => {
    const lista = (req, res) => {
        app.db('pecas')
            .select('*')
            .then(pecas => res.json(pecas))
            .catch(err => res.status(500).send(err))
    }
    const salvar = (req,res) => {
        app.db('pecas')
            .insert({ nome: req.body.name, descricao: req.body.descricao, valor: req.body.valor, quantidade: req.body.quantidade })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }
    return { salvar, lista }
}