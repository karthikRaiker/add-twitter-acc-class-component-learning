import "./App.css";
import { Component } from "react";
import TwitterPage from "./pages/TwitterPage";
import CounterPage from "./pages/CouterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactLifeCycleParent from "./pages/ReactLifeCycleParent";
import ReactFragment from "./pages/ReactFragment";
import ReactPureComponent from "./pages/ReactPureComponent";
import Ref from "./pages/Ref";
import ReactPortals from "./pages/ReactPortals";
import ReactErrorBoundary from "./pages/ReactErrorBoundary";
import HigherOrderComponent from "./pages/HigherOrderComponent";
import RenderProps from "./pages/RenderProps";
import ReactContextApi from "./pages/ReactContextApi";
import HttpRequests from "./pages/HttpRequests";
import HttpGet from "./components/HttpRequests/HttpGet";
import HttpPost from "./components/HttpRequests/HttpPost";
import MapExample from "./pages/MapExample";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Application">
        {/* <ReactPortals /> */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<TwitterPage />} />
            <Route exact path="/counter" element={<CounterPage />} />
            <Route
              exact
              path="/life-cycle"
              element={<ReactLifeCycleParent />}
            />
            <Route exact path="/fragment" element={<ReactFragment />} />
            <Route
              exact
              path="/pure-component"
              element={<ReactPureComponent />}
            />
            <Route exact path="/ref" element={<Ref />} />
            <Route exact path="/react-portals" element={<ReactPortals />} />
            <Route
              exact
              path="/error-boundary"
              element={<ReactErrorBoundary />}
            />
            <Route
              exact
              path="/higher-order-component"
              element={<HigherOrderComponent />}
            />
            <Route exact path="/render-props" element={<RenderProps />} />
            <Route exact path="/context-api" element={<ReactContextApi />} />
            <Route exact path="/http-requests" element={<HttpRequests />} />
            <Route exact path="/http-get" element={<HttpGet />} />
            <Route exact path="/http-post" element={<HttpPost />} />
            <Route exact path="/map-ex" element={<MapExample />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
