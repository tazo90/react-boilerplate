import React, { useState } from 'react';
import { Drawer } from 'antd';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';

import webpackLogo from '@resources/assets/webpack-logo.svg';
import { Nav, NavItem } from '@/components/Nav';
import { Recipes, recipesData } from '@/components/Recipes';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <Nav toggleSideBar={() => setVisible(true)}>
        <NavItem href="/featured" isActive>
          <Trans>Featured</Trans>
        </NavItem>
        <NavItem href="/popular">
          <Trans>Popular</Trans>
        </NavItem>
        <NavItem href="/latest">
          <Trans>Latest</Trans>
        </NavItem>
      </Nav>
      <Recipes recipes={recipesData} />
      <Drawer
        title="Basic drawer"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <p>
          <Trans>Some contents</Trans>...
        </p>
        <img src={webpackLogo} />
      </Drawer>
    </Wrapper>
  );
}
