import { ToastContainer } from 'react-toastify'

import { Button, ButtonVariant } from '@/shared'

import 'react-toastify/dist/ReactToastify.css'

import { getToast } from './Toast'

const meta = {
  tags: ['autodocs'],
  title: 'Components/Toast',
}

export default meta

export const Toast = () => {
  const onSuccessClickHandler = () => getToast({ text: 'Success example', variant: 'success' })
  const onErrorClickHandler = () => getToast({ text: 'Error example', variant: 'error' })
  const onErrorWithoutCloseBtnClickHandler = () =>
    getToast({ text: 'Error without close button', variant: 'error', withClose: false })

  return (
    <>
      <ToastContainer />
      <div style={{ marginBottom: '2rem' }}>
        <Button onClick={onSuccessClickHandler} variant={ButtonVariant.TERTIARY}>
          Show Success Toast
        </Button>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <Button onClick={onErrorClickHandler} variant={ButtonVariant.TERTIARY}>
          Show Error Toast
        </Button>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <Button onClick={onErrorWithoutCloseBtnClickHandler} variant={ButtonVariant.TERTIARY}>
          Show error without close button
        </Button>
      </div>
    </>
  )
}
