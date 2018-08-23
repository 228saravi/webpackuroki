const path =require('path')

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
    devServer:{
        contentBase: 'dist',
        overlay:true
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
                        loader: 'file-loader',
                        options:{
                            name: '[name].html'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
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
    }
}