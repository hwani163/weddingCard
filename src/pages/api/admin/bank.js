import { _public } from '../../../middlewares';
const handler = _public;
const PAGE_PER = 5;
const getTotal = async (client) => {
    const [{ totalCount }] = await client('bank')
      .count('id', { as: 'totalCount' })
    return totalCount;
  };
handler.get(async (req, res) => {
  try {
    // get message
    const { page } = req.query;
    const client = req.dbClient;
    const offset = (page - 1) * PAGE_PER;
    const count = await getTotalChats(client, id);
    const listArray = await client
      .select('date', 'account', 'type', 'money', 'content','memo')
      .from('bank')
      .orderBy('update_dt')
      .limit(PAGE_PER)
      .offset(offset);
    res.status(200).json({
      list: listArray,
      totalCount: count,
      currentPage: page,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
    });
  }
});

handler.post(async (req, res) => {
  try {
    // get message
    const message = req.body;
    const client = req.dbClient;


    await client.insert({
      id: null,
      uniq_id: message.uniq_id,
      user: message.user,
      room_name: message.room_name,
      message: message.message,
      update_dt: message.update_dt,
      password:message.password,
    }).into('chats');
    res.status(200).json({
      success: true
    });
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
    });
  }
});

handler.delete(async (req, res) => {
  try {
    // get message
    const client = req.dbClient;
    const { id, password } = req.body;
    const chatsArray = await client
      .select('*')
      .from('chats')
      .where('id', id)
      .andWhere('password', password)
    if (Array.isArray(chatsArray) && chatsArray.length > 0) {
      await client('chats').where('id', id)
        .update({
          enabled: 'N',
          update_dt: client.fn.now(),
        }).into('chats');

      res.status(200).json({
        success: true,
      });
    } else {
      res.status(200).json({
        success: false,
        message: '비밀번호가 올바르지 않습니다.'
      });
    }

  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
    });
  }
});

export default handler;
