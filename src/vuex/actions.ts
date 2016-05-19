import * as mutations from './mutation-types.ts'

export const appreciateApp = function ({ dispatch, state }, app) {
    dispatch(mutations.APPRECIATE_APP, app);
}

export const addApp = function({ dispatch }, app) {
    dispatch(mutations.ADD_APP, app);
}
