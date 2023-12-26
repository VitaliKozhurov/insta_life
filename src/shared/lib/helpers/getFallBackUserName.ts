export const getFallBackUserName = (username: string) => {
  return username
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join('')
}
