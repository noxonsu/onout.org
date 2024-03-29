$(document).ready(function(){  
    
	const el1 = document.querySelector(".sub-1")
  const observer1 = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );
  observer1.observe(el1);

  const el2 = document.querySelector(".sub-2")
  const observer2 = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );
  observer2.observe(el2);

  const el3 = document.querySelector(".sub-3")
  const observer3 = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );
  observer3.observe(el3);

  const el4 = document.querySelector(".sub-4")
  const observer4 = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );
  observer4.observe(el4);

  const el5 = document.querySelector(".sub-5")
  const observer5 = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );
  observer5.observe(el5);


  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,    
    paginationClickable: true,
    centeredSlides: true,    
    loop: true,   
    navigation: {
      nextEl: ".reviews-next",
      prevEl: ".reviews-prev",
    },
    pagination: {
      el: ".reviews-pagination", 
      clickable: true,     
    },
    breakpoints: {      
      768: {               
        spaceBetween: 20,     
      },
      992: {               
        spaceBetween: 60,     
      },      
    },
  });
    

});