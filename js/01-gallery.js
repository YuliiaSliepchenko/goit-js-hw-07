import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);
const createImg = ({preview, original, description})=>`
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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
   
const instance = basicLightbox.create(`
<img src="${evt.target.dataset.source}" width="800" height="600">`);
instance.show();
}









