import ky from 'ky'

const uploadToS3 = async (presignedUrls, sendImage) => {
  const promises = presignedUrls.map((url, i) =>
    ky
      .put(url, {
        headers: {
          'X-Amz-Acl': 'private',
          'Content-Type': sendImage[i].type,
        },
        body: sendImage[i],
        retry: 0,
      })
      .json()
  )
  return Promise.all(promises)
}

export default uploadToS3
