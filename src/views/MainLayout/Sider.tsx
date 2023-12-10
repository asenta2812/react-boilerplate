import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import { useState } from 'react'
import React from 'react'

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}))

const Sider = () => {
  const t = theme.useToken()
  const height = t.token.Layout?.headerHeight || 64
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout.Sider
      breakpoint="lg"
      className="layout__sider"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="layout__logo" style={{ height: height - 32 }} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
      />
    </Layout.Sider>
  )
}

export default Sider
