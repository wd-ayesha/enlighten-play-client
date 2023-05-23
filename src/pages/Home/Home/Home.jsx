import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <Review></Review>
           <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;