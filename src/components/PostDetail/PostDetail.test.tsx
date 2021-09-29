import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostDetail from ".";

describe("PostDetail", () => {
  beforeEach(() => {
    render(
      <Router>
        <PostDetail />
      </Router>
    );
  });
  test("should render loading", () => {
    const loading = screen.getByRole("alert");

    expect(loading).toBeInTheDocument();
  });
});
