const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: `development`,

    output: {
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: `html-loader`,
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            { // Este es para el componentes .css
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
        ]
    },

    optimization: {

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // filename: `./index.html`, // Para cambiar el nombre de salida de un archivo
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css", // [name] le dice que use el mismo nombre
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" },
            ],
          }),
    ]
}