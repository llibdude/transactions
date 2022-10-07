import useSWR, { Fetcher } from "swr";

export type Transaction = {
  merchant: string;
  date: string;
  amount: number;
  type: "debit" | "credit";
  details?: string;
  balance: number;
};

export type UserWithTransactions = {
  name: string;
  avatar: string;
  transactions: Transaction[];
};

type Response = {
  transactions: UserWithTransactions;
  isLoading: boolean;
  isError: boolean;
};

const useTransactions = () => {
  const fetcher: Fetcher<{ data: UserWithTransactions }, string> = (args) =>
    fetch(args).then((res) => res.json());
  const { data, error } = useSWR(`/api/transactions`, fetcher);

  return {
    transactions: data?.data,
    isLoading: !error && !data,
    isError: error,
  } as Response;
};

export default useTransactions;
