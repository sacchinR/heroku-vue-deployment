export const SAVE_GET_ALL = 'SAVE_GET_ALL'
export const SET_DELETE = 'SET_DELETE'

export default {
  [SAVE_GET_ALL]: (state, payload) => {
    state.dashBoardData = payload
  }
}
