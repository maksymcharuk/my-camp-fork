import React from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import PolaroidPhoto from "../../components/PolaroidPhoto/PolaroidPhoto";
import Registration from "../../components/Registration/Registration";
import Footer from "../../components/Footer/Footer";

import image1 from "../../images/image_1.jpg";
import CardNavigation from "../../components/CardNavigation/CardNavigation";

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    <div className={styles.Header}>
      <PageTitle
        title="Summer Camp"
        description="Open air Camp for kids"
      ></PageTitle>
      <div className={`${styles.BlockAbsolute} ${styles.PhotoLeft}`}>
        <PolaroidPhoto
          turn="right"
          imageSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62f3c0dc29620b902d03c323_00%401.5x.jpg"
          imageSize="tiny"
          text="July 2021"
        ></PolaroidPhoto>
      </div>
      <div className={`${styles.BlockAbsolute} ${styles.PhotoRight}`}>
        <PolaroidPhoto
          turn="left"
          imageSrc={image1}
          imageSize="tiny"
          text="Autumn 2020"
        ></PolaroidPhoto>
      </div>
    </div>
    <Registration></Registration>
    <div className={styles.Main}>
      {/* Row 1 START */}
      <CardNavigation
        type="wide"
        iconSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
        title="Camp Program"
        titleSize="large"
        description="From wake-up to sleep"
      />
      <PolaroidPhoto
        imageSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62f3c0dc64f6ebe568265a74_01%401.5x.jpg"
        turn="right"
        text="June 2021"
      ></PolaroidPhoto>
      <CardNavigation
        iconRight={true}
        iconSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f1219bd3c443f28ba3f7_streamlinehq-interface-lighting-light-bulb-on-interface-essential-250-3.SVG"
        title="Camp About"
        description="Our Mission and more"
      />
      {/* Row 1 END */}
      {/* Row 2 START */}
      <PolaroidPhoto
        imageSize="square"
        imageSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62f3c2435cba5136722cd946_02.jpg"
        turn="left"
        text="June 2021"
      ></PolaroidPhoto>
      <CardNavigation
        type="large"
        title="What to take with you?"
        titleSize="small"
        description="and what don't take"
      >
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
      </CardNavigation>
      <PolaroidPhoto
        imageSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62f3c2432a9d95354e5a52b8_03.jpg"
        turn="right"
        text="June 2021"
      ></PolaroidPhoto>
      {/* Row 2 END */}
      {/* Row 3 START */}
      <CardNavigation
        iconSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e90516682d7c1ce06ca27b_streamlinehq-travel-map-maps-travel-250-3.SVG"
        title="Camp Location"
        description="In the middle of..."
      ></CardNavigation>
      <PolaroidPhoto
        imageSize="square-small"
        imageSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62f3c0dc741147cc443e9437_04%401.5x.jpg"
        turn="left"
        text="June 2021"
      ></PolaroidPhoto>
      <CardNavigation
        type="circle"
        iconSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8fa9930bdfe5c8b4ef6ad_streamlinehq-interface-user-multiple-interface-essential-250.SVG"
        title="Our Team"
        titleSize="small"
        description="Family"
      ></CardNavigation>
      {/* Row 3 END */}
      {/* Row 4 START */}
      <PolaroidPhoto
        imageSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62f3c244d0d9e138f997abcd_05.jpg"
        turn="right"
        text="June 2021"
      ></PolaroidPhoto>
      <CardNavigation
        type="large"
        title="Photos & Videos"
        description="Like and Retweet"
      >
        <div class="icons">
          <img
            src="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f4544af443508a817eac_streamlinehq-image-camera-1-images-photography-250.SVG"
            loading="lazy"
            alt=""
            class="link-icon"
          />
          <img
            src="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e9086cc3a2bbd6aef41ccd_streamlinehq-computer-logo-youtube-computer-devices-250.SVG"
            loading="lazy"
            alt=""
            class="link-icon"
          />
        </div>
      </CardNavigation>
      <PolaroidPhoto
        imageSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62f3c2449b253566da59adf3_06.jpg"
        turn="left"
        text="June 2021"
      ></PolaroidPhoto>
      {/* Row 4 END */}
      {/* Row 4 START */}
      <CardNavigation
        type="wide"
        iconSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e9862e0dcf927adce2de5c_streamlinehq-phone-telephone-ringing-phone-250.SVG"
        title="Contacts"
        description="Available 24/7"
      />
      <PolaroidPhoto
        imageSize="large"
        imageSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62f3c0dc741147adfd3e943c_07%401.5x.jpg"
        text="June 2021"
      ></PolaroidPhoto>
      <CardNavigation
        iconRight={true}
        iconSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f3a6fcf13cc3390a727e_streamlinehq-shopping-cloth-accessories-tall-hat-money-shopping-250.SVG"
        title="For Partners"
        description="Help & Support"
      />
      {/* Row 4 END */}
    </div>
    <Registration></Registration>
    <Footer></Footer>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
