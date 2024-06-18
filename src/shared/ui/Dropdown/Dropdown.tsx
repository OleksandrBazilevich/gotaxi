import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  FC,
  PropsWithChildren
} from "react";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let triggerElement: ReactNode = null;
  let contentElement: ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement<DropdownTriggerProps>(child) &&
      child.type === DropdownTrigger
    ) {
      triggerElement = React.cloneElement(child, { onClick: toggleDropdown });
    } else if (React.isValidElement(child) && child.type === DropdownContent) {
      contentElement = child;
    }
  });

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      {triggerElement}
      <div className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
        {contentElement}
      </div>
    </div>
  );
};

export default Dropdown;

interface DropdownTriggerProps {
  onClick?: () => void;
}

export const DropdownTrigger: FC<PropsWithChildren<DropdownTriggerProps>> = ({
  children,
  onClick
}) => (
  <div onClick={onClick} className={styles.toggle}>
    {children}
  </div>
);

export const DropdownContent: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.list}>{children}</div>
);
