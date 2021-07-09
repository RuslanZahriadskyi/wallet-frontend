import React from 'react';

// Components
import IconsPanel from '../IconsPanel';
import Ballance from '../Ballance';

const Main = () => {
  return (
    <div className="dashboard-container">
      <IconsPanel />
      <Ballance />
    </div>
  );
};

export default Main;
