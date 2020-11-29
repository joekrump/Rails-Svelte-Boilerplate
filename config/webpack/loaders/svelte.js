const Preprocess = require("svelte-preprocess");

module.exports = {
  test: /\.svelte$/,
  use: [
    {
      loader: "svelte-loader",
      options: {
        hotReload: true,
        preprocess: Preprocess({
          defaults: {
            script: "typescript",
          },
        }),
      },
    },
  ],
};
