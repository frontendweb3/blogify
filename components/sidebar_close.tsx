"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PanelLeftClose,
  PanelLeftIcon,
  PanelRightCloseIcon,
  XIcon,
} from "lucide-react";
import { SidebarRail, useSidebar } from "@/components/ui/sidebar";

export function SidebarClose() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="absolute top-4 right-2.5">
      <Button size={"icon"} onClick={toggleSidebar} variant={"link"}>
        <XIcon size={12} />
      </Button>
    </div>
  );
}
