import { FC, ReactNode } from "react";

type Props = {
  children: string | ReactNode;
  href: string;
  target?: string;
  className?: string;
};

const ExternalLink: FC<Props> = (props) => {
  const { href, target, children, className } = props;
  return (
    <a href={href} target={target} className={className}>
      {children}
    </a>
  );
};

ExternalLink.defaultProps = {
  target: "_blank",
  className: "",
};

export default ExternalLink;
