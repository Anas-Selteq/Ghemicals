import React from 'react'
import { FaFacebookF, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'

function Footer() {
    return (
        <>
            <div className='col-md-12 background_footer padding_top_bottom_left_right_products py-5 '>
                <div className='row'>
                    <div className='col-md-2 alignment1'>
                        <div className='col-md-12 '>
                            <img className='img-fluid width_logo' src='/images/log.svg' />
                            <div className='col-md-12 px-2 dark_text'>
                                <a className='text_dec_stop ' href="tel:+966532776424"> <p className='m-0 p-0 pt-2 '><FaPhoneAlt /> &nbsp;+966 53 277 6424</p> </a>
                                <a className='text_dec_stop' href="mailto:info@gemicals.com">   <p className='m-0 p-0 pt-2 '><IoMail /> &nbsp;info@gemicals.com</p> </a>
                                <a className='text_dec_stop' target="_blank" href="https://www.google.com/maps?ll=21.481954,39.210108&z=15&t=m&hl=en&gl=US&mapclient=embed&q=21%C2%B028%2755.0%22N+39%C2%B012%2745.7%22E+21.481944,+39.212694@21.4819444,39.2126944">   <p className='m-0 p-0 pt-2 '><FaLocationDot /> &nbsp;JINC3475</p> </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 alignment2 text-center px-md-0 px-4 py-0 pt-2'>
                        <p className='m-0 p-0 text-light'>Privacy Policy</p>
                    </div>
                    <div className='col-md-2 alignment2 text-center px-md-0 px-4 pt-2'>
                        <p className='m-0 p-0 text-light'>Terms of Service</p>
                    </div>
                    <div className='col-md-2 alignment2 text-center px-md-0 px-4 py-0 pt-2'>
                        <p className='m-0 p-0 text-light'>Sitemap</p>
                    </div>
                    <div className='col-md-4 alignment3 pt-2  px-0'>
                        <p className='m-0 p-0 text-light pb-3'>Follow</p>
                        <span className='widdth_height_bg '>
                            <FaLinkedin />
                        </span>
                        <span className='widdth_height_bg ms-2'>
                            <FaFacebookF />
                        </span>
                        <span className='widdth_height_bg ms-2'>
                            <FaXTwitter />
                        </span>
                        <div className='col-md-12 mt-4'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3712.6574328185025!2d39.21010757526909!3d21.481954080283202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI4JzU1LjAiTiAzOcKwMTInNDUuNyJF!5e0!3m2!1sen!2s!4v1731845523830!5m2!1sen!2s" style={{ height: "100%", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
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