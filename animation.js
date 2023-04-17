window.addEventListener("load", () => {
  const movies = document.querySelectorAll("main ul li");
  movies.forEach(movie => {
    movie.addEventListener("mouseover", () => {
      movie.classList.add("animate__animated", "animate__pulse");
    });
    
    movie.addEventListener("mouseout", () => {
      movie.classList.remove("animate__animated", "animate__pulse");
    });
  });
})

function animateOnScroll(element) {
  const animateClass = 'animate';
  const windowHeight = window.innerHeight;

  function animate() {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight) {
      element.classList.add(animateClass);
      window.removeEventListener('scroll', animate);
    }
  }

  window.addEventListener('scroll', animate);
  animate();
}

