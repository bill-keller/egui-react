import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectDevicesTotal from '../selectors/devices-total';
import selectDevices from '../selectors/devices';

const DevicesSummary = ({deviceCount, devicesTotal}) => {
  const deviceWord = deviceCount === 1 ? 'device' : 'devices';  
  //const formattedDeviceTotal = numeral(devicesTotal).format('$0,0.00')
  const formattedDeviceTotal = numeral(0).format('$0,0.00')
  return (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Cart contains <span>0 devices</span> totalling: <span>{formattedDeviceTotal}</span></h1>
      <div className="page-header_actions">
        <Link className="button" to ="/dashboard">Add Device</Link>
      </div>
    </div>
    
  </div>
)};

      // <h1 className="page-header__title">Cart contains <span>{deviceCount} devices</span> totalling: <span>{formattedDeviceTotal}</span></h1>

      // <Link className="button" to ="/create">Add Device</Link> 

const mapStateToProps = (state) => {
  const visibleDevices = selectDevices(state.devices, state.filters);
  return {
    deviceCount: visibleDevices.length,
    devicesTotal: selectDevicesTotal(visibleDevices)
  };
};

export default connect(mapStateToProps)(DevicesSummary);
