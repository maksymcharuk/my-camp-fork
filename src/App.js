import "./App.css";
import PageTitle from "./components/PageTitle/PageTitle";
import PolaroidPhoto from "./components/PolaroidPhoto/PolaroidPhoto";
import Registration from "./components/Registration/Registration";

import image1 from "./images/image_1.jpg";

function App() {
  return (
    <div className="App">
      <PageTitle
        title="Summer Camp"
        description="Open air Camp for kids"
      ></PageTitle>
      <PolaroidPhoto imageSrc={image1} text="Autumn 2020"></PolaroidPhoto>
      <Registration></Registration>
    </div>
  );
}

export default App;
