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
import Designathon from "./components/Designathon/designathon";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import FilmMaking from "./components/FilmMaking/FilmMaking";
import RoasterBoaster from "./components/RoasterBoster/RoasterBoaster";
import TreasureHunt from "./components/TressureHunt/TressureHunt";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/events",
        element: <Event />
      },
      {
        path: "/speakers",
        element: <Speakers />
      },
      {
        path: "/sponsers",
        element: <Sponsors />
      },
      {
        path:"/hackathon",
        element:<Hackathon/>
      },
      {
        path:"/designathon",
        element:<Designathon/>
      },
      {
        path:"/caseStudy",
        element:<CaseStudy/>
      },
      {
        path:"/filmMaking",
        element:<FilmMaking/>
      },
      {
        path:"/roasterBoaster",
        element:<RoasterBoaster/>
      },
      {
        path:"/treasureHunt",
        element:<TreasureHunt/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={Router}/>;
}

export default App;
