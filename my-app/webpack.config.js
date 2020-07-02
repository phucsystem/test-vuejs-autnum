/* eslint-disable global-require */

module.exports = {
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
              indentedSyntax: true, // optional
            },
          },
        },
      ],
    },
  ],
};
/* eslint-enable global-require */
