import HeroImage from "../../../assets/food4.webp";
function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>About us</h1>
      </div>
    </header>
  );
}

export default Heading;