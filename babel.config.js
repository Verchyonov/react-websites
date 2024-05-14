module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/env",
        {
          // use ES modules for rollup and commonjs for jest
          modules: false,
          shippedProposals: true,
          targets: {
            node: "10.13.0",
          },
        },
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
    plugins: ["@babel/plugin-transform-runtime"],
  };
};
