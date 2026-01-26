import React from "react";
import { LucideIcon } from "lucide-react";

interface PrimaryButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  dataCursor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

function PrimaryButton({
  href,
  target,
  rel,
  dataCursor,
  onClick,
  icon: Icon,
  children,
  className = "",
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 border border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:!text-[--zed-light] transition-all duration-300 rounded-lg text-sm sm:text-base";

  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} data-cursor="text">
        {Icon && <Icon className="mr-2 sm:w-[18px] sm:h-[18px]" size={16} />}
        <span className="sm:inline">{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} data-cursor="text">
      {Icon && <Icon className="mr-2" size={16} />}
      <span className="sm:inline">{children}</span>
    </button>
  );
}

export default PrimaryButton;
