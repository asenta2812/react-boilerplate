import './styles.scss'

import { Layout } from 'antd'

import Content from './Content'
import Header from './Header'
import Sider from './Sider'

const MainLayout = () => {
  return (
    <Layout hasSider>
      <Sider />

      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  )
}

export default MainLayout
