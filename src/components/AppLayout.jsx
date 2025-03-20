import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import '../App.css';

const drawerItems = [
  { text: 'Home', route: '/' },
  { text: 'Progress & Plan', route: '/progress-planning' },
  { text: 'Compete', route: '/competition' },
  { text: 'Get Tips', route: '/ai-recommendations' },
];

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const [selected, setSelected] = useState(drawerItems.findIndex(x => x.route === window.location.pathname));

  const handleDrawerSelect = (e) => {
    navigate(e.itemTarget.props.route);
    setSelected(e.itemIndex);
    setDrawerExpanded(false);
  };

  return (
    <div>
      <div className="custom-toolbar">
        <Button fillMode="flat" onClick={() => setDrawerExpanded(!drawerExpanded)}>☰</Button>
        <span className="app-name">MoveUP</span>
      </div>

      <Drawer
        expanded={drawerExpanded}
        position="start"
        mode="push"
        mini={true}
        items={drawerItems.map((item, index) => ({
          ...item,
          selected: index === selected,
        }))}
        onSelect={handleDrawerSelect}
      >
        <DrawerContent>
          <div className="content">{children}</div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AppLayout;
