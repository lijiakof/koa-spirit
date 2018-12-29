const KoaSpirit = require('../src/index');

const app = new KoaSpirit();

app.use(async (ctx, next) => {
    console.log('start');
    const start = Date.now();

    await next();

    const ms = Date.now() - start;
    console.log(`${ms}ms`);
});

app.use(async ctx => {
    ctx.body = 'The spirit of Koa';
});

app.listen(3001, () => {
    console.log('http://localhost:3001');
});