import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage/HomePage";
import Event from "./components/Event/event";
import Sponsors from "./components/Sponsers/SPONSORS";
import Speakers from "./components/Speakers/speakers";
import Hackathon from "./components/hackathon/hackathon";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      // {
      //   path: "/about",
      //   element: <h1>About</h1>
      // },
      {
        path: "/events",
        element: <Event />
      },
      {
        path: "/speakers",
        element: <Speakers />
      },
      // {
      //   path: "/faq",
      //   element: <h1>Faq</h1>
      // },
      {
        path: "/sponsers",
        element: <Sponsors />
      },
      {
        path:"/hackathon",
        element:<Hackathon/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={Router}/>;
}

export default App;
