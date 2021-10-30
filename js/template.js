import { createArrayWithObjects } from './data.js';

const list = document.createDocumentFragment('ul');
const data = createArrayWithObjects();

data.forEach((item) => {
  const li = document.createElement('li');
  const link = document.createElement('a');
  const img = document.createElement('img');
  const text = document.createElement('p');
  const spanComments = document.createElement('span');
  const spanLikes = document.createElement('span');
  li.classList = 'picture__list';
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
  li.append(link);
  list.append(li);
});

const createList = () => document.querySelector('.pictures').appendChild(list);
export {createList};
