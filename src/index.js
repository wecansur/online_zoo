import './sass/index.scss';

const socialMediaLinks = document.querySelectorAll('.social-media-link');
const socialMediaEllipses = document.querySelectorAll('.s-m-ellipse');
const socialMediaTexts = document.querySelectorAll('.s-m-text');
const socialMediaImgs = document.querySelectorAll('.social-media-img');

const addHoverSocialMediaLink = (linkNum) => {
    socialMediaEllipses[Number(linkNum)].classList.add('s-m-ellipse-hover');
    socialMediaTexts[Number(linkNum)].classList.add('s-m-text-hover');
}

const removeHoverSocialMediaLink = (linkNum) => {
    socialMediaEllipses[Number(linkNum)].classList.remove('s-m-ellipse-hover');
    socialMediaTexts[Number(linkNum)].classList.remove('s-m-text-hover');
}

socialMediaLinks.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
        addHoverSocialMediaLink(event.target.id[0]);
    })
});

socialMediaLinks.forEach((item) => {
    item.addEventListener('mouseout', (event) => {
        removeHoverSocialMediaLink(event.target.id[0]);
    })
});

socialMediaImgs.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
        addHoverSocialMediaLink(event.target.id[0]);
    })
});

socialMediaImgs.forEach((item) => {
    item.addEventListener('mouseout', (event) => {
        removeHoverSocialMediaLink(event.target.id[0]);
    })
});

const email = document.querySelector('.input-email');
email.addEventListener('input', () => {
    email.value = window.outerWidth;
})

//1425