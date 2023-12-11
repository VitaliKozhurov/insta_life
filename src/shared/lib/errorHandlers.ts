import { ErrorOption } from 'react-hook-form'

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
  setError: (name: T, error: ErrorOption) => void
) => {
  if (isFetchBaseQueryError(error) && error.data) {
    if (isUserDataValidationError(error.data)) {
      error.data.message.forEach(item =>
        setError(item.field as T, { message: item.message, type: 'validationError' })
      )
    } else if (isErrorWithMessageInData(error.data)) {
      alert(error.data.message)
    }
  }
  if (isFetchError(error)) {
    alert(error.error)
  }
}
