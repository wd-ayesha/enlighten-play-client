import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <Features></Features>
           <Review></Review>
           <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;