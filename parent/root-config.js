const { registerApplication, start } = require('single-spa');

registerApplication({
  name: "react",
  app: () => import(/* webpackIgnore: true */ '/react-app/main.js'),
  activeWhen: ["/react"],
});

registerApplication({
  name: "angular",
  app: () => import(/* webpackIgnore: true */ '/ajs-app/expensya-angularjs.js'),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});