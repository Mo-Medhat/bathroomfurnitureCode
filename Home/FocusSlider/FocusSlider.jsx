import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function FocusSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,        
      };
  return <>
    <section className='ClientSection py-5'>
        <div className="container">
            <div className="sectionTitle mb-5"><h2>What we focus on when it comes to bathroom furniture, <br/> bathroom ceramics and Co.</h2></div>
            <div className="row gx-1">
                <Slider {...settings}>
                    <div className=" col-md-12">
                        <div className="focusItem d-flex justify-content-between align-item-center">
                            <div className="row">
                            <div className="col-md-6">
                            <div className="img"><img src="imgs/f1.jpg" className='w-100' alt="product" /></div>
                            </div>
                            <div className="col-md-6">
                            <div className="focusDesc">
                                <h4>Lorem, ipsum dolor.</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae ullam suscipit nemo nobis est, maxime hic, eius quae atque soluta, ipsa facere commodi ipsum.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit similique distinctio pariatur, tenetur modi praesentium. Optio deserunt itaque ratione quos odit eligendi, molestias, nostrum in voluptatibus facilis praesentium, pariatur hic velit natus. Recusandae soluta harum laudantium repellendus doloremque eum commodi voluptate sit, quibusdam ullam magnam, voluptatibus molestias quidem maiores optio accusamus dolores sed corrupti. Commodi laborum a praesentium nihil eos!</p>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-12">
                        <div className="focusItem d-flex justify-content-between align-item-center">
                            <div className="row">
                            <div className="col-md-6">
                            <div className="img"><img src="imgs/f2.jpg" className='w-100' alt="product" /></div>
                            </div>
                            <div className="col-md-6">
                            <div className="focusDesc">
                                <h4>Lorem, ipsum dolor.</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae ullam suscipit nemo nobis est, maxime hic, eius quae atque soluta, ipsa facere commodi ipsum.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit similique distinctio pariatur, tenetur modi praesentium. Optio deserunt itaque ratione quos odit eligendi, molestias, nostrum in voluptatibus facilis praesentium, pariatur hic velit natus. Recusandae soluta harum laudantium repellendus doloremque eum commodi voluptate sit, quibusdam ullam magnam, voluptatibus molestias quidem maiores optio accusamus dolores sed corrupti. Commodi laborum a praesentium nihil eos!</p>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </Slider>
            </div>

            
        </div>
    </section>
  </>
}

export default FocusSlider