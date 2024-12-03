import React, { useEffect, useRef, useState } from 'react'
import Header from '../Components/Header/Header'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiDeliveryTruck } from 'react-icons/ci';
import { PiHandSoap, PiNuclearPlant, PiNuclearPlantLight, PiTractor, PiTractorLight } from 'react-icons/pi';
import { LiaDrumSteelpanSolid } from 'react-icons/lia';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
import { GiCargoShip, GiChemicalDrop, GiDeliveryDrone, GiGlassShot, GiNewspaper, GiNuclearWaste } from 'react-icons/gi';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { BiLabel } from 'react-icons/bi';
import { IoDocumentsOutline } from 'react-icons/io5';
import Footer from '../Components/Footer/Footer';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from "aos";
import { ImInsertTemplate } from 'react-icons/im';
import { TbPerfume } from 'react-icons/tb';
import { FaTruckFast, FaTruckPlane } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';


function Home() {
    const [activetabs, setActivetabs] = useState(0)
    const [toggler, setToggler] = useState(false)
    const Navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const responsive_2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const TogglerNew = () => {
        setToggler(!toggler)
    }

    const words = [
        "Your Reliable Source for Premium Chemicals—Let’s Talk Solutions!",
        "We are One Stop Shop for all your Chemical needs!",
        "Time to Level Up—Get in Touch and Experience Top-Quality Chemicals!",
        "Your Perfect Chemical Solution is Just a Click Away—Get in Touch Today!",
        "Ready to Rock Your Industry? Contact Us Today and Let’s Get Started!",
        "Your Growth Starts Here—Send Us Your RFQ and Watch Your Business Thrive!",
        "Let’s Supercharge Your Supply Chain—Request Your Quote NOW!"
    ];


    useEffect(() => {
        AOS.init(); // Initialize AOS animations
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000); // Change text every 3 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    useEffect(() => {
        AOS.refresh(); // Refresh AOS animations after index changes
    }, [currentIndex]);


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

    const Readmorebutton = () => {
        Navigate("/About-us")
    }

    const productsbutton = () => {
        Navigate("/products")
    }

    const contactlink = () => {
        Navigate("/contact-us")
    }
    const servicelink = () => {
        Navigate("/services")
    }


    return (
        <div className='col-md-12 overflow_stop'>
            <Header onNavigate={handleScrollToSection} TogglerNew={TogglerNew} toggler={toggler} />

            {/* Section 1 ------------------------------------------------------- */}
            <div className='col-md-12 '>
                <div className='display_pc' >
                    <video loop autoPlay muted className="vedioPlayer">
                        <source
                            src="/video/abc.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className='col-md-12 position_for_mobile '

                >
                    <h1 className='col-md-12 text-center  m-0 color_white_text '
                        key={currentIndex}
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        data-aos-delay="100"
                    >
                        <b>
                            {/* <Typewriter
                            words={[
                                "Your Reliable Source for Premium Chemicals—Let’s Talk Solutions! ",
                                "We are One Stop Shop for all your Chemical needs!",
                                "Time to Level Up—Get in Touch and Experience Top-Quality Chemicals!",
                                "Your Perfect Chemical Solution is Just a Click Away—Get in Touch Today!",
                                "Your Reliable Source for Premium Chemicals—Let’s Talk Solutions! ",
                                "Ready to Rock Your Industry? Contact Us Today and Let’s Get Started!",
                                "Your Growth Starts Here—Send Us Your RFQ and Watch Your Business Thrive!",
                                "Let’s Supercharge Your Supply Chain—Request Your Quote NOW!",
                                "Your Growth Starts Here—Send Us Your RFQ and Watch Your Business Thrive!"
                            ]}
                            loop={true}
                            cursor
                            cursorStyle
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /> */}
                            {words[currentIndex]}
                        </b>
                    </h1>
                    <div className='col-md-12 text-center pt-5'>
                        <span onClick={productsbutton} className='btn btn-light btn-lg button_cutome1 px-md-5 mt-3'>
                            <b> Our Products</b>
                        </span>
                        <span onClick={contactlink} className='btn btn-light btn-lg button_cutome px-md-5 mt-3 ms-4'>
                            <b>  Contact Us</b>
                        </span>
                    </div>
                </div>

                {/* <Carousel
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    itemClass="carousel-item-padding-40-px"
                    responsive={responsive}>
                    <div>
                        <div className='col-md-12 '>
                            <h1 className='col-md-12  m-0 color_white_text'>
                                <b>  We Build<br />
                                    The Things Architects<br />
                                    Dream Up </b>
                            </h1>
                            <div className='col-md-12 color_white_text mt-5 display_pc'>
                                <span className='btn btn-light btn-lg button_cutome px-5'>
                                    Read More
                                </span>
                                <span className='btn btn-light btn-lg button_cutome1 px-5 ms-3'>
                                    Contact Us
                                </span>
                            </div>
                            <div className='col-md-12 display_mobile'>
                                <div className='row  pt-5'>
                                    <div className='col-6 text-end'>
                                        <span className='btn btn-light btn-lg button_cutome '>
                                            Read More
                                        </span>
                                    </div>
                                    <div className='col-6'>
                                        <span className='btn btn-light btn-lg button_cutome1 '>
                                            Contact Us
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </Carousel> */}
            </div>
            {/* Section 2 ----------------------------------------------------------- */}

            <div className='col-md-12 padding_top_bottom_left_right'>
                <div className='row'>
                    <div className='col-md-6 m-auto '>
                        <h2><b>Welcome to <span className='color_towerld'>GEMICALS</span></b></h2>
                        <p className='font_for_p'>
                            We are a leading Saudi distributor of industrial and specialty chemicals, to serve the chemical needs of the process industry. We continuously endeavor to develop reliable sources for the supply of chemicals with which we can serve our customers.
                        </p>
                        <p className='font_for_p'>
                            Being a trusted distributors, we represent renowned global manufacturers, outspreading their reach and ensuring local industry have access to their products. We create the bond between the global producers and local end-users, by supplying a huge range of chemicals to the Gulf markets.
                        </p>
                        <p className='font_for_p'>
                            <b><i>"We are One Stop Shop for all your Chemical needs!"</i></b>
                        </p>
                        <span onClick={Readmorebutton} className='btn btn-light btn-lg button_cutome_black px-5 mt-3 mb-md-0 mb-4'>
                            Read More
                        </span>
                    </div>
                    <div className='col-md-6 m-md-auto   text-center'>
                        <img className='img-fluid border_for_image' src='/images/g13.jpg' />
                    </div>
                </div>

                <div className='col-md-12 pt-5 mt-4 display_pc '>
                    <div className='col-md-12 pb-4 text-center'>
                        <h2><b>Our <span className='color_towerld'>Industries</span></b></h2>
                    </div>
                    <div className='col-md-12 '>
                        <div className='row'>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Paints & Coating.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Paints & Coating</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Inks & Printing.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Inks & Printing </p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                {/* <img className='img-fluid img_size_set_New' src='/images/icons/Soap & Detergent.svg' /> */}
                                <PiHandSoap className='font_for_icon' />
                                <p className='m-0 p-0 font_for_all_services'>Soap & Detergent</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Laundry, Cleaning & Janitorial.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Laundry, Cleaning & Janitorial </p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Water Treatment.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Water Treatment </p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Construction.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Construction</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                {/* <img className='img-fluid img_size_set_New' src='/images/icons/Ceramic & Marble.svg' /> */}
                                <ImInsertTemplate className='font_for_icon' />
                                <p className='m-0 p-0 font_for_all_services'>Ceramic & Marble</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Plastic & Polymers.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Plastic & Polymers</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                {/* <img className='img-fluid img_size_set_New' src='/images/icons/Glass & Composites.svg' /> */}
                                <GiGlassShot className='font_for_icon' />
                                <p className='m-0 p-0 font_for_all_services'>Glass & Glass-Fiber (Composites)</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Packing & Corrugate.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Packing & Corrugate</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Foam & Mattress.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Foam & Mattress</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Agricultural & Fertilizers.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Feed & Fertilizer</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Oil & Gas.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Oil & Gas</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Pharmaceuticals & Healthcare.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Pharmaceuticals & Healthcare</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Personal Care & Cosmetic.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Perfume, Personal Care & Cosmetics</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Mining & Drilling.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Mining & Drilling</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/HVAC.svg' />
                                <p className='m-0 p-0 font_for_all_services'>HVAC, Refrigeration & Cold Storage</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Metal & Alloys.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Metal & Alloys</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                {/* <img className='img-fluid img_size_set_New' src='/images/icons/Food & Beverage.svg' /> */}
                                <GiNewspaper className='font_for_icon' />
                                <p className='m-0 p-0 font_for_all_services'>Pulp & Paper</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Food & Beverage.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Food & Beverage</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Adhesive.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Adhesive, Sealants & Rubbers instead of Adhesive</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                {/* <img className='img-fluid img_size_set_New' src='/images/icons/Agricultural & Fertilizers.svg' /> */}
                                <PiTractorLight className='font_for_icon' />
                                <p className='m-0 p-0 font_for_all_services'>Agriculture & Farming</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                <img className='img-fluid img_size_set_New' src='/images/icons/Insecticides & Herbicides.svg' />
                                <p className='m-0 p-0 font_for_all_services'>Insecticides & Herbicides (Pesticides)</p>
                            </div>
                            <div className='col-md-2 col-4 pt-4 text-center'>
                                {/* <img className='img-fluid img_size_set_New' src='/images/icons/Food & Beverage.svg' /> */}
                                <TbPerfume  className='font_for_icon'/>
                                <p className='m-0 p-0 font_for_all_services'>Flavor and Fragrance</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='row pt-5'>
                    <div className='col-md-6 m-md-auto  '>
                        <img className='img-fluid border_for_image1' src='/images/g10.jpg' />
                    </div>
                    <div className='col-md-6 m-auto mt-4 '>
                        <h2><b>Our <span className='color_towerld'>Expertise</span></b></h2>
                        <p className='font_for_p'>
                            With over 25 years of experience in chemical distribution, we have a trusted name in the industry. Our extensive global network and the commitment to quality ensure that we meet the needs of clients across various industrial sectors.
                        </p>
                        <p className='font_for_p'>
                            From high-purity industrial solvents to food grade or USP/BP ingredients, from Soda Ash for glass and detergent manufacturing to refrigerant gases, our diverse product range caters the need of almost every industry. Browse our product catalog or send us an inquiry. We will arrange the right chemicals for your business.
                        </p>
                        <p className='font_for_p'>
                            <b><i>"Time to Level Up—Get in Touch and Experience Top-Quality Chemicals!"</i></b>
                        </p>
                        <span onClick={Readmorebutton} className='btn btn-light btn-lg button_cutome_black px-5 mt-3'>
                            Read More
                        </span>
                    </div>

                </div>
            </div>



            {/* Section 3 --------------------------------------- */}
            <div className='col-md-12 backgrou_blue_section3' ref={productsRef}>
                <div className='col-md-12 text-center pt-4'>
                    <h2 className='text-light'><b>Our Portofolio</b></h2>
                </div>
                <div className='col-md-12 text-center py-4'>
                    <span className={`btn btn-light ${activetabs === 1 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>Acids</span>
                    <span className={`btn btn-light ${activetabs === 2 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>Alkalis</span>
                    <span className={`btn btn-light ${activetabs === 3 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>Solvents</span>
                    <span className={`btn btn-light ${activetabs === 1 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>Bulk Chemicals</span>
                    <span className={`btn btn-light ${activetabs === 2 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>Specialties</span>
                    <span className={`btn btn-light ${activetabs === 3 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>Additives</span>
                    <span className={`btn btn-light ${activetabs === 1 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>Catalysts</span>
                    <span className={`btn btn-light ${activetabs === 2 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>Enzymes</span>
                    <span className={`btn btn-light ${activetabs === 3 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>Refrigerant Gases</span>
                </div>
                <div className='col-md-12 pt-3 pb-3'>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        itemClass="carousel-item-padding-40-px"
                        responsive={responsive_2}>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g1.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g2.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g3.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g4.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g5.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g6.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g7.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g8.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g9.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g10.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g11.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g12.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100 border_for_c_image' src='/images/g13.jpg' />
                            </div>
                        </div>


                    </Carousel>
                </div>
            </div>

            {/* Section 4 --------------------------------------- */}
            <div className='col-md-12' ref={servicesRef}>
                <div className='col-md-12 text-center pt-5 mt-3 '>
                    <h2><b>Our <span className='color_towerld'>Services</span></b></h2>
                </div>
                <div className='col-md-12 padding_top_bottom_left_right_only mt-5'>
                    <div className='row'>
                        <div className='col-md-4 mt-md-auto mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <p className='m-0 p-0 height_adjustment_icons'><GiCargoShip /></p>
                                <h5 className='pt-2'><b>Shipment and Import/Export Handling</b></h5>
                                <p className='m-0 p-0 px-md-3 heightadjustment'>
                                    With a robust global network, we manage the entire import and export process, ensuring your chemicals are transported safely, securely, and in compliance with all international regulations.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-md-auto mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <p className='m-0 p-0 height_adjustment_icons'><HiBuildingOffice2 /></p>
                                <h5 className='pt-2'><b>Custom Clearance and Regulatory Compliance</b></h5>
                                <p className='m-0 p-0 px-md-3 heightadjustment'>
                                    We navigate the complex paperwork and procedures involved in shipping chemicals internationally, including tariffs, duties, and taxes, so you can focus on your business.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-md-auto mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <p className='m-0 p-0 height_adjustment_icons'><LiaDrumSteelpanSolid /></p>
                                <h5 className='pt-2'><b>Storage and Warehousing<br />Solutions</b></h5>
                                <p className='m-0 p-0 px-md-3 heightadjustment'>
                                    We offer state-of-the-art warehousing solutions for all types of chemicals, including hazardous materials, ensuring safe storage that complies with environmental and safety regulations.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <p className='m-0 p-0 height_adjustment_icons'><FaTruckPlane /></p>
                                <h5 className='pt-2'><b>Handling and Transportation</b></h5>
                                <p className='m-0 p-0 px-md-3 heightadjustment'>
                                    Our team is fully trained in the safe handling, packaging, and transportation of chemicals, ensuring that all materials are handled according to the highest safety standards.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <p className='m-0 p-0 height_adjustment_icons'><FaTruckFast /></p>
                                <h5 className='pt-2'><b>Logistics and Distribution</b></h5>
                                <p className='m-0 p-0 px-md-3 heightadjustment'>
                                    : We operate a fast, reliable distribution network that ensures timely delivery of chemicals to your location, no matter where you are.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <p className='m-0 p-0 height_adjustment_icons'><RiCustomerServiceLine /></p>
                                <h5 className='pt-2'><b>Technical Support and Consultation</b></h5>
                                <p className='m-0 p-0 px-md-3 heightadjustment'>
                                    Our in-house team of technical experts provides support on product selection, application, and optimization to ensure that you’re using the right chemical solutions for your specific needs.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <p className='m-0 p-0 height_adjustment_icons'><BiLabel /></p>
                                <h5 className='pt-2'><b>Branding & Private Labeling</b></h5>
                                <p className='m-0 p-0 px-md-3 heightadjustment'>
                                    We also offer a comprehensive Branding & Private labeling service that empowers our clients to market chemicals under their own brand name.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <p className='m-0 p-0 height_adjustment_icons'><GiChemicalDrop /></p>
                                <h5 className='pt-2'><b>Custom Chemical Blending and Formulation</b></h5>
                                <p className='m-0 p-0 px-md-3 heightadjustment'>
                                    If you need a unique formulation, we offer custom blending services that allow us to create specific chemical products suited to your process requirements. From custom concentrations to proprietary blends, we’re ready to meet your exact needs.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <p className='m-0 p-0 height_adjustment_icons'><GiNuclearWaste /></p>
                                <h5 className='pt-2'><b>Waste Management and Disposal</b></h5>
                                <p className='m-0 p-0 px-md-3 heightadjustment'>
                                    We offer safe and environmentally responsible disposal services for expired or unused chemicals, in compliance with local and international regulations for hazardous waste management.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>

                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <p className='m-0 p-0 height_adjustment_icons'><IoDocumentsOutline /></p>
                                <h5 className='pt-2'><b>Documentation and Certification Support</b></h5>
                                <p className='m-0 p-0 px-md-3 heightadjustment'>
                                    We provide all necessary documentation, including, Technical Data Sheets (TDS), Certificates of Analysis (COA), Material Safety Data Sheets (MSDS), and regulatory compliance certificates, ensuring full transparency and traceability for all shipments.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 text-center'>
                        <span onClick={productsbutton} className='btn btn-light btn-lg button_cutome_black px-5 mt-3'>
                            Our Products
                        </span>
                    </div>
                </div>

            </div>

            {/* Section 5 --------------------------------------- */}
            <div ref={contactRef} className='col-md-12'>
                <div className='col-md-12 text-center pt-5 mt-3 '>
                    <h2><b>Get In <span className='color_towerld'>Touch</span></b></h2>
                </div>
                <div className='col-md-12 padding_top_bottom_left_right_only mt-5 mb-5 pb-2'>
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

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Home