import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Posts from ".";

describe("Posts", () => {
  beforeEach(() => {
    render(<Posts setElement={() => {}} page={1} />);
  });
  test("should render loading", () => {
    const loading = screen.getByRole("alert");

    expect(loading).toBeInTheDocument();
  });
});
