export const handleAuthEnterKeyPress = (event, callBack) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    console.log('enter press here! ')
    callBack()
  }
}