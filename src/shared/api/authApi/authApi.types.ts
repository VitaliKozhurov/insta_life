export type SignInRequestType = {
  email: string
  password: string
}

export type SignUpRequestType = SignInRequestType & {
  passwordConfirm: string
  username: string
}

export type ForgotPasswordRequestType = Omit<SignInRequestType, 'password'>

export type SignUpResponseType = {
  createdAt: string
  email: string
  id: string
  updatedAt: string
  username: string
}

export type CreateNewPasswordRequestType = {
  password: string
  passwordConfirmation: string
  recoveryCode: string
}

export type RequestWithCodeType = {
  code: string
}

export type LoginResponseType = {
  accessToken: string
}
