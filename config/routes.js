module.exports = app => {
    app.post('/cadastro' , app.api.usuario.save)
    app.get('/listarTodos', app.api.usuario.lista)
    app.post('/login' , app.api.auth.signin)
    app.get('/pecas', app.api.pecas.lista)
}