export const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key)

  if (data) {
    return JSON.parse(data)
  }
}
