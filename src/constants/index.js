const SIDE_MENU = [{
  name: '订单管理',
  icon: 'profile',
  sub: [{
    name: '交易中',
    router: '/order/doing',
    icon: ''
  },{
    name: '已交易',
    router: '/order/done',
    icon: ''
  }]
},{
  name: '商品管理',
  icon: 'appstore-o',
  sub: [{
    name: '已上架商品',
    router: '/goods/grounding',
    icon: ''
  },{
    name: '新增商品',
    router: '/goods/add',
    icon: ''
  },{
    name: '库存管理',
    router: '/goods/storage',
    icon: ''
  }]
},{
  name: '用户管理',
  icon: 'user',
  sub: [{
    name: '已交易用户',
    router: '/user/trade',
    icon: ''
  },{
    name: '用户资料维护',
    router: '/user/data',
    icon: ''
  }]
},{
  name: '资料管理',
  icon: 'table',
  sub: [{
    name: '客户类别',
    router: '/data/customer',
    icon: ''
  },{
    name: '商品类别',
    router: '/data/goods',
    icon: ''
  },{
    name: '制造商管理',
    router: '/data/maker',
    icon: ''
  },{
    name: '仓库管理',
    router: '/data/storage',
    icon: ''
  },{
    name: '资金账户管理',
    router: '/data/fund',
    icon: ''
  }]
},{
  name: '权限管理',
  icon: 'lock',
  sub: [{
    name: '账户设置',
    router: '/auth/set',
    icon: ''
  },{
    name: '角色设置',
    router: '/auth/role',
    icon: ''
  },{
    name: '授权设置',
    router: '/auth/authorize',
    icon: ''
  }]
}]


export {
  SIDE_MENU
}
