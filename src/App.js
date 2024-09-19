// Importing Styles Sheet
import './styles/App.css';
import './styles/Style.css';
import './styles/Responsive.css';
// Importing Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Importing React Libraries
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  
  const appRouter = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
}

export default App;