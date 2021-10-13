// Первая задача. Проверка случайного числа.
const checkRandomNumber = (num1, num2) => {
  if (num1 >= num2 ) {
    return ('Неверное число. Введите число больше 0.');
  }
  return Math.floor(Math.random(num1) * num2);

};

checkRandomNumber(0, 10);

// Вторая задача. Проверка длины строки.
const checkString = (str, number) => {
  if (str.length >= number) {
    return ('Вы превысили допустимое число знаков');
  }
  return ('Все правильно');
};

checkString('улыбка', 5);

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const descriptions = [
  'Мы в музее',
  'Гуляем с собачкой',
  'Вечерний Киев',
  'Снова в школу',
];
const names = ['Артем', 'Виктор', 'Александр', 'Олег'];
const arrayLength = 25;
const commentsLength = 3;
const createEmptyObject = () => ({});
const arrayWithEmptyObjects = Array.from({length: arrayLength}, createEmptyObject);
const commentsWithEmptyObjects = Array.from({length: commentsLength}, createEmptyObject);
const createComments = () => commentsWithEmptyObjects.map((item, index) => ({
  id: index + 1,
  avatar: `img/avatar-${checkRandomNumber(0, 6)}.svg`,
  name: names[checkRandomNumber(0, names.length)],
  message: messages[checkRandomNumber(0, names.length)],
}));

const createArrayWithObjects = () => arrayWithEmptyObjects.map((item, index) => ({
  id: index + 1,
  comments: createComments(),
  url: `photos/${checkRandomNumber(1, 25)}.jpg`,
  description: descriptions[checkRandomNumber(0, descriptions.length)],
  likes: checkRandomNumber(15, 200),
}));
createArrayWithObjects();


