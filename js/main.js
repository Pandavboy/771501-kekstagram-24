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

const description = [
  'Мы в музее',
  'Гуляем с собачкой',
  'Вечерний Киев',
  'Снова в школу',
];

const names = ['Артем', 'Виктор', 'Александр', 'Олег'];
function randomObject() {
  return {
    url: `photos/${checkRandomNumber(1, 25)}.jpg`,
    description: description[checkRandomNumber(0, description.length)],
    likes: checkRandomNumber(15, 200),
    comments: messages[checkRandomNumber(0, names.length)],
    names: names[checkRandomNumber(0, names.length)],
    avatar: `img/avatar-${checkRandomNumber(0, 6)}.svg`,
  };
}


const similarArray = Array.from({length: 25}, randomObject);
const similarWithId = similarArray.map((item, index) => ({
  ...item,
  id: index + 1,
}));
