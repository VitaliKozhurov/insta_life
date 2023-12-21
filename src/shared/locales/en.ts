export const en = {
  createNewPasswordPage: {
    form: {
      createNewPasswordBtn: 'Create new password',
      instructionAboutPasswordLength: 'Your password must be between 6 and 20 characters',
      newPasswordInputLabel: 'New Password',
      passwordConfirmationInputLabel: 'Password confirmation',
    },
    formErrors: {
      confirmPassword: 'Password must match',
      maxPasswordLength: 'Maximum number of characters 20',
      minPasswordLength: 'Minimum number of characters 6',
      passwordVerification:
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
    },
    title: 'Create New Password',
  },
  emailConfirmation: {
    signInLink: 'Sign In',
    text: 'Your email has been confirmed',
    title: 'Congratulations!',
  },
  expiredLink: {
    resendActionButton: 'Resend verification link',
    text: 'Looks like the verification link has expired. Not to worry, we can send the link again',
    title: 'Email verification link expired',
  },
  forgotPasswordPage: {
    form: {
      buttonTextAfterSendLink: 'Send Link Again',
      buttonTextBeforeSendLink: 'Send Link',
      checkForRobot: 'I’m not a robot',
      emailInputLabel: 'Email',
      instructionText: 'Enter your email address and we will send you further instructions ',
      link: 'Back to Sign In',
      sendLinkText:
        'The link has been sent by email. \nIf you don’t receive an email send link again',
    },
    formErrors: { emailVerification: 'The email must match the format example@example.com' },
    title: 'Forgot Password',
  },
  header: {
    signInLink: 'Log in',
    signUpLink: 'Sign up',
  },
  homePage: { test: 'Test message' },
  modals: {
    modalOnEmail: {
      button: 'OK',
      instructionText: (email?: string) =>
        `We have sent a link to confirm your email ${email ? `to ${email}` : ''}`,
      title: 'Email sent',
    },
  },
  navBar: {
    chat: 'Messenger',
    create: 'Create',
    favorites: 'Favorites',
    home: 'Home',
    logOut: 'Log Out',
    profile: 'My Profile',
    search: 'Search',
    statistics: 'Statistics',
  },
  pageTitle: {
    createNewPassword: 'Create New Password',
    forgotPassword: 'Forgot Password',
    signIn: 'Sign In',
    signUp: 'Sign Up',
  },
  recaptcha: {
    errorText: 'Please verify that you are not a robot',
  },
  registrationConfirmationPage: {
    title: 'Registration confirmation',
  },
  signInPage: {
    form: {
      emailInputLabel: 'Email',
      passwordInputLabel: 'Password',
      questionAboutPassword: 'Forgot Password?',
      signInBtn: 'Sign In',
    },
    formErrors: {
      emailVerification: 'The email must match the format example@example.com',
      maxPasswordLength: 'Maximum number of characters 20',
      minPasswordLength: 'Minimum number of characters 6',
      passwordVerification:
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
    },
    questionAboutAccount: 'Don’t have an account?',
    signUpLink: 'Sign Up',
    title: 'Sign In',
  },
  signUpPage: {
    form: {
      emailInputLabel: 'Email',
      passwordConfirmationInputLabel: 'Password confirmation',
      passwordInputLabel: 'Password',
      policy: 'Privacy policy',
      policyAgreement: 'I agree to the <1>Terms of Service</1> and <2>Privacy Policy</2>',
      service: 'Terms of Service',
      signUpBtn: 'Sign Up',
      userNameInputLabel: 'Username',
    },
    formErrors: {
      confirmPassword: 'Password must match',
      emailVerification: 'The email must match the format example@example.com',
      maxPasswordLength: 'Maximum number of characters 20',
      maxUserNameLength: 'Maximum number of characters 30',
      minPasswordLength: 'Minimum number of characters 6',
      minUserNameLength: 'Minimum number of characters 6',
      passwordVerification:
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
      userNameVerification: 'Username may contain 0-9, a-z A-Z, _, -',
    },
    questionAboutAccount: 'Do you have an account?',
    signInLink: 'Sign In',
    title: 'Sign Up',
  },
}

export type LocalesType = typeof en
