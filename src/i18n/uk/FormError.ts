const FormError = {
  name: {
    required: "Ім'я обов'язкове поле!",
    length: "Ім'я повинно мати більше 1 символу",
  },
  phone: {
    required: "Телефон обов'язкове поле!",
    badPhone: 'Невірний телефон!',
    badFormat: 'Формат: +38 (099) 999-99-99.',
  },
  email: {
    badEmail: 'Невірний email!',
  },
  carYear: {
    oldYear: 'Рік повинен бути більше 1900',
    badYear: 'Невірний рік!',
  },
  message: {
    tooLong: 'Повідомлення не може бути більше 2000 символів',
  },
}

export default FormError
