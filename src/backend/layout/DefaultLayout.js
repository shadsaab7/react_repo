import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Sidebar from '../components/common/Sidebar';

const DefaultLayout = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className='row-span-3'>
      <Sidebar/>
      </div>
      <div className='col-span-2'>
      <Header/>
      </div>
      <div className="row-span-2 col-span-2">Main Content</div>
    </div>
  );
};

export default DefaultLayout;