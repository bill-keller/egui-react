// get total devices

export default (devices) => {

  return devices
    .map((device) => device.cost)
    .reduce((sum, value) =>  sum + value, 0);

}