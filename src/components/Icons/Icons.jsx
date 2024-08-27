import styled from 'styled-components'

const Icons = styled.span.attrs({
  className: 'material-symbols-rounded',
})`
  font-variation-settings:
    'FILL' ${({ $empty }) => ($empty ? 0 : 1)},
    'wght' 400,
    'GRAD' 0,
    'opsz' 20;

  font-size: ${({ $size }) => $size || '1.8em'};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`

export default Icons
