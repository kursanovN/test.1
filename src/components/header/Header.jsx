import "./Header.css";
import { Button } from "../../UIhelp/Button";

export const Header = () => {
  return (
    <div className="header">
      <h1>Favorite Movies</h1>
      <Button>ADD MOVIE</Button>
    </div>
  );
};
