import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import Loader from "components/Loader/Loader";

describe("render test", () => {
  test("loader test", () => {
    const { container } = render(<Loader />);
    const loaderElement = container.querySelector(".loader");
    expect(loaderElement).toBeDefined();
  });
});
