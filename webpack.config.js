let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist/'
    },
    devServer: {
        client: {
            overlay: true,
        },

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.module\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[sha1:hash:hex:7]'
                            },
                        }
                    }
                ],
            },
            {
                test: /^((?!\.module).)*css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
};

module.exports = (env, options) => {
    let isProd = options.mode === 'production';
    conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
    conf.target = isProd ? 'browserslist' : 'web';
    return conf;
}