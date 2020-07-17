const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const puppeteer = require('puppeteer');

app.use(bodyParser());

/**
 * 没用守护进程， 一段时间后服务将会自动关闭
 */

router.post('/get', async function (ctx, next) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(decodeURI(ctx.request.body.url), {
    waitUntil: 'networkidle0'
  });
  console.log(decodeURI(ctx.request.body.url));
  const arr = await page.evaluate(() => {
    let arr = Array.from(document.querySelector('.layui-form').querySelectorAll('tr')).map(v => {
      return {
        field: v.querySelector('[data-field=name]').getAttribute('data-content'),
        desc: v.querySelector('[data-field=description]').querySelector('.layui-table-cell').innerText
      }
    })
    arr = arr.filter(v => v.field && v.desc);
    return arr;
  })

  await page.close();
  await browser.close();

  ctx.body = {
    code: 1,
    data: arr
  }
})

// 注册路由
app.use(router.routes(), router.allowedMethods())
console.log('--------------------启动成功-------------------');
app.listen(3000);