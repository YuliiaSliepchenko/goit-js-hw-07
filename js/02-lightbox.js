import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);
const createImg = ({preview, original, description})=>`
<div class="gallery__item">
<a class="gallery__item" 
href="${original}">
<img class="gallery__image"
 src="${preview}" 
 alt="${description}" />
</a>
</div>`;
console.log(createImg);

const galleryElsImg = galleryItems.map(createImg).join("");
console.log(galleryElsImg);

galleryEl.insertAdjacentHTML("beforeend",galleryElsImg);
galleryEl.addEventListener("click",onImgContainer)
function onImgContainer(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    console.log(evt.target);
   
    new SimpleLightbox(".gallery a", {
        captionSelector: 'img',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        scrollZoom: false,
       });}