const errorPopup = document.getElementById('errorPopup');
const castingPopup = document.getElementById('castingPopup');
const workPopup = document.getElementById('workPopup');
const requestPopup = document.getElementById('requestPopup')
const coursePopup = document.getElementById('coursePopup')

const errorPopupClose = document.getElementById('errorPopupClose')
const errorBtns = document.querySelectorAll('#errorBtn')
const castingPopupBtns = document.querySelectorAll('#castingPopupBtn')
const castingPopupCloseBtns = document.querySelectorAll('#castingPopupClose')
const workPopupBtns = document.querySelectorAll('#workPopupBtn')
const workPopupCloseBtns = document.querySelectorAll('#workPopupClose')
const coursePopupCloseBtn = document.getElementById('coursePopupClose')
const coursePopupBtns = document.querySelectorAll('#coursePopupBtn')
const castingPopupSubmit = document.getElementById('castingPopupSubmit')
const coursePopupSubmit = document.getElementById('coursePopupSubmit')

const pattern = /089786/;
const courseForm = document.getElementById('courseForm')
const codeInput = document.getElementById('code')

const castingForm = document.getElementById('castingForm')
const workForm = document.getElementById('workForm')




errorBtns.forEach((errorBtn) => {
    
    errorBtn.addEventListener('click', () => {
        errorPopup.style.display = 'flex';
    })

})

errorPopupClose.addEventListener('click', () => {
    errorPopup.style.display = 'none';
})

castingPopupBtns.forEach((castingPopupBtn) => {
    
    castingPopupBtn.addEventListener('click', () => {
        castingPopup.style.display = 'flex';
    })

})

castingPopupCloseBtns.forEach((castingPopupCloseBtn) => {
    
    castingPopupCloseBtn.addEventListener('click', () => {
        castingPopup.style.display = 'none';
    })

})

workPopupBtns.forEach((workPopupBtn) => {
    
    workPopupBtn.addEventListener('click', () => {
        workPopup.style.display = 'flex';
    })

})

workPopupCloseBtns.forEach((workPopupCloseBtn) => {
    
    workPopupCloseBtn.addEventListener('click', () => {
        workPopup.style.display = 'none';
    })

})



castingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    castingPopup.style.display = 'none';

    castingForm.querySelectorAll('input').forEach((input) => {
        input.value = '';
    })
    
    requestPopup.classList.add('show');

    setTimeout(() => {
        requestPopup.classList.remove('show')
    }, 5000);
})

workForm.addEventListener('submit', (e) => {
    e.preventDefault();

    workPopup.style.display = 'none';

    workForm.querySelectorAll('input').forEach((input) => {
        input.value = '';
    })
    
    requestPopup.classList.add('show');

    setTimeout(() => {
        requestPopup.classList.remove('show')
    }, 5000);
})





courseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!pattern.test(codeInput.value)) {
        codeInput.parentElement.querySelector('.popup__label').style.color = '#f00';
        codeInput.parentElement.querySelector('.popup__label').innerHTML = 'Неверный код активации!';
        codeInput.style.borderColor = '#f00';
        return;
    }

    courseForm.querySelectorAll('input').forEach((input) => {
        input.value = '';
        codeInput.parentElement.querySelector('.popup__label').style.color = '#FFFDF7';
        codeInput.parentElement.querySelector('.popup__label').innerHTML = 'Код активации';
        codeInput.style.borderColor = '#fff';
    })

    coursePopup.style.display = 'none';

    successPopup.classList.add('show');

    setTimeout(() => {
        successPopup.classList.remove('show')
    }, 5000);
})

coursePopupBtns.forEach((coursePopupBtn) => {
    
    coursePopupBtn.addEventListener('click', () => {
        coursePopup.style.display = 'flex';
    })

})

coursePopupCloseBtn.addEventListener('click', () => {
    coursePopup.style.display = 'none';
})



