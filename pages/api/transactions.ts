import { NextApiRequest, NextApiResponse } from "next";
import transactionsJSON from "../../transactions.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  const transactions = transactionsJSON as any;

  switch (method) {
    // NOTE: I don't know if I can trust the data to be valid. If not I would need to validate the data first before sending
    // it to the UI.
    case "GET":
      // I'm not sure if I can garuntee the transactions are sorted by date, so will sort them ascending
      transactions.transactions.sort((a, b) => (a.date < b.date ? -1 : 1));

      // Iterate over the transcations, and compute the account balance after the transaction using root level balanced property as the initial value.
      let currentBalance = transactions.balance;
      transactions.transactions.forEach((transaction) => {
        if (transaction.type === "debit") {
          currentBalance -= transaction.amount;
        } else {
          currentBalance += transaction.amount;
        }
        transaction.balance = currentBalance;
      });

      // Return transactions sorted descending so most recent ones are at the top of the page
      transactions.transactions.sort((a, b) => (a.date > b.date ? -1 : 1));

      res.json({ data: { ...transactions, balance: undefined } });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
