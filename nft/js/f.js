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

});