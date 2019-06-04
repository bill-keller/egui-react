import React from 'react';
import DeviceList from './DeviceList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const DeviceDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <DeviceList />
  </div>
);

export default DeviceDashboardPage;