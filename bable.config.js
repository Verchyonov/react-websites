module.exports = (api) => {
  const isTest = true;

  return {
    presets: [
      [
        "@babel/env",
        {
          // use ES modules for rollup and commonjs for jest
          modules: isTest ? `commonjs` : false,
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
