module.exports = app => {
    const lista = (req, res) => {
        app.db('servicos')
            .select('*')
            .then(pecas => res.json(pecas))
            .catch(err => res.status(500).send(err))
    }
    return { lista }
}