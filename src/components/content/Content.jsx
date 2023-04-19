import "./Content.css";
import { Button } from "../../UIhelp/Button";

export const Content = (props) => {
  return (
    <div className="main-div">
      <ul className="ul">
        <li className="li">
          <div className="div">
            <img src={props.img} />
          </div>
          <h3>{props.title}</h3>

          <div className="block">
            <span>{props.rating}/5 starts</span>
            <Button width="130px" marginLeft="40px" backgroundColor="red">
              DELETE
            </Button>
            <Button width="130px" marginLeft="40px" backgroundColor="blue">
              EDIT
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};
