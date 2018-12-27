const KoaSpirit = require('../src/index');

const app = new KoaSpirit();

app.use(async (ctx, next) => {
    const start = Date.now();

    await next();

    const ms = Date.now() - start;
    console.log(`${ms}ms`);
});

app.use(async ctx => {
    ctx.body = 'Hello spirit of Koa';
});

app.listen(3001, () => {
    console.log('http://localhost:3001');
});