[![npm package](https://nodei.co/npm/fastify-twig.png?downloads=true&downloadRank=true?maxAge=30)](https://nodei.co/npm/fastify-twig/)


# fastify-twig
Twig view renderer for fastify

Support me for future versions:

[![BMC](https://cdn.buymeacoffee.com/buttons/default-orange.png)](https://www.buymeacoffee.com/i2yBGw7)

[![PAGSEGURO](https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/209x48-doar-assina.gif)](https://pag.ae/7VxyJphKt)

<a name="quick-start"></a>Quick Start 
===================

<a name="configure"></a>Configuration and Usage example
--------------

```javascript
    const path = require('path');

    const fastify = require('fastify')();

    fastify.register(require('fastify-twig'));

    fastify.get('/', async (request, reply) => {

        const model = {
            message: 'Hello World'
        };

        reply.view('./home/index', model);
    });
```