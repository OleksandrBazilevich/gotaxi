import { FC, FunctionComponent, PropsWithChildren, SVGProps } from "react";

interface TabProps {
  label: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const Tab: FC<PropsWithChildren<TabProps>> = ({ children }) => {
  return <div>{children}</div>;
};

export default Tab;
