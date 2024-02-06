import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname.startsWith(`${href}/`);

  const onClick = () => {
    navigate(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-zinc-500 dark:text-white text-sm font-[500] pl-6 transition-all hover:text-zinc-600 dark:hover:text-white hover:bg-zinc-300/20 dark:hover:bg-zinc-900",
        isActive &&
          "text-zinc-700 dark:text-white bg-zinc-200/20 dark:bg-zinc-900/80 hover:bg-zinc-200/20 dark:hover:bg-zinc-900/80 hover:text-zinc-700 dark:hover:text-white"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-zinc-500 dark:text-white",
            isActive && "text-zinc-700 dark:text-white"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-zinc-70 dark:border-zinc-800 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};