import React, { useRef, useState } from 'react'
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

function Products() {
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
        <div className='col-md-12 overcontrol'>
            <div className='col-md-12 pb-4'>
                <Header onNavigate={handleScrollToSection} TogglerNew={TogglerNew} toggler={toggler} />

                <div className='col-md-12 padding_top_bottom_left_right_products pt-4 '>
                    <h2><b>Welcome to<br /><span className='color_towerld'>Our Product</span></b></h2>
                </div>
                <div className='col-md-12 padding_top_bottom_left_right_products mb-5'>
                    <div className='col-md-12  mt-md-5'>
                        <div className='row'>
                            <div className='col-md-4 mt-md-auto mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><LiaIndustrySolid /></p>
                                    <h5 className='pt-1'><b>Industrial Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        Our wide range of industrial chemicals includes everything from solvents to acids and specialty chemicals, providing critical components for manufacturing, cleaning, and processing.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4 mt-md-auto mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><GiChemicalTank /></p>
                                    <h5 className='pt-1'><b>Specialty Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        For highly specific applications, our specialty chemicals are tailored to meet unique industrial needs across various sectors, from adhesives to coatings. Such as: Surfactants, Catalysts, and Corrosion Inhibitors.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4 mt-md-auto mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><GiChemicalArrow /></p>
                                    <h5 className='pt-1'><b>Adhesives, Rubber and Sealants</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        We offer high-performance products that ensure durable, strong bonding for industrial and commercial use. Our range covers a variety of applications, such as construction and water proofing. Product applications are: Epoxy Resins, Polyurethanes, Silicone Sealants, Cyanoacrylates.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4 '>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><PiPaintBucket /></p>
                                    <h5 className='pt-1'><b>Paints, Coatings, and Inks</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        Our selection of paints, coatings, and ink additives support industries like automotive, construction, and consumer goods. We supply chemicals that ensure superior protection, appearance, and performance. Examples are: Pigments, Additives, Acrylic Resins, Polyurethanes, De-foamers, Dispersants and Biocides.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><MdOutlineConstruction /></p>
                                    <h5 className='pt-1'><b>Construction Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        We provide essential chemicals that enhance the durability, strength, and performance of construction materials. These chemicals are used in concrete production, waterproofing, and enhancing building infrastructure.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><FaHandHoldingWater /></p>
                                    <h5 className='pt-1'><b>Water Treatment Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        We provide chemicals that ensure clean, safe water in industrial and municipal settings, supporting water purification, treatment, and maintenance like: Chlorine, Sodium Hypochlorite, Coagulants, Flocculants.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><FaHandHoldingWater /></p>
                                    <h5 className='pt-1'><b>Packaging and Printing Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        Our chemicals for the packaging and printing industry help in improving the quality and durability of products. Whether you are working with flexible packaging, labels, or paper, we supply chemicals to enhance printing performance and product presentation.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><IoFastFoodOutline /></p>
                                    <h5 className='pt-1'><b>Food and Beverage Additives</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        We supply ingredients and additives essential to the food and beverage industry, ensuring quality and compliance with safety standards, such as: Preservatives, Flavor Enhancers, Food Colorants, Emulsifiers.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><MdOutlineCleaningServices /></p>
                                    <h5 className='pt-1'><b>Cleaning and Sanitizing Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        Our cleaning and sanitizing solutions support a range of industries from healthcare to hospitality, ensuring the highest standards of hygiene and sanitation.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><GiProtectionGlasses /></p>
                                    <h5 className='pt-1'><b>Plastic and Polymer Additives</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        We provide a wide array of plastic and polymer additives that are crucial for enhancing product properties such as flexibility, durability, and color. Our additives are suitable for manufacturing plastics used in packaging, automotive, electronics, and consumer products.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><MdOutlinePersonalInjury /></p>
                                    <h5 className='pt-1'><b>Personal Care and Cosmetic Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        We supply a variety of raw materials and chemicals for the personal care and cosmetics industry, helping manufacturers create safe, effective, and innovative products. From skincare to haircare, our chemicals meet high industry standards.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><TbPerfume /></p>
                                    <h5 className='pt-1'><b>Fragrances and Flavors</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        Our fragrances and flavor chemicals are widely used in the food and beverage, personal care, and household product industries. We offer high-quality, natural, and synthetic compounds that deliver unique sensory experiences.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><GiMining /></p>
                                    <h5 className='pt-1'><b>Mining and Metal Treatment Chemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        We offer specialized chemicals for mining operations and metal treatment processes, which improve efficiency, extraction, and safety. These chemicals are essential in mineral processing, metallurgy, and wastewater treatment in mining activities.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><FaHandHoldingMedical /></p>
                                    <h5 className='pt-1'><b>Pharmaceutical Ingredients:</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        We also offer pharmaceutical-grade ingredients that meet stringent regulatory requirements, supporting the production of safe, effective medications.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-4  mt-4 text-start'>
                                <div className='col-md-12 padding_top_card1 pb-4'>
                                    {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                    <p className='m-0 p-0 height_adjustment_icons'><GiWheat /></p>
                                    <h5 className='pt-1'><b>Agrochemicals</b></h5>
                                    <p className='m-0 p-0  heightadjustment'>
                                        Supporting the agricultural sector with high-quality agrochemicals that boost productivity and protect crops. Our products are designed for maximum efficiency and minimal environmental impact. Such as Pesticides, Herbicides.
                                    </p>
                                    <div className='col-md-12 text-end px-4 pt-2'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default Products