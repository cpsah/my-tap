export default () => function () {
  var config;
  switch (process.env.NODE_ENV) {
    case 'production':
      config = require('./prod.env');
      break;

    case 'development':
      config = require('./dev.env');
      break;

    default:
      throw new Error('Environment is not set.');
  }
  return config;
}
