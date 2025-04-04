import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import SpotlightCard from './SpotlightCard'
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const notify = () => toast("message sent successfully!");
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            toast.error("All fields are required!");
            return;
        }
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address!");
            return;
        }
        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_h9qnbvf';
        const templateId = 'template_ww6b85t';
        const publicKey = 'cV4QE8ayHhH7Z-Rov';

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Abhishek Verma',
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
                notify();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                toast.error("Failed to send message. Please try again later.");
            });
    }
    return (
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(29, 5, 253, 0.1)">
            <div id='Contact' className='flex flex-col items-center gap-4 relative py-6'>
                <h1 className='py-4 font-bold text-2xl text-[#725ced] underline text-center'>Contact me</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-white border-2 border-zinc-600 rounded-xl p-4 bg-zinc-950 shadow-md shadow-[#725ced]'>
                    <input required className='border-2 border-zinc-600 text-white rounded-xl px-2 py-1 text-center' placeholder='Name' type="text" name="text" id="name" value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <input required className='border-2 border-zinc-600 text-white rounded-xl px-2 py-1 text-center' placeholder='E-mail' type="email" name="email" id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input required className='border-2 border-zinc-600 text-white rounded-xl px-2 py-1 text-center' placeholder='Message' type="text" name="message" id="message" value={message}
                        onChange={(e) => setMessage(e.target.value)} />

                    <button type='submit' onClick={notify}>
                            <a href="#_" className="relative items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#725ced] opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out">Send</span>
                                <span className="absolute inset-0 border-2 border-white/40 rounded-full"></span>
                            </a>
                    </button>
                </form>
                <ToastContainer />
            </div>
        </SpotlightCard>
    )

}
export default Contact
