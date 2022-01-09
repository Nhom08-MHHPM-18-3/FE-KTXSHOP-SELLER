const withPlugins = require('next-compose-plugins');
const withTM = require("next-transpile-modules")(
  []
);

// disable log for built environment
if (process.env.ENV !== "local") {
  console.log = function () { }
}

module.exports = withPlugins([withTM], {
  images: {
    domains: ['localhost', 'storage.googleapis.com', 'thuthuatnhanh.com'],
  },
  env: {
    WEB_HOST: process.env.ENV === 'local' ? 'http://localhost:3000' : '',
    API_HOST: process.env.API_HOST
  },
});