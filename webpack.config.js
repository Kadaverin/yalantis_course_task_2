module.exports = {
  entry: './src/index.ts',
  output: {
      filename: './bundle.js'
  },
 
  module: {
    rules: [
      {
        test: /\.tsx?$|\.js$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
};