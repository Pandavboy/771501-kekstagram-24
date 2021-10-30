function getRandomPositiveInteger(num1, num2) {
  const lower = Math.ceil(Math.min(Math.abs(num1), Math.abs(num2)));
  const upper = Math.floor(Math.max(Math.abs(num1), Math.abs(num2)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const checkString = (str, number) => {
  if (str.length >= number) {
    return 'Вы превысили допустимое число знаков';
  }
  return 'Все правильно';
};

export { getRandomPositiveInteger, checkString };
