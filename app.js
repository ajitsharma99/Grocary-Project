// Search Button
var searchForm = document.querySelector(".search_form");

var searchBtn = document.querySelector("#search_btn");

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");

  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  nabvar.classList.remove("active")

}
// Shopping cart
var shoppingCart = document.querySelector(".shopping_card");

var cartBtn = document.querySelector("#cart_btn");

cartBtn.onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  nabvar.classList.remove("active")

}
// -------Login Form------
var loginForm = document.querySelector(".login_form");

var loginBtn = document.querySelector("#login_btn");

loginBtn.onclick = () => {
  loginForm.classList.toggle("active")

  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  nabvar.classList.remove("active")

}

// Navbar menu buttton 
var nabvar = document.querySelector(".navbar");

var menuBtn = document.querySelector("#menu_btn");

menuBtn.onclick = () => {
  nabvar.classList.toggle("active")
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
}


window.onscroll = () => {
  nabvar.classList.remove("active")
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
}



var swiper = new Swiper(".products_slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    
    },
  },
});


var swiper = new Swiper(".review_slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    
    },
  },
});