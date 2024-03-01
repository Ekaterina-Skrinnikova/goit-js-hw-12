import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/pixabay-api';
import createCard from './js/render-function';
import axios from 'axios';

const searchForm = document.querySelector('form');
const loadBtn = document.querySelector('.load-btn');
const spinner = document.querySelector('span');
const galleryContainer = document.querySelector('.gallery');
const optionsLightBox = {
  captionsData: 'alt',
  captionDelay: 250,
};
const optionsIziToastSearch = {
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
const optionsIziToastLoadMore = {
  message: "We're sorry, but you've reached the end of search results.",
  messageColor: '',
  messageSize: '25',
  backgroundColor: '#EF4040',
  balloon: true,
  theme: 'light',
  position: 'topRight',
  close: true,
  closeOnEscape: true,
  closeOnClick: true,
  overlay: true,
  overlayClose: true,
  overlayColor: 'rgba(0, 0, 0, 0.3)',
  transitionIn: 'fadeInUp',
};
const lightBox = new SimpleLightbox('.gallery a', optionsLightBox);

const perPage = 15;
let currentQuery;
let currentPage;

searchForm.addEventListener('submit', onSubmitBtn);
loadBtn.addEventListener('click', onClickLoadBtn);

hideLoadBtn();

async function onSubmitBtn(e) {
  e.preventDefault();
  addLoader();
  // очищаємо контейнер перед новим запитом
  resetPage();
  // отримуємо значення з інпут
  const searchQuery = e.currentTarget.elements.query.value.trim();

  if (searchQuery) {
    // addLoader();
    try {
      // отримуємо об'єкт з картинками
      const images = await fetchImages(searchQuery, 1, perPage);
      console.log(images);

      if (images.total === 0) {
        resetForm();
        hideLoadBtn();
        deleteLoader();
        return iziToast.error(optionsIziToastSearch);
      } else if (images.totalHits <= perPage) {
        addCardMarkup(images.hits);
        hideLoadBtn();
        deleteLoader();
      } else {
        // рендеремо картки
        addCardMarkup(images.hits);
        visibleLoadBtn();
        deleteLoader();
        currentQuery = searchQuery;
        currentPage = 1;
      }
    } catch (error) {
      hideLoadBtn();
      deleteLoader();
      iziToast.error(optionsIziToastSearch);
    }
  }
  resetForm();
  deleteLoader();
}

async function onClickLoadBtn() {
  addLoader();
  hideLoadBtn();
  try {
    currentPage += 1;
    const images = await fetchImages(currentQuery, currentPage, perPage);
    const totalPage = Math.ceil(images.totalHits / perPage);

    if (currentPage === totalPage) {
      deleteLoader();
      return iziToast.error(optionsIziToastLoadMore);
    }
    addCardMarkup(images.hits);

    // робимо прокрутку екрана пр натисканні кнопки
    const cardElement = document.querySelector('.gallery-image');
    // отримуємо за допомогою метода об'єкт з властивостями елемента та вибираємо висоту
    const heightCard = cardElement.getBoundingClientRect().height;
    const heightScroll = 2 * heightCard;
    window.scrollBy({
      top: heightScroll,
      behavior: 'smooth',
    });
    deleteLoader();
    visibleLoadBtn();
  } catch (error) {
    deleteLoader();
    iziToast.error(optionsIziToastLoadMore);
  }
}

function addCardMarkup(images) {
  galleryContainer.insertAdjacentHTML('beforeend', createCard(images));
  deleteLoader();
  lightBox.refresh();
}

function resetForm() {
  searchForm.reset();
}

function resetPage() {
  galleryContainer.innerHTML = '';
}

function hideLoadBtn() {
  loadBtn.classList.add('is-hidden');
}

function visibleLoadBtn() {
  loadBtn.classList.remove('is-hidden');
}

function addLoader() {
  spinner.classList.add('loader');
}

function deleteLoader() {
  spinner.classList.remove('loader');
}
