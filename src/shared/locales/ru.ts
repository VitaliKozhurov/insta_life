import { LocalesType } from './en'

export const ru: LocalesType = {
  emailConfirmation: {
    signInLink: 'Войти',
    text: 'Ваша электронная почта была подтверждена',
    title: 'Поздравляем!',
  },
  homePage: {
    test: 'Тестовое сообщение',
  },
  pageTitle: {
    signIn: 'Войти',
    signUp: 'Регистрация',
  },
  signInPage: {
    form: {
      emailInputLabel: 'Электронная почта',
      passwordInputLabel: 'Пароль',
      questionAboutPassword: 'Забыли пароль?',
      signInBtn: 'Войти',
    },
    formErrors: {
      emailVerification: 'Электронная почта должна быть в формате example@example.com',
      maxPasswordLength: 'Максимальное количество символов 20',
      minPasswordLength: 'Минимальное количество символов 6',
      passwordVerification:
        'Пароль должен содержать 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
    },
    questionAboutAccount: 'У Вас нет аккаунта?',
    signUpLink: 'Регистрация',
    title: 'Войти',
  },
  signUpPage: {
    form: {
      emailInputLabel: 'Электронная почта',
      passwordConfirmationInputLabel: 'Подтверждение пароля',
      passwordInputLabel: 'Пароль',
      policy: 'Политикой конфиденциальности',
      policyAgreement: 'Я согласен с <1>Terms of Service</1> и <2>Privacy Policy</2>',
      service: 'Условиями использования',
      signUpBtn: 'Регистрация',
      userNameInputLabel: 'Имя пользователя',
    },
    formErrors: {
      confirmPassword: 'Пароль должен совпадать',
      emailVerification: 'Электронная почта должна быть в формате example@example.com',
      maxPasswordLength: 'Максимальное количество символов 20',
      maxUserNameLength: 'Максимальное количество символов 30',
      minPasswordLength: 'Минимальное количество символов 6',
      minUserNameLength: 'Минимальное количество символов 6',
      passwordVerification:
        'Пароль должен содержать 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
      userNameVerification: 'Имя пользователя может быть из 0-9, a-z A-Z, _, -',
    },
    questionAboutAccount: 'У вас уже есть аккаунт?',
    signInLink: 'Войти',
    title: 'Регистрация',
  },
}
