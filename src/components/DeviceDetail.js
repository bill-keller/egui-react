import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const DeviceDetail = ({cost, department, description, in_stock, item_id, on_order}) => (

  <Link className="list-item" to={ `/devices/${item_id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <div>
        <span className="list-item__sub-title">In stock: {in_stock} Cost: {cost}
        <img className="list-item__thumb right" src={`images/items/${item_id}.jpg`}/>
      </span>
      </div>
    </div>
  </Link>

);

export default DeviceDetail;
