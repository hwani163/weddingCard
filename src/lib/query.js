import oracledb from 'oracledb';
import lowercaseKeys from 'lowercase-keys';
const mypw = 'Rhdqngkwk1!!!'; // set mypw to the hr schema password
const config = {
  user: 'API',
  connectString: "db202107191103_low",
  password: mypw,
}

export const select = async ({
  query,
  params,
  autoClose,
}) => {
  const connection = await oracledb.getConnection(config);
  try {
    if (!connection) throw new Error('커넥션이 없습니다.');
    if (!query) throw new Error('쿼리가 없습니다.');
    const result = await connection.execute(
      query,
      params || [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT },
    );
    connection.commit();
    connection.close();

    if (Array.isArray(result.rows)) {
      return result.rows.map((item) => {
        Object.keys(item).map(key => {
          if (
            typeof item[key] === 'string'
            && item[key].indexOf('[') !== -1
            && item[key].indexOf(']') !== -1
          ) {
            item[key] = JSON.parse(item[key])
          }
        })
        return lowercaseKeys(item)
      });
    }
    return result;
  } catch (error) {
    connection.close();
    return { error };
  }
};


export const insert = async ({
  query,
  params,
}) => {
  const connection = await oracledb.getConnection(config);
  try {
    if (!connection) throw new Error('커넥션이 없습니다.');
    if (!query) throw new Error('쿼리가 없습니다.');
    const result = await connection.execute(
      query,
      params || [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT },
    );
    connection.commit();
    connection.close();

    return result;
  } catch (error) {
    connection.close();
    return { error };
  }
};
