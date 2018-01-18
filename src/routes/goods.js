module.exports = {
  path: 'goods',
  childRoutes: [{
    path: 'grounding(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/goods/grounding').default)
      })
    }
  }, {
    path: 'add(/:id)',
    getComponent(nextSaddate, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/goods/add').default)
      })
    }
  },{
    path: 'storage(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/goods/storage').default)
      })
    }
  }]
}