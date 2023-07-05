const search_button = document.querySelector("nav .navbar-list .search-logo");
const close_button = document.querySelector(".search-container .close-logo");
const navbar_list = document.querySelector(".navbar-list");
const search_container = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");
// opening search bar function
search_button.addEventListener("click", () => {

    navbar_list.classList.add("hide");
    search_container.classList.remove("hide");
    overlay.classList.add("show");
})
//------------------------------------------------------------------------//

// closing the search bar function
close_button.addEventListener("click", () => {

    navbar_list.classList.remove("hide");
    search_container.classList.add("hide");
    overlay.classList.remove("show");
})
overlay.addEventListener("click", () => {

    navbar_list.classList.remove("hide");
    search_container.classList.add("hide");
    overlay.classList.remove("show");
})
/////////////// menu functions /////////////

// store menu function //
const storeBtn = document.querySelector("nav .navbar-list li a.store-btn");
const storeMenu = document.querySelector(".navbar-container .store-menu");
const navbarContainer = document.querySelector(".navbar-container");
storeBtn.addEventListener("mouseenter", () => {
    storeMenu.classList.remove("hide");
    overlay.classList.add("show");
    macMenu.classList.add("hide");
    iphoneMenu.classList.add("hide");
    ipadMenu.classList.add("hide");
    watchMenu.classList.add("hide");
    airpodMenu.classList.add("hide");
    accessMenu.classList.add("hide");
})
storeMenu.addEventListener("mouseleave", () => {
    storeMenu.classList.add("hide");
    overlay.classList.remove("show");
});
// mac menu function //
const macBtn = document.querySelector("nav .navbar-list li a.mac-btn");
const macMenu = document.querySelector(".navbar-container .mac-menu");
macBtn.addEventListener("mouseenter", () => {
    macMenu.classList.remove("hide");
    overlay.classList.add("show");
    storeMenu.classList.add("hide");
    iphoneMenu.classList.add("hide");
    ipadMenu.classList.add("hide");
    watchMenu.classList.add("hide");
    airpodMenu.classList.add("hide");
    accessMenu.classList.add("hide");
})
macMenu.addEventListener("mouseleave", () => {
    macMenu.classList.add("hide");
    overlay.classList.remove("show");
});
// iphone menu function //
const iphoneBtn = document.querySelector("nav .navbar-list li a.iphone-btn");
const iphoneMenu = document.querySelector(".navbar-container .iphone-menu");
iphoneBtn.addEventListener("mouseenter", () => {
    iphoneMenu.classList.remove("hide");
    overlay.classList.add("show");
    storeMenu.classList.add("hide");
    macMenu.classList.add("hide");
    ipadMenu.classList.add("hide");
    watchMenu.classList.add("hide");
    airpodMenu.classList.add("hide");
    accessMenu.classList.add("hide");
})
iphoneMenu.addEventListener("mouseleave", () => {
    iphoneMenu.classList.add("hide");
    overlay.classList.remove("show");
   
});
// ipad menu function //
const ipadBtn = document.querySelector("nav .navbar-list li a.ipad-btn");
const ipadMenu = document.querySelector(".navbar-container .ipad-menu");
ipadBtn.addEventListener("mouseenter", () => {
    ipadMenu.classList.remove("hide");
    overlay.classList.add("show");
    storeMenu.classList.add("hide");
    macMenu.classList.add("hide");
    iphoneMenu.classList.add("hide");
    watchMenu.classList.add("hide");
    airpodMenu.classList.add("hide");
    accessMenu.classList.add("hide");
})
iphoneMenu.addEventListener("mouseleave", () => {
    ipadMenu.classList.add("hide");
    overlay.classList.remove("show");  
});
// watch menu function //
const watchBtn = document.querySelector("nav .navbar-list li a.watch-btn");
const watchMenu = document.querySelector(".navbar-container .watch-menu");
watchBtn.addEventListener("mouseenter", () => {
    watchMenu.classList.remove("hide");
    overlay.classList.add("show");
    storeMenu.classList.add("hide");
    macMenu.classList.add("hide");
    iphoneMenu.classList.add("hide");
    ipadMenu.classList.add("hide");
    airpodMenu.classList.add("hide");
    accessMenu.classList.add("hide");
})
watchMenu.addEventListener("mouseleave", () => {
    watchMenu.classList.add("hide");
    overlay.classList.remove("show");  
});
// airpod menu function //
const airpodBtn = document.querySelector("nav .navbar-list li a.airpod-btn");
const airpodMenu = document.querySelector(".navbar-container .airpod-menu");
airpodBtn.addEventListener("mouseenter", () => {
    airpodMenu.classList.remove("hide");
    overlay.classList.add("show");
    storeMenu.classList.add("hide");
    macMenu.classList.add("hide");
    iphoneMenu.classList.add("hide");
    ipadMenu.classList.add("hide");
    watchMenu.classList.add("hide");
    accessMenu.classList.add("hide");
})
airpodMenu.addEventListener("mouseleave", () => {
    airpodMenu.classList.add("hide");
    overlay.classList.remove("show");  
});
// accessories menu function //
const accessBtn = document.querySelector("nav .navbar-list li a.access-btn");
const accessMenu = document.querySelector(".navbar-container .access-menu");
accessBtn.addEventListener("mouseenter", () => {
    accessMenu.classList.remove("hide");
    overlay.classList.add("show");
    storeMenu.classList.add("hide");
    macMenu.classList.add("hide");
    iphoneMenu.classList.add("hide");
    ipadMenu.classList.add("hide");
    watchMenu.classList.add("hide");
    airpodMenu.classList.add("hide");
})
accessMenu.addEventListener("mouseleave", () => {
    accessMenu.classList.add("hide");
    overlay.classList.remove("show");  
});
// support menu function //
const supportBtn = document.querySelector("nav .navbar-list li a.support-btn");
const supportMenu = document.querySelector(".navbar-container .support-menu");
supportBtn.addEventListener("mouseenter", () => {
    supportMenu.classList.remove("hide");
    overlay.classList.add("show");
    storeMenu.classList.add("hide");
    macMenu.classList.add("hide");
    iphoneMenu.classList.add("hide");
    ipadMenu.classList.add("hide");
    watchMenu.classList.add("hide");
    airpodMenu.classList.add("hide");
    accessMenu.classList.add("hide");
})
supportMenu.addEventListener("mouseleave", () => {
    supportMenu.classList.add("hide");
    overlay.classList.remove("show");  
});
// bag menu function //
const bagBtn = document.querySelector("nav .navbar-list .bag-logo");
const bagMenu = document.querySelector(".navbar-container .bag-menu");
bagBtn.addEventListener("click", ()=>{
    bagMenu.classList.toggle("hide");   
});
///////////////////////////////////////////////////////////h
// mobile version //

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".navbar-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
    mobileStoreMenu.classList.remove("show");
    overlay.classList.toggle("show");

});

const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".navbar-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");
searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    navbar_list.classList.add("move-down");
    mobileStoreMenu.classList.remove("show");
})
cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    navbar_list.classList.remove("move-down");
})

// mobile store menu //
const mobileStoreMenu = document.querySelector(".mobile-store-menu");
const backToMenu = document.querySelector(".mobile-store-menu .back-to-menu a i");

storeBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        mobileStoreMenu.classList.add("show");
    }
});

backToMenu.addEventListener("click", () => {
    mobileStoreMenu.classList.remove("show");
})
// mobile mac menu //
const mobileMacMenu = document.querySelector(".mobile-mac-menu");
const macToMenu = document.querySelector(".mobile-mac-menu .mac-to-menu a i");

macBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        mobileMacMenu.classList.add("show");
    }
});

macToMenu.addEventListener("click", () => {
        mobileMacMenu.classList.remove("show");
})

// slideshow animation ///

const showcase = document.querySelector(".showcase");
const slideBox = document.querySelector(".slide-box");
const slideBoxMobile = document.querySelector(".slide-box-mobile");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const interval = 5000;


// slides class get from slide class //

let slides = document.querySelectorAll(".slide");
let mobileSlides = document.querySelectorAll(".slide-mobile");
let index = 1;
let slideId;

// clones for first and last img //

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
const mobilefirstClone = mobileSlides[0].cloneNode(true);
const mobilelastClone = mobileSlides[mobileSlides.length - 1].cloneNode(true);

// alot id for clones //

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
mobilefirstClone.id = 'first-mobile-clone';
mobilelastClone.id = 'last-mobile-clone';

// append & prepend clones //

slideBox.append(firstClone);
slideBox.prepend(lastClone);
slideBoxMobile.append(mobilefirstClone);
slideBoxMobile.prepend(mobilelastClone);

// place order of slides to first //

const slidewidth = slides[index].clientWidth;
slideBox.style.transform = `translateX(${-slidewidth * index}px)`;

const mobileSlideWidth = mobileSlides[index].clientWidth;
slideBoxMobile.style.transform = `translateX(${-mobileSlideWidth * index}px)`;

// dot changing process//
const dots = document.querySelectorAll(".dots-list li");
document.addEventListener("DOMContentLoaded", () => {
    dots[0].classList.add("active");
  });
  
const updateDot = (index)=>{
    dots.forEach((dot,i) => {
     if(i === index - 1){
        dot.classList.add("active");
        dot.style.color = "#1b1b1b";
     }
     else{
        dot.classList.remove("active");
        dot.style.color = "#616161"; 
     }
    })
}

// transition effct for slides //
  
const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, interval)
}
const getslides = () => document.querySelectorAll(".slide");
const getSlidesMobile = () => document.querySelectorAll(".slide-mobile");
const getdots = () => document.querySelectorAll("dot");
slideBox.addEventListener('transitionend', () => {
    slides = getslides();
    if (slides[index].id === firstClone.id) {
        slideBox.style.transition = 'none';
        index = 1;
        slideBox.style.transform = `translateX(${-slidewidth * index}px)`;
    }

    if (slides[index].id === lastClone.id) {
        slideBox.style.transition = 'none';
        index = slides.length - 2;
        slideBox.style.transform = `translateX(${-slidewidth * index}px)`;
    }
    updateDot(index);
})
// mobile trasition effects //
slideBoxMobile.addEventListener('transitionend', () => {
    mobileSlides = getSlidesMobile();
    if (mobileSlides[index].id === mobilefirstClone.id) {
        slideBoxMobile.style.transition = 'none';
        index = 1;
        slideBoxMobile.style.transform = `translateX(${-mobileSlideWidth * index}px)`;
    }

    if (mobileSlides[index].id === mobilelastClone.id) {
        slideBoxMobile.style.transition = 'none';
        index = mobileSlides.length - 2;
        slideBoxMobile.style.transform = `translateX(${-mobileSlideWidth * index}px)`;
    }
    updateDot(index);
})

moveToNextSlide = () => {
    slides = getslides();
    if (index >= slides.length - 1) return;
    if (index >= mobileSlides.length - 1)return;
    index++;
    slideBox.style.transform = `translateX(${-slidewidth * index}px)`;
    slideBox.style.transition = '0.7s';
    slideBoxMobile.style.transform = `translateX(${-mobileSlideWidth * index}px)`;
    slideBoxMobile.style.transition = '0.7s'
    updateDot(index);
}
moveToPrevSlide = () => {
    if (index <= 0) return;
    index--;
    slideBox.style.transform = `translateX(${-slidewidth * index}px)`;
    slideBox.style.transition = '0.7s';
    slideBoxMobile.style.transform = `translateX(${-mobileSlideWidth * index}px)`;
    slideBoxMobile.style.transition = '0.7s';
    updateDot(index);
}

// prev button & next button //

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPrevSlide);

// button for slideshow //
document.addEventListener("DOMContentLoaded", () => {
    const playPauseBtn = document.querySelector(".dots-pause .pause-btn");
    const pauseBtn = playPauseBtn.querySelector(".pause");
    const playBtn = playPauseBtn.querySelector(".play");

    playBtn.addEventListener("click", () => {
        playPauseBtn.classList.remove("run");
        clearInterval(slideId);
    })

    pauseBtn.addEventListener("click", () => {
        playPauseBtn.classList.add("run");
        startSlide();
    })
    
})
// dots animation //
const dot1 = document.querySelector(".dots-list .dot-1");
const dot2 = document.querySelector(".dots-list .dot-2");
const dot3 = document.querySelector(".dots-list .dot-3");
const dot4 = document.querySelector(".dots-list .dot-4");
const dot5 = document.querySelector(".dots-list .dot-5");

// dots click slide animation //

dot1.addEventListener("click",()=> {
    slides = getslides();
    mobileSlides = getslides();
    index = 1;
    slideBox.style.transform = `translateX(${-slidewidth * index}px)`;
    slideBox.style.transition = '0.7s';
    slideBoxMobile.style.transform = `translateX(${-mobileSlideWidth * index}px)`;
    slideBoxMobile.style.transition = '0.7s';
    updateDot(index);
})
dot2.addEventListener("click",()=> {
    slides = getslides();
    mobileSlides = getslides();
    index = 2;
    slideBox.style.transform = `translateX(${-slidewidth * index}px)`;
    slideBox.style.transition = '0.7s';
    slideBoxMobile.style.transform = `translateX(${-mobileSlideWidth * index}px)`;
    slideBoxMobile.style.transition = '0.7s';
    updateDot(index);
})
dot3.addEventListener("click",()=> {
    slides = getslides();
    mobileSlides = getslides();
    index = 3;
    slideBox.style.transform = `translateX(${-slidewidth * index}px)`;
    slideBox.style.transition = '0.7s';
    slideBoxMobile.style.transform = `translateX(${-mobileSlideWidth * index}px)`;
    slideBoxMobile.style.transition = '0.7s';
    updateDot(index);
})
dot4.addEventListener("click",()=> {
    slides = getslides();
    mobileSlides = getslides();
    index = 4;
    slideBox.style.transform = `translateX(${-slidewidth * index}px)`;
    slideBox.style.transition = '0.7s';
    slideBoxMobile.style.transform = `translateX(${-mobileSlideWidth * index}px)`;
    slideBoxMobile.style.transition = '0.7s';
    updateDot(index);
})
dot5.addEventListener("click",()=> {
    slides = getslides();
    mobileSlides = getslides();
    index = 5;
    slideBox.style.transform = `translateX(${-slidewidth * index}px)`;
    slideBox.style.transition = '0.7s';
    slideBoxMobile.style.transform = `translateX(${-mobileSlideWidth * index}px)`;
    slideBoxMobile.style.transition = '0.7s';
    updateDot(index);
})
// dots click slide color animation //

startSlide();
