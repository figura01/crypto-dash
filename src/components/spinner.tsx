import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto 50px auto",
};
const Spinner = ({
  color = "blue",
  size = "150",
}: {
  color?: string;
  size?: string;
}) => {
  return (
    <div className="flex justify-center items-center">
      <BarLoader
        color={color}
        width={size}
        cssOverride={override}
        aria-label="Loading..."
      />
    </div>
  );
};

export default Spinner;
