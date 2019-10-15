import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const server = polka(); // You can also use Express

if(dev) server.use(sirv('static', { dev: dev, etag: true, maxAge: 1000000, immutable: true  }));

server // You can also use Express
  .use(
    compression({ level: 9, threshold: 1000 }),
    sapper.middleware()
  )

if(dev){
	// only listen when started in dev
	server.listen(PORT, err => {
	    if (err) console.log('error', err);
	});
}

export { sapper };
