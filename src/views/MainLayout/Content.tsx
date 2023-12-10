import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'

const Content = () => {
  const {
    token: { colorBgContainer, colorBgContainerDisabled, borderRadius },
  } = theme.useToken()

  return (
    <Layout.Content
      className="layout__content"
      style={{ background: colorBgContainerDisabled }}
    >
      <div
        className="layout__content--inner"
        style={{ background: colorBgContainer, borderRadius }}
      >
        <Outlet />
      </div>
    </Layout.Content>
  )
}

export default Content
