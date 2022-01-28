import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
class Loader extends Component {
  render() {
    return (
      <div>
      <div className="d-flex flex-row">
      <Spinner animation="border" variant="primary" size="bg" class="p-2"/>
    </div>
     </div>
    );
  }
}
export default Loader;
