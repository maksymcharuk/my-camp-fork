import "./App.css";
import PageTitle from "./components/PageTitle/PageTitle";
import PolaroidPhoto from "./components/PolaroidPhoto/PolaroidPhoto";

import image1 from "./images/image_1.jpg";

function App() {
  return (
    <div className="App">
      <PageTitle
        title="Summer Camp"
        description="Open air Camp for kids"
      ></PageTitle>
      <PolaroidPhoto imageSrc={image1} text="Autumn 2020"></PolaroidPhoto>
    </div>
  );
}

export default App;
