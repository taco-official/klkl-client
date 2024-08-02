const submitSteps = {
  PICTURE: 0,
  REGION: 1,
  INFO: 2,
  CATEGORY: 3,
}

const SmoothAnimation = `
	@keyframes openModal {
    0% {
      opacity: 0;
    }
		50%{
			opacity: 0.5;
		}
    100% {
      opacity: .99;
    }
  }

	animation: openModal ease-in 0.3s;
`

export { submitSteps, SmoothAnimation }
