import React, { Fragment } from "react";
import { Header} from "./Layouts";
import { CssBaseline } from "@material-ui/core";
import GraphicDashboard from "./Graphic";
import "storm-react-diagrams/dist/style.min.css";
import Contact from './workflow'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (

    <Fragment>
      <CssBaseline />
      <Header />
      <div style={{ height: 900, width: "100%" }}>
        <GraphicDashboard />
      </div>
    </Fragment>

  );
}
