import Navbar from "../../components/navbar/navbar";
import "./homePage.css";

function HomePage() {
  return (
    <div>
      <div id="navbar"><Navbar/></div>
      <div id="homeMain">
        <div id="homeImage">

        </div>
        <div id="homeAbout"></div>
        <div id="homeFounder"></div>
        <div id="homeUsers"></div>
      </div>
      <div id="homefooter"></div>
    </div>
  );
}

export default HomePage;
