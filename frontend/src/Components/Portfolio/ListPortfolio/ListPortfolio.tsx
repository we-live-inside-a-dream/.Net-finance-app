import { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import "./ListPortfolio.css";

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((portfolioValues) => {
            return (
              <CardPortfolio
                key={portfolioValues}
                portfolioValue={portfolioValues}
                onPortfolioDelete={onPortfolioDelete}
              />
            );
          })}
      </ul>
    </>
  );
};

export default ListPortfolio;
