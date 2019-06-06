import React from 'react';
const axios = require('axios');
import database from '../firebase/firebase';

export default class DeviceDetailFull extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        description: '',
        cost: '',
        department: 0,
        item_id: props.match.params.id,
        in_stock: 0,
        on_order: 0,
        DWIDTH: 0,
        DDEPTH: 0,
        DWEIGHT: 0,
        DHEIGHT: 0,
        zipcode: '',
        country: '',
        state: '',
        deviceid: 0,
        bluetooth: '',
        cell: '',
        gps: false,
        infrared: false,
        wifi: ''
      }
    }

  componentDidMount(props) {

    // #############################################################################
    // get inventory details from CICS applicaiton via REST API call to z/OS Connect
    axios.get(`https://cap-sg-prd-2.integration.ibmcloud.com:17241/catalog/items/${this.state.item_id}`)
    .then((response) => {
      const itemDetailsCICS = response.data.cics_single_resp.inquire_single.single_item;
      if (itemDetailsCICS) {
        this.setState(() => ({ ...itemDetailsCICS }));
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    // ##################################################################################
    // get device dimensions from DB2 z/OS via REST API call to z/OS Connect and DB2 z/OS
    axios.get(`https://cap-sg-prd-2.integration.ibmcloud.com:17241/catalog_device_dimensions/devices/${this.state.item_id}`)
    .then((response) => {
      const itemDeviceDimensionsDB2 = response.data['ResultSet Output'][0];
      if (itemDeviceDimensionsDB2) {
        this.setState(() => ({ ...itemDeviceDimensionsDB2 }));
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    
    // #################################################################################
    // get shipping information from VSAM file via REST API call to z/OS Connect and DVM
   axios.get(`https://cap-sg-prd-2.integration.ibmcloud.com:18170/catalog_shipping/itemShipping?ITEMID=${this.state.item_id}`, {
      headers: {Authorization: 'Basic Ymt6Y2VlOnBhc3N3MHJk'}
    })
    .then((response) => {
      const itemShippingDetailsVSAM = response.data.Records[0];
      if (itemShippingDetailsVSAM) {
        this.setState(() => ({ ...itemShippingDetailsVSAM }));
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    // #################################################################################
    // get connectivity information from firebase

    database.ref(`items/item_${this.state.item_id}/connectivity`).once('value').then((snapshot) => {
      console.log(snapshot.key, snapshot.val());
      this.setState(() => (snapshot.val()));
      console.log(this.state);
    })
  }
  
  render () {
    return (
      <div className="content-container">
      <img className="big-pic" src={`/images/items/${this.state.item_id}.jpg`}/>
        <div className="content-container">
   
          <h1 className="page-header__title">{this.state.description}</h1>
        </div>
        <div className="row">
        <div className="column__cics">
          <div className="card">        
            <h3 className="list-item__title">CICS API</h3>
            <h3 className="list-item__sub-title">(Inventory System)</h3>
            <p className="list-item__data">Device ID: {this.state.item_id}</p>
            <p className="list-item__data">Cost:         {this.state.cost}</p>
            <p className="list-item__data">Qty in stock: {this.state.in_stock}</p>
            <p className="list-item__data">Qty on order: {this.state.on_order}</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h3 className="list-item__title">DB2 z/OS API</h3>
            <h3 className="list-item__sub-title">(Product Database)</h3>
            <p className="list-item__data">Weight: {this.state.DWEIGHT} g</p>
            <p className="list-item__data">Width: {this.state.DWIDTH} mm</p>
            <p className="list-item__data">Depth: {this.state.DDEPTH} mm</p>
            <p className="list-item__data">Height: {this.state.DHEIGHT} mm</p>
          </div>
        </div>
        <div className="column__vsam">
          <div className="card">
            <h3 className="list-item__title">VSAM (via DVM) API</h3>
            <h3 className="list-item__sub-title">(Shipping System)</h3>
            <p className="list-item__data">Country:         {this.state.country}</p>
            <p className="list-item__data">State/Province:   {this.state.state}</p>
            <p className="list-item__data">Postal Code: {this.state.zipcode}</p>
          </div>
        </div>
        <div className="column__clouddb">
          <div className="card">
            <h3 className="list-item__title">Cloud DB</h3>
            <h3 className="list-item__sub-title">(Firebase)</h3>
            <p className="list-item__data">bt:         {this.state.bluetooth}</p>
            <p className="list-item__data">gps:   {this.state.gps ? "yes" : "no" }</p>
            <p className="list-item__data">wifi: {this.state.wifi}</p>
          </div>
        </div>
      </div>


      </div>
    )
  }
}


