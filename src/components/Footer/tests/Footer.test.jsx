import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import Footer from "../Footer";

describe("testing Footer", () => {
  test("should render with out crashing", () => {
    const history = createMemoryHistory();
    const route = "/some-route";
    history.push(route);
    render(
      <Router history={history}>
        <Footer info={"hello"}></Footer>
      </Router>
    );
  });
});
