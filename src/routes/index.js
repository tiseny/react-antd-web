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
    require('./help'),
    require('./need'),
    require('./setup'),
    require('./login'),
    require('./register'),
    require('./norights'),
    require('./404')
  ]
}
