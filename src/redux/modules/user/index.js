import { createAction, handleActions } from 'redux-actions'
import { CALL_API } from 'redux-api-middleware'

import getApiPath from '../../../helpers/getApiPath'
import getFetchOptions from '../../../helpers/getFetchOptions'
import getQuery from '../../../helpers/getQuery'

// ------------------------------------
// Constants (Action Types)
// ------------------------------------

// pending request
const FETCH_REQUEST = Symbol('FETCH_REQUEST')
const FETCH_FAILURE = Symbol('FETCH_FAILURE')

// 用户登录
const FETCH_USER_LOGIN_SUCCESS = Symbol('FETCH_USER_LOGIN_SUCCESS')
// 用户登出
const FETCH_USER_LOGOUT_SUCCESS = Symbol('FETCH_USER_LOGOUT_SUCCESS')

// ------------------------------------
// Actions (Action Creator)
// ------------------------------------

// 用户登录
export const login = (params, callback) => {
  
  const fetchOptions = getFetchOptions(getApiPath('user/login'), 'POST', {
    body: JSON.stringify(params)
  })

  return {
    [CALL_API]: {
      ...fetchOptions,
      complete: callback,
      types: [
        FETCH_REQUEST,
        FETCH_USER_LOGIN_SUCCESS,
        FETCH_FAILURE
      ]
    }
  }
}

// 用户登出
export const logout = (params, callback) => {
  const fetchOptions = getFetchOptions(getApiPath('user/logout'), 'POST', {
    body: JSON.stringify(params)
  })

  return {
    [CALL_API]: {
      ...fetchOptions,
      complete: callback,
      types: [
        FETCH_REQUEST,
        FETCH_USER_LOGOUT_SUCCESS,
        FETCH_FAILURE
      ]
    }
  }
}


/**
 * 暴露actions到外面，方便使用react-redux connect绑定到Container Component
 */
export const actions = {
  login,                               // 用户登录
  logout,                              // 用户登出
}

// ------------------------------------
// Reducers
// ------------------------------------
const initialState = {
  loginPending: false
}

export default handleActions({
  // 登录/登出pending
  [FETCH_REQUEST](state) {
    return {
      ...state,
      loginPending: true
    }
  },
  [FETCH_FAILURE](state) {
    return {
      ...state,
      loginPending: false
    }
  },

  // 用户登录
  [FETCH_USER_LOGIN_SUCCESS](state) {
    
    return {
      ...state,
      loginPending: false
    }
  },

  // 用户登录
  [FETCH_USER_LOGOUT_SUCCESS](state) {
    return {
      ...state,
      loginPending: false
    }
  }
}, initialState)
