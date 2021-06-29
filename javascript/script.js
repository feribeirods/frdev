var btn = document.querySelector("#back-to-top"); 
btn.addEventListener("click", function() { window.scrollTo(0, 0); });


const menuBtn = document.querySelector('.menu-btn')
        const menuTest = document.querySelector('.menu-hide')
        let menuOpen = false


        menuBtn.addEventListener('click', () => {
           if (!menuOpen) {
               menuBtn.classList.add('open')
               menuTest.classList.add('menu-show')
               menuOpen = true
           } else {
               menuBtn.classList.remove('open')
               menuTest.classList.remove('menu-show')
               menuOpen = false
           }
        })