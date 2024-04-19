import { memo } from "react";
import { cn } from "@ui/lib/utils";
import { icons } from "lucide-react";

export type IconProps = {
  iconName: keyof typeof icons;
  className?: string;
  strokeWidth?: number;
};

export const Icon = memo(({ iconName, className, strokeWidth }: IconProps) => {
  const IconComponent = icons[iconName];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={cn("h-4 w-4", className)}
      strokeWidth={strokeWidth || 2}
    />
  );
});

Icon.displayName = "Icon";
