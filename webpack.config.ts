import { resolve } from 'path'
import { Configuration, NewUseRule } from 'webpack'

const tsconfig = './tsconfig'

interface Config extends Configuration {
  module: {
    rules: NewUseRule[]
  }
}

const tsLoader: NewUseRule = {
  test: /\.tsx?$/,
  use: [{
    loader: 'awesome-typescript-loader',
    options: {
      configFileName: tsconfig
    }
  }]
}

const config: Config = {
  devServer: {
    overlay: true,
    stats: {
      assets: false,
      chunks: false,
      errorDetails: true,
      errors: true,
      hash: false
    }
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      tsLoader
    ]
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [
      resolve('node_modules')
    ]
  }
}

export default config
