import React, { useState } from 'react';
import { Drawer } from 'antd';
import styled from 'styled-components';

import webpackLogo from '@resources/assets/webpack-logo.svg';

import { Nav, NavItem } from '@/components/Nav';
import { Recipes, recipesData } from '@/components/Recipes';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <Nav toggleSideBar={() => setVisible(true)}>
        <NavItem href="/featured" isActive>
          Featured
        </NavItem>
        <NavItem href="/popular">Popular</NavItem>
        <NavItem href="/latest">Latest</NavItem>
      </Nav>
      <Recipes recipes={recipesData} />
      <Drawer
        title="Basic drawer"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <p>Some contents...</p>
        <img src={webpackLogo} />
      </Drawer>
    </Wrapper>
  );
}
