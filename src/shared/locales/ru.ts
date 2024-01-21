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
      instructionText: (email?: string) =>
        `Мы отправили ссылку для подтверждения вашей электронной почты ${
          email ? `по адресу ${email}` : ''
        }`,
      title: 'Письмо отправлено',
    },
  },
  navBar: {
    chat: 'Мессенджер',
    create: 'Создать',
    favorites: 'Избранное',
    home: 'Главная',
    logOut: 'Выйти',
    profile: 'Мой профиль',
    search: 'Поиск',
    statistics: 'Статистика',
  },
  notFoundPage: {
    link: 'Вернуться на главную страницу',
    text: 'К сожалению, мы не смогли найти запрашиваемую страницу. Возможно, она была перемещена, удалена или никогда не существовала. Пожалуйста, убедитесь, что вы ввели правильный URL, и попробуйте еще раз.',
  },
  privacyPolicyPage: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Tortor vitae purus faucibus ornare suspendisse sed nisi. Dolor sit amet consectetur adipiscing. Massa enim nec dui nunc mattis enim ut tellus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tortor aliquam nulla facilisi cras. Elit pellentesque habitant morbi tristique senectus et netus. Nulla facilisi nullam vehicula ipsum a arcu cursus. Ut lectus arcu bibendum at varius vel pharetra. Etiam erat velit scelerisque in dictum non consectetur. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Id diam maecenas ultricies mi eget mauris pharetra. Tincidunt lobortis feugiat vivamus at augue. Non odio euismod lacinia at. Aliquet eget sit amet tellus. Auctor neque vitae tempus quam.\n' +
      'Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Nisl pretium fusce id velit ut tortor pretium. Eget arcu dictum varius duis at consectetur. Est placerat in egestas erat imperdiet sed euismod nisi porta. Scelerisque felis imperdiet proin fermentum. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Proin nibh nisl condimentum id venenatis a condimentum vitae. Massa tincidunt dui ut ornare lectus sit amet est placerat. Vel turpis nunc eget lorem dolor sed viverra ipsum. Enim ut tellus elementum sagittis. At consectetur lorem donec massa sapien faucibus et molestie. Enim sit amet venenatis urna cursus. Id velit ut tortor pretium viverra suspendisse potenti.\n' +
      'Et magnis dis parturient montes nascetur ridiculus. Donec ultrices tincidunt arcu non sodales neque. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Consequat mauris nunc congue nisi vitae. Ut tellus elementum sagittis vitae et leo duis. Dignissim sodales ut eu sem. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Et magnis dis parturient montes nascetur ridiculus mus mauris. Morbi tempus iaculis urna id. Tristique nulla aliquet enim tortor. Libero nunc consequat interdum varius sit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Facilisi nullam vehicula ipsum a arcu cursus vitae. Arcu odio ut sem nulla pharetra. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Morbi non arcu risus quis varius quam quisque id diam. Ac turpis egestas sed tempus urna. Sit amet venenatis urna cursus eget nunc. Amet consectetur adipiscing elit ut aliquam purus sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.\n' +
      'Et egestas quis ipsum suspendisse ultrices gravida dictum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Pretium viverra suspendisse potenti nullam ac tortor vitae. Lobortis elementum nibh tellus molestie nunc non blandit. Eget nunc lobortis mattis aliquam. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Quis commodo odio aenean sed adipiscing diam. Pharetra massa massa ultricies mi quis hendrerit. Et magnis dis parturient montes. Cursus metus aliquam eleifend mi in nulla posuere. Tristique senectus et netus et. A lacus vestibulum sed arcu non odio.\n' +
      'Sed elementum tempus egestas sed. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Gravida rutrum quisque non tellus orci ac. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Dolor morbi non arcu risus quis varius quam quisque. Bibendum at varius vel pharetra vel turpis nunc. A cras semper auctor neque. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Erat nam at lectus urna duis. Mauris pharetra et ultrices neque. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Justo nec ultrices dui sapien eget mi proin sed libero. Pellentesque sit amet porttitor eget dolor.\n' +
      'A diam maecenas sed enim ut. Fermentum et sollicitudin ac orci phasellus. Tincidunt vitae semper quis lectus nulla. Tincidunt dui ut ornare lectus sit amet est. Sed enim ut sem viverra aliquet eget sit. Eu augue ut lectus arcu bibendum at varius. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Varius vel pharetra vel turpis nunc eget lorem dolor. Arcu odio ut sem nulla pharetra. Bibendum neque egestas congue quisque. Facilisis volutpat est velit egestas dui. Orci nulla pellentesque dignissim enim sit amet. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Odio ut enim blandit volutpat maecenas volutpat blandit.\n' +
      'Eu mi bibendum neque egestas congue quisque egestas diam in. Neque viverra justo nec ultrices dui sapien. Congue mauris rhoncus aenean vel elit. Vitae aliquet nec ullamcorper sit. Tempus imperdiet nulla malesuada pellentesque. Sed lectus vestibulum mattis ullamcorper velit. Commodo odio aenean sed adipiscing diam. Viverra nam libero justo laoreet. Id neque aliquam vestibulum morbi blandit cursus. Vel facilisis volutpat est velit egestas dui id ornare. Feugiat nibh sed pulvinar proin.',
    title: 'Политика конфиденциальности',
  },
  profilePage: {
    general: {
      photoUploader: {
        addPhotoButton: 'Добавить фотографию профиля',
        modal: {
          errors: {
            imageType: 'Фотография должна быть в формате JPEG или PNG',
            maxSize: 'Размер фото должен быть меньше 10 Мб',
          },
          saveButton: 'Сохранить',
          selectPhotoButton: 'Добавить фотографию профиля',
          title: 'Выбрать с компьютера',
        },
      },
      profileInfoForm: {
        citySelectLabel: 'Выберете Ваш город',
        citySelectPlaceholder: 'Город',
        countrySelectLabel: 'Выберете Вашу страну',
        countrySelectPlaceholder: 'Страна',
        dateOfBirth: 'Дата рождения',
        firstNameLabel: 'Имя',
        lastNameLabel: 'Фамилия',
        saveFormButton: 'Сохранить изменения',
        textFieldLabel: 'Обо мне',
        userNameLabel: 'Имя пользователя',
      },
      profileInfoFormErrors: {
        aboutMeRegex:
          'Обо мне может быть из символов 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
        dateOfBirth: 'Пользователь младше 13 лет не может создать профиль. <1>link</1>',
        firstNameRegex: 'Имя может быть из символов A-Z a-z, А-Я а-я',
        lastNameRegex: 'Фамилия может быть из символов A-Z a-z, А-Я а-я',
        maxAboutMeLength: 'Максимальное количество символов 200',
        maxFirstNameLength: 'Максимальное количество символов 50',
        maxLastNameLength: 'Максимальное количество символов 50',
        maxUserNameLength: 'Максимальное количество символов 30',
        minFirstNameLength: 'Минимальное количество символов 1',
        minLastNameLength: 'Минимальное количество символов 1',
        minUserNameLength: 'Минимальное количество символов 6',
        userNameRegex: 'Имя пользователя может быть из символов 0-9, a-z A-Z, _, -',
      },
      profileNotifications: {
        errorSave: 'Ошибка! Сервер недоступен!',
        successfulSave: 'Ваши настройки сохранены!',
      },
    },
    tabSwitcher: {
      account: 'Управление аккаунтом',
      devices: 'Устройства',
      general: 'Общая информация',
      payments: 'Мои платежи',
    },
  },
  recaptcha: {
    errorText: 'Пожалуйста, подтвердите, что вы не робот',
  },
  registrationConfirmationPage: {
    title: 'Подтверждение регистрации',
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
  termsOfServicePage: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Tortor vitae purus faucibus ornare suspendisse sed nisi. Dolor sit amet consectetur adipiscing. Massa enim nec dui nunc mattis enim ut tellus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tortor aliquam nulla facilisi cras. Elit pellentesque habitant morbi tristique senectus et netus. Nulla facilisi nullam vehicula ipsum a arcu cursus. Ut lectus arcu bibendum at varius vel pharetra. Etiam erat velit scelerisque in dictum non consectetur. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Id diam maecenas ultricies mi eget mauris pharetra. Tincidunt lobortis feugiat vivamus at augue. Non odio euismod lacinia at. Aliquet eget sit amet tellus. Auctor neque vitae tempus quam.\n' +
      'Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Nisl pretium fusce id velit ut tortor pretium. Eget arcu dictum varius duis at consectetur. Est placerat in egestas erat imperdiet sed euismod nisi porta. Scelerisque felis imperdiet proin fermentum. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Proin nibh nisl condimentum id venenatis a condimentum vitae. Massa tincidunt dui ut ornare lectus sit amet est placerat. Vel turpis nunc eget lorem dolor sed viverra ipsum. Enim ut tellus elementum sagittis. At consectetur lorem donec massa sapien faucibus et molestie. Enim sit amet venenatis urna cursus. Id velit ut tortor pretium viverra suspendisse potenti.\n' +
      'Et magnis dis parturient montes nascetur ridiculus. Donec ultrices tincidunt arcu non sodales neque. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Consequat mauris nunc congue nisi vitae. Ut tellus elementum sagittis vitae et leo duis. Dignissim sodales ut eu sem. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Et magnis dis parturient montes nascetur ridiculus mus mauris. Morbi tempus iaculis urna id. Tristique nulla aliquet enim tortor. Libero nunc consequat interdum varius sit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Facilisi nullam vehicula ipsum a arcu cursus vitae. Arcu odio ut sem nulla pharetra. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Morbi non arcu risus quis varius quam quisque id diam. Ac turpis egestas sed tempus urna. Sit amet venenatis urna cursus eget nunc. Amet consectetur adipiscing elit ut aliquam purus sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.\n' +
      'Et egestas quis ipsum suspendisse ultrices gravida dictum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Pretium viverra suspendisse potenti nullam ac tortor vitae. Lobortis elementum nibh tellus molestie nunc non blandit. Eget nunc lobortis mattis aliquam. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Quis commodo odio aenean sed adipiscing diam. Pharetra massa massa ultricies mi quis hendrerit. Et magnis dis parturient montes. Cursus metus aliquam eleifend mi in nulla posuere. Tristique senectus et netus et. A lacus vestibulum sed arcu non odio.\n' +
      'Sed elementum tempus egestas sed. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Gravida rutrum quisque non tellus orci ac. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Dolor morbi non arcu risus quis varius quam quisque. Bibendum at varius vel pharetra vel turpis nunc. A cras semper auctor neque. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Erat nam at lectus urna duis. Mauris pharetra et ultrices neque. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Justo nec ultrices dui sapien eget mi proin sed libero. Pellentesque sit amet porttitor eget dolor.\n' +
      'A diam maecenas sed enim ut. Fermentum et sollicitudin ac orci phasellus. Tincidunt vitae semper quis lectus nulla. Tincidunt dui ut ornare lectus sit amet est. Sed enim ut sem viverra aliquet eget sit. Eu augue ut lectus arcu bibendum at varius. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Varius vel pharetra vel turpis nunc eget lorem dolor. Arcu odio ut sem nulla pharetra. Bibendum neque egestas congue quisque. Facilisis volutpat est velit egestas dui. Orci nulla pellentesque dignissim enim sit amet. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Odio ut enim blandit volutpat maecenas volutpat blandit.\n' +
      'Eu mi bibendum neque egestas congue quisque egestas diam in. Neque viverra justo nec ultrices dui sapien. Congue mauris rhoncus aenean vel elit. Vitae aliquet nec ullamcorper sit. Tempus imperdiet nulla malesuada pellentesque. Sed lectus vestibulum mattis ullamcorper velit. Commodo odio aenean sed adipiscing diam. Viverra nam libero justo laoreet. Id neque aliquam vestibulum morbi blandit cursus. Vel facilisis volutpat est velit egestas dui id ornare. Feugiat nibh sed pulvinar proin.',
    title: 'Условия использования',
  },
}
