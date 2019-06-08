import uuid from 'uuid';
const axios = require('axios');
import database from '../firebase/firebase';

// SET_DEVICES
export const setDevices = (devices) => ({
  type: 'SET_DEVICES',
  devices
});

export const startSetDevices = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return axios.get('https://cap-sg-prd-2.integration.ibmcloud.com:17241/catalog/items?startItemID=10')
    .then((response) => {

      const tmp_devices = response.data.cics_cat_resp.inquire_request.cat_item;
      dispatch(setDevices(tmp_devices));
    });
  };
};
