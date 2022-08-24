const mobileButton = document.getElementById('header_mobile_icon');

function showMenuMobile() {
  const menuMobile = document.getElementById('header_mobile');
  const menuMobileClasses = menuMobile.classList;

  if (menuMobileClasses.contains('show')) {
    menuMobileClasses.remove('show');
    menuMobileClasses.add('hide');
  } else {
    if (menuMobileClasses.contains('hide')) {
      menuMobileClasses.remove('hide');
    }
    menuMobileClasses.add('show');
  }
}

mobileButton.addEventListener('click', showMenuMobile);
