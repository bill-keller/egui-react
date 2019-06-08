// Devices reducer

const devicesReducerDefaultState = [];

export default (state = devicesReducerDefaultState, action) => {

  switch (action.type) {

    case 'SET_DEVICES':
      return action.devices;
    default:
      return state;
  }
};
