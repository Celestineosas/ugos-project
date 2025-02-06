import React from 'react'
import './style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImgSlider = () => {
    const settings = {
        dots: true,
        infinite : true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive : [
            {
        breakpoint : 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
            },
        },
            {
        breakpoint : 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
            },
        },

        ]
}
return(
    
<Slider {...settings} >
<div>
<img src='./images/istockphoto-1332613500-612x612.jpg' />
<h2>Express cleaning</h2>
<p>Lorem</p>
</div>
<div className='carousel-content'>

<img src='./images/istockphoto-1332613500-612x612.jpg' />
<h2>Express cleaning</h2>
<p>Lorem</p>

</div>
<div className='carousel-content'>

<img src='./images/istockphoto-1332613500-612x612.jpg' />
<h2>Express cleaning</h2>
<p>Lorem</p>
</div>
<div className='carousel-content'>
<img src='./images/istockphoto-1332613500-612x612.jpg' />
<h2>Express cleaning</h2>
<p>Lorem</p>

</div>
<div className='carousel-content'>

<img src='./images/istockphoto-1332613500-612x612.jpg' />
<h2>Express cleaning</h2>
<p>Lorem</p>
</div>
<div className='carousel-content'>

<img src='./images/istockphoto-1332613500-612x612.jpg' />
<h2>Express cleaning</h2>
<p>Lorem</p>
</div>
</Slider>
)
}

export default ImgSlider
