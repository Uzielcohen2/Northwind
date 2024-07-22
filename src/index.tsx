import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/LayoutArea/Layout/Layout';
import './index.css';
import interceptors from './Utils/Interceptors';
import { ResponsiveProvider } from './Utils/ResponsiveContext';

interceptors.create();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ResponsiveProvider>


    <BrowserRouter>

      <Layout />
    </BrowserRouter>
  </ResponsiveProvider>


);

