import { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const disapear = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export { appear, disapear };
