import React from 'react'

export const metadata = {
    title: "Dragon News - Contact Us",
};

const ContactUsPage = () => {
    return (
        <div className="container mx-auto px-4 py-12">

            {/* Page Title */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
                <p className="text-gray-500">
                    Have questions, news tips, or feedback? We'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">

                {/* Contact Info */}
                <div className="space-y-6 bg-base-200 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

                    <div>
                        <p className="font-semibold">📍 Office Address</p>
                        <p>The Daily News HQ, Dhaka, Bangladesh</p>
                    </div>

                    <div>
                        <p className="font-semibold">📞 Phone</p>
                        <p>+880 1751389425</p>
                    </div>

                    <div>
                        <p className="font-semibold">📧 Email</p>
                        <p>Shanto2575@gmail.com</p>
                    </div>

                    <div>
                        <p className="font-semibold">🕒 Working Hours</p>
                        <p>Sunday - Thursday : 9:00 AM - 6:00 PM</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-base-200 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">Send Message</h2>

                    <form className="space-y-5">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="input input-bordered w-full"
                            required
                        />

                        <textarea
                            placeholder="Your Message"
                            className="textarea textarea-bordered w-full h-32"
                            required
                        ></textarea>

                        <button className="btn btn-primary w-full text-lg">
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactUsPage