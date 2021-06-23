import React, { useState } from 'react'
import { Drawer, Button } from 'antd'
import styled from 'styled-components'

import webpackLogo from '@resources/assets/webpack-logo.svg'

import { Recipes, recipesData } from '@/components/Recipes'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

export default function App() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <Wrapper>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Recipes recipes={recipesData} />
      <Drawer
        title="Basic drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <img src={webpackLogo} />
      </Drawer>
    </Wrapper>
  )
}
