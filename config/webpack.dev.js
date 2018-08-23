const path =require('path')
const webpack = require('webpack')
const HTMLwebpackplugin = require('html-webpack-plugin') 
module.exports = {
    entry:{
        main: './js/main.js'
    },
    mode:'development',
    output:{
        filename:'[name]-bundle.js',
        path: path.resolve(__dirname,'../dist'),
        publicPath: '/'
    },
    devtool:"source-map",
    devServer:{
        contentBase: 'dist',
        overlay:true,
        hot:true,
        stats:{
            colors:true
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader',
                        // options:{
                        //     attr:['img:src']
                        // }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLwebpackplugin({
            template : "./html/index.html"})
    ]
}