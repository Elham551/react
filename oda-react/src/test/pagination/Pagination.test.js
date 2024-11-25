import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../../components/pagination-component/pagination";

describe("Pagination Component", () => {
  let setPageMock;

  beforeEach(() => {
    setPageMock = jest.fn(); // Mock setPage
  });

  test("renders the pagination component when results exist", () => {
    const results = { items: [{ id: 1 }, { id: 2 }], hasMoreItem: true };
    render(<Pagination results={results} page={1} setPage={setPageMock} />);

    expect(screen.getByText("Page: 1")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Previous")).toBeInTheDocument();
  });

  test("disables the Previous button when on the first page", () => {
    const results = { items: [{ id: 1 }, { id: 2 }], hasMoreItem: true };
    render(<Pagination results={results} page={1} setPage={setPageMock} />);

    const previousButton = screen.getByText("Previous");
    expect(previousButton).toBeDisabled();
  });

  test("calls setPage with the correct value when Next is clicked", () => {
    const results = { items: [{ id: 1 }, { id: 2 }], hasMoreItem: true };
    render(<Pagination results={results} page={1} setPage={setPageMock} />);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(setPageMock).toHaveBeenCalledWith(expect.any(Function));
  });

  test("disables the Next button when hasMoreItem is false", () => {
    const results = { items: [{ id: 1 }, { id: 2 }], hasMoreItem: false };
    render(<Pagination results={results} page={1} setPage={setPageMock} />);

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
  });

});
