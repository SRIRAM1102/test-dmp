const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/fredirect', async (ctx) => {
  ctx.status = 301;
  redirection_url = `https://play.google.com/store/apps/details?id=in.a23.rummy&hl=en_US&dw_uuid=3433`
  ctx.redirect('https://www.vizibl.ai');
});

router.get('/gredirect', async (ctx) => {
  ctx.status = 301;
  redirection_url = `https://play.google.com/store/apps/details?id=com.legendsatwar.strategy&dw_uuid=7896`
  ctx.redirect('https://www.vizibl.ai');
});

app.use(router.routes());

app.listen(3000, () => {
});
