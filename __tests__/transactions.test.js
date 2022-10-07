import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../pages/transactions";

const mockChildComponent = jest.fn();
jest.mock("../components/UserCard", () => (props) => {
  mockChildComponent(props);
  return <div />;
});

const mockData = {
  name: "Johnny Ray",
  avatar: "http://www.fillmurray.com/200/200",
  transactions: [
    {
      merchant: "Starbucks",
      date: "2019-01-02",
      amount: 4.67,
      type: "debit",
    },
  ],
};

jest.mock("../hooks/useTransactions", () => {
  return jest.fn(() => ({
    transactions: mockData,
    isLoading: false,
    isError: false,
  }));
});

describe("Testing transactions page", () => {
  it("passes props correctly", () => {
    render(<Home />);

    expect(mockChildComponent).toHaveBeenCalledWith(
      expect.objectContaining(mockData)
    );
  });

  // TODO: Test for error and loading states, verify the HEAD exists and is accurate
});
