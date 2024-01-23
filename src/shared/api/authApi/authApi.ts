import { baseApi } from '../baseApi/baseApi'
import {
  CreateNewPasswordRequestType,
  ForgotPasswordRequestType,
  LoginResponseType,
  RequestWithCodeType,
  SignInRequestType,
  SignUpRequestType,
  SignUpResponseType,
} from './authApi.types'

export const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createNewPassword: build.mutation<void, CreateNewPasswordRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/new-password',
      }),
    }),
    forgotPassword: build.mutation<void, ForgotPasswordRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/password-recovery',
      }),
    }),
    loginByGoogle: build.query<LoginResponseType, RequestWithCodeType>({
      query: ({ code }) => ({
        method: 'GET',
        params: { code },
        url: 'auth/google',
      }),
    }),
    logout: build.mutation<void, void>({
      invalidatesTags: ['Me'],
      query: () => ({
        method: 'POST',
        url: 'auth/logout',
      }),
    }),
    passwordRecoveryResending: build.mutation<void, RequestWithCodeType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/password-recovery-resending',
      }),
    }),
    registrationConfirmation: build.mutation<void, RequestWithCodeType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/registration-confirmation',
      }),
    }),
    registrationEmailResending: build.mutation<void, RequestWithCodeType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/registration-email-resending',
      }),
    }),
    signIn: build.mutation<LoginResponseType, SignInRequestType>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/login',
      }),
    }),
    signUp: build.mutation<SignUpResponseType, SignUpRequestType>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/registration',
      }),
    }),
  }),
})

export const {
  useCreateNewPasswordMutation,
  useForgotPasswordMutation,
  useLoginByGoogleQuery,
  useLogoutMutation,
  usePasswordRecoveryResendingMutation,
  useRegistrationConfirmationMutation,
  useRegistrationEmailResendingMutation,
  useSignInMutation,
  useSignUpMutation,
} = authApi
