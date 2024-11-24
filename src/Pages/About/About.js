import React, { useRef, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { LiaIndustrySolid } from 'react-icons/lia'
import { FaArrowRight } from 'react-icons/fa'

function About() {
    const [toggler, setToggler] = useState(false)

    const TogglerNew = () => {
        setToggler(!toggler)
    }

    const servicesRef = useRef(null);
    const productsRef = useRef(null);
    const contactRef = useRef(null);

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
        <div className='col-md-12 overcontrol'>
            <div className='col-md-12 pb-4'>
                <Header onNavigate={handleScrollToSection} TogglerNew={TogglerNew} toggler={toggler} />


                <div className='col-md-12 padding_top_bottom_left_right_products mb-5 pt-5'>
                    <div className='row'>
                        <div className='col-md-6 m-auto '>
                            <h2><b>About Us</b></h2>
                            <p className='font_for_p'>
                                With 30+ years of experience in the industry, we have grown quite impressively by becoming the leading chemical distributor providing solutions for users of industrial and specialty chemicals.
                            </p>
                            <p className='font_for_p'>
                                We are known to be reliable chemical partners to our customers by providing premium quality chemical products, innovative solutions and above all, adopting the latest technologies and continuously improving our processes through innovation.
                            </p>
                            <p className='font_for_p'>
                                We are a one stop chemical distributor offering a wide range of chemicals. We are a leading Chemical Distributor, supplying a variety of products for all of your needs.
                            </p>
                            <p className='font_for_p'>
                                <b><i>"Your Growth Starts Here—Send Us Your RFQ and Watch Your Business Thrive!"</i></b>
                            </p>
                        </div>
                        <div className='col-md-6 m-md-auto   text-center'>
                            <img className='img-fluid border_for_image' src='/images/g12.jpg' />
                        </div>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-md-6 m-md-auto  '>
                            <img className='img-fluid border_for_image1' src='/images/g8.jpg' />
                        </div>
                        <div className='col-md-6 m-auto '>

                            <p className='font_for_p'>
                                Our team works around the clock to guarantee your satisfaction and is available to help you make the best product decisions for whatever sort of application you may be working with.
                            </p>
                            <p className='font_for_p'>
                                Our goal is to continue being your trusted partner in enhancing quality and cost performance while ensuring extensive expertise across logistical, technical, and marketing services.
                            </p>
                            <p className='font_for_p'>
                                Through close collaborations with our committed partners and our proactive sourcing skills, we provide a broad range of products, innovative services, and customized solutions to meet all your unique requirements.
                            </p>
                            <p className='font_for_p'>
                                <b><i>"Ready to Rock Your Industry? Contact Us Today and Let’s Get Started!"</i></b>
                            </p>
                        </div>

                    </div>
                    <div className='row pt-5'>
                        <div className='col-md-6 m-auto '>
                            <h2><b>Company Overview</b></h2>
                            <p className='font_for_p'>
                                Gemicals began as a small regional supplier of Chloro Alkali chemicals. Over the years, we have expanded our operations to become a market leader, serving industries from coating manufacturers to refining heavy hydrocarbons and beyond. Our growth has been driven by our unwavering commitment to quality and customer satisfaction.
                            </p>
                            <p className='font_for_p'>
                                Our mission is to provide reliable, high-quality chemical products and services that exceed our customers’ expectations. We strive to be a trusted partner in every industry we serve, fostering long-term relationships based on integrity and mutual success.
                            </p>
                            <p className='font_for_p'>
                                To be the most trusted partner in the chemical distribution industry, driving innovation and sustainability through responsible practices and cutting-edge solutions.
                            </p>
                            <p className='font_for_p'>
                                <b><i>"Your Reliable Source for Premium Chemicals—Let’s Talk Solutions! "</i></b>
                            </p>
                        </div>
                        <div className='col-md-6 m-md-auto   text-center'>
                            <img className='img-fluid border_for_image' src='/images/g11.jpg' />
                        </div>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-md-6 m-md-auto  '>
                            <img className='img-fluid border_for_image1' src='/images/g2.jpg' />
                        </div>
                        <div className='col-md-6 m-auto '>
                            <h2><b>Why GEMICALS?</b></h2>
                            <p className='font_for_p'>
                                <ul>
                                    <li>Diverse Product Selection</li>
                                    <li>Tailored Solutions</li>
                                    <li>Top-Quality Assurance</li>
                                    <li>On-Time Delivery</li>
                                    <li>Extensive Product Portfolio</li>
                                    <li>Reliability</li>
                                    <li>Expert Guidance</li>
                                    <li>Competitive Pricing</li>
                                </ul>
                            </p>

                        </div>

                    </div>

                </div>

                


            </div>
            <Footer />
        </div>
    )
}

export default About