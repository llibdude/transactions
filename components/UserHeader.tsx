import Image from "next/image";
import currencyFormatter from "../utilities/currency-formatter";

type Props = {
  name: string;
  avatar: string;
  balance: number;
};

const UserHeader: React.FC<Props> = ({ name, avatar, balance }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between space-y-2">
      <div className="flex items-end">
        <Image
          alt={"Your avatar"}
          src={avatar}
          height={64}
          width={64}
          className="rounded-full"
        />
        <span className="text-4xl font-medium pl-4">{name}</span>
      </div>
      <div className="lg:self-end text-2xl">
        Balance:{" "}
        <span
          className={`${
            balance >= 0 ? "text-greenContrast" : "text-redContrast"
          }`}
        >
          {currencyFormatter.format(balance)}
        </span>
      </div>
    </div>
  );
};

export default UserHeader;
