import Head from "next/head";
import UserCard from "../components/UserCard";
import useTransactions from "../hooks/useTransactions";

export default function Home() {
  const { transactions, isLoading, isError } = useTransactions();

  // TODO: Implement a loading effect. I personally enjoy the ghost loading effect.
  if (isLoading) return;

  // TODO: Handle errors gracefully.  Perhaps a nicely worded message that something went wrong with a link to contact support.
  if (isError) return;

  return (
    <div className="min-h-screen px-10">
      <Head>
        <title>Transactions Renderer</title>
      </Head>

      <main className="container">
        <div className="py-20">
          <UserCard {...transactions} />
        </div>
      </main>
    </div>
  );
}
