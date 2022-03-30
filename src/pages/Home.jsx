import Categories from "../components/Categories";
import Deal from "../components/Deal";
import Discount from "../components/Discount";
import Featured from "../components/Featured";
import Latest from "../components/Latest";
import News from "../components/News";
import Slides from "../components/Slides";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Slides />
      <Categories />
      <Featured />
      <Discount />
      <Latest />
      <Deal />
      <Testimonials />
      <News />
    </div>
  );
}

export default Home;
