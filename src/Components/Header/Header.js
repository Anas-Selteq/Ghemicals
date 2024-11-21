import React, { useState } from 'react'
import "../Header/Header.css"
import { IoLocationSharp, IoMenu } from "react-icons/io5";
import { RxCross2 } from 'react-icons/rx';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = ({ onNavigate, TogglerNew, toggler }) => {

    const location = useLocation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        TogglerNew(!toggler);
        setShow(true)
    };

    console.log("location", location?.pathname)
    console.log("toggler", toggler)

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
                            <div className=' width_set2  pt-2'>
                                <span className='widdth_height_bg'>
                                    <IoLocationSharp />
                                </span>
                                <span className='location_text'>JINC3475</span>
                            </div>
                            <div className=' width_set3 pt-2' >
                                <span className='widdth_height_bg'>
                                    <IoMdCall />
                                </span>
                                <span className='location_text'>Call: +966 53 277 6424</span>
                            </div>
                            <div className='width_set5 pt-2'>
                                <span className='widdth_height_bg'>
                                    <MdEmail />
                                </span>
                                <span className='location_text'>info@gemicals.com</span>
                            </div>

                        </div>
                    </div>
                    <div className={`col-md-12 py-3 ${location?.pathname === "/" ? "position_of_3rdnav" : "position_of_3rdnav_other"}`} >
                        <span ><Link className='text_dec_stop' to="/">Home</Link></span>
                        <span className='ps-5' onClick={() => onNavigate('services')}>Services</span>
                        <span className='ps-5'><Link className='text_dec_stop' to="/About-us">About</Link></span>
                        <span className='ps-5'><Link className='text_dec_stop' to="/products">Products</Link></span>
                        <span className='ps-5' onClick={() => onNavigate('portfolio')}>Portofolio</span>
                        <span className='ps-5' onClick={() => { location?.pathname === "/products" || location?.pathname === "/About-us" ? handleShow() : onNavigate('contact') }}>Contact US</span>
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
                            <h5 className='py-3' onClick={() => { onNavigate('services') }}>Services</h5>
                            <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/products">Products</Link></h5>
                            <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/About-us">About</Link></h5>
                            <h5 className='py-3' onClick={() => { onNavigate('portfolio') }}>Portfolio</h5>
                            <h5 className='py-3' onClick={() => { location?.pathname === "/products" || location?.pathname === "/About-us" ? handleShow() : onNavigate('contact') }}>Contact Us</h5>
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