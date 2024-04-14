import Progress2 from "./Progress2";
import "./Streamline.css";
import card1 from "./images/Card.png";
import card2 from "./images/Card2.png";
const Streamline = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <div className="border d-inline rounded-pill p-1 fs-6 fw-normal">
              Everything you need
            </div>
            <div className="h1 text-center mt-4">
              Streamlined for easy
              <br />
              management
            </div>
            <p className="d-inline para2 fs-6">
              Enjoy customizable lists, team work tools, and smart
              <br /> tracking all in one place. Set tasks, get reminders, and
              <br /> see your progress simply and quickly.
            </p>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md">
              <img src={card1} className="img-fluid" alt="Card 1" />
            </div>
            <div className="col-md">
              <img src={card2} className="img-fluid" alt="Card 2" />
            </div>
          </div>
        </div>
      </div>
      <Progress2></Progress2>
    </div>
  );
};

export default Streamline;
