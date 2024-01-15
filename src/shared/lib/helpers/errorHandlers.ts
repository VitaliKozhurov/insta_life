import { ErrorOption } from 'react-hook-form'

import { getToast } from '@/shared'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
  return typeof error === 'object' && error != null && 'status' in error
}

const isFetchError = (error: unknown): error is { error: string; status: 'FETCH_ERROR' } => {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    error.status === 'FETCH_ERROR' &&
    'error' in error &&
    typeof error.error === 'string'
  )
}

const isArrayOfErrors = (
  data: unknown
): data is {
  message: {
    field: string
    message: string
  }[]
} => {
  return (
    typeof data === 'object' &&
    data != null &&
    'message' in data &&
    Array.isArray(data.message) &&
    data.message.every(item => 'field' in item && 'message' in item)
  )
}

const isErrorWithMessageInData = (data: unknown): data is { message: string } => {
  return (
    typeof data === 'object' &&
    data != null &&
    'message' in data &&
    typeof data.message === 'string'
  )
}

export const onSendFormErrorsHandlers = <T>(
  error: unknown,
  setError: (name: T, error: ErrorOption) => void,
  fieldName?: T
) => {
  if (isFetchBaseQueryError(error)) {
    if (isArrayOfErrors(error.data)) {
      error.data.message.forEach(item =>
        setError(item.field as T, { message: item.message, type: 'validationError' })
      )
    }
    if (isErrorWithMessageInData(error.data)) {
      if (error.status === 401 && fieldName) {
        setError(fieldName, { message: error.data.message, type: 'validationError' })
      } else if (error.status === 404) {
        getToast({
          text: 'Incorrect request address, check your request url!',
          variant: 'error',
          withClose: true,
        })
      } else {
        getToast({ text: error.data.message, variant: 'error', withClose: true })
      }
    }
  }
  if (isFetchError(error)) {
    getToast({ text: error.error, variant: 'error', withClose: true })
  }
}

export const checkRecoveryCodeError = (error: unknown) => {
  if (isFetchBaseQueryError(error)) {
    if (isArrayOfErrors(error.data)) {
      const isRecoveryCodeError = error.data.message.find(e => e.field === 'recoveryCode')

      if (isRecoveryCodeError) {
        return true
      }
    }
  }

  return false
}

export const checkConfirmationCodeError = (error: unknown) => {
  if (isFetchBaseQueryError(error)) {
    if (isArrayOfErrors(error.data)) {
      const codeError = error.data.message.find(e => e.field === 'code')

      if (codeError) {
        getToast({ text: codeError?.message, variant: 'error', withClose: true })
      }
    }

    if (isErrorWithMessageInData(error.data)) {
      if (error.status === 404) {
        getToast({
          text: 'The link you followed may be outdated or incorrect',
          variant: 'error',
          withClose: true,
        })
      } else {
        getToast({ text: error.data.message, variant: 'error', withClose: true })
      }
    }

    if (isFetchError(error)) {
      getToast({ text: error.error, variant: 'error', withClose: true })
    }
  }
}

export const onGoogleOauthErrorHandler = (error: unknown) => {
  if (isFetchBaseQueryError(error)) {
    if (isErrorWithMessageInData(error.data)) {
      if (error.status === 404) {
        getToast({
          text: 'The link you followed may be outdated or incorrect',
          variant: 'error',
          withClose: true,
        })
      } else {
        getToast({ text: error.data.message, variant: 'error', withClose: true })
      }
    }
  } else {
    getToast({
      text: 'Authentication Error. Please try again later.',
      variant: 'error',
      withClose: true,
    })
  }
}

export const onLogoutErrorHandler = (error: unknown) => {
  if (isFetchBaseQueryError(error)) {
    if (error.status === 401) {
      return
    }
    if (isErrorWithMessageInData(error.data)) {
      getToast({ text: error.data.message, variant: 'error', withClose: true })
    }
  }
  if (isFetchError(error)) {
    getToast({ text: error.error, variant: 'error', withClose: true })
  }
}

export const onUploadPhotoErrorHandler = (error: unknown, showToast?: boolean) => {
  if (isFetchBaseQueryError(error)) {
    if (isErrorWithMessageInData(error.data)) {
      return showToast
        ? getToast({ text: error.data.message, variant: 'error', withClose: true })
        : error.data.message
    }
  }
  if (isFetchError(error)) {
    return showToast
      ? getToast({ text: error.error, variant: 'error', withClose: true })
      : error.error
  }

  return showToast
    ? getToast({ text: 'Some error occurred', variant: 'error', withClose: true })
    : 'Some error occurred'
}
