const modalClose=document.querySelector('.modal .modal-close');
modalClose.addEventListener('click', function(){
    document.querySelector('.modal').style.display='none';
});
const btnEdit=document.querySelector('#account-profile .biodata .btn-edit');
btnEdit.addEventListener('click', function(){
    document.querySelector('.modal').style.display='block';
});
const btnEditSubmit=document.querySelector('.modal .form-group button');
const checkSendEmail=document.querySelector('.modal .form-group .email-confirm-check');
checkSendEmail.addEventListener('input', function(){
    if(checkSendEmail.checked==true){
        btnEditSubmit.removeAttribute('disabled');
    }else{
        btnEditSubmit.setAttribute('disabled', true);
    }
});