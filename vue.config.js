module.exports = {
    configureWebpack:{
        resolve:{
            alias:{ //别名
                'assets':'@/assets', //@代表src,内部自己配置过
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
                //router和store在全局可以直接使用，而且只用到一次引用，所以没必要配置
            }
        }
    },
    css: {
        loaderOptions: {
            css: {
            // 这里的选项会传递给 css-loader
            }
        }
    }
}