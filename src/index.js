import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import App from './Components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Content from './Components/Content';
import Login from './Components/Login';
import About from './Components/About';
import Single from './Components/Single';
import Categoryadd from './Components/Categoryadd';
import Categorylist from './Components/Categorylist';
import Contact from './Components/Contact';
import Api from './Components/Api';
import SingleProduct from './Components/SingleProduct';
import Userapi from './Components/Userapi';
import Userpost from './Components/Userpost';
import Usestateref from './Components/Usestateref';
import Table from './Components/Table';

const router1 = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <h1>404 Page Not Found </h1>,
        children: [
            {
                path: '',
                element: <Content />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'singlepage',
                element: <Single />
            },
            {
                path: '/category',
                element: <Categorylist />,

            },
            {
                path: '/category/add',
                element: <Categoryadd />
            },
            {
                path: 'contact',
                element: <Contact />,

            },
            {
                path: 'api',
                element: <Api />,

            },
            {
                path: "product/:pid",
                element: <SingleProduct />,

            },
            {
                path: "userapi",
                element: <Userapi/>,

            },
            {
                path: "userpost",
                element: <Userpost/>,

            },
            {
                path: "fname",
                element: <Usestateref/>,

            },
            {
                path: "table",
                element: <Table/>,

            },

        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router1} />);