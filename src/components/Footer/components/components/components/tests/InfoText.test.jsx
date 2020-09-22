import React from "react";
import { render } from "@testing-library/react";

import InfoText from "../InfoText";

describe("testing InfoText", () => {
  test("should render without crashing", () => {
    const { getByTestId } = render(<InfoText info={"hello"}></InfoText>);
    const element = getByTestId("Info");
    expect(element.textContent).toBe("hello");
  });
});
