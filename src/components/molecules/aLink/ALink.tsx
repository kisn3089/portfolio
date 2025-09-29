import { Link, LinkProps } from "react-router-dom";

type ALinkProps = {
  to: string;
} & LinkProps &
  React.PropsWithChildren;

export const ALink = ({ to, children, ...linkProps }: ALinkProps) => {
  const isExternalLink = to.startsWith("https://");
  if (isExternalLink)
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...linkProps}>
        {children}
      </a>
    );
  return (
    <Link to={to} {...linkProps}>
      {children}
    </Link>
  );
};
