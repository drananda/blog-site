//tombol expand untuk user account management dan settings
const navExpand=document.querySelector('#navigation .login .expand img');

// dropdown user account management dan settings
const loginDropdownBlock=document.querySelector('#navigation .login .dropdown-user-account');

// saat tombol expand di klik, dropdown akan diberi kelas active atau dihilangkan
navExpand.addEventListener('click', function(){
    navExpand.classList.toggle('upside-down');
    loginDropdownBlock.classList.toggle('active');
});

// tombol menu hamburger
const menu=document.querySelector('#navigation .menu');

// dropdown menu navigasi
const navigationMenuDropdown=document.querySelector('#navigation .navigation-list');

// saat tombol menu hamburger diklik, dropdown menu navigasi akan diberi kelas active atau dihilangkan
menu.addEventListener('click', function(){
    navigationMenuDropdown.classList.toggle('active');
});



    