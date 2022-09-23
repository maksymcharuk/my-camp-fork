import "./App.css";
import Footer from "./components/Footer/Footer";
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

      {/* CardNavigation START */}
      <a href="/what-to-take" class="link large w-inline-block">
        <div class="icons">
          <img
            src="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f93e7adb7f86c300110c_streamlinehq-shopping-catergories-shirt-money-shopping-250.SVG"
            loading="lazy"
            alt=""
            class="link-icon"
          />
          <div>+</div>
          <img
            src="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f73412308d6f1622f269_streamlinehq-interface-help-customer-support-5-interface-essential-250-2.SVG"
            loading="lazy"
            alt=""
            class="link-icon"
          />
          <div>→</div>
          <img
            src="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8fb91f9a283de58e0318d_streamlinehq-travel-airport-baggage-maps-travel-250-2.SVG"
            loading="lazy"
            alt=""
            class="link-icon"
          />
        </div>
        <div class="link-content">
          <h4>What to take with you?</h4>
          <p class="link-description">and what don't take</p>
        </div>
      </a>
      {/* CardNavigation END */}
      <Footer></Footer>
    </div>
  );
}

export default App;
