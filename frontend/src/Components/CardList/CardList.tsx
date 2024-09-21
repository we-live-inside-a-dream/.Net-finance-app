import React from "react";
import Card from "../Card/Card";
import "./CardList.css";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResult: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResult }: Props): JSX.Element => {
  return (
    <>
      {searchResult.length > 0 ? (
        searchResult.map((result) => {
          return (
            <Card id={result.symbol} key={uuidv4()} searchResult={result} />
          );
        })
      ) : (
        <h1>No Result</h1>
      )}
    </>
  );
};

export default CardList;
