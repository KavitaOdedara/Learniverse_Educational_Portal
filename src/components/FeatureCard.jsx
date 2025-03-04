import { GiBookCover } from "react-icons/gi";
import { IoMdDocument } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";


const FeatureCard = () => {
    return <>
    <section className="m-0 sm:m-20">
        <div className="flex justify-center mb-20">
            <h1 class="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900 ">Elevate Your <span className="text-cyan-600">Journey</span> With Us!</h1>
        </div>
        <div class="w-full bg-white pt-12 p-4">
            <div class="grid gap-14 md:grid-cols-3 md:gap-5 ">
                <div class="rounded-xl bg-white p-6 text-center shadow-xl border-2 border-cyan-600">
                    <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-cyan-600 shadow-lg shadow-cyan-500/40">
                        <GiBookCover class="h-8 w-8 text-white"></GiBookCover>
                    </div>
                    <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">Learn at Your Own Pace</h1>
                    <p class="px-4 text-gray-500">Explore a variety of courses across multiple subjects that you can complete at your convenience. learn at anytime anywhere.</p>
                </div>
                <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl border-2 border-cyan-600">
                    <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-cyan-600 shadow-cyan-500/40">
                        <IoCheckmarkCircleSharp class="h-8 w-8 text-white" ></IoCheckmarkCircleSharp>
                    </div>
                    <h1 class="text-darken mb-3 text-xl font-medium lg:px-14 ">Test Your Knowledge</h1>
                    <p class="px-4 text-gray-500">Challenge yourself with interactive quizzes after each lesson to assess your understanding and track your progress.</p>
                </div>
                <div data-aos-delay="300" class="rounded-xl bg-white p-6 text-center shadow-xl border-2 border-cyan-600">
                    <div
                        class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-cyan-600 shadow-cyan-500/40">
                       <IoMdDocument class="h-8 w-8 text-white"></IoMdDocument>
                    </div>
                    <h1 class="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">Access Learning Resources</h1>
                    <p class="px-4 text-gray-500">Browse through a wide range of supplementary learning materials including PDFs and additional references to enhance your studies.</p>
                </div>
            </div>
        </div >
        </section>
    </>
}

export default FeatureCard;