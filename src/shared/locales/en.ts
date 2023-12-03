export const en = {
  homePage: { test: 'Test message' },
  signInPage: {
    form: {
      emailInputLabel: 'Email',
      passwordInputLabel: 'Password',
      questionAboutPassword: 'Forgot Password?',
      signInBtn: 'Sign Ip',
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
      policyAgreement: 'I agree to the <1>Terms of Service<1> and <2>Privacy Policy<2>',
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
