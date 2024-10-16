import React from 'react'
import CityField from './CityField'
import CategoryField from './CategoryField'
import TagField from './TagField'
import ResetButton from './ResetButton'
import SortButton from './SortButton'
import FieldSection from './SelectedField.style'
import { ContentContainer } from '../../FeedPage.style'

function SelectedField() {
  return (
    <FieldSection>
      <h6 className="title">선택 필드</h6>
      <ContentContainer className="content">
        <CityField />
        <CategoryField />
        <TagField />
        <ResetButton />
      </ContentContainer>
      <div className="alignEnd">
        <SortButton />
      </div>
    </FieldSection>
  )
}

export default SelectedField
