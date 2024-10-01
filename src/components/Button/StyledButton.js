import styled from 'styled-components'
import theme from '@styles/theme'

const StyledButton = styled.button`
  font-family: ${theme.style.mainBold};
  font-size: ${theme.size.textSM};
  padding: 0.625rem 0.9375rem;
  border-radius: 0.625rem;
  cursor: pointer;

  justify-self: flex-end;
  transition:
    background-color 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  margin-right: 0.625rem;

  &:hover {
    background: ${theme.color.mainDark};
  }

  ${({ $state }) =>
    $state
      ? `color: white;
		background-color: ${theme.color.main};
		border: none;

		&:hover {
			background: ${theme.color.mainDark};
			transition: background-color 0.3s ease;
		}
	`
      : `color: ${theme.color.textGrey};
		background-color: white;
		border: 1px solid ${theme.color.lineGrey};
	
		&:hover {
			background: #eeeeee;
			transition: background-color 0.3s ease;
		}
	`};

  width: ${({ $width }) => $width};

  &:disabled {
    background-color: rgba(0, 0, 0, 0.4);
  }

  @keyframes anime {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  animation: anime ease-in 0.3s;
`

export default StyledButton
