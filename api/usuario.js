const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const obterHash = (password, callback) =>{
        bcrypt.genSalt(10 , (err,salt) =>{
            bcrypt.hash(password, salt ,null ,(err, hash)=> callback(hash))
        })
    }
    const save = (req, res) => {
        obterHash(req.body.password, hash => {
            const password = hash

            app.db('usuario')
                .insert({name: req.body.name, email: req.body.email, password: password})
                .then(_=> res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }
    const lista = (req, res) => {
        app.db('usuario')
        .select('name', 'email')
        .then(usuarios => res.json(usuarios))
        .catch(err => res.status(500).send(err))
    }
    return { save,lista }
}