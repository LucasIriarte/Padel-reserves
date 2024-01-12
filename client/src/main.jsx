import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('app'));
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store.jsx"
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000'

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)