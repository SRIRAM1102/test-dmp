const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/redirect', async (ctx) => {
  ctx.status = 301;
  redirection_url = `https://www.google.com/dw_uuid=3212`
  ctx.redirect('https://www.google.com/');
});

app.use(router.routes());

app.listen(3000, () => {
});