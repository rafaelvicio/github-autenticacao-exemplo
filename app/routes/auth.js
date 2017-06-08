var passport = require('passport');

module.exports = function(app){

  var api = app.api.usuario;

  app.get('/auth/github', passport.authenticate('github'));
  app.get('/auth/github/callback',
            passport.authenticate('github', {
                sucessRedirect: '/'
            }));

  app.route('/api/usuarios')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/api/usuario/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
