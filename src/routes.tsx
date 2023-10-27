import App from "./App";
import AppContainer from "./components/AppContainer";
import { links } from "./links";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: links.dummyList,
        element: <AppContainer />
      }, {
        path: links.dummyTable,
        element: <AppContainer />
      }, {
        path: links.dummyChart,
        element: <AppContainer />
      },
    ],
  },
]