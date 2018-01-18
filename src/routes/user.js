module.exports = {
  path: 'user',
  childRoutes: [{
    path: 'trade(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/user/trade').default)
      })
    }
  }, {
    path: 'data(/:id)',
    getComponent(nextSaddate, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/user/data').default)
      })
    }
  }]
}