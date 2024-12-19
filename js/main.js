// Back to top button functionality
const backToTopBtn = document.querySelector('.back-to-top');

const toggleBackToTopBtn = () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

window.addEventListener('scroll', toggleBackToTopBtn);

// Top navigation menu functionality
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const activeMenu = document.querySelector('.menu-item.active');
    if (activeMenu) activeMenu.classList.remove('active');
    e.currentTarget.classList.add('active');
  });
});

// Food category filter functionality
const foodMenuList = document.querySelector('.food-item-wrap');
const foodCategoryButtons = document.querySelectorAll('.food-category button');

foodCategoryButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const activeButton = document.querySelector('.food-category button.active');
    if (activeButton) activeButton.classList.remove('active');
    e.currentTarget.classList.add('active');

    const foodType = e.currentTarget.getAttribute('data-food-type');
    foodMenuList.className = `food-item-wrap ${foodType}`;
  });
});

// On scroll animation functionality
const elToShow = document.querySelectorAll('.play-on-scroll');

const isElInViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
    (rect.top >= 0 && rect.bottom <= viewHeight)
  );
};

const animateOnScroll = () => {
  elToShow.forEach((item) => {
    if (isElInViewPort(item)) {
      item.classList.add('start');
    } else {
      item.classList.remove('start');
    }
  });

  requestAnimationFrame(animateOnScroll);
};

animateOnScroll();

// Mobile navigation functionality
const bottomNavItems = document.querySelectorAll('.mb-nav-item');
const bottomMove = document.querySelector('.mb-move-item');

bottomNavItems.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    const activeItem = document.querySelector('.mb-nav-item.active');
    if (activeItem) activeItem.classList.remove('active');
    e.currentTarget.classList.add('active');
    bottomMove.style.left = `${index * 25}%`;
  });
});
