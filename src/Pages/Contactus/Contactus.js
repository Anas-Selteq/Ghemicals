import React, { useRef, useState } from 'react'
import "./Contactus.css"
import Header from '../../Components/Header/Header'
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import Footer from '../../Components/Footer/Footer';

function Contactus() {
    const servicesRef = useRef(null);
    const productsRef = useRef(null);
    const contactRef = useRef(null);
    const [toggler, setToggler] = useState(false)

    const TogglerNew = () => {
        setToggler(!toggler)
    }


    const handleScrollToSection = (section) => {
        if (section === 'services') {
            servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
            TogglerNew();
        } else if (section === 'portfolio') {
            productsRef.current?.scrollIntoView({ behavior: 'smooth' });
            TogglerNew();
        }
        else if (section === 'contact') {
            contactRef.current?.scrollIntoView({ behavior: 'smooth' });
            TogglerNew();
        }
    };
    return (
        <div className='col-md-12 background_for_contact'>
            <Header onNavigate={handleScrollToSection} TogglerNew={TogglerNew} toggler={toggler} />
            <div className='col-md-12 '>
                <div className='row'>
                    <div className='col-md-6 m-auto'>
                        <div className='col-md-12 px-5 py-4'>
                            <h2>Contact Us</h2>
                            <p className='m-0 p-0'>
                                At Gemicals, we’re always here to help. Whether you need product information, have a technical question, or are ready to request a quote, our team of experts is just a message or phone call away. Let’s work together to find the right chemical solutions for your business.
                            </p>
                            <h2 className='pt-2'>Get in Touch with Us</h2>
                            <p className='m-0 p-0'>
                                At Gemicals, we’re always here to help. Whether you need product information, have a technical question, or are ready to request a quote, our team of experts is just a message or phone call away. Let’s work together to find the right chemical solutions for your business.
                            </p>
                            <div className='col-md-12 '>
                                <a className='text_dec_stop text_new_d' href="tel:+966532776424"> <p className='m-0 p-0 pt-2'> <FaPhoneAlt /> +966 53 277 6424</p> </a>
                                <a className='text_dec_stop text_new_d' href="mailto:info@gemicals.com">   <p className='m-0 p-0 pt-2'> <IoMail /> info@gemicals.com</p> </a>
                                <a className='text_dec_stop text_new_d' target="_blank" href="https://www.google.com/maps?ll=21.481954,39.210108&z=15&t=m&hl=en&gl=US&mapclient=embed&q=21%C2%B028%2755.0%22N+39%C2%B012%2745.7%22E+21.481944,+39.212694@21.4819444,39.2126944"> <p className='m-0 p-0 pt-2'> <FaLocationDot /> JINC3475
                                </p> </a>
                            </div>
                            <h2 className='pt-2 pb-2'>Find us on map</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3712.6574328185025!2d39.21010757526909!3d21.481954080283202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI4JzU1LjAiTiAzOcKwMTInNDUuNyJF!5e0!3m2!1sen!2s!4v1731845523830!5m2!1sen!2s" style={{ height: "100%", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>

                    </div>
                    <div className='col-md-6 py-5 px-5 '>
                        <div className='col-md-12 backgroud_contact pt-4  px-4'>
                            <h2 className='pb-1 mb-0'>Fill up the form to contact us!</h2>
                            <p className='m-0 p-0 pb-3'>
                                Don’t hesitate to reach out. Our team is ready to assist you with product recommendations, technical support, or any other inquiries. We look forward to working with you and ensuring your business has the chemical solutions it needs to succeed.
                            </p>
                            <div className='col-md-12 pt-2'>
                                <input className='form-control form-control-lg border_for_lg' placeholder='Your Company Name' />
                            </div>
                            <div className='row '>
                                <div className='col-md-6 pt-3 '>
                                    <input className='form-control form-control-lg border_for_lg' placeholder='Industry' />
                                </div>
                                <div className='col-md-6 pt-3'>
                                    <input className='form-control form-control-lg border_for_lg' placeholder='Your Name' />
                                </div>
                            </div>
                            <div className='col-md-12 pt-3'>
                                <input className='form-control form-control-lg border_for_lg' placeholder='Position' />
                            </div>
                            <div className='row '>
                                <div className='col-md-6 pt-3 '>
                                    <input className='form-control form-control-lg border_for_lg' placeholder='Email Address' />
                                </div>
                                <div className='col-md-6 pt-3'>
                                    <input className='form-control form-control-lg border_for_lg' placeholder='Telephone No' />
                                </div>
                            </div>
                            <div className='col-md-12 pt-3'>
                                <textarea className='form-control form-control-lg border_for_lg' placeholder='Message' ></textarea>
                            </div>
                            <div className='col-md-12 mt-3 pb-5'>
                                <span className='btn btn-light btn-lg button_cutome1 px-5 '>
                                    Submit
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contactus