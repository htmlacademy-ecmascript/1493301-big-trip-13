const path = require(`path`);

module.exports = {
  entry: `./scr/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`),
  },
  devtool: `sourse-map`,
  devServer: {
    contentBase: path.resolve(__dirname, `public`),
    watchContentBase: true,
  }
};
