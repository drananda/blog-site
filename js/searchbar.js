const search=document.querySelector('.search .search-navigation img');
search.addEventListener('click', function(){
    document.querySelector('.search .search-dropdown').classList.toggle('active');
});