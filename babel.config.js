module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const isTest = process.env.NODE_ENV === "test";

  return {
    presets: [
      [
        "@babel/env",
        {
          modules: isTest ? `commonjs` : false,
          shippedProposals: true,
          targets: {
            node: "current",
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
