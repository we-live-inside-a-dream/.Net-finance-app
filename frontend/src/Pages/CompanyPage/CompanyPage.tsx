import { useParams } from "react-router";
import "./CompanyPage.css";
import { useEffect, useState } from "react";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";

interface Props {}

const CompanyPage = (props: Props) => {
  const [company, setCompany] = useState<CompanyProfile>();

  let { ticker } = useParams();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      if (typeof result !== "string") {
        setCompany(result?.data[0]);
      }
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div>{company.companyName}</div>
      ) : (
        <div>Company not found!</div>
      )}
    </>
  );
};

export default CompanyPage;
