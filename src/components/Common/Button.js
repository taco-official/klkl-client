import styled from 'styled-components'
import theme from '../../style/theme'

const FollowButton = styled.button`
  font-family: ${theme.style.mainBold};
  font-size: ${theme.size.textSM};
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;

  justify-self: flex-end;

  ${(props) =>
    props.$state
      ? `color: white;
		background-color: ${theme.color.main};
		border: none;
	`
      : `color: ${theme.color.main};
		background-color: white;
		border: 1px solid ${theme.color.main};
	 `};
`

export default FollowButton
