import moment from 'moment';
// get visible devices

export default (devices, {text, sortBy}) => {
  return devices.filter((device) => {
    const textMatch = (device.description.toLowerCase().includes(text.toLowerCase()));
    return textMatch;
  }).sort((a, b) => {
    if(sortBy === 'description') {
      return a.description > b.description ? 1 : -1;
    } else if (sortBy === 'in_stock') {
      return a.in_stock > b.in_stock ? 1: -1;
    }
  })
}