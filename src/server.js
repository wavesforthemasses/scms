import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

if (dev) {
  polka() // You can also use Express
    .use(
      compression({ level: 9, threshold: 0 }),
      sirv('static', { dev, etag: true, maxAge: 1000000, immutable: true  }),
      sapper.middleware({
  			session: (req, res) => ({ savedInfo: req.savedInfo })
  		})
    )
    .listen(PORT, err => {
      if (err) console.log('error', err);
    });
}

export { sapper };
