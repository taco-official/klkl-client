const dateParser = (utcTime) => {
  const utcDate = new Date(utcTime)

  const now = new Date()
  const timeDiff = now.getTime() - utcDate.getTime()

  const seconds = Math.floor(timeDiff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 30) {
    const year = utcDate.getUTCFullYear()
    const month = String(utcDate.getUTCMonth() + 1).padStart(2, '0')
    const day = String(utcDate.getUTCDate()).padStart(2, '0')

    return `${year}.${month}.${day}`
  }

  if (days > 0) return `${days}일 전`

  if (hours > 0) return `${hours}시간 전`

  if (minutes > 0) return `${minutes}분 전`

  return `${seconds}초 전`
}

export default dateParser
