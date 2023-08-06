export default class Validator {
    constructor(nikName) {
      this.nikName = nikName;
    }
  
    validateUsername() {
      const re = /^[a-zA-Z](?:[\w-]*)[a-zA-Z]$/;
      if (re.test(this.nikName) === true) {
        if (/\d{3}(?!(\d))/.test(this.nikName) === true) return 'Отказ: имя пользователя содержит более 3 подряд идущих цифр!';
      } else {
        return 'Отказ: имя пользователя не сответствует требованиям!';
      }
      return 'Валидация пройдена успешно!';
    }
  }