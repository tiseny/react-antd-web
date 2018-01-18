import { redirect } from '../helpers/loginAuth';
import { baseAlias } from '../../config';

/**
 * root router
 */
export default {
  path: baseAlias || '/',
  component: require('../views').default,
  indexRoute: {
    component: require('../views/home').default,
    onEnter: redirect(`${baseAlias}/home`)
  },
  childRoutes: [
    require('./home'),
    require('./login'),
    require('./register'),
    require('./order'),
    require('./goods'),
    require('./user'),
    require('./data'),
    require('./auth'),
    require('./norights'),
    require('./404')
  ]
}
