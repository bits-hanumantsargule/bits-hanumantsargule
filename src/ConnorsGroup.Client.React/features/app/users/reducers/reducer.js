
import { Map } from "immutable";

const initialState = Map({users: [], total: [],loading: false});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        loading: false,
        users: action.payload.data.data,
        total: action.payload.data.meta.pagination.total,
      }
    case 'FETCH_USERS_FAILURE':
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer

