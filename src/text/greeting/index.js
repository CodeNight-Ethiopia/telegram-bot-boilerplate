const debug = require('debug')('bot:greeting_text');

const replyToMessage = (ctx, messageId, string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });

const greeting = () => ctx => {
  debug('Triggered "greeting" text command');

  const messageId = ctx.message.message_id;
  const userName = `${ctx.message.from.first_name} ${
    ctx.message.from.last_name
  }`;

  replyToMessage(ctx, messageId, `Hello, ${userName}!`);
};

export { greeting };
