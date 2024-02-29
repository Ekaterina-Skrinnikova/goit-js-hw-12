// export default function fetchImages(searchQuery) {
//   const URL_NAME = 'https://pixabay.com/api/';
//   const KEY = '42469409-3f592d4c2a8b117d2f80b97d4';
//   const LINK = `${URL_NAME}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

//   return fetch(LINK).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
import axios from 'axios';

export default async function fetchImages(searchQuery, amountPage, perPage) {
  const KEY = '42469409-3f592d4c2a8b117d2f80b97d4';
  // формуємо параметри запиту
  const params = new URLSearchParams({
    key: KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: amountPage,
    per_page: perPage,
  });

  // отримаємо результат запиту
  const response = await axios.get(`https://pixabay.com/api/?${params}`);

  // повертаємо данні запиту
  return response.data;
}
