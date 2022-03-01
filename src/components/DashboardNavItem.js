import React, { useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './css/DashboardNavItem.css';

const DashboardNavItem = ({ data }) => {
  const [subNav, setSubNav] = useState(false);
  const subNavHandler = () => setSubNav(!subNav);

  return (
    <>
      {data.subMenu.length === 0 ? (
        <NavLink
          to={data.navURL}
          onClick={data.subMenu && subNavHandler}
          className='navContainer'>
          <div className='navHeader'>
            <span className='navHeaderIcon'>{data.navIcon}</span>
            <h1 className='navHeaderText'>{data.navTitle}</h1>
          </div>
        </NavLink>
      ) : (
        <div className='navContainer' onClick={data.subMenu && subNavHandler}>
          <div className='navHeader'>
            <span className='navHeaderIcon'>{data.navIcon}</span>
            <h1 className='navHeaderText'>{data.navTitle}</h1>
            <span className='subMenuExpandArrow'>
              {data.subMenu.length === 0 ? null : subNav ? (
                <MdKeyboardArrowUp className='subMenuExpandArrow' />
              ) : (
                <MdKeyboardArrowDown className='subMenuExpandArrow' />
              )}
            </span>
          </div>

          <div className={subNav ? 'navListContainerF' : 'navListContainerN'}>
            {data.subMenu.length !== 0
              ? data.subMenu.map((item, index) => (
                  <NavLink
                    to={item.URL}
                    className='navListItem'
                    key={index}
                    onClick={subNavHandler}>
                    {/* <span className='navListIcon'>{item.icon}</span> */}
                    <h1 className='navListText'>{item.title}</h1>
                  </NavLink>
                ))
              : null}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardNavItem;
