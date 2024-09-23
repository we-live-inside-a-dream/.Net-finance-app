import RatioList from "../../Components/RatioList/RatioList";
import Table from "../../Components/Table/Table";
import { testIncomeStatementData } from "../../Components/Table/testData";
import "./DesignPage.css";

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>TradeShark Design Page</h1>
      <h2>
        This is TradeShark's design page. This is where we will house various
        design aspects of the app
      </h2>
      <RatioList data={testIncomeStatementData} config={tableConfig}/>
      <Table />
    </>
  );
};

export default DesignPage;
