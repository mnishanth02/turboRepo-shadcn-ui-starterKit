"use client";

import { FC } from "react";
import { Button } from "@ui/index";
import { useTheme } from "next-themes";

import { Icon } from "./Icon";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icon
        iconName="Moon"
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Icon
        iconName="Sun"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100"
      />
    </Button>
  );
};

export default ThemeToggle;
