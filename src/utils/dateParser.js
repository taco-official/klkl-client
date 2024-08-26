const dateParser = (utcDate) => {
  const date = new Date(utcDate)
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')

  return `${year}.${month}.${day}`
}

export default dateParser
