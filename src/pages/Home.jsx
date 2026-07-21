import WelcomeBanner from "../components/WelcomeBanner";
import ActivitySummary from "../components/ActivitySummary";
import ShopByCategory from "../components/ShopByCategory";
import TopRated from "../components/TopRated";
import NewArrivals from "../components/NewArrivals";
import Feature from "../components/Feature";

const Home = () => {
  return (
    <div>
      <WelcomeBanner />
      <ActivitySummary />
      <ShopByCategory />
      <TopRated />
      <NewArrivals />
      <Feature />
    </div>
  );
};

export default Home;
