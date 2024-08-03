import styled from 'styled-components'

const ProfileImage = styled.img`
  height: ${(props) => props.$size};
  aspect-ratio: 1/1;
  background-color: lightgrey;
  border-radius: 50%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`

export default ProfileImage
