import { render, screen } from "@testing-library/react";
import UserTransactionTable from "../components/UserTransactionTable";

const testData = [
  {
    merchant: "Starbucks",
    date: "2019-01-02",
    amount: 4.67,
    type: "debit",
  },
  {
    merchant: "Till, Inc.",
    date: "2019-01-15",
    amount: 1000000,
    type: "credit",
    details: "Payroll",
  },
];

it("renders a table with correct num rows", async () => {
  const { getAllByRole } = render(
    <UserTransactionTable transactions={testData} />
  );

  expect(getAllByRole("table").length).toEqual(1);

  // Factor in the table header
  expect(getAllByRole("row").length).toEqual(testData.length + 1);
});

// TODO: Validate the row content is accurate.
