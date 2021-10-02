// Первая задача. Проверка случайного числа.
const checkRandomNumber = (a, b) => {
  if (a >= b ) {
    return ('Неверное число. Введите число больше 0.')
  }
  return Math.floor(Math.random(a) * b);

};

console.log(checkRandomNumber(0, 10));

// Вторая задача. Проверка длины строки.
const checkString = (str, number) => {
  if (str.length >= number) {
    return ('Вы превысили допустимое число знаков')
  }
  return ('Все правильно')
}

console.log(checkString('улыбка', 5));
