/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
    path: "/kospi",
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
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  }
];

export default dashboardRoutes;
