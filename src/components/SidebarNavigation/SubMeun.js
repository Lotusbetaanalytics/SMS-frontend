import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  width: 100%;
  margin-bottom: 15px;

  &:hover {
    background: whitesmoke;
    border-left: 4px solid black;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  font-size: 18px;
`;

const DropdownLink = styled(Link)`
  background: whitesmoke;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 18px;

  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`;

const SubMeun = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item} onClick={item.subNav && showSubnav}>
        <div>{item.icon}</div>
        <SidebarLabel>{item.title}</SidebarLabel>
        <div>
          {item.subNav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          console.log(item);
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMeun;
