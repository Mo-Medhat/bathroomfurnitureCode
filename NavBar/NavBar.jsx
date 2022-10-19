import React from 'react'

function NavBar() {

  window.addEventListener("scroll", function () {
    const shoppingCart = document.querySelector("#shoppingCart")
    const navBar = document.querySelector(".navbar")
    const navHeight = navBar.clientHeight
    
    if (window.scrollY > 0) {
      document.querySelector("#shoppingCart").style.top = "0"
    }else if (window.scrollY === 0) {
      shoppingCart.style.top = `${navHeight}px`
    }
  })
  function openCart() {
    const shoppingCart = document.querySelector("#shoppingCart")
    const navBar = document.querySelector(".navbar")
    const navHeight = navBar.clientHeight
    shoppingCart.style.top = `${navHeight}px`
    const styleCart = getComputedStyle(shoppingCart).left

    if (styleCart === `-${shoppingCart.clientWidth}px`) {
        shoppingCart.style.left = `0px`
    }else{
      shoppingCart.style.left = `-${shoppingCart.clientWidth}px`
    }
  }

  function closeCart() {
    const shoppingCart = document.querySelector("#shoppingCart")
    shoppingCart.style.left = `-${shoppingCart.clientWidth}px`
  }

  return <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <div onClick={openCart} id="cart" className="position-relative rounded-circle mx-3 d-flex justify-content-center align-items-center">
                <span className="position-absolute rounded-circle bg-white">0</span>
                <i className="test fa-solid fa-cart-plus fa-fw"></i>
            </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex inputform">
                <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <ul className="navbar-nav me-auto ms-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Porducts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
            
          </div>
          <a className="navbar-brand" href="#">BRAND</a>

        </div>
        <div id="shoppingCart" className="cartItem">
          <div className="topCart d-flex justify-content-center align-items-center">
          <h3 className='text-center ms-auto my-3'>Shopping Cart</h3>
          <button onClick={closeCart} className="closebtn ms-auto"><i class="fa-solid fa-x"></i></button>
          </div>
          <div className="row d-flex flex-row flex-md-column">
            
            <div className="col-6 col-md-12  my-2">
            <div className="singleitem d-flex flex-column flex-lg-row justify-content-between align-items-center p-2">
              <div className="imgCart w-100 w-lg-50 text-center">
                <img src="imgs/product1.jpg" alt="prod" />
              </div>
              <div className="descCart w-100 w-lg-50 d-flex flex-column">
                <div className="title w-100 w-lg-50 d-flex justify-content-between align-items-center">
                <h5 className='my-2'>Name</h5>
                <p className='my-2'>price</p>
                </div>
                <div className="btnsCart mt-3">
                  <button className="btn btn-outline-dark w-100 mb-1">Buy</button>
                  <button className="btn btn-outline-danger w-100">Remove</button>
                </div>
              </div>
            </div>
            </div>
            
            <div className="col-6 col-md-12  my-2">
            <div className="singleitem d-flex flex-column flex-lg-row justify-content-between align-items-center p-2">
              <div className="imgCart w-100 w-lg-50 text-center">
                <img src="imgs/product1.jpg" alt="prod" />
              </div>
              <div className="descCart w-100 w-lg-50 d-flex flex-column">
                <div className="title w-100 w-lg-50 d-flex justify-content-between align-items-center">
                <h5 className='my-2'>Name</h5>
                <p className='my-2'>price</p>
                </div>
                <div className="btnsCart mt-3">
                  <button className="btn btn-outline-dark w-100 mb-1">Buy</button>
                  <button className="btn btn-outline-danger w-100">Remove</button>
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>

      </nav>
  </>
}

export default NavBar