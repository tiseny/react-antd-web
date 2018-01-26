import { baseAlias } from '../../config';
import getQuery from '../helpers/getQuery';
import Cookies from 'js-cookie';
/**
 * root router
 */
export default {
  path: baseAlias || '/',
  component: require('../views').default,
  onEnter: (nextState, replaceState) => {
    let pathName = nextState.location.pathname
    // 1.有token，不进入 login
    // 2.无token, 非login。进login page
    if (Cookies.get('token') && new RegExp('^/login.*').test(pathName)) {
      let return_url = getQuery('return_url') || '/'
      replaceState(return_url)
    } else if (!Cookies.get('token') && !new RegExp('^/login.*').test(pathName)){
      replaceState('/login')
    }
  },
  indexRoute: {
    component: require('../views/home').default
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
