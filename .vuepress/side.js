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

module.exports = {
  // 侧边栏在 /foo/ 上
  '/fd/': fd,
  // 侧边栏在 /bar/ 上
  '/algorithm/': algorithm,
  '/mode/': mode,
  '/sword/': sword,
  '/person/': person,
  '/network/': network
}
