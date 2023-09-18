import "./App.css";
import AppLayout from "./pages/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Authentication from "./components/Authentication";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart")); // Do not keep it inside component. Always keep on top where we import all components
console.log("What", Instamart);

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
        // '/about/profile'
        // children: [
        //   {
        //     path: "profile",
        //     element: <Profile />, // to access this we need to use <Outlet/> in parent of it.
        //   },
        // ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/authentication",
        element: <Authentication />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    // Provide my store to app
    // store is need to be connect to our application. Because they are different from each other. We have to tell our application that this is our Redux store. So we need a provider to provide store to our application.
    <Provider store={store}>
      <div className="app">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
