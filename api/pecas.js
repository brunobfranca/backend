module.exports = app => {
    const lista = (req, res) => {
        app.db('pecas')
        .select('*')
        .then(pecas => res.json(pecas))
        .catch(err => res.status(500).send(err))
    }
    return { lista }
}