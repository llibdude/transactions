import { render } from "@testing-library/react";
import Badge from "../components/Badge";

// Simple UI components are a good use case for snapshot testing.
// I personally find when you do snapshot testing with more volatile code it can distract from the teams efficiency.
it("renders red badge", () => {
  const { container } = render(<Badge variant="red">Test content</Badge>);
  expect(container).toMatchSnapshot();
});

it("renders green badge", () => {
  const { container } = render(<Badge variant="green">Test content</Badge>);
  expect(container).toMatchSnapshot();
});
