var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'webchat'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://taove:taove@localhost/test'
  },

  test: {
    root: rootPath,
    app: {
      name: 'webchat'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://taove:taove@localhost/test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'webchat'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://taove:taove@localhost/test'
  }
};

module.exports = config[env];
