import { _public } from '../../../middlewares';
const handler = _public;
const PAGE_PER = 5;

const getTotalChats = async (client, id) => {
  const [{ totalCount }] = await client('chats')
    .count('id', { as: 'totalCount' })
    .where('room_name', '=', id)
    .andWhere('enabled', 'Y');
  return totalCount;
};

handler.get(async (req, res) => {
  try {
    // get message
    const { page } = req.query;
    const client = req.dbClient;
    const id = 'seokhwan'
    // dispatch to channel "message"
    const offset = (page - 1) * PAGE_PER;
    const chatsArray = await client
      .select('id', 'uniq_id', 'user', 'message', 'update_dt')
      .from('chats')
      .where('room_name', '=', id)
      .andWhere('enabled', 'Y')
      .orderBy('update_dt', 'desc')
      .limit(PAGE_PER)
      .offset(offset);
    const count = await getTotalChats(client, id);
    res.status(200).json({
      list: chatsArray,
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
