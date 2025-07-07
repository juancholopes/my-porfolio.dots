import React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-blue-500/30 bg-background/50 backdrop-blur-sm hover:bg-muted hover:border-blue-500/50 transition-all duration-300"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-blue-500/30 bg-background/90 backdrop-blur-sm"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`hover:bg-blue-500/20 focus:bg-blue-500/20 cursor-pointer transition-colors duration-200 ${
            theme === "light"
              ? "text-blue-500 dark:text-blue-400 bg-blue-500/10"
              : "text-foreground"
          }`}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>{t("theme.light")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`hover:bg-blue-500/20 focus:bg-blue-500/20 cursor-pointer transition-colors duration-200 ${
            theme === "dark"
              ? "text-blue-500 dark:text-blue-400 bg-blue-500/10"
              : "text-foreground"
          }`}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>{t("theme.dark")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`hover:bg-blue-500/20 focus:bg-blue-500/20 cursor-pointer transition-colors duration-200 ${
            theme === "system"
              ? "text-blue-500 dark:text-blue-400 bg-blue-500/10"
              : "text-foreground"
          }`}
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>{t("theme.system")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
