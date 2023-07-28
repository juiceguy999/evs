'use strict'

// Models Tabs
const tabItems = document.querySelectorAll('#modelsBtn')
const tabContents = document.querySelectorAll('.models__grid')

tabItems.forEach((tabItem) => {
    tabItem.addEventListener('click', (e) => {
        const tabTarget = e.currentTarget;
        const button = tabTarget.dataset.button;

        tabItems.forEach((item) => {
            item.classList.remove('models__tabs-item--active')
        })

        tabContents.forEach((item) => {
            item.classList.remove('models__grid--active')
        })

        tabTarget.classList.add('models__tabs-item--active');
        document.querySelector(`#${button}`).classList.add('models__grid--active');
    })
})

// Popup Tabs

const castingPopupTabItems = castingPopup.querySelectorAll('#popupTabBtn')
const castingPopupTabContents = castingPopup.querySelectorAll('.popup__tabs-content')
const workPopupTabItems = workPopup.querySelectorAll('#popupTabBtn')
const workPopupTabContents = workPopup.querySelectorAll('.popup__tabs-content')

castingPopupTabItems.forEach((popupTabItem) => {
    popupTabItem.addEventListener('click', (e) => {
        const tabTarget = e.currentTarget;
        const button = tabTarget.dataset.button;

        castingPopupTabItems.forEach((item) => {
            item.classList.remove('popup__tabs-btn--active')
        })

        castingPopupTabContents.forEach((item) => {
            item.classList.remove('popup__tabs-content--active')
        })

        tabTarget.classList.add('popup__tabs-btn--active');
        castingPopup.querySelector(`#${button}`).classList.add('popup__tabs-content--active');
    })
})

workPopupTabItems.forEach((popupTabItem) => {
    popupTabItem.addEventListener('click', (e) => {
        const tabTarget = e.currentTarget;
        const button = tabTarget.dataset.button;

        workPopupTabItems.forEach((item) => {
            item.classList.remove('popup__tabs-btn--active')
        })

        workPopupTabContents.forEach((item) => {
            item.classList.remove('popup__tabs-content--active')
        })

        tabTarget.classList.add('popup__tabs-btn--active');
        workPopup.querySelector(`#${button}`).classList.add('popup__tabs-content--active');
    })
})

// Models Mobile Tabs

const modelsSelect = document.querySelector('.models__mobile-select')

const selectTabItems = document.querySelectorAll('#selectBtn')
const selectTabContents = document.querySelectorAll('.mobileSlider')
const selectText = document.querySelector('#selectText')

selectTabItems.forEach((tabItem) => {
    tabItem.addEventListener('click', (e) => {
        const tabTarget = e.currentTarget;
        const button = tabTarget.dataset.button;
        selectText.innerText = tabTarget.innerText;

        selectTabContents.forEach((item) => {
            item.classList.remove('mobileSlider--active')
        })

        document.querySelector(`#${button}`).classList.add('mobileSlider--active');


    })
})

modelsSelect.addEventListener('click', (e) => {
    modelsSelect.classList.toggle('models__mobile-select--active')
})