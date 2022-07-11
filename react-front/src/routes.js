
import Dashboard from "views/Dashboard.js";
import KospiNasdaq from "views/kospiandnasdaq.js";
import Kospi from "views/Kospi.js";
import Nasdaq from "views/Nasdaq.js";
import Coupling from "views/Coupling.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import github from "components/Sidebar/image-side/githubmini.png"
import nasdaqmini from "components/Sidebar/image-side/nasdaqmini.png"
import couplingmini from "components/Sidebar/image-side/couplingmini.png"
import dashboardmini from "components/Sidebar/image-side/dashboardmini.png"
import kospimini from "components/Sidebar/image-side/kospimini.png"
import kospinasdaqmini from "components/Sidebar/image-side/kospinasdaqmini.png"
import notificationmini from "components/Sidebar/image-side/notificationmini.png"

const dashboardRoutes = [
  {
    upgrade: true,
    path :"/github",
    image : github,
    name: "GITHUB ADDRESS",
    component: Upgrade,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    image : dashboardmini,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/kospiandnasdaq",
    name: "KOSPI & NASDAQ",
    image: kospinasdaqmini,
    component: KospiNasdaq,
    layout: "/admin"
  },
  {
    path: "/stockofkospi",
    name: "STOCK OF KOSPI",
    image: kospimini,
    component: Kospi,
    layout: "/admin"
  },
  {
    path: "/nasdaq",
    name: "STOCK OF NASDAQ",
    image : nasdaqmini,
    component: Nasdaq,
    layout: "/admin"
  },
  {
    path: "/coupling",
    name: "WHAT IS THE COUPLING",
    image: couplingmini,
    component: Coupling,
    layout: "/admin"
  },

  {
    path: "/notifications",
    name: "Notifications",
    image : notificationmini,
    component: Notifications,
    layout: "/admin"
  }
];





export default dashboardRoutes;
