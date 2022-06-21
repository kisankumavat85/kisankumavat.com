import { PrimaryButton } from "../styles/components/button.style";

interface Props {
  label: string;
  primary?: boolean;
}

const Button = (props: Props) => {
  const { label, primary } = props;
  return <PrimaryButton primary>{label}</PrimaryButton>;
};

export default Button;
