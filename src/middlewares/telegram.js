// import { Telegraf } from 'telegraf';

// const telegramActions = (bot) => {
//   bot.start((ctx) => {
//     // // console.log(ctx);
//     ctx.reply('Welcome')
//   });

//   bot.command('oldschool', (ctx) => ctx.reply('Hello'));
//   bot.command('hipster', Telegraf.reply('λ'));

//   bot.help((ctx) => ctx.reply('Send me a sticker'));
//   bot.on('sticker', (ctx) => ctx.reply('👍'));
//   bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// }

// export default async function telegram(req, res, next) {
//   try {
//     if (!global.bot) {
//       global.bot = new Telegraf(process.env.TELEGRAMP_TOKEN);
//       await global.bot.launch();
//       telegramActions(global.bot);
//     }
//     process.once('SIGINT', () => global.bot.stop('SIGINT'));
//     process.once('SIGTERM', () => global.bot.stop('SIGTERM'));
//     return next();
//   } catch (error) {
//     // console.log(error);
//     return null;
//   }
// }
