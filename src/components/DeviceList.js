import React from 'react';
import DeviceDetail from './DeviceDetail';
const axios = require('axios');

let devices;

const axiosParams = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
  },
};

axios.get('https://cap-sg-prd-2.integration.ibmcloud.com:17241/catalog/items?startItemID=10', axiosParams)
  .then(function (response) {
    devices = response.data.cics_cat_resp.inquire_request.cat_item;
  })
  .catch(function (error) {
    console.log(error);
  });

export const DeviceList = (props) => (
  <div className="content-container">

    <div className="list-body">
    {
      devices.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No expenses</span>
        </div>
      ) : (
        devices.map((device) => (
          <DeviceDetail key={device.item_id} {...device} />
        ))
      )
    }
    </div>
  </div>
);

export default DeviceList;
