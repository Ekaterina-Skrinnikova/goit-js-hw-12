import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/pixabay-api';
import createCard from './js/render-function';

const searchForm = document.querySelector('form');

const spinner = document.querySelector('span');
const galleryContainer = document.querySelector('.gallery');
const optionsLightBox = {
  captionsData: 'alt',
  captionDelay: 250,
};
const optionsIziToast = {
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  messageColor: '',
  messageSize: '25',
  backgroundColor: '#EF4040',
  balloon: true,
  theme: 'light',
  close: true,
  closeOnEscape: true,
  closeOnClick: true,
  overlay: true,
  overlayClose: true,
};
const lightBox = new SimpleLightbox('.gallery a', optionsLightBox);

searchForm.addEventListener('submit', onClickBtn);

function onClickBtn(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.query.value;

  if (searchQuery) {
    spinner.classList.add('loader');

    fetchImages(searchQuery)
      .then(data => {
        if (data.total === 0) {
          iziToast.error(optionsIziToast);
        }

        addCardMarkup(data.hits);
      })
      .catch(error => iziToast.error(optionsIziToast));
  }
  resetForm();
}

function addCardMarkup(images) {
  galleryContainer.innerHTML = createCard(images);
  spinner.classList.remove('loader');
  lightBox.refresh();
}

function resetForm() {
  searchForm.reset();
}
