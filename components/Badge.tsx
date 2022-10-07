import cn from "classname";

type Props = {
  variant: "red" | "green";
  children: React.ReactNode;
};

const Badge: React.FC<Props> = ({ children, variant }) => {
  const classes = cn(
    "inline-flex items-center px-1.5 py-sm border rounded-full text-sm font-medium",
    {
      "border-red-500 bg-red-50 text-red-600": variant === "red",
      "border-green-500 bg-green-50 text-green-600": variant === "green",
    }
  );

  return <div className={classes}>{children}</div>;
};

export default Badge;
