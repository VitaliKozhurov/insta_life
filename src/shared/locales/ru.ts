import { LocalesType } from './en'

export const ru: LocalesType = {
  homePage: {
    test: 'Тестовое сообщение',
  },
  signUpPage: {
    form: {
      emailInputLabel: 'Электронная почта',
      passwordConfirmationInputLabel: 'Подтверждение пароля',
      passwordInputLabel: 'Пароль',
      policyAgreement: 'Я согласен с <1>Terms of Service</1> и <2>Privacy Policy</2>',
      signInBtn: 'Регистрация',
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
