import React from 'react';
import DeviceDetail from './DeviceDetail';
const axios = require('axios');
import { connect } from 'react-redux';
import selectDevices from '../selectors/devices';

export const DeviceList = (props) => (
  <div className="content-container">

    <div className="list-body">
    {
      props.devices.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No devices</span>
        </div>
      ) : (
        props.devices.map((device) => (
          <DeviceDetail key={device.item_id} {...device} />
        ))
      )
    }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    devices: selectDevices(state.devices, state.filters)
  };
};

export default connect(mapStateToProps)(DeviceList);
