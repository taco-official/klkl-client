import styled from 'styled-components'
import theme from '../../style/theme'

const StyledButton = styled.button`
  font-family: ${theme.style.mainBold};
  font-size: ${theme.size.textSM};
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;

  justify-self: flex-end;

  &:hover {
    background: ${theme.color.mainDark};
    transition: background-color 0.3s ease;
  }

  ${(props) =>
    props.$state
      ? `color: white;
		background-color: ${theme.color.main};
		border: none;

		&:hover {
			background: ${theme.color.mainDark};
			transition: background-color 0.3s ease;
		}
	`
      : `color: ${theme.color.main};
		background-color: white;
		border: 1px solid ${theme.color.main};
	
		&:hover {
			background: #eeeeee;
			transition: background-color 0.3s ease;
		}
	`};
`

export default StyledButton
