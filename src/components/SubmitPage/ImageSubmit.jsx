import React, { useState } from 'react'
import { Image, Upload, ConfigProvider, message } from 'antd'
import Icons from '../Common/Icons'

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 10
  if (!isLt2M) {
    message.error('Image must smaller than 10MB!')
  }
  return isJpgOrPng && isLt2M
}

export default function ImageSubmitPage() {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState([])

  const handlePreview = async (file) => {
    const newFile = file

    if (!newFile.url && !newFile.preview) {
      newFile.preview = await getBase64(newFile.originFileObj)
    }
    setPreviewImage(newFile.url || newFile.preview)
    setPreviewOpen(true)
  }

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <div
        style={{
          marginTop: 8,
        }}
      >
        <Icons $empty>add_box</Icons>
        <br />
        Upload
      </div>
    </button>
  )

  return (
    <>
      <h2>
        상품 사진을 <br />
        등록해주세요
      </h2>
      <div style={{ width: '37.5rem', marginBottom: '1.875rem' }}>
        <ConfigProvider
          theme={{
            token: {
              controlHeightLG: 68,
            },
          }}
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={beforeUpload}
            maxCount={3}
            multiple
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{
                display: 'none',
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(''),
              }}
              src={previewImage}
            />
          )}
        </ConfigProvider>
      </div>
    </>
  )
}
