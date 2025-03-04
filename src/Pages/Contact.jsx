import { FaComment, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import ContactImg from "../assets/Images/Contact.jpeg";

const Contact = () => {
    return (
        <>
            <section className="bg-white">
                <div className="container px-6 py-12 mx-auto">
                    <div className="text-center ">
                        <p className="font-medium text-cyan-600">Contact us</p>

                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">We’d love to hear from you</h1>

                        <p className="mt-3 text-gray-500">Chat to our friendly team.</p>
                    </div>

                    <img className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96" src={ContactImg} alt="" />

                    <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
                        <div className="p-4 rounded-lg bg-cyan-50 md:p-6">
                            <span className="inline-block p-3 text-cyan-600 rounded-lg bg-blue-100/80">
                                <FaComment className="w-5 h-5" />
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800">Chat to sales</h2>
                            <p className="mt-2 text-sm text-gray-500">Speak to our friendly team.</p>
                            <p className="mt-2 text-sm text-cyan-600">hello@Learniverse.com</p>
                        </div>

                        <div className="p-4 rounded-lg bg-cyan-50 md:p-6">
                            <span className="inline-block p-3 text-cyan-600 rounded-lg bg-blue-100/80">
                                <FaMapMarkerAlt className="w-5 h-5" />
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800">Visit us</h2>
                            <p className="mt-2 text-sm text-gray-500">Visit our office HQ..</p>
                            <p className="mt-2 text-sm text-cyan-600">123 St., Ahmedabad, 380001</p>
                        </div>

                        <div className="p-4 rounded-lg bg-cyan-50 md:p-6">
                            <span className="inline-block p-3 text-cyan-600 rounded-lg bg-blue-100/80">
                                <FaPhoneAlt className="w-5 h-5" />
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800">Call us</h2>
                            <p className="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
                            <p className="mt-2 text-sm text-cyan-600">+1 (666) 000-0000</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
