
const Twig = require('twig');

const fp = require('fastify-plugin');

function twigViewRenderer(fastify, opts, done) {

  function render(filename, model) {
    return new Promise((resolve, reject) => {
      Twig.renderFile(filename, model, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });
  }

  fastify.decorateReply('view', function (filename, model) {
    return render(filename, model).then((html) => {
      this.type('text/html').send(html);
    });
  });

  done();
}
module.exports = fp(twigViewRenderer, { fastify: '^2.x' });