import React from 'react';
import DeviceList from './DeviceList';
import DeviceListFilters from './DeviceListFilters';
import DevicesSummary from './DevicesSummary';

const DeviceDashboardPage = () => (
  <div>
    <DevicesSummary />
    <DeviceListFilters />
    <DeviceList />
  </div>
);

export default DeviceDashboardPage;