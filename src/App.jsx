import { initAOS } from "./aos";
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout'; 
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPages from './Pages/ThirdPages';
import FourthPage from './Pages/FourthPage'

const App = () => {
  useEffect(() => {
    initAOS();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <FirstPage /> },
        { path: "second", element: <SecondPage /> },
        { path: "third", element: <ThirdPages /> },
        { path: "fourth", element: <FourthPage /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
