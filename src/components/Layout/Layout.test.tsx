import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";
import MobileMenu from "./MobileMenu";

describe("Layout", () => {
  describe("Header", () => {
    beforeEach(() => {
      render(
        <Router>
          <Header />
        </Router>
      );
    });
    test("should render links", () => {
      const posts = screen.getByText(/posts/i);
      const contact = screen.getByText(/contact/i);

      expect(posts).toBeInTheDocument();
      expect(contact).toBeInTheDocument();
    });

    test("should render logo", () => {
      const logo = screen.getByText(/rockr blog/i);

      expect(logo).toBeInTheDocument();
    });
  });

  describe("MobileMenu", () => {
    beforeEach(() => {
      render(
        <Router>
          <MobileMenu openMenu={true} setOpenMenu={() => {}} />
        </Router>
      );
    });

    test("should render links", () => {
      const posts = screen.getByText(/posts/i);
      const contact = screen.getByText(/contact/i);

      expect(posts).toBeInTheDocument();
      expect(contact).toBeInTheDocument();
    });
  });
});
