import React, { useEffect, useRef, useState } from 'react'
import "./Services.css"
import Header from '../../Components/Header/Header';
import { LiaIndustrySolid } from 'react-icons/lia';
import { FaArrowRight, FaRegQuestionCircle, FaShip, FaWarehouse } from 'react-icons/fa';
import { PiAirplaneTaxiingDuotone } from 'react-icons/pi';
import { IoHandLeftOutline } from 'react-icons/io5';
import { BsDistributeVertical } from 'react-icons/bs';
import { MdBrandingWatermark, MdFormatColorFill, MdOutlineSupportAgent } from 'react-icons/md';
import { GiChemicalDrop, GiNuclearWaste } from 'react-icons/gi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { FaBoxesPacking } from 'react-icons/fa6';
import Footer from '../../Components/Footer/Footer';
import { Navigate } from 'react-router-dom';

function Services() {
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

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    const productsbutton = () => {
        Navigate("/products")
    }
    return (
        <div className='col-md-12'>
            <Header onNavigate={handleScrollToSection} TogglerNew={TogglerNew} toggler={toggler} />
            <div className='col-md-12 padding_top_bottom_left_right_products mb-5 pt-5'>
                <div className='row'>
                    <div className='col-md-6 m-auto '>
                        <h2><b>Our <span className='color_towerld'>Services</span></b></h2>
                        <p className='font_for_p'>
                            We don’t just provide chemicals – we deliver end-to-end solutions designed to streamline your supply chain and ensure seamless delivery, storage, and management of all your chemical needs. Our comprehensive range of services is tailored to make your experience effortless, from product sourcing and import to technical support and custom solutions.
                        </p>
                    </div>
                    <div className='col-md-6 m-md-auto   text-center'>
                        <img className='img-fluid border_for_image' src='/images/g12.jpg' />
                    </div>
                </div>
                <div className='col-md-12  mt-md-5'>
                    <div className='row'>
                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><FaShip /></p>
                                <h5 className='pt-1'><b>Shipment and Import/Export Handling</b></h5>
                                <ul>
                                    <li>
                                        Global Shipping Expertise: With a robust global network, we manage the entire import and export process, ensuring your chemicals are transported safely, securely, and in compliance with all international regulations.
                                    </li>
                                    <li>
                                        Seamless Customs Clearance: Our experienced team handles all aspects of customs clearance, making sure your shipments move swiftly through ports without delays, ensuring timely delivery.
                                    </li>
                                </ul>

                            </div>
                        </div>


                        <div className='col-md-12 mt-3  text-start'>
                            <div className='col-md-12 padding_top_card00 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><PiAirplaneTaxiingDuotone /></p>
                                <h5 className='pt-1'><b>Custom Clearance and Regulatory Compliance</b></h5>
                                <ul>
                                    <li>
                                        Hassle-Free Import/Export Documentation: We navigate the complex paperwork and procedures involved in shipping chemicals internationally, including tariffs, duties, and taxes, so you can focus on your business.
                                    </li>
                                    <li>
                                        Compliance with Local and International Laws: We ensure that all products adhere to local, national, and international regulations, including hazardous materials protocols, ensuring safe and legal distribution.
                                    </li>
                                </ul>

                            </div>
                        </div>


                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><FaWarehouse /></p>
                                <h5 className='pt-1'><b>Storage and Warehousing Solutions</b></h5>
                                <ul>
                                    <li>
                                        Secure and Compliant Storage Facilities: We offer state-of-the-art warehousing solutions for all types of chemicals, including hazardous materials, ensuring safe storage that complies with environmental and safety regulations.
                                    </li>
                                    <li>
                                        Temperature-Controlled Storage: For sensitive products that require special conditions, we provide temperature-controlled and humidity-monitored storage facilities to preserve product integrity.
                                    </li>
                                    <li>
                                        Real-Time Inventory Management: Our advanced inventory tracking systems provide you with real-time access to stock levels, helping you manage your supply chain more efficiently.
                                    </li>
                                </ul>

                            </div>
                        </div>


                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><IoHandLeftOutline /></p>
                                <h5 className='pt-1'><b>Handling and Transportation</b></h5>
                                <ul>
                                    <li>
                                        Safe and Specialized Chemical Handling: Our team is fully trained in the safe handling, packaging, and transportation of chemicals, ensuring that all materials are handled according to the highest safety standards.
                                    </li>
                                    <li>
                                        Hazardous Material Handling Expertise: We are well equipped to handle hazardous materials with precision and care, following all regulations related to the safe handling, labeling, and transportation of dangerous goods.
                                    </li>
                                </ul>

                            </div>
                        </div>


                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><BsDistributeVertical /></p>
                                <h5 className='pt-1'><b>Logistics and Distribution</b></h5>
                                <ul>
                                    <li>
                                        Efficient and Timely Deliveries: We operate a fast, reliable distribution network that ensures timely delivery of chemicals to your location, no matter where you are.
                                    </li>
                                    <li>
                                        Optimized Routes and Freight Services: Using advanced logistic management systems, we optimize delivery routes to minimize costs and reduce transit times, getting your products to you faster.
                                    </li>
                                    <li>
                                        Bulk and Custom Packaging: We offer flexible packaging options, from bulk shipments to small custom-packaged solutions, depending on your requirements. In general, the standard packaging include drums, intermediate bulk containers (IBCs), jerry cans, bottles, bags (10Kg, 25 Kg, 50 Kg, 1,000 Kg), and specialized containers designed for specific chemical properties.
                                    </li>
                                </ul>

                            </div>
                        </div>


                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><MdOutlineSupportAgent /></p>
                                <h5 className='pt-1'><b>Technical Support and Consultation</b></h5>
                                <ul>
                                    <li>
                                        Expert Product Knowledge: Our in-house team of technical experts provides support on product selection, application, and optimization to ensure that you’re using the right chemical solutions for your specific needs.
                                    </li>
                                    <li>
                                        On-Site and Remote Technical Assistance: We offer both remote and on-site technical support to help troubleshoot any issues or optimize chemical processes for better performance.
                                    </li>
                                    <li>
                                        Training and Safety Guidance: We can provide training for your staff on safe chemical handling, storage, and usage to ensure compliance with safety standards and to minimize workplace risks.</li>
                                </ul>

                            </div>
                        </div>


                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><GiChemicalDrop /></p>
                                <h5 className='pt-1'><b>Custom Chemical Blending and Formulation</b></h5>
                                <ul>
                                    <li>
                                        Tailored Chemical Solutions: If you need a unique formulation, we offer custom blending services that allow us to create specific chemical products suited to your process requirements. From custom concentrations to proprietary blends, we’re ready to meet your exact needs.
                                    </li>
                                    <li>
                                        Small Batch and Large-Scale Production: Whether you need a small, customized batch or large-scale chemical production, our flexible manufacturing capabilities can accommodate any volume.
                                    </li>
                                </ul>

                            </div>
                        </div>


                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><GiNuclearWaste /></p>
                                <h5 className='pt-1'><b>Waste Management and Disposal</b></h5>
                                <ul>
                                    <li>
                                        Safe and Compliant Disposal Services: We offer safe and environmentally responsible disposal services for expired or unused chemicals, in compliance with local and international regulations for hazardous waste management.
                                    </li>
                                    <li>
                                        Recycling and Sustainability Initiatives: We support eco-friendly practices by offering recycling options for certain chemicals and packaging materials, helping our clients reduce their environmental footprint.
                                    </li>
                                </ul>

                            </div>
                        </div>





                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><AiFillSafetyCertificate /></p>
                                <h5 className='pt-1'><b>Documentation and Certification Support</b></h5>
                                <ul>
                                    <li>
                                        Compliance Documentation: We provide all necessary documentation, including, Technical Data Sheets (TDS), Certificates of Analysis (COA), Material Safety Data Sheets (MSDS), and regulatory compliance certificates, ensuring full transparency and traceability for all shipments.
                                    </li>
                                    <li>
                                        Regulatory Certifications: Our team can assist in acquiring any necessary certifications or permits for importing/exporting chemicals, ensuring that your business remains compliant with the industry standards.
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><MdBrandingWatermark /></p>
                                <h5 className='pt-1'><b>Branding & Private Labeling</b></h5>
                                <p className='m-0 p-0'>
                                    We also offer a comprehensive Branding & Private labeling service that empowers our clients to market chemicals under their own brand name. Whether you’re looking to build your own product line or enhance your brand’s presence in the market, we provide the tools and expertise to create a fully customized solution tailored to your needs.
                                </p>

                            </div>
                        </div>

                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><FaBoxesPacking /></p>
                                <h5 className='pt-1'><b>Custom Packaging and Label Design</b></h5>
                                <ul>
                                    <li>
                                        Your Brand, Your Identity: We work with you to design and produce packaging that reflects your brand’s identity. From the bottle shape and size to the label design, every detail is tailored to meet your specifications.
                                    </li>
                                    <li>
                                        Professional Labeling Services: Our team handles every aspect of label production, ensuring compliance with all relevant regulations, including ingredient lists, safety warnings, and usage instructions.
                                    </li>
                                    <li>
                                        Eco-Friendly Options: We offer sustainable and eco-friendly packaging materials to align with your brand’s commitment to environmental responsibility.
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><MdFormatColorFill /></p>
                                <h5 className='pt-1'><b>Tailored Chemical Formulations</b></h5>
                                <ul>
                                    <li>
                                        Customizable Products: Whether you’re looking to develop an entirely new chemical formula or adapt an existing product to your needs, our R&D team provides customized formulations that fit your brand’s vision.
                                    </li>
                                    <li>
                                        Variety of Products: From industrial chemicals to personal care products, we offer a wide range of chemical types that can be branded under your private label.
                                    </li>
                                    <li>
                                        Innovative Ingredients: We stay up to date with the latest advancements in chemical technology and can offer specialized or innovative ingredients to set your product apart in the marketplace.
                                    </li>
                                    <p className='m-0 p-0'>
                                        Aside from bespoke solutions, we offer value-added services such as on call delivery, mixed products, formulated products, repackaging and inventory management in various dedicated areas of specialization.
                                    </p>
                                </ul>

                            </div>
                        </div>

                        <div className='col-md-12 mt-3 mt-md-auto mt-4 text-start'>
                            <div className='col-md-12 padding_top_card00 mt-4 pb-4'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><FaRegQuestionCircle /></p>
                                <h5 className='pt-1'><b>Why Choose Us for Your Chemical Supply Chain?</b></h5>
                                <ul>
                                    <li>
                                        End-to-End Solutions: From sourcing and shipment to storage and technical support, we handle every aspect of your chemical needs, so you don’t have to.
                                    </li>
                                    <li>
                                        Expertise You Can Trust: With decades of experience and a team of highly skilled professionals, we provide reliable service and expert guidance, ensuring smooth operations.
                                    </li>
                                    <li>
                                        Global Reach with Local Focus: Our professional logistics network ensures that your products are delivered safely and efficiently, no matter where you are located.
                                    </li>
                                    <li>
                                        Customer-Centric Approach: We pride ourselves on offering personalized service, listening to your needs, and crafting tailored solutions to support your business growth.
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className='row pt-5 mt-5'>
                            <div className='col-md-6 mt-3 m-md-auto  '>
                                <img className='img-fluid border_for_image1' src='/images/g5.jpg' />
                            </div>
                            <div className='col-md-6 m-auto '>
                                <h2><b>Ready to Streamline <span className='color_towerld'>Your Chemical Supply Chain?</span></b></h2>
                                <p className='font_for_p'>
                                    Get in touch with our team today to learn more about our full range of services or to request a quote. We are here to ensure your chemical needs are met with precision, reliability, and efficiency.
                                </p>
                            </div>

                        </div>



                    </div>
                </div>

                <div className='col-md-12 '>
                    <div className='col-md-12 text-center pt-5 mt-3 '>
                        <h2><b>Get In <span className='color_towerld'>Touch</span></b></h2>
                    </div>
                    <div className='col-md-12  mt-5 mb-5 pb-2'>
                        <div className='row'>
                            <div className='col-md-6  background_for_maps px-4'>
                                <div className='col-md-12 pt-5'>
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
                            <div className='col-md-6 ps-0 pe-0'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3712.6574328185025!2d39.21010757526909!3d21.481954080283202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI4JzU1LjAiTiAzOcKwMTInNDUuNyJF!5e0!3m2!1sen!2s!4v1731845523830!5m2!1sen!2s" style={{ height: "100%", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-12 text-center py-5'>
                    <span onClick={productsbutton} className='btn btn-light btn-lg button_cutome_black px-5 mt-3'>
                        Our Products
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services