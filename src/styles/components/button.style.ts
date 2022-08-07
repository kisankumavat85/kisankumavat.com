import styled from "styled-components";
import { BLUE_SHADE_V1, DARK_SHADE_V1 } from "../colors.style";

interface Props {
  primary?: boolean;
}

const PrimaryButton = styled.button<Props>`
  border: none;
  background: ${(props) => (props.primary ? DARK_SHADE_V1 : BLUE_SHADE_V1)};
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  padding: 10px 40px;
  border-radius: 10px;
`;

export default PrimaryButton;
