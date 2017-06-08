function verificaAutenticacao(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status('401').json('Não autorizado');
  }
}

module.exports = function(app){

  var api = app.api.usuario;

  app.route('/api/usuarios')
    .get(api.lista)
    .post(verificaAutenticacao, api.adiciona);

  app.route('/api/usuario/:id')
      .get(api.buscaPorId)
      .delete(verificaAutenticacao, api.removePorId)
      .put(verificaAutenticacao, api.atualiza);

};
