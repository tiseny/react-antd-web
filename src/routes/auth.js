module.exports = {
  path: 'auth',
  /*getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../views/auth').default)
    })
  },*/
  childRoutes: [{
    path: 'set(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/auth/set').default)
      })
    }
  }, {
    path: 'role(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/auth/role').default)
      })
    }
  },{
    path: 'authorize(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/auth/authorize').default)
      })
    }
  }]
}