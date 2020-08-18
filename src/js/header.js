const header = () => {
    ///////       HAMBURGER      /////////
    var hamburger = document.querySelector('button.hamburger');
    const menu = document.querySelector('ul .menu');
    menu.addEventListener('click', function() {
        hamburger.classList.toggle('active');
    });

    //////      DESKTOP MENU      ////////
    let shown = false;
    $('.header .desktop-menu').hide().addClass('animate__animated');

    document.querySelector('.header nav > ul .menu').addEventListener('click', () => {
        if(shown) {
            $('.header .desktop-menu').addClass('animate__fadeOut').removeClass('animate__fadeIn');
            setTimeout(() => {
                $('.header .desktop-menu').hide();
            }, 900);
        } else {
            $('.header .desktop-menu').show().removeClass('animate__fadeOut').addClass('animate__fadeIn');
        };
        shown = !shown;
    });

    let currentIndex = 4;
    let exIndex = null;

    const menuUtils = document.querySelectorAll('.header .desktop-menu .left h3');
    const menuArrows = document.querySelectorAll('.header .desktop-menu .left h3 i');
    const displayedContent = document.querySelectorAll('.header .desktop-menu .right > ul');

    menuUtils[currentIndex].style.color = 'red';
    menuArrows[currentIndex].style.opacity = 1;
    displayedContent[currentIndex].style.display = 'block';


    menuUtils.forEach((item, index) => {
        item.addEventListener('click', () => {
            if(index !== currentIndex) {
                exIndex = currentIndex;
                currentIndex = index;

                menuUtils[exIndex].style.color = '#006456';
                menuArrows[exIndex].style.opacity = 0;
                displayedContent[exIndex].style.display = 'none';

                menuUtils[currentIndex].style.color = '#F05A22';
                menuArrows[currentIndex].style.opacity = 1;
                displayedContent[currentIndex].style.display = 'block';
            }
        });
    });
    
    /////    SEARCH BAR     /////
    const searchIcon = document.querySelector('.header nav > ul .li-search > .fa-search');
    const closeIcon = document.querySelector('.header nav > ul .li-search > .fa-times');

    $('.header nav > ul .li-search > .search').hide().addClass('animate__animated');

    const closeSearchBar = () => {
        searchIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        
        $('.header nav > ul .li-search > .search').removeClass('animate__fadeInDown');    
        $('.header nav > ul .li-search > .search').addClass('animate__fadeOutUp');    
    };    

    
    searchIcon.addEventListener('click', () => {
        searchIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        
        $('.header nav > ul .li-search > .search').removeClass('animate__fadeOutUp');    
        $('.header nav > ul .li-search > .search').show().addClass('animate__fadeInDown');    
    });
    
    closeIcon.addEventListener('click', closeSearchBar);
    
    //////    MOBILE HAMBURGER    ///////
    let burgerOpen = false;
    const mobileMenu = document.querySelector('.mobile-menu');
    // $('.mobile-menu').addClass('animate__animated');
    mobileMenu.classList.add('animate__animated');

    document.querySelector('.burger.burger-arrow.burger-right').addEventListener('click', () => {
        // const toggleBurger = () => burgerOpen ?
        if(burgerOpen) {
            $('.burger.burger-arrow.burger-right').removeClass('open');
            
            mobileMenu.classList.remove('animate__rollIn');
            mobileMenu.classList.add('animate__rollOut');

            burgerOpen = !burgerOpen;
        } else {
            $('.burger.burger-arrow.burger-right').addClass('open');
            
            mobileMenu.classList.remove('animate__rollOut');
            mobileMenu.classList.add('animate__rollIn');
            mobileMenu.style.display = "flex";
            
            burgerOpen = !burgerOpen;
        }
    });
};

export default header;