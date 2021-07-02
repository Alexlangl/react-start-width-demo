import * as React from "react"
import { Link } from "react-router-dom"
import { History } from "history"
import RouteView, { IRouteViewProps } from "../route/RouteView"

interface ILayoutProps extends IRouteViewProps {
  history: History
}

const Layout = (props: ILayoutProps) => {
  return (
    <div>
      <div>this is a layout Component</div>
      <Link to="/pages/page-a">page-A</Link>
      <Link to="/pages/page-b">page-B</Link>
      <RouteView {...props} />
    </div>
  )
}

export default Layout
