// we will have
//homepage
//categories
//search
//single gif
//favorite

import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayouts from "./layouts/AppLayouts";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import SingleGif from "./pages/SingleGif";
import Favorite from "./pages/Favorite";
import HomePage from "./pages/HomePage";
import GifProvider from "./Context/context";

// this is the router, where you decide assing the compnonet to each page
// this is basically like a brower route but in diffrent style
const router = createBrowserRouter([
  {
    element: <AppLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:categories",
        element: <Categories />,
      },
      {
        path: "/serach/:query",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <SingleGif />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
    ],
  },
]);

//pass the router to router as props.
function App() {
  return (
    <GifProvider>
      {" "}
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
