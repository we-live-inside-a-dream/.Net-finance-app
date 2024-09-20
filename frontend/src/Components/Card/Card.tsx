import "./Card.css";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="card">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png?format=1000w"
        alt="Image"
      />
      <div className="details">
        <h2>APPL</h2>
        <p>$110</p>
      </div>
      <p className="info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        doloremque.
      </p>
    </div>
  );
};

export default Card;
