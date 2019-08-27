const fd = [
  {
    title: 'JavaScript',
    children: [
      '',
      'basic',
    ]
  },
  {
    title: 'oop',
    children: [
      'oop'
    ]
  }
]

const algorithm = [
  {
    title: '算法与数据结构',
    children: [
      '',
      'algorithm'
    ]
  }
]

const mode = [
  {
    title: '设计模式',
    children: [
      ''
    ]
  },
  {
    title: '设计模式',
    children: [
      'mode2'
    ]
  }
]

const sword = [
  {
    title: '介绍',
    children: [
      ''
    ]
  }
]

module.exports = {
  // 侧边栏在 /foo/ 上
  '/fd/': fd,
  // 侧边栏在 /bar/ 上
  '/algorithm/': algorithm,
  '/mode/': mode,
  '/sword/': sword
}
