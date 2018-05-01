import axios from 'axios';

const apiServices = {};

/*======== User Services ========*/

apiServices.checkLoggedIn = (read) => {
  return axios({
    method: "get",
    url: "/isLoggedIn",
    headers: {
      Authorization: `Bearer ${read}`
    },
  })
}

apiServices.getSecurity = (username) => {
  // console.log(`In apiServices -----> `, username);
  return axios.get(`/auth/user/${username}/`)
}
apiServices.changeSecurity = (userdata, cred) => {
  // console.log(`In apiServices -----> `, userdata, cred);
  return axios({
          method: "PUT",
          url: `/auth/user/${userdata.username}/`,
          data: {
            security: cred,
            user_id: userdata.user_id
          }
  })

}

apiServices.getPublicUsers = () => {
  // console.log(`in the apiServices`);
  return axios.get(`/auth/public`)
}

apiServices.getUser = (username) => {
  return axios.get(`/authtwo/user/${username}`);
}

apiServices.getUserInfo = (username, userId) => {
  // console.log('in axios ---> ', username, userId);
  return axios.get(`/auth/user/${username}/${userId}`)
}

/*-------- END --------*/


apiServices.getAllInventory = () => {
  console.log(`In the apiServices, getAllInventory`);
  return axios({
    method: 'GET',
    url: '/api'
  })
}


export default apiServices
