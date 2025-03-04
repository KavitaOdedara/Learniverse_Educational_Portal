import AboutImg from "../assets/Images/About.jpg"

const About = () => {
    return <>
        <div class="sm:flex items-center justify-center max-w-screen-xl m-10" >
            <div class="sm:w-2/5 p-10">
                <div class="image object-center text-center">
                    <img className="rounded-xl" src={AboutImg}/>
                </div>
            </div>
            <div class="sm:w-1/2 p-5">
                <div class="text">
                    <span class="text-gray-500 border-b-2 border-cyan-600 uppercase">About us</span>
                    <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-cyan-600">Our Company</span>
                    </h2>
                    <p class="text-gray-700">
                    Learniverse is a comprehensive educational platform designed to empower learners with high-quality, text-based resources focused on simplifying complex concepts. Whether you're a beginner or a working professional enhancing your skills, Learniverse offers structured courses and practical learning paths tailored to industry needs. Our mission is to make quality education accessible to everyone, helping individuals achieve their career goals and thrive in the tech world
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default About;