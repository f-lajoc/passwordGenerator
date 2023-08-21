// self invoking function
(function () {
  const darkToggle = document.querySelector('.toggle-dark');


// eventListener
  darkToggle.addEventListener('click', (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle('dark');
    
  })

})();
//<i class="fa-solid fa-moon"></i>;