import 'antd/dist/reset.css'
import './styles/index.scss'

import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { AppRouter } from './routes'
import { persistor, store } from './store'

function App() {
  return (
    <>
      <StyleProvider hashPriority="high">
        <ConfigProvider theme={{ cssVar: true, hashed: false }}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppRouter />
            </PersistGate>
          </Provider>
        </ConfigProvider>
      </StyleProvider>
    </>
  )
}

export default App
