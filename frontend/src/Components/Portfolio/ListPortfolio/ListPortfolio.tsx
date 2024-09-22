import CardPortfolio from "../CardPortfolio/CardPortfolio";
import "./ListPortfolio.css";

interface Props {
  portfolioValues: string[];
}

const ListPortfolio = ({ portfolioValues }: Props) => {
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
              />
            );
          })}
      </ul>
    </>
  );
};

export default ListPortfolio;
