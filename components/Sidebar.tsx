"use client";
import {
  BookOpenText,
  Home,
  Tag,
  StickyNote,
  HeartPulse,
  Camera,
  CodeXml,
  CircleDot,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin, Logo, Twitter } from "./icons";
import { SidebarClose } from "./sidebar_close";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Programming",
    url: "/tag/programming",
    icon: CodeXml,
  },
  {
    title: "Photography",
    url: "/tag/photography",
    icon: Camera,
  },
  {
    title: "Health",
    url: "/tag/health",
    icon: HeartPulse,
  },
  {
    title: "About",
    url: "/pages/about",
    icon: StickyNote,
  },
];

export function SidebarApp() {
  const isMobile = useIsMobile();
  return (
    <Sidebar className="items-center">
      <SidebarHeader className="relative">
        <div className="mx-auto mt-12 inline-flex flex-row items-center gap-x-3">
          <Logo />
          <Link
            href="/"
            className="flex self-center text-2xl font-semibold whitespace-nowrap"
          >
            {" "}
            Blogify{" "}
          </Link>
        </div>
        {isMobile && <SidebarClose />}
      </SidebarHeader>
      <SidebarContent className="item-center">
        <SidebarGroup>
          <SidebarGroupLabel>Navbar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="mx-auto flex flex-row items-center justify-around">
          <Button variant="link" asChild>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/frontendweb/"}
            >
              <Linkedin />
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link target="_blank" href={"https://x.com/FrontendWeb3"}>
              <Twitter />{" "}
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              target="_blank"
              href={"https://github.com/frontendweb3/open-blog"}
            >
              {" "}
              <Github />{" "}
            </Link>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
