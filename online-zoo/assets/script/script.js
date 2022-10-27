let burgerMenuBtn = document.querySelector('.burger-menu'); // кнопка бургер меню
let headerMenu = document.querySelector('.header-menu'); // сама менюшка
let closeBurgerMenuBtn = document.querySelector('.x-icon-menu__img'); // кнопка закрытия бургер меню

document.addEventListener('click', function(event) {
    let target = event.target; 

    // burger-menu
    function closeBurgerMenu() {
        headerMenu.classList.remove('showed')
        headerMenu.classList.add('hidden')
        setTimeout(function() {
            headerMenu.style.display = 'none';
        }, 500);
        for (let child of document.body.children) {
            if (child === headerMenu) {
                continue;
            }
            child.style.opacity = '';
        }
    }
    function openBurgerMenu() {
        headerMenu.style.display = ''
        setTimeout(function() {
            headerMenu.classList.remove('hidden')
            headerMenu.classList.add('showed')
        }, 150)
            
        for (let child of document.body.children) {
            if (child === headerMenu) {
                continue;
            }
            child.style.opacity = 0.1;
        }
    }
    
    if (event.target === burgerMenuBtn) { 
        openBurgerMenu();

    } else if (event.target === closeBurgerMenuBtn) {
        closeBurgerMenu();
    } else if (headerMenu.classList.contains('showed')) {
        let isHeaderMenuClicked = true;
        
        for (let headerMenuChild of headerMenu.children) {
            if (target === headerMenu) {
                isHeaderMenuClicked = false;
                break;
            } else if (target === headerMenuChild) {
                isHeaderMenuClicked = false;
                break;
            }
            for (let childOfChild of headerMenuChild.children) {
                if (target === childOfChild) {
                    isHeaderMenuClicked = false;
                    break;
                    
                } 
            }
        }

        if (isHeaderMenuClicked) {
            closeBurgerMenu();
        }

    // /burger-menu
    }

})

// carousel
/*
function hidePetFrom(n) {
    for (let i = n; i < petCardsCount; i++) {
        petCards.children[i].classList.add('hidden')
    }
}
*/

let prevBtn = document.querySelector('.button.left');
let nextBtn = document.querySelector('.button.right');

let petCards = document.querySelector('.pets__pet-cards');
let petCardsCount = petCards.children.length;

let windowWidth;
setInterval(function() {
    windowWidth = document.body.clientWidth;
/*
    if (windowWidth >= 1000) {
        hidePetFrom(6);
        petCards.children[4].classList.remove('hidden');
        petCards.children[5].classList.remove('hidden');
    } else if (windowWidth >= 320) {
        hidePetFrom(4);
    }
    */
}, 1)

prevBtn.addEventListener('click', function(event) {
    
})

nextBtn.addEventListener('click', function(event) {
    
})

// /carousel