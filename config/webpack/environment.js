// config/webpack/environment.js
// Add new code below the following line:
const { environment } = require("@rails/webpacker");
const svelte = require("./loaders/svelte");

environment.loaders.prepend("svelte", svelte);

["css", "moduleCss"].forEach((loaderName) => {
  const loader = environment.loaders.get(loaderName);

  loader.test = /\.(p?css)$/i;

  environment.loaders.insert(loaderName, loader);
});

// ...and above the following line:
module.exports = environment;
