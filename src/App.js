import "./App.css";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";

const Movies = [
  {
    id: 1,
    title: "Avatar 1",
    rating: 4,
    img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
  },
  {
    id: 2,
    title: "Kunfu panda",
    rating: 5,
    img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 3,
    title: "Naruto Shipuden",
    rating: 5,
    img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
  },
  {
    id: 4,
    title: "Hobbit",
    rating: 5,
    img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {Movies.map((ele) => {
          return (
            <Content title={ele.title} rating={ele.rating} img={ele.img} />
          );
        })}
      </main>
    </div>
  );
}

export default App;
