import React from 'react'
import Slider from 'react-slick';
import './background.css'

const Background = () => {
  
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: true,
        vertical: true,
        verticalSwiping: true,
        // centerMode: true,
        // centerPadding: "60px",
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
      return (
        <div id='background' className='container'>
            <div className='slider-title'>
              <h6 className='subtitle'>Previous Experience</h6> 
             <h2>Background</h2>
            </div>
            <div className='background-content'>
                <div className='back-1'>
                    <h3 className='education'>Education</h3>
                    <Slider {...settings}>
                        <div className='exp-content'>
                        <h4>Henry</h4> 
                        <span>Web Development BootCamp</span>
                        <div>2021</div> 
                        </div>
                        <div className='exp-content'>
                        <h4>Udemy</h4> 
                        <span>Smart Contracts Bootcamp</span>
                        <div>October 2021</div> 
                        </div>
                        <div className='exp-content'>
                        <h4>CoderHouse</h4> 
                        <span>Data Analytics Course</span>
                        <div>2021</div> 
                        </div>
                        <div className='exp-content'>
                        <h4>Harvard Online</h4> 
                        <span>Intruduction to Computer Science</span>
                        <div>2020</div> 
                        </div>
                        <div className='exp-content'>
                        <h4>UADE</h4> 
                        <span>Bachelor's in Business Administration</span>
                        <div>2015-2020</div> 
                        </div>
                    </Slider>
                </div>
                <div className='back-2'>
                    <h3 className='experience'>Experience</h3>
                    <Slider {...settings}>
                        <div className='exp-content'>
                            <h4>Libee BioSpaces - Tech Start Up</h4> 
                            <span>Co-Founder</span>
                            <div>2022 - OnGoing</div> 
                            </div>
                            <div className='exp-content'>
                            <h4>EC School of English - Argentina</h4> 
                            <span>Business Owner</span>
                            <div>2021 - OnGoing</div> 
                            </div>
                            <div className='exp-content'>
                            <h4>AES Corporation - United States(remote)</h4> 
                            <span> Global Strategic Sourcing Leader </span>
                            <div>2020 - 2022</div> 
                            </div>
                            <div className='exp-content'>
                            <h4>AES Corporation - United States(remote)</h4> 
                            <span>Regional Senior Buyer</span>
                            <div>2018 - 2019</div> 
                            </div>
                            <div className='exp-content'>
                            <h4>International Experience - Finland (on-site)</h4> 
                            <span>5 month Academic Experience</span>
                            <div>July 2017 - December 2017 </div> 
                            </div>

                            <div className='exp-content'>
                            <h4>Cencosud - Argentina (on-site)</h4> 
                            <span>Opertions Analyst</span>
                            <div>2016-2017</div> 
                            </div>
                    </Slider>
                </div>
            </div>
        </div>
      );

}

export default Background