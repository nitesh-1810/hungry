import "./App.css";
import AppLayout from "./pages/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // When path is not vaild this page load
    children: [
      // these children component goes in place of <Outlet /> which are inside <AppLayout/>
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
