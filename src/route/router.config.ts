import Layout from "../Layout"
import { lazy } from "react"
const RouteConfig = [
  {
    path: "/pages",
    component: Layout,
    children: [
      {
        path: "/pages/page-a",
        component: lazy(() => import("../views/pageA"))
      },
      {
        path: "/pages/page-b",
        component: lazy(() => import("../views/pageB"))
      },
      { path: "/pages", redirect: "/pages/paeg-a" }
    ]
  },
  {
    path: "/",
    redirect: "/pages/page-a"
  }
]

export default RouteConfig
