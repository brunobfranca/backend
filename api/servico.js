module.exports = app => {
    const lista = (req, res) => {
        app.db('servicos')
            .select('*')
            .then(pecas => res.json(pecas))
            .catch(err => res.status(500).send(err))
    }
    const salvar = (req, res) => {
        app.db('servicos')
            .insert({ nome: req.body.nome , temposervico: req.body.temposervico, descricao: req.body.descricao, valor: req.body.valor})
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }
    return { lista, salvar }
}