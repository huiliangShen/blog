// import nav from require('./nav');
const sidebar = require('./side');
module.exports = {
    repo: 'huiliangShen/blog',
    title: '般若的博客',
    description: '有时候读书是一种巧妙地避开思考的方法',
    port: '8888',
    base: '/blog/',
    // dest: 'public',
    lastUpdated: '更新于',
    themeConfig: {
        nav: [
            {
                text: '基础引导', link: '/sword/'
            },
            {
                text: '前端', link: '/fd/'
            },
            {
                text: '算法与数据结构', link: '/algorithm/'
            },
            {
                text: '设计模式', link: '/mode/'
            },
            {
                text: '计算机网络', link: '/network/'
            },
            {
                text: '个人', link: '/person/'
            },
            {text: 'GitHub', link: 'https://github.com/huiliangShen'},
        ],
        sidebar
    }
}
