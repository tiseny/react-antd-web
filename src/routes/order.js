module.exports = {
  path: 'order',
  childRoutes: [{
    path: 'doing(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/order/doing').default)
      })
    }
  }, {
    path: 'done(/:id)',
    getComponent(nextSaddate, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/order/done').default)
      })
    }
  }]
}