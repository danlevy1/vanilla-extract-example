const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: "static/js/[name].[contenthash:8].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx' ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:8].css"
        }),
    ],
    performance: {
        maxEntrypointSize: 10000000,
        maxAssetSize: 1000000
    },
    devServer: {
        open: {
            app: {
                name: "Google Chrome"
            }
        },
        static: {
            directory: path.join(__dirname, "public")
        },
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        }
    }
}
