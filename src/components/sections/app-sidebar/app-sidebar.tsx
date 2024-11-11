"use client";

import * as React from "react";
import { MessageSquare, FileText, Calendar, Star } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "../nav-main/nav-main";
import { TeamSwitcher } from "../team-switcher/team-switecher";
import { NavUser } from "../nav-user/nav-user";

const data = {
  user: {
    name: "Salatiel",
    email: "salatiel@gmail.com",
    avatar: "/images/salatiel.jpeg",
  },
  teams: [
    {
      name: "AFRO COACH",
      logo: "/afro-coach-logo.png",
      plan: "Coach",
    },
    {
      name: "Pop Music",
      logo: "/afro-coach-logo.png",
      plan: "Coach",
    },
    {
      name: "Voice Coach",
      logo: "/afro-coach-logo.png",
      plan: "Coach",
    },
  ],
  navMain: [
    {
      title: "Messages",
      url: "#",
      icon: MessageSquare,
      items: [
        {
          title: "Salome Njinda",
          url: "#",
        },
        {
          title: "Nkwi Cyril",
          url: "#",
        },
        {
          title: "Artist 3",
          url: "#",
        },
        {
          title: "Artist 4",
          url: "#",
        },
        {
          title: "Artist 5",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: FileText,
    },
    {
      title: "Session Schedule",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Reviews",
      url: "#",
      icon: Star,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="text-white border-r-[#3A3660]"
      collapsible="icon"
      {...props}
    >
      <SidebarHeader className="text-white">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
