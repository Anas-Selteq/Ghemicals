import React from 'react'

function Footer() {
    return (
        <>
            <div className='col-md-12 background_footer padding_top_bottom_left_right_products py-3 '>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='col-md-12 '>
                            <img className='img-fluid width_logo' src='/images/log.svg' />
                        </div>
                    </div>
                    <div className='col-md-3 m-auto px-md-0 px-4 py-0 py-2'>
                        <p className='m-0 p-0 text-light'>Privacy Policy</p>
                    </div>
                    <div className='col-md-3 m-auto px-md-0 px-4'>
                        <p className='m-0 p-0 text-light'>Terms of Service</p>
                    </div>
                    <div className='col-md-3 m-auto px-md-0 px-4 py-0 py-2'>
                        <p className='m-0 p-0 text-light'>Sitemap</p>
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