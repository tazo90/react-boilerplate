import React, { useState } from 'react';
import { Drawer, Spin } from 'antd';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import { useQuery } from 'react-query';

import webpackLogo from '@resources/assets/webpack-logo.svg';
import { Nav, NavItem } from '@/components/Nav';
import { Recipes } from '@/components/Recipes';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Home() {
  const [visible, setVisible] = useState(false);

  const {
    isLoading,
    error,
    data: recipesData,
  } = useQuery('recipes', async () => {
    const recipesData = await (
      await fetch(
        'https://run.mocky.io/v3/0874bdc1-a42c-43db-9026-2ae8ce03f2b1'
      )
    ).json();
    return recipesData;
  });

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
      {recipesData ? <Recipes recipes={recipesData} /> : <Spin />}
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
