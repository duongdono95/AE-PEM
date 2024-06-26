import React, { useState, useEffect } from 'react';
import './StemManagement.scss';
import SwitchIcon from 'components/DonoStyles/SwitchIcon/SwitchIcon';
import OrderList from '../../StemOrders.json';
import GraphicIcon from 'components/DonoStyles/GraphicIcon/GraphicIcon';
import StemOrders from './StemOrders';
import StemCreditControl from './StemCreditControl';

const StemManagement = () => {
  const controllers = ['Order List', 'Credit Control'];
  const [controllerIndex, setControllerIndex] = useState(0);
  const [currentController, setCurrentController] = useState(controllers[controllerIndex]);
  useEffect(() => {
    setCurrentController(controllers[controllerIndex]);
  }, [controllerIndex]);
  return (
    <div className='stem__management'>
      <div className='stem__management-header'>
        <p>MANAGEMENT</p>
      </div>
      <div className='stem__management-tabs'>
        {controllers.map((controller, index) => {
          return (
            <p
              onClick={() => {
                setControllerIndex(index);
              }}
              key={index}
              className={controllerIndex === index ? 'tab__active' : ''}
            >
              {controller}
            </p>
          );
        })}
      </div>
      <div className='stem__management-body'>
        {currentController === 'Order List' && <StemOrders orders={OrderList} />}
        {currentController === 'Credit Control' && <StemCreditControl />}
      </div>
    </div>
  );
};

export default StemManagement;
