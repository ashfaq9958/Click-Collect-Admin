import React from "react";
import {
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  ChevronUp,
  Shirt,
  ShoppingBag,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

// Menu items.
const navigationItems = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Orders",
    url: "#",
    icon: ShoppingBag,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const productLinks = [
  { title: "Men", url: "#" },
  { title: "Women", url: "#" },
  { title: "Child", url: "#" },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64 h-screen bg-gray-900 text-gray-100 shadow-lg flex flex-col justify-between">
      {/* Sidebar Header */}
      <SidebarHeader className="p-4 text-lg font-bold text-center border-b border-gray-700">
        Click & Collect
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="flex-1 overflow-auto">
        {/* Navigation Section */}
        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center justify-between px-4 py-2 text-xs uppercase font-semibold text-gray-400">
              <span>Navigation</span>
              <CollapsibleTrigger asChild>
                <button className="text-gray-400 group">
                  <ChevronDown
                    size={16}
                    className="group-data-[state=open]:hidden"
                  />
                  <ChevronUp
                    size={16}
                    className="hidden group-data-[state=open]:block"
                  />
                </button>
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className="hover:bg-gray-800 rounded-md"
                  >
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-3 px-4 py-2 text-sm font-medium"
                      >
                        <item.icon size={20} className="text-gray-400" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Separator */}
        <SidebarSeparator className="my-2 border-gray-700" />

        {/* Products Section */}
        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center justify-between px-4 py-2 text-xs uppercase font-semibold text-gray-400">
              <span>Products</span>
              <CollapsibleTrigger asChild>
                <button className="text-gray-400 group">
                  <ChevronDown
                    size={16}
                    className="group-data-[state=open]:hidden"
                  />
                  <ChevronUp
                    size={16}
                    className="hidden group-data-[state=open]:block"
                  />
                </button>
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarMenu>
                {productLinks.map((link) => (
                  <SidebarMenuItem
                    key={link.title}
                    className="hover:bg-gray-800 rounded-md"
                  >
                    <SidebarMenuButton asChild>
                      <a
                        href={link.url}
                        className="flex items-center gap-3 px-4 py-2 text-sm font-medium"
                      >
                        <Shirt size={20} className="text-gray-400" />
                        <span>{link.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      {/* Sidebar Footer */}
      <footer className="p-4 border-t border-gray-700 text-xs text-gray-400">
        <div className="flex flex-col items-center">
          <span>&copy; 2024 Click & Collect</span>
          <span className="mt-1">Version 1.0.0</span>
          <a href="#" className="text-gray-300 hover:underline mt-2">
            Terms & Conditions
          </a>
        </div>
      </footer>
    </Sidebar>
  );
}
