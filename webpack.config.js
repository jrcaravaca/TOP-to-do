//webpack.config.js

const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin"); 

module.exports = {
    mode: "development", 
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./index.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
    ],
    module: {
        rules: [
            // CSS
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // HMTL
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            // IMAGENES
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            // FUENTES
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            // DATOS (ACTIVAR CUANDO SE NECESITE)
            // {
            //     test: /\.(csv|tsv)$/i,
            //     use: ['csv-loader'],
            // },
            // {
            //     test: /\.xml$/i,
            //     use: ['xml-loader'],
            // },
        ],
    },
}; 