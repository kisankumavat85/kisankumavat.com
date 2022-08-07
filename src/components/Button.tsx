import PrimaryButton from "../styles/components/button.style";

interface Props {
  label: string;
  primary?: boolean;
}

const Button = (props: Props) => {
  const { label, primary } = props;
  return <PrimaryButton primary={primary}>{label}</PrimaryButton>;
};

export default Button;
