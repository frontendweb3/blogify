"use client";
import { Button } from "./ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PanelLeftClose,
  PanelLeftIcon,
  PanelRightCloseIcon,
} from "lucide-react";
import { SidebarRail, useSidebar } from "@/components/ui/sidebar";
import { ThemeToggle } from "./theme/theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";

export function SidebarButton() {
  const { open, toggleSidebar } = useSidebar();
  return (
    <div
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      className="mt-3 ml-2 flex h-12 w-28 flex-row items-center justify-around rounded-full border p-1 md:w-32"
    >
      <Button size={"icon"} onClick={() => toggleSidebar()} variant={"link"}>
        {open ? <PanelLeftClose /> : <PanelRightCloseIcon />}
      </Button>
      <ThemeToggle />
    </div>
  );
}
