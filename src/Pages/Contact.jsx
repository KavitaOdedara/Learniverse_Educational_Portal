
import { FaComment, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import ContactImg from "../assets/Images/Contact.jpeg"

const Contact = () => {
    return <>
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center ">
                    <p className="font-medium text-cyan-600 dark:text-blue-400">Contact us</p>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">We’d love to hear from you</h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-400">Chat to our friendly team.</p>
                </div>

                <img className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96" src={ContactImg} alt="" />

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
                    <div className="p-4 rounded-lg bg-cyan-50 md:p-6 dark:bg-gray-800">
                        <span className="inline-block p-3 text-cyan-600 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <FaComment className="w-5 h-5" />
                        </span>

                        <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to sales</h2>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
                        <p className="mt-2 text-sm text-cyan-600 dark:text-blue-400">hello@Learniverse.com</p>
                    </div>

                    <div className="p-4 rounded-lg bg-cyan-50 md:p-6 dark:bg-gray-800">
                        <span className="inline-block p-3 text-cyan-600 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <FaMapMarkerAlt className="w-5 h-5" />
                        </span>

                        <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Visit us</h2>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Visit our office HQ..</p>
                        <p className="mt-2 text-sm text-cyan-600 dark:text-blue-400">123 St., Ahmedabad, 380001</p>
                    </div>

                    <div className="p-4 rounded-lg bg-cyan-50 md:p-6 dark:bg-gray-800">
                        <span className="inline-block p-3 text-cyan-600 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <FaPhoneAlt className="w-5 h-5" />
                        </span>

                        <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Call us</h2>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                        <p className="mt-2 text-sm text-cyan-600 dark:text-blue-400">+1 (666) 000-0000</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Contact;
