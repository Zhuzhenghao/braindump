module.exports = {
    // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
    // css: {
    //     extract: false
    // },
    configureWebpack: {
        output: {
            //打包为名为sing的类库
            library: 'singleVue',
            //umd类型
            libraryTarget: 'umd',
        },
        devServer: {
            port: 10000,
        }
    },
   
}
