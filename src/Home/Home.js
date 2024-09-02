import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
    const [activetabs, setActivetabs] = useState(0)
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
    return (
        <div className='col-md-12 overflow_stop'>
            <Header />

            {/* Section 1 ------------------------------------------------------- */}
            <div className='col-md-12 image_slider_front'>
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

                </Carousel>
            </div>
            {/* Section 2 ----------------------------------------------------------- */}
            <div className='col-md-12 padding_top_bottom_left_right'>
                <div className='row'>
                    <div className='col-md-6 m-auto '>
                        <h2><b>Welcome to <span className='color_towerld'>Troweld</span></b></h2>
                        <p className='font_for_p'>
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has s
                        </p>
                        <span className='btn btn-light btn-lg button_cutome1 px-5 mt-3'>
                            Read More
                        </span>
                    </div>
                    <div className='col-md-6 mt-md-auto mt-5 text-center'>
                        <img className='img-fluid' src='/images/about-img.png' />
                    </div>
                </div>
            </div>

            {/* Section 3 --------------------------------------- */}
            <div className='col-md-12 backgrou_blue_section3'>
                <div className='col-md-12 text-center pt-4'>
                    <h2 className='text-light'><b>Our Work Portofolio</b></h2>
                </div>
                <div className='col-md-12 text-center py-4'>
                    <span className={`btn btn-light ${activetabs === 0 ? "button_white_tabs" : "button_white_tabs_unactive"}`}>ALL</span>
                    <span className={`btn btn-light ${activetabs === 1 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>DECORATIVE</span>
                    <span className={`btn btn-light ${activetabs === 2 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>FACADES</span>
                    <span className={`btn btn-light ${activetabs === 3 ? "button_white_tabs ms-4" : "button_white_tabs_unactive ms-4"}`}>RAILINGS</span>
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
                                <img className='img-fluid w-100' src='/images/p1.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100' src='/images/p2.jpg' />
                            </div>
                        </div>
                        <div>
                            <div className='col-md-12 px-2'>
                                <img className='img-fluid w-100' src='/images/p3.jpg' />
                            </div>
                        </div>

                    </Carousel>
                </div>
            </div>

            {/* Section 4 --------------------------------------- */}
            <div className='col-md-12'>
                <div className='col-md-12 text-center pt-5 mt-3 '>
                    <h2><b>Our <span className='color_towerld'>Services</span></b></h2>
                </div>
                <div className='col-md-12 padding_top_bottom_left_right_only mt-5'>
                    <div className='row'>
                        <div className='col-md-4 mt-md-auto mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid' src='/images/s1.png' />
                                <h5 className='pt-2'><b>Home Welding</b></h5>
                                <p className='m-0 p-0 px-md-3'>
                                    when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-md-auto mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid' src='/images/s1.png' />
                                <h5 className='pt-2'><b>Home Welding</b></h5>
                                <p className='m-0 p-0 px-md-3'>
                                    when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-md-auto mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid' src='/images/s1.png' />
                                <h5 className='pt-2'><b>Home Welding</b></h5>
                                <p className='m-0 p-0 px-md-3'>
                                    when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid' src='/images/s1.png' />
                                <h5 className='pt-2'><b>Home Welding</b></h5>
                                <p className='m-0 p-0 px-md-3'>
                                    when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid' src='/images/s1.png' />
                                <h5 className='pt-2'><b>Home Welding</b></h5>
                                <p className='m-0 p-0 px-md-3'>
                                    when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid' src='/images/s1.png' />
                                <h5 className='pt-2'><b>Home Welding</b></h5>
                                <p className='m-0 p-0 px-md-3'>
                                    when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 color_white_text mt-4 text-center'>
                    <span className='btn btn-light btn-lg button_cutome1 px-5 mt-3'>
                        Read More
                    </span>
                </div>
            </div>

            {/* Section 5 --------------------------------------- */}
            <div className='col-md-12'>
                <div className='col-md-12 text-center pt-5 mt-3 '>
                    <h2><b>Get In <span className='color_towerld'>Touch</span></b></h2>
                </div>
                <div className='col-md-12 padding_top_bottom_left_right_only mt-5 mb-5 pb-2'>
                    <div className='row'>
                        <div className='col-md-6  background_for_maps px-4'>
                            <div className='col-md-12 pt-5'>
                                <input className='form-control form-control-lg border_for_lg' placeholder='Your Name' />
                            </div>
                            <div className='row '>
                                <div className='col-md-6 pt-3 '>
                                    <input className='form-control form-control-lg border_for_lg' placeholder='Your Name' />
                                </div>
                                <div className='col-md-6 pt-3'>
                                    <input className='form-control form-control-lg border_for_lg' placeholder='Your Name' />
                                </div>
                            </div>
                            <div className='col-md-12 pt-3'>
                                <input className='form-control form-control-lg border_for_lg' placeholder='Your Name' />
                            </div>
                            <div className='col-md-12 pt-3'>
                                <textarea className='form-control form-control-lg border_for_lg' placeholder='Your Name' ></textarea>
                            </div>
                            <div className='col-md-12 mt-3 pb-5'>
                                <span className='btn btn-light btn-lg button_cutome1 px-5 '>
                                    SEND
                                </span>
                            </div>
                        </div>
                        <div className='col-md-6 ps-0 pe-0'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27232.685757138217!2d74.2949427!3d31.439307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906b2e2b1bd75%3A0x7fd814c66cf7285f!2sAl-Kareem%20Chowk!5e0!3m2!1sen!2s!4v1725220744169!5m2!1sen!2s" style={{ height: "100%", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer  */}
            <div className='col-md-12 background_footer padding_top_bottom_left_right_only py-3 '>
                <div className='col-md-12 text-center'>
                    <img className='img-fluid width_logo' src='/images/footerlogo.png' />
                </div>
            </div>
        </div>
    )
}

export default Home