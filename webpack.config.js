const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
  "mfe-rule": "mfe-rule@http://localhost:4002/remoteEntry.js",   
  "mfe1":"mfe1@http://localhost:4001/remoteEntry.js" ,
  "mfe-user":"mfe-user@http://localhost:4004/remoteEntry.js" ,

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

