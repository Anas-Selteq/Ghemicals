import React, { useState } from 'react'
import "../Header/Header.css"
import { IoLocationSharp, IoMenu } from "react-icons/io5";
import { RxCross2 } from 'react-icons/rx';

function Header() {
    const [toggler, setToggler] = useState(false)
    const TogglerNew = () => {
        setToggler(!toggler)
    }
    return (
        <>
            <div className='display_pc'>
                <div className='col-md-12 '>
                    <div className='col-md-12 header_background_orange'></div>
                    <div className='col-md-12 background_blue'>
                        <div className='d-flex py-4 w-100 '>
                            <div className='width_set1'>
                                <img className='img-fluid width_logo' src='/images/logo.png' />
                            </div>
                            <div className=' width_set2'>
                                <span className='widdth_height_bg'>
                                    <IoLocationSharp />
                                </span>
                                <span className='location_text'>Location</span>
                            </div>
                            <div className=' width_set3' >
                                <span className='widdth_height_bg'>
                                    <IoLocationSharp />
                                </span>
                                <span className='location_text'>Call: +01 12345678990</span>
                            </div>
                            <div className='width_set5'>
                                <span className='widdth_height_bg'>
                                    <IoLocationSharp />
                                </span>
                                <span className='location_text'>demo@gmail.com</span>
                            </div>
                            <div className='width_set4'>
                                <span className='widdth_height_bg ms-1'>
                                    <IoLocationSharp />
                                </span>
                                <span className='widdth_height_bg ms-1'>
                                    <IoLocationSharp />
                                </span>
                                <span className='widdth_height_bg ms-1'>
                                    <IoLocationSharp />
                                </span>
                                <span className='widdth_height_bg ms-1'>
                                    <IoLocationSharp />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 py-3 position_of_3rdnav' >
                        <span >Home</span>
                        <span className='ps-5'>Services</span>
                        <span className='ps-5'>About</span>
                        <span className='ps-5'>Portofolio</span>
                        <span className='ps-5'>Contact US</span>
                    </div>
                </div>
            </div>
            <div className='display_mobile'>
                <div className='col-md-12 header_background_orange'></div>
                <div className='col-md-12 background_blue px-2'>
                    <div className='row'>
                        <div className='col-6 py-4'>
                            <img className='img-fluid width_logo' src='/images/logo.png' />
                        </div>
                        <div className='col-6 m-auto text-end px-4' onClick={TogglerNew}>
                            <span className='buger_menu'><IoMenu /></span>
                        </div>
                    </div>
                </div>
                {toggler === true ?
                    <div className='col-md-12 background_blue_position'>
                        <div className='col-md-12 background_blue px-2'>
                            <div className='row'>
                                <div className='col-6 py-4'>
                                    <img className='img-fluid width_logo' src='/images/logo.png' />
                                </div>
                                <div className='col-6 m-auto text-end px-4' onClick={TogglerNew}>
                                    <span className='buger_menu'><RxCross2 /></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 px-4'>
                            <h5 className='py-3' onClick={TogglerNew}>Home</h5>
                            <h5 className='py-3' onClick={TogglerNew}>Services</h5>
                            <h5 className='py-3' onClick={TogglerNew}>About</h5>
                            <h5 className='py-3' onClick={TogglerNew}>Portfolio</h5>
                            <h5 className='py-3' onClick={TogglerNew}>Contact Us</h5>
                        </div>
                    </div>
                    : null}
            </div>
        </>
    )
}

export default Header