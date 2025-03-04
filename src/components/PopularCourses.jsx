import { Link } from 'react-router-dom';
import AppDev from '../assets/Images/AppDev.jpg';
import WebDev from '../assets/Images/WebDev.jpg';
import CloudComp from '../assets/Images/CloudComp.jpg';



const PopularCourses = () => {

    const loggedInUser = localStorage.getItem("loggedInUser");

    return <>
        <section className=" mt-40">
            <div className="flex justify-center mb-20">
                <h1 class="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900 "><span className="text-cyan-600">Popular</span> Courses</h1>
            </div>
            <div class="flex justify-center gap-14 flex-wrap">
                <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 ">
                    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={WebDev} className='h-full w-full' />
                    </div>
                    <div class="p-4">
                        <div class="flex items-center mb-2">
                            <h6 class="text-slate-800 text-xl font-semibold">
                                Web Development
                            </h6>

                            <div class="flex items-center gap-0 5 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5 text-yellow-600">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-slate-600 ml-1.5">Free</span>
                            </div>
                        </div>

                        <p class="text-slate-600 leading-normal font-light">
                           Master the art of building modern, responsive websites with our Web Development course!
                        </p>
                    </div>
                    <div class="px-4 pb-4 pt-0 mt-2">
                        <button class="w-full rounded-md bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-600 focus:shadow-none active:bg-cyan-500 hover:bg-cyan-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
                        >
                            <Link to='/webDev'>Learn More</Link>
                        </button>
                    </div>
                </div>
                <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={CloudComp} className='h-full w-full' />
                    </div>
                    <div class="p-4">
                        <div class="flex items-center mb-2">
                            <h6 class="text-slate-800 text-xl font-semibold">
                                Cloud Computing
                            </h6>

                            <div class="flex items-center gap-0 5 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5 text-yellow-600">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-slate-600 ml-1.5">Free</span>
                            </div>
                        </div>

                        <p class="text-slate-600 leading-normal font-light">
                            Unlock the potential of scalable and secure technologies with our Cloud Computing course!
                        </p>
                    </div>
                    <div class="px-4 pb-4 pt-0 mt-2">
                        <button class="w-full rounded-md bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-600 focus:shadow-none active:bg-cyan-500 hover:bg-cyan-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            <Link to='/cloudcomp'>Learn More</Link>
                        </button>
                    </div>
                </div>
                <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={AppDev} className='h-full w-full' />
                    </div>
                    <div class="p-4">
                        <div class="flex items-center mb-2">
                            <h6 class="text-slate-800 text-xl font-semibold">
                                App Develpoment
                            </h6>

                            <div class="flex items-center gap-0 5 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5 text-yellow-600">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-slate-600 ml-1.5">Free</span>
                            </div>
                        </div>

                        <p class="text-slate-600 leading-normal font-light">
                            Learn to create powerful, user-friendly mobile and desktop apps with our App Development course!
                        </p>
                    </div>
                    <div class="px-4 pb-4 pt-0 mt-2">
                        <button class="w-full rounded-md bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-600 focus:shadow-none active:bg-cyan-500 hover:bg-cyan-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            <Link to='/appDev'>Learn More</Link>
                        </button>
                    </div>
                </div>
                
            </div>
        </section>
    </>
}

export default PopularCourses;