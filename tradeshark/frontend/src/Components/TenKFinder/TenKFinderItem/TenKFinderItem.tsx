import { Link } from "react-router-dom";
import { CompanyTenK } from "../../../company";
import "./TenKFinderItem.css";

interface Props {
  tenK: CompanyTenK;
}

const TenKFinderItem = ({ tenK }: Props) => {
  const fillingDate = new Date(tenK.fillingDate).getFullYear();
  return (
    <Link
      reloadDocument
      to={tenK.finalLink}
      type="button"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-lightGreen border rounded-md hover:opacity-70"
    >
      {" "}
      10K - {tenK.symbol} - {fillingDate}
    </Link>
  );
};

export default TenKFinderItem;
