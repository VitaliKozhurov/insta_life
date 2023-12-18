import { ErrorOption } from 'react-hook-form'

import { getToast } from '@/shared'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
  return typeof error === 'object' && error != null && 'status' in error
}

const isUserDataValidationError = (
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

export const onRequestErrorHandler = <T>(
  error: unknown,
  setError: (name: T, error: ErrorOption) => void,
  fieldName?: T
) => {
  if (isFetchBaseQueryError(error) && error.data) {
    if (isUserDataValidationError(error.data)) {
      error.data.message.forEach(item =>
        setError(item.field as T, { message: item.message, type: 'validationError' })
      )
    } else if (isErrorWithMessageInData(error.data)) {
      if (error.status === 401 && fieldName) {
        setError(fieldName, { message: error.data.message, type: 'validationError' })
      } else if (error.status === 404) {
        getToast({
          text: 'The link you followed may be outdated or incorrect',
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
