import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('app'));
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from 'react-router-dom';

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)