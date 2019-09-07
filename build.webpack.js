const path = require('path');

module.exports = {
    mode: "production",
    entry: {
        'blips': './blips/Component.jsx',
        'grades': './grades/Component.jsx',
        'hitch-wait-guess': './hitch-wait-guess/Component.jsx'
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name]/component.js'
    },
    optimization: { minimize: false },
    externals: {
        "react": "React"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-object-rest-spread"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
        ]
    }
}