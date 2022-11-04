import cctx from 'ccxt';

const cctxUtils = () => {
  const upbit = new cctx.upbit({
    apiKey: 'YOUR_PUBLIC_API_KEY',
    secret: 'YOUR_SECRET_PRIVATE_KEY',
  });
  // console.log(upbit.methodName());

}

export default cctxUtils;
