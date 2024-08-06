import styled from 'styled-components'

const FieldSection = styled.div`
  display: flex;
  > :first-child {
    margin-right: 0.7rem;
    flex-basis: content;
    flex-shrink: 0;
  }
  > :last-child {
    margin-right: 0;
  }
`

const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  > :nth-child(n) {
    margin-bottom: 0.4rem;
    margin-right: 0.5rem;
  }
`

export { FieldSection, FieldContainer }
