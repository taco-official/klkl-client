import ky from 'ky'

const uploadToS3 = async (presignedUrls, sendImages) => {
  const promises = presignedUrls.map((url, i) =>
    ky
      .put(url.presignedUrl, {
        headers: {
          'X-Amz-Acl': 'private',
          'Content-Type': sendImages[i].type,
        },
        body: sendImages[i],
        retry: 0,
      })
      .json()
  )
  return Promise.all(promises)
}

export default uploadToS3
