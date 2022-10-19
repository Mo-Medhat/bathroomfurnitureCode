import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function ProductSections() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 552,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                autoplay: true,
              }
            },
          ]
      };

    const data = [
        {
            image: "./imgs/product1.jpg",
            title: "Washing area",
            price: "800.00",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia, fugiat alias explicabo cumque numquam.",
        },
        {
            image: "./imgs/product2.jpg",
            title: "Washing area",
            price: "800.00",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia, fugiat alias explicabo cumque numquam.",
        },
        {
            image: "./imgs/product3.jpg",
            title: "Washing area",
            price: "800.00",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia, fugiat alias explicabo cumque numquam.",
        },
        {
            image: "./imgs/product4.jpg",
            title: "Washing area",
            price: "800.00",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia, fugiat alias explicabo cumque numquam.",
        },
        {
            image: "./imgs/product3.jpg",
            title: "Washing area",
            price: "800.00",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia, fugiat alias explicabo cumque numquam.",
        },
        {
            image: "./imgs/product4.jpg",
            title: "Washing area",
            price: "800.00",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia, fugiat alias explicabo cumque numquam.",
        },
        {
            image: "./imgs/product1.jpg",
            title: "Washing area",
            price: "800.00",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia, fugiat alias explicabo cumque numquam.",
        },
        {
            image: "./imgs/product2.jpg",
            title: "Washing area",
            price: "800.00",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia, fugiat alias explicabo cumque numquam.",
        }
    ]

    function seeMoreFunc(id) {
        let seeMore = document.querySelectorAll(".seeMore");
        const moreText = document.querySelectorAll(".more")
        
        if (seeMore[id].innerHTML == "See More") {
            moreText[id].style.display = "inline";
            seeMore[id].innerHTML = "See Less";
        }else{
            moreText[id].style.display = "none";
            seeMore[id].innerHTML = "See More";
        }
    }

  return <>

     <section className="SliderProductSection py-5">
        <div className="container-md container-fluid">
            <div className="row">
                <aside className="d-none d-md-block col-md-3 col-lg-2 p-0">
                    <ul className="navbar-nav mt-2">
                        <li className="nav-item"><a className="nav-link" href="#">Product Overview</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Our Foucs</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">News</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Inspiration & planning</a></li>
                    </ul>
                </aside>
                <section className="col-12 col-md-9 col-lg-10">
                        <div className="featureProducts">
                            
                            <div className="cards">
                                <div className="title d-flex justify-content-between">
                                    <h5 className='fw-bold'>Featured Products</h5>
                                    <p>200+ featured products</p>
                                </div>
                                <div className="row g-2 d-flex flex-row">

                                <Slider {...settings}>
                                {data.map((prod, idx) => <>{
                                    <div className="" key={idx}>
                                        <a href="#" className="cardItem rounded-2 d-flex flex-column ">
                                            <div className="img"><img src={prod.image} className="w-100" alt="product"/></div>
                                            <div className="CardDesc">
                                                <h5 className="text-center my-2">{prod.title}</h5>
                                                <div className="price d-flex justify-content-between align-items-center">
                                                    <button className="btn btn-outline-dark">View</button>
                                                    <p className="mb-0">${prod.price}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    }</>
                                    )}
                                    </Slider>
     
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </div>

      </section>

      <section className="productSection py-5">
        <div className="container">
            <div className="sectionTitle text-center mb-5"><h2 className='fw-bold'>OUR PRODUCTS</h2></div>
            <div className="products">
                <div className="row g-3">

                    {data.map((prod, idx) => <>{
                        <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="prodItem d-flex flex-column">
                            <div className="prodImg">
                                <img src={prod.image} className="w-100" alt="product"/>
                            </div>
                            <div className="descriProduct d-flex flex-column align-items-start">
                                <div className="nameProd my-1 d-flex justify-content-between align-items-center w-100">
                                    <h5 className="mb-0 fw-bold">{prod.title}</h5>
                                    <p className="mb-0 fw-bold">${prod.price}</p>
                                </div>
                                <p className="mb-3">{prod.desc && prod.desc.length > 45 ? <> <span>{prod.desc.slice(0,45)}</span> <span className='more'>{prod.desc.slice(45,)}</span>  <span onClick={()=> seeMoreFunc(idx)} className="seeMore">See More</span> </> : "" }</p>
                                <div className="btns d-flex justify-content-center w-100">
                                    <button className="btn btn-outline-dark w-75 addCart">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    }</>
                    )}
                    
                </div>
            </div>
        </div>
      </section>

      <section className='overviewSection py-5'>
        <div className="container">
            <div className="sectionTitle text-center mb-5"><h2 className='fw-bold'>Overview Products</h2></div>
            <div className="row">
                <div className="d-none d-md-block col-md-2 position-relative stickyParent"><div className="stickyWord text-center"><h4 className='text-uppercase text-muted'>Overview Products</h4></div></div>
                <div className="col-12 col-md-10">
                    <div className="row gy-lg-4 flex-column flex-lg-row">
                        <div className="col-12 col-lg-8">
                            <div className="imgy">
                                <img src="imgs/prod2.jpg" className='w-100' alt="product" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                        <div className="overDesc mt-3 mt-lg-0">
                                <p className='mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio quos, possimus vitae animi quidem deleniti facilis molestias quam neque repudiandae distinctio mollitia itaque ex, consequatur dolorum reiciendis ipsam. Facilis repellat libero assumenda alias laboriosam ipsam minus incidunt numquam maiores.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias in voluptatibus tempore error sed vitae repellendus dolore excepturi. Voluptas, assumenda?</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                        <div className="overDesc mt-3 mt-lg-0">
                                <p className='mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique, enim nihil provident iusto dolore quo nostrum tempore nam maxime ex libero porro iure accusantium!</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias in voluptatibus tempore error sed vitae repellendus dolore excepturi. Voluptas, assumenda?</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="imgy">
                                <img src="imgs/prod3.jpg" className='w-100' alt="product" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </section>

  </>
}

export default ProductSections