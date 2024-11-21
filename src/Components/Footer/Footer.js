import React from 'react'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <>
            <div className='col-md-12 background_footer padding_top_bottom_left_right_products py-3 '>
                <div className='row'>
                    <div className='col-md-2 alignment1'>
                        <div className='col-md-12 '>
                            <img className='img-fluid width_logo' src='/images/log.svg' />
                        </div>
                    </div>
                    <div className='col-md-2 alignment2 text-center m-auto px-md-0 px-4 py-0 py-2'>
                        <p className='m-0 p-0 text-light'>Privacy Policy</p>
                    </div>
                    <div className='col-md-2 alignment2 text-center m-auto px-md-0 px-4'>
                        <p className='m-0 p-0 text-light'>Terms of Service</p>
                    </div>
                    <div className='col-md-2 alignment2 text-center m-auto px-md-0 px-4 py-0 py-2'>
                        <p className='m-0 p-0 text-light'>Sitemap</p>
                    </div>
                    <div className='col-md-2 alignment3 m-auto px-0'>

                        <span className='widdth_height_bg ms-1'>
                            <FaLinkedin />
                        </span>
                        <span className='widdth_height_bg ms-1'>
                            <FaFacebookF />
                        </span>
                        <span className='widdth_height_bg ms-1'>
                            <FaXTwitter />
                        </span>
                    </div>
                </div>

            </div>
            <div className='col-md-12 background_ff'>
                <p className='m-0 p-0 py-1'>Copyright 2024 &copy; GEMICALS</p>
            </div>
        </>
    )
}

export default Footer