import axios from 'axios';

const apiServices = {};

apiServices.getAllInventory = () => {
  console.log(`In the apiServices, getAllInventory`);
  return axios({
    method: 'GET',
    url: '/api'
  })
}


export default apiServices
