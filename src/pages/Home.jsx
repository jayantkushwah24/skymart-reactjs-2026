import WelcomeBanner from "../components/WelcomeBanner";
import ActivitySummary from "../components/ActivitySummary";
import ShopByCategory from "../components/ShopByCategory";
import TopRated from "../components/TopRated";
import NewArrivals from "../components/NewArrivals";
import Feature from "../components/Feature";

const Home = () => {
  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <ActivitySummary />
      <ShopByCategory />
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <TopRated />
        <NewArrivals />
      </div>
      <Feature />
    </div>
  );
};

export default Home;
