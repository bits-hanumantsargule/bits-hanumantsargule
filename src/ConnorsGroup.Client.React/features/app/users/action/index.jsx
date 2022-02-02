import axios from 'axios';
// export const fetchUsers = (pageNo = 1) => {
//   async (dispatch) => {
//     dispatch(fetchUsersSuccess())
//   const res =  await axios.get(
//         `https://gorest.co.in/public/v1/users?page=${pageNo}`
//         ); 
      
//         // response.data is the users
//         dispatch(fetchUsersSuccess(res))
//   };


export const fetchUsers =(pageNo = 1) =>
  async (dispatch) => {
    dispatch(loading())
    const res = await axios.get(
      `https://gorest.co.in/public/v1/users?page=${pageNo}`
    );
     dispatch(fetchUsersSuccess(res))
  };

export const fetchUsersSuccess = data => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: data
  }
}

export const fetchUsersFailure = error => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: error
  }
}


export const loading = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};