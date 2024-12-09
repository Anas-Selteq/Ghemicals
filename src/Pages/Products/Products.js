import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Components/Header/Header'
import "./Products.css"
import { CiDeliveryTruck } from 'react-icons/ci'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaArrowRight, FaHandHoldingMedical, FaHandHoldingWater } from 'react-icons/fa'
import Footer from '../../Components/Footer/Footer'
import { LiaIndustrySolid } from 'react-icons/lia'
import { GiChemicalArrow, GiChemicalTank, GiMining, GiProtectionGlasses, GiWheat } from 'react-icons/gi'
import { PiPaintBucket } from 'react-icons/pi'
import { MdOutlineCleaningServices, MdOutlineConstruction, MdOutlinePersonalInjury } from 'react-icons/md'
import { IoFastFoodOutline } from 'react-icons/io5'
import { TbPerfume } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

function Products() {
    const servicesRef = useRef(null);
    const productsRef = useRef(null);
    const contactRef = useRef(null);
    const [toggler, setToggler] = useState(false)
    const Navigate = useNavigate();

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
        <div className='col-md-12 overcontrol'>
            <div className='col-md-12 pb-4'>
                <Header onNavigate={handleScrollToSection} TogglerNew={TogglerNew} toggler={toggler} />

                <div className='col-md-12 padding_top_bottom_left_right_products pt-4 '>
                    <h2><b>Our <span className='color_towerld'>Products</span></b></h2>
                </div>
                <div className='col-md-12 padding_top_bottom_left_right_products mb-5'>
                    <div className='col-md-12  mt-md-5'>
                        <div className='row'>
                            <div className='col-md-4 mt-md-auto mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><LiaIndustrySolid /></p>
                                    <h5 className='pt-1'><b>Industrial Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        Our wide range of industrial chemicals includes everything from solvents to acids and specialty chemicals, providing critical components for manufacturing, cleaning, and processing.
                                    </p>
                                    
                                </div>
                            </div>

                            <div className='col-md-4 mt-md-auto mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><GiChemicalTank /></p>
                                    <h5 className='pt-1'><b>Specialty Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        For highly specific applications, our specialty chemicals are tailored to meet unique industrial needs across various sectors, from adhesives to coatings. Such as: Surfactants, Catalysts, and Corrosion Inhibitors.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4 mt-md-auto mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><GiChemicalArrow /></p>
                                    <h5 className='pt-1'><b>Adhesives, Rubber and Sealants</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        We offer high-performance products that ensure durable, strong bonding for industrial and commercial use. Our range covers a variety of applications, such as construction and water proofing. Product applications are: Epoxy Resins, Polyurethanes, Silicone Sealants, Cyanoacrylates.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4 '>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><PiPaintBucket /></p>
                                    <h5 className='pt-1'><b>Paints, Coatings, and Inks</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        Our selection of paints, coatings, and ink additives support industries like automotive, construction, and consumer goods. We supply chemicals that ensure superior protection, appearance, and performance. Examples are: Pigments, Additives, Acrylic Resins, Polyurethanes, De-foamers, Dispersants and Biocides.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><MdOutlineConstruction /></p>
                                    <h5 className='pt-1'><b>Construction Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        We provide essential chemicals that enhance the durability, strength, and performance of construction materials. These chemicals are used in concrete production, waterproofing, and enhancing building infrastructure.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><FaHandHoldingWater /></p>
                                    <h5 className='pt-1'><b>Water Treatment Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        We provide chemicals that ensure clean, safe water in industrial and municipal settings, supporting water purification, treatment, and maintenance like: Chlorine, Sodium Hypochlorite, Coagulants, Flocculants.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><FaHandHoldingWater /></p>
                                    <h5 className='pt-1'><b>Packaging and Printing Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        Our chemicals for the packaging and printing industry help in improving the quality and durability of products. Whether you are working with flexible packaging, labels, or paper, we supply chemicals to enhance printing performance and product presentation.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><IoFastFoodOutline /></p>
                                    <h5 className='pt-1'><b>Food and Beverage Additives</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        We supply ingredients and additives essential to the food and beverage industry, ensuring quality and compliance with safety standards, such as: Preservatives, Flavor Enhancers, Food Colorants, Emulsifiers.
                                    </p>
                                    
                                </div>
                            </div>

                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><MdOutlineCleaningServices /></p>
                                    <h5 className='pt-1'><b>Cleaning and Sanitizing Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        Our cleaning and sanitizing solutions support a range of industries from healthcare to hospitality, ensuring the highest standards of hygiene and sanitation.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><GiProtectionGlasses /></p>
                                    <h5 className='pt-1'><b>Plastic and Polymer Additives</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        We provide a wide array of plastic and polymer additives that are crucial for enhancing product properties such as flexibility, durability, and color. Our additives are suitable for manufacturing plastics used in packaging, automotive, electronics, and consumer products.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><MdOutlinePersonalInjury /></p>
                                    <h5 className='pt-1'><b>Personal Care and Cosmetic Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        We supply a variety of raw materials and chemicals for the personal care and cosmetics industry, helping manufacturers create safe, effective, and innovative products. From skincare to haircare, our chemicals meet high industry standards.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><TbPerfume /></p>
                                    <h5 className='pt-1'><b>Fragrances and Flavors</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        Our fragrances and flavor chemicals are widely used in the food and beverage, personal care, and household product industries. We offer high-quality, natural, and synthetic compounds that deliver unique sensory experiences.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><GiMining /></p>
                                    <h5 className='pt-1'><b>Mining and Metal Treatment Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        We offer specialized chemicals for mining operations and metal treatment processes, which improve efficiency, extraction, and safety. These chemicals are essential in mineral processing, metallurgy, and wastewater treatment in mining activities.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><FaHandHoldingMedical /></p>
                                    <h5 className='pt-1'><b>Pharmaceutical Ingredients:</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        We also offer pharmaceutical-grade ingredients that meet stringent regulatory requirements, supporting the production of safe, effective medications.
                                    </p>
                                    
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><GiWheat /></p>
                                    <h5 className='pt-1'><b>Agrochemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment121'>
                                        Supporting the agricultural sector with high-quality agrochemicals that boost productivity and protect crops. Our products are designed for maximum efficiency and minimal environmental impact. Such as Pesticides, Herbicides.
                                    </p>
                                    {/* <div className='col-md-12 text-end bottom_attach_arrow px-4 pt-2'>
                                        <FaArrowRight />
                                    </div> */}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className='col-md-12 padding_top_bottom_left_right_products'>
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

                {/* <div className='col-md-12 text-center py-5'>
                        <span onClick={productsbutton} className='btn btn-light btn-lg button_cutome_black px-5 mt-3'>
                            Our Products
                        </span>
                    </div> */}

            </div>
            <Footer />
        </div>
    )
}

export default Products