module.exports = {
  path: 'data',
  childRoutes: [{
    path: 'customer(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/data/customer').default)
      })
    }
  }, {
    path: 'goods(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/data/goods').default)
      })
    }
  },{
    path: 'maker(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/data/maker').default)
      })
    }
  },{
    path: 'storage(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/data/storage').default)
      })
    }
  },{
    path: 'fund(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/data/fund').default)
      })
    }
  }]
}