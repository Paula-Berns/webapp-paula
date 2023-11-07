import "./Card.css";

export function Card({ logo, titel, link }) {
  return (
    <div className="fullCard">
      <h1 className="cardTitel">{titel}</h1>
      <a className="cardLink" href={link}>
        Link to {titel} page
      </a>
      <img className="cardLogo" src={logo} />
    </div>
  );
}
