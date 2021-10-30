import { createArrayWithObjects } from './data.js';

const usersPhoto = document.createDocumentFragment();
const data = createArrayWithObjects();

data.forEach((item) => {
  const link = document.createElement('a');
  const img = document.createElement('img');
  const text = document.createElement('p');
  const spanComments = document.createElement('span');
  const spanLikes = document.createElement('span');
  link.classList = 'picture';
  img.classList = 'picture__img';
  text.classList = 'picture__info';
  spanComments.classList = 'picture__comments';
  spanLikes.classList = 'picture__likes';
  img.src = item.url;
  spanComments.innerHTML = item.comments.length;
  spanLikes.innerHTML = item.likes;
  text.append(spanComments, spanLikes);
  link.append(img, text);
  usersPhoto.append(link);
});

const createUsersPhoto = () => document.querySelector('.pictures').appendChild(usersPhoto);
export {createUsersPhoto};
