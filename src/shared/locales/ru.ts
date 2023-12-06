import { LocalesType } from './en'

export const ru: LocalesType = {
  createNewPasswordPage: {
    form: {
      createNewPasswordBtn: 'Создать новый пароль',
      instructionAboutPasswordLength: 'Ваш пароль должен содержать от 6 до 20 символов',
      newPasswordInputLabel: 'Новый пароль',
      passwordConfirmationInputLabel: 'Подтверждение пароля',
    },
    formErrors: {
      confirmPassword: 'Пароли должны совпадать',
      maxPasswordLength: 'Максимальное количество символов 20',
      minPasswordLength: 'Минимальное количество символов 6',
      passwordVerification:
        'Пароль должен содержать 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
    },
    title: 'Создать новый пароль',
  },
  emailConfirmation: {
    signInLink: 'Войти',
    text: 'Ваша электронная почта была подтверждена',
    title: 'Поздравляем!',
  },
  expiredLink: {
    resendActionButton: 'Повторно отправить ссылку для подтверждения',
    text: 'Похоже, срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз',
    title: 'Срок действия ссылки для подтверждения электронной почты истек',
  },
  forgotPasswordPage: {
    form: {
      buttonTextAfterSendLink: 'Отправить ссылку еще раз',
      buttonTextBeforeSendLink: 'Отправить ссылку',
      checkForRobot: 'Я не робот',
      emailInputLabel: 'Электронная почта',
      instructionText: 'Введите свой адрес электронной почты и мы вышлем Вам дальнейшие инструкции',
      link: 'Вернуться для входа в систему',
      sendLinkText: `Ссылка была отправлена по электронной почте. \nЕсли вы не получили письмо, отправьте ссылку еще раз`,
    },
    formErrors: {
      emailVerification: 'Электронная почта должна быть в формате example@example.com',
    },
    title: 'Забыли пароль',
  },
  header: {
    signInLink: 'Войти',
    signUpLink: 'Зарегестрироваться',
  },
  homePage: {
    test: 'Тестовое сообщение',
  },
  modals: {
    modalOnEmail: {
      button: 'Хорошо',
      instructionText: (email: string) =>
        `Мы отправили ссылку для подтверждения вашей электронной почты по адресу ${email}`,
      title: 'Письмо отправлено',
    },
  },
  pageTitle: {
    createNewPassword: 'Создание нового пароля',
    forgotPassword: 'Забыли пароль',
    signIn: 'Войти',
    signUp: 'Регистрация',
  },
  recaptcha: {
    errorText: 'Пожалуйста, подтвердите, что вы не робот',
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
