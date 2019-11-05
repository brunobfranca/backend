const { authSecret} = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password){
            return res.status(400).send('Dados incompletos')
        }
        const usuario = await app.db('usuario')
            .where({email: req.body.email })
            .first()
        if (usuario){
            bcrypt.compare(req.body.password, usuario.password, (err,isMatch)=> {
                if(err || !isMatch){
                    return res.status(401).send('senha incorreta')
                }

                const payload = {id: usuario.id}
                res.json({
                    name: usuario.name,
                    email: usuario.email,
                    token: jwt.encode(payload,authSecret)
                })
            })
        } else {
            res.status(400).send('Email nao encontrado!')
        }
    }
    return { signin }
}