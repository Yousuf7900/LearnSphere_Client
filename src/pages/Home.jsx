import Carousel from "./HomePageContent/Carousel";
import HowItWorks from "./HomePageContent/HowItWorks";
import LanguageCategories from "./HomePageContent/LanguageCategories";
import Stats from "./HomePageContent/Stats";
import Testimonials from "./HomePageContent/Testomonials";
import TopTutors from "./HomePageContent/TopTutors";

const Home = () => {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <Carousel></Carousel>
                <Stats></Stats>
                <LanguageCategories></LanguageCategories>
                <TopTutors></TopTutors>
                <HowItWorks></HowItWorks>
                <Testimonials></Testimonials>
            </div>
        </section>
    );
};

export default Home;