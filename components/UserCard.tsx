import { UserWithTransactions } from "../hooks/useTransactions";
import UserHeader from "./UserHeader";
import UserTransactionTable from "./UserTransactionTable";

const UserCard: React.FC<UserWithTransactions> = (props) => {
  const { name, avatar, transactions } = props;
  return (
    <div className="m-auto max-w-[800px] space-y-10">
      <UserHeader
        name={name}
        avatar={avatar}
        balance={transactions[0].balance}
      />
      <UserTransactionTable transactions={transactions} />
    </div>
  );
};

export default UserCard;
