import clsx from "clsx";

export const getNavLinkClass = (isActive: boolean, isDisabled: boolean) =>
  clsx("text-[24px]", {
    "text-yellow-400": isActive,
    "text-gray-400 cursor-not-allowed": isDisabled,
    "hover:text-yellow-400": !isDisabled && !isActive,
  });
