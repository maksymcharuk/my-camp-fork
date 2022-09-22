import "./App.css";
import PageTitle from "./components/PageTitle/PageTitle";
import PolaroidPhoto from "./components/PolaroidPhoto/PolaroidPhoto";

import image1 from "./images/image_1.jpg";

function App() {
  return (
    <div className="App">
      <PageTitle></PageTitle>
      <PolaroidPhoto image={image1}></PolaroidPhoto>
    </div>
  );
}

export default App;
