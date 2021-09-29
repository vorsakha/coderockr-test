import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../../pages/Contact";

describe("Contact", () => {
  beforeEach(() => {
    render(
      <Router>
        <Contact />
      </Router>
    );
  });
  test("should render labels", () => {
    const name = screen.getByText(/name/i);
    const email = screen.getByText(/e-mail/i);
    const phone = screen.getByText(/phone/i);
    const post = screen.getByText(/post/i);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(post).toBeInTheDocument();
  });

  test("should render submit button", () => {
    const btn = screen.getByText(/submit/i);

    expect(btn).toBeInTheDocument();
  });
});
