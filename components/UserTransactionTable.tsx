import { useTable, useSortBy } from "react-table";
import React from "react";
import currencyFormatter from "../utilities/currency-formatter";
import { Transaction } from "../hooks/useTransactions";
import Badge from "./Badge";

const UserTransactionTable: React.FC<{ transactions: Transaction[] }> = ({
  transactions,
}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => {
          return new Date(value).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
        },
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: ({ value }) => {
          if (value === "debit") {
            return <Badge variant="red">Debit</Badge>;
          } else if (value === "credit") {
            return <Badge variant="green">Credit</Badge>;
          } else {
            return "-";
          }
        },
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: ({ value, row }) => {
          if (row.original.type === "debit") {
            return (
              <span className="text-redContrast">
                {currencyFormatter.format(value)}
              </span>
            );
          } else {
            return (
              <span className="text-greenContrast">
                {currencyFormatter.format(value)}
              </span>
            );
          }
        },
      },
      {
        Header: "Merchant",
        accessor: "merchant",
      },
      {
        Header: "Balance",
        accessor: "balance",
        Cell: ({ value }) => {
          if (value < 0) {
            return (
              <span className="text-redContrast">
                {currencyFormatter.format(value)}
              </span>
            );
          } else {
            return (
              <span className="text-greenContrast">
                {currencyFormatter.format(value)}
              </span>
            );
          }
        },
      },
      {
        Header: "Details",
        accessor: "details",
      },
    ],
    []
  );

  const data = React.useMemo(() => {
    return transactions.map((transaction) => {
      return {
        merchant: transaction.merchant,
        date: transaction.date,
        amount: transaction.amount,
        type: transaction.type,
        balance: transaction.balance,
        details: transaction.details,
      };
    });
  }, [transactions]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          sortBy: [
            {
              id: "date",
              desc: true,
            },
          ],
        },
      },
      useSortBy
    );

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full" role="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="text-left border rounded border-primary bg-secondary"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-2 px-4 text-xs font-normal text-secondary"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b border-primary">
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="p-4 whitespace-nowrap"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTransactionTable;
