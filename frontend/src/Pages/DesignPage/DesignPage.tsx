import RatioList from "../../Components/RatioList/RatioList";
import Table from "../../Components/Table/Table";
import "./DesignPage.css";

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>TradeShark Design Page</h1>
      <h2>
        This is TradeShark's design page. This is where we will house various
        design aspects of the app
      </h2>
      <RatioList />
      <Table />
    </>
  );
};

export default DesignPage;
