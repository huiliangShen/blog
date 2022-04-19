const person = [
  {
    title: '个人计划',
    children: [
      '',
      'html'
    ]
  }
]

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
    title: '前端三贱客',
    children: [
      '',
      'html',
      'css'
    ]
  }
]

const network = [
  {
    title: '计算机网络',
    children: [
      ''
    ]
  }
]

const blogs = [
  {
    title: '随笔',
    children: [
      '',
      '12-14',
      '12-31',
      '2021-1-15',
      '2021-1-31',
      '2022-2-10',
      '2022-2-28',
      '2022-3-25',
      '2022-4-19',
    ]
  }
]

module.exports = {
  // 侧边栏在 /foo/ 上
  '/fd/': fd,
  // 侧边栏在 /bar/ 上
  '/language/algorithm/': algorithm,
  '/mode/': mode,
  '/sword/': sword,
  '/person/': person,
  '/language/network/': network,
  '/blogs/': blogs
}
