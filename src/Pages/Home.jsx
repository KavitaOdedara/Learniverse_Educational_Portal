import { Link } from "react-router-dom";
import Hero from "../assets/Images/Hero.jpg";
import FeatureCard from "../components/FeatureCard";
import PopularCourses from "../components/PopularCourses";


function Home() {
    return <>
        <section class="text-gray-600 body-font md:m-20 lg:m-0">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:p-10 lg:mb-20 ">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">"Connecting Minds
                        <br class="hidden lg:inline-block" /> Across the Learning Universe"
                    </h1>
                    <p class="mb-8 leading-relaxed">Discover our education portal,designed to connect minds accross the universe. Explore diverse resources and courses, fostering collaboration and growth to empower every learner on their unique journey.</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded text-lg">
                           <Link to='/about'>
                            Read More
                           </Link>
                            </button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:mb-20">
                    <img class="object-cover object-center rounded w-full h-auto  lg:p-7" alt="hero" src={Hero} />
                </div>
            </div>
        </section>

        {/* Features section*/}
        
            <FeatureCard></FeatureCard>

        {/* Popular courses section */}
     
            <PopularCourses></PopularCourses>    
    </>
}

export default Home;