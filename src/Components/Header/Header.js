import React, { useState } from 'react'
import "../Header/Header.css"
import { IoLocationSharp, IoMenu } from "react-icons/io5";
import { RxCross2 } from 'react-icons/rx';
import { FaFacebookF, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';

const Header = ({ onNavigate, TogglerNew, toggler }) => {

    const location = useLocation();
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState('');
    const [ShowFlag, setShowFlag] = useState(false);

    const triggernewflag = () => {
        setShowFlag(!ShowFlag)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {
        TogglerNew(!toggler);
        setShow(true)
    };

    console.log("location", location?.pathname)
    console.log("toggler", toggler)

    const flags = {
        1: '/images/uk.svg',    // Image path for UK flag
        2: '/images/uk.svg',   // Image path for USA flag
        3: '/images/uk.svg' // Image path for France flag
    };

    const options = [
        {
            value: '1',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={flags[1]} alt="UK Flag" style={{ width: '20px', marginRight: '10px' }} />
                    United Kingdom
                </div>
            ),
        },
        {
            value: '2',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={flags[2]} alt="USA Flag" style={{ width: '20px', marginRight: '10px' }} />
                    United States
                </div>
            ),
        },
        {
            value: '3',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={flags[3]} alt="France Flag" style={{ width: '20px', marginRight: '10px' }} />
                    France
                </div>
            ),
        },
    ];

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    return (
        <>
            <div className='display_pc'>
                <div className='col-md-12 '>
                    <div className='col-md-12 header_background_orange'></div>
                    <div className='col-md-12 background_blue'>
                        <div className='d-flex py-4 w-100 '>
                            <div className='width_set1 '>
                                <img className='img-fluid width_logo' src='/images/log.svg' />
                            </div>

                            <div className=' width_set2  pt-3'>
                                <a className='text_dec_stop' target="_blank" href="https://www.google.com/maps?ll=21.481954,39.210108&z=15&t=m&hl=en&gl=US&mapclient=embed&q=21%C2%B028%2755.0%22N+39%C2%B012%2745.7%22E+21.481944,+39.212694@21.4819444,39.2126944">
                                    <span className='widdth_height_bg'>
                                        <IoLocationSharp />
                                    </span>
                                    <span className='location_text'>JINC3475</span>
                                </a>
                            </div>
                            <div className=' width_set3 pt-3' >
                                <a className='text_dec_stop' href="https://wa.me/+966532776424" target='_blank'>
                                    <span className='widdth_height_bg'>
                                        <FaWhatsapp />
                                    </span>
                                    <span className='location_text'>+966 53 277 6424</span>
                                </a>
                            </div>
                            {/* <div className=' width_set3 pt-3' >
                                <a className='text_dec_stop' href="tel:+966532776424">
                                    <span className='widdth_height_bg'>
                                        <IoMdCall />
                                    </span>
                                    <span className='location_text'>+966 53 277 6424</span>
                                </a>
                            </div> */}
                            <div className='width_set5 pt-3'>
                                <a className='text_dec_stop' href="mailto:info@gemicals.com">
                                    <span className='widdth_height_bg'>
                                        <MdEmail />
                                    </span>
                                    <span className='location_text'>info@gemicals.com</span>
                                </a>
                            </div>
                            <div className='width_set5 text-center px-5 pt-3'>
                                {/* <Select
                                    id="flag-select"
                                    options={options}
                                    getOptionLabel={(e) => e.label} // Display the custom label (image + text)
                                    styles={{
                                        menu: (base) => ({
                                            ...base,
                                            // backgroundColor: 'red',   // Make dropdown body background red
                                            zIndex: 1000,              // Set z-index to 1000
                                        }),
                                        option: (base) => ({
                                            ...base,
                                            padding: '10px',           // Option padding
                                        }),
                                        control: (base, state) => ({
                                            ...base,
                                          
                                            borderColor:  'white' ,         // Optional: change border color when focused
                                            color: 'white',     
                                            backgroundColor: 'white',  
                                            border: "1px solid white",                // Optional: change text color when focused
                                        }),
                                    }}
                                /> */}
                                {/* <button className='btn btn-success me-2 custom_button_selection'>
                                    <img className='img-fluid flag_w_h' src='/images/usa-flag.png' />    United States
                                </button> */}

                                <div className='col-md-12 border_for_green' onClick={triggernewflag}>
                                    <div className='d-flex justify-content-center'>
                                        <img className='img-fluid flag_w_h mt-2' src='/images/usa-flag.png' /><p className='m-0 py-1'> English</p>
                                    </div>

                                </div>
                                {ShowFlag &&
                                    <div className='width_foe_dropdown mt-2 py-1' onClick={triggernewflag}>
                                        <div className='d-flex justify-content-center'>
                                            <img className='img-fluid flag_w_h mt-2' src='/images/saudia-flag.png' /><p className='m-0 py-1'> Arabic</p>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <img className='img-fluid flag_w_h mt-2' src='/images/french-flag.jpg' /><p className='m-0 py-1'> French</p>
                                        </div>
                                    </div>
                                }

                                {/* <div className='col-md-12 bg-success position_of_div'>
                                    11
                                </div> */}
                            </div>

                        </div>
                    </div>
                    <div className={`col-md-12 py-3 ${location?.pathname === "/" ? "position_of_3rdnav" : "position_of_3rdnav_other"}`} >
                        <span ><Link className='text_dec_stop' to="/">Home</Link></span>
                        <span className='ps-5'><Link className='text_dec_stop' to="/About-us">About</Link></span>
                        <span className='ps-5'><Link className='text_dec_stop' to="/products">Products</Link></span>
                        <span className='ps-5' ><Link className='text_dec_stop' to="/services">Services</Link></span>


                        {/* <span className='ps-5' onClick={() => onNavigate('portfolio')}>Portofolio</span> */}
                        <span className='ps-5'><Link className='text_dec_stop' to="/contact-us">Contact US</Link></span>
                    </div>
                </div>
            </div>
            <div className='display_mobile'>
                <div className='col-md-12 header_background_orange'></div>
                <div className='col-md-12 background_blue px-2'>
                    <div className='row'>
                        <div className='col-6 py-2'>
                            <Link className='text_dec_stop' to="/">
                                <img className='img-fluid width_logo' src='/images/log.svg' />
                            </Link>
                        </div>
                        <div className='col-6 m-auto text-end px-4' >
                            <span className='buger_menu' onClick={TogglerNew}>
                                {toggler ? <RxCross2 /> :
                                    <IoMenu />
                                }
                            </span>
                        </div>
                    </div>
                </div>
                {toggler === true ?
                    <div className='col-md-12 background_blue_position'>
                        {/* <div className='col-md-12 background_blue px-2'>
                            <div className='row'>
                                <div className='col-6 py-4'>
                                    <img className='img-fluid width_logo' src='/images/logo.png' />
                                </div>
                                <div className='col-6 m-auto text-end px-4' onClick={TogglerNew}>
                                    <span className='buger_menu'><RxCross2 /></span>
                                </div>
                            </div>
                        </div> */}
                        <div className='col-md-12 px-4'>
                            <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/">Home</Link></h5>
                            <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/About-us">About</Link></h5>
                            <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/products">Products</Link></h5>
                            <h5 className='py-3' ><Link className='text_dec_stop' to="/services">Servicses</Link></h5>

                            {/* <h5 className='py-3' onClick={() => { onNavigate('portfolio') }}>Portfolio</h5> */}
                            <h5 className='py-3' ><Link className='text_dec_stop' to="/contact-us">Contact Us</Link></h5>
                        </div>
                    </div>
                    : null}

                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='py-0'>
                        <div className='col-md-12'>
                            <div className='col-md-12  pb-2'>
                                <div className='row'>
                                    <div className='col-md-12   px-3 '>
                                        <div className='col-md-12 pt-4'>
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
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default Header