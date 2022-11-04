const jwt = require('jsonwebtoken');

export default async function token(req, res, next) {
  try {
    if (req.headers?.authorization) {
      const token = req.headers ?.authorization;
      jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
        if (err) {
          throw new Error('error')
        } else {
          req.user = decoded.data;
          next();
        }
      });
    } else {
      // console.log('req.headers ?.authorization is not valid')
      throw new Error('error')
    }

  } catch (error) {
    // console.log(error);
    res.status(401).json({ success: false, message: 'Can not Access' });
  }
}
