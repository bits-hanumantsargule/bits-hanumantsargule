
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
       var getResultUser = state.users;
        if(getResultUser === undefined){
          getResultUser = action.payload.data.data;
        }else{
          action.payload.data.data.forEach(function(item){
            getResultUser.push(item)
          })
        }
      return {
         ...state,
         users:getResultUser,
        total: action.payload.data.meta.pagination.total,
        loading: false,
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

