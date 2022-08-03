import styled from "styled-components";
import Modal from "../../../Common/Modal";
import { theme } from "../../../styles/index.styled";

const StyledEditModal = styled(Modal)`
  & p {
    color: ${theme.colors.text};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default StyledEditModal;
