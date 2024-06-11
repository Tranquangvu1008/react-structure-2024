import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './styles/index.css'

import { store } from './stores/index.ts'
import ErrorBoundaryComponent from './components/error-boundary.tsx'
import { initInterceptor } from './libs/init-interceptor.ts'

initInterceptor(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundaryComponent>
       <App />
      </ErrorBoundaryComponent>
    </BrowserRouter>
  </Provider>
)
