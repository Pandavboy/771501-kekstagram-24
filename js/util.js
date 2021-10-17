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

export { checkRandomNumber, checkString};
