const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// set lazy loaded chunk files names
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

const isTranslate = process.argv.indexOf('--env.TRANSLATE')
let translateArr = ['en']
if (isTranslate !== -1) {
  translateArr = process.argv[isTranslate + 1].split(',')
}

console.log('languages included: ' + JSON.stringify(translateArr))
const prod = process.argv.indexOf('-p') !== -1
const isDevelopment = process.argv.indexOf('development') !== -1

let projectPath = 'demoProject' // default
let appName = projectPath

try {
  let pPath = process.argv.indexOf('--env.APP')
  projectPath = process.argv[pPath + 1]
} catch (e) {
  console.log('default project: ' + projectPath)
}

// split to folder and appName
let appFolder = 'apps/'
if (projectPath.split('/').length > 1) {
  const p = projectPath.split('/')
  appName = p.pop()
  appFolder = p.join('/')
}

console.log('projectPath: ' + projectPath)
console.log('appName: ' + appName)
console.log('folder: ' + appFolder)

module.exports = {
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: []
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader?noIeCompat&javascriptEnabled'
      },
      {
        test: /.(png|gif|jpg|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
      // https://github.com/bholloway/resolve-url-loader fix SCSS problem
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?url=false']
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?url=false', 'sass-loader?sourceMap']
      },
      {
        test: /\.worker\.js$/,
        loaders: ['worker-loader', 'babel-loader']
      }
    ]
  },
  entry: './src/' + appFolder + '/' + appName + '/index.js',
  plugins: [
    new AsyncChunkNames(),
    new HtmlWebPackPlugin({
      template: './src/' + appFolder + '/' + appName + '/index.html',
      filename: './index.html'
    }),
   // new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]), // copy global assets to project
    new CopyWebpackPlugin([{ from: './src/' + appFolder + '/' + appName + '/assets', to: 'assets' }]), // copy project assets to project
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      TRANSLATE: JSON.stringify(translateArr),
    }),
    new CopyWebpackPlugin([{ from: './src/' + appFolder + '/' + appName + '/img', to: 'img' }]), // copy project assets to project
    /*new BundleAnalyzerPlugin({
      // Port that will be used by in `server` mode to start HTTP server.
      analyzerPort: 4000,
    })*/
  ]
}

module.exports.output = {
  globalObject: 'this',
  // filename: '[name].[hash].js',
  filename: (chunkData) => {
    return chunkData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
  },
}

console.log('isDevelopment: ' + isDevelopment)

let dist = '/dist'
if (prod) {
  dist = '/dist-prod'
}

if (!isDevelopment) {
  console.log('build to ' + dist + '/' + appName)
  module.exports.output = {
    path: __dirname + dist + '/' + appName,
    publicPath: './',
    filename: '[name].[hash].js',
    globalObject: 'this',
  }
  module.exports.plugins = [
    new AsyncChunkNames(),
    new HtmlWebPackPlugin({
      template: './src/' + appFolder + '/' + appName + '/index.html',
      filename: './index.html',
      hash: true
    }),
    new CopyWebpackPlugin([{ from: 'src/assets', to: './assets' }]), // copy assets to project
    new CopyWebpackPlugin([{ from: './src/' + appFolder + '/' + appName + '/assets', to: './assets' }]), // copy project assets to project
    new CopyWebpackPlugin([{ from: './src/' + appFolder + '/' + appName + '/img', to: './img' }]), // copy project assets to project
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      TRANSLATE: JSON.stringify(translateArr),
    })
    // new BundleAnalyzerPlugin()
  ]
}

// include translate files
translateArr.map(lan => {
  module.exports.plugins.push(new CopyWebpackPlugin([{
    from: './src/' + appFolder + '/' + appName + `/assets-translate/${lan}.json`,
    to: `./assets-translate/${lan}.json`
  }]))
})

if (!prod) {
  // add map file cheap-module-source-map,source-map,eval-source-map , source-map
  module.exports.devtool = 'cheap-module-source-map'
}
