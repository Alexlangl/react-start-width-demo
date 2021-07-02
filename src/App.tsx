import React, { Suspense } from "react"

import { BrowserRouter } from "react-router-dom"

import RouteConfig from "./route/router.config"
import RouteView from "./route/RouteView"

import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
          <RouteView children={RouteConfig}></RouteView>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
