import React from 'react'
import './referrals.css'
import Slider from 'react-slick';
import Facu from '../../assets/facu.jpg'
import Mike from '../../assets/mike.jpg'

const Referrals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      };
  return (
    <section id='referral'>
        <div className='container'>
            <div className='slider-title'>
                <h6 className='subtitle'>Who worked with me</h6>
                <h2>Referrals</h2>
            </div>
            <div className='slider-content'>
                <Slider {...settings} >
                    <div className='slider-item'>
                        <p className='desc'>Sebastian is a very helpful teammate and his commitment makes him able to deliver results beyond
                        expectations. He is always suggesting new ideas and adding value throught the project</p>
                        <div className='referral'>
                            <div className='referral-img'>
                                <img src={Mike} alt='facu'/>
                            </div>
                            <div>
                                <h5 className='referral-name'>Michel Baretta</h5>
                                <p className='desc'>Front end Developer</p>
                            </div>
                        </div> 
                    </div>
                    <div className='slider-item'>
                        <p className='desc'>I have worked with Sebastian for several years on 
                        different projects. He is an ambitous person that looks for the best solution regularly and most importantly aims to keep learning.
                        Would love to work with him again</p>
                        <div className='referral'>
                            <div className='referral-img'>
                                <img src={Facu} alt=''/>
                            </div>
                            <div>
                                <h5 className='referral-name'>Facundo Parra</h5>
                                <p className='desc'>Teach Lead</p>
                            </div>
                        </div> 
                    </div>
                </Slider>
            </div>
        </div>
    </section>
    )
}

export default Referrals