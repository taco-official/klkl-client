import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import theme from '@styles/theme'
import useUserStore from '@stores/useUserStore'

function DescriptionInput({ loginData }) {
  const prevDescription = loginData.description || ''
  const setDescription = useUserStore((state) => state.setDescription)

  return (
    <InfoBox>
      자기소개
      <StyledTextArea
        showCount
        defaultValue={prevDescription}
        maxLength={50}
        placeholder="자기소개 변경"
        autoSize={{ minRows: 2 }}
        onBlur={(e) => {
          const newDescription = e.target.value.trim()
          if (newDescription && newDescription !== prevDescription)
            setDescription(newDescription)
        }}
      />
    </InfoBox>
  )
}

DescriptionInput.propTypes = {
  loginData: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
}

const InfoBox = styled.div`
  margin: 2.5rem 0;
  font-size: ${theme.size.textSM};
  color: ${theme.color.textGrey};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledTextArea = styled(Input.TextArea)`
  width: 50%;
  margin-top: 10px;
  font-family: ${theme.style.main};

  textarea {
    font-family: inherit;
  }

  span {
    font-size: ${theme.size.text2XS};
  }
`

export default DescriptionInput
