import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('app'));
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store.jsx"
import axios from 'axios';
import { Auth0Provider } from '@auth0/auth0-react'
axios.defaults.baseURL = 'http://localhost:3000'

const AUTH0_DOMAIN = import.meta.env.REACT_APP_AUTH0_DOMAIN
const AUTH0_CLIENT_ID = import.meta.env.REACT_APP_AUTH0_CLIENT_ID

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Auth0Provider
            domain={AUTH0_DOMAIN}
            clientId={AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: window.location.origin
              }}
            >
                <App />
            </Auth0Provider>
        </BrowserRouter>
    </Provider>
)