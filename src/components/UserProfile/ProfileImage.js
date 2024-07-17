import styled from 'styled-components'

const ProfileImage = styled.img`
  height: ${(props) => props.size};
  aspect-ratio: 1 / 1;
  background-color: lightgrey;
  border-radius: 50%;
`

export default ProfileImage
