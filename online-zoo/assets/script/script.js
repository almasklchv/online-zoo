let burgerMenuBtn = document.querySelector('.burger-menu');
let headerMenu = document.querySelector('.header-menu');
let closeBurgerMenuBtn = document.querySelector('.x-icon-menu__img');

document.addEventListener('click', function(event) {
    let target = event.target;

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
    
    if (event.target === burgerMenuBtn) { // burger menu
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

    } else if (event.target === closeBurgerMenuBtn) { // burger menu
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
    }

    
})