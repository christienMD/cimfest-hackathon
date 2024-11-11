import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AppSidebar } from "../../sections/app-sidebar/app-sidebar";
import { CoachChat } from "@/components/CoachChat/CoachChat";

export function CoachChannelLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[#1A1D21] text-white">
        <header className="flex h-16 shrink-0 items-center justify-between transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          {/* Left side with breadcrumb */}
          <div className="flex items-center gap-2 px-4 overflow-hidden">
            <SidebarTrigger className="-ml-1 text-white hover:bg-white/10" />
            <Separator
              orientation="vertical"
              className="mr-2 h-4 bg-white/20 hidden sm:block"
            />

            {/* Only show current page on mobile, full breadcrumb on desktop */}
            <div className="sm:hidden text-sm font-medium text-white">
              Nkwi Cyril
            </div>

            <Breadcrumb className="hidden sm:block">
              <BreadcrumbList>
                <BreadcrumbItem className="hidden lg:block">
                  <BreadcrumbLink
                    href="/coach/messages"
                    className="text-white/70 hover:text-white"
                  >
                    Messages
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden lg:block text-white/50" />
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink
                    href="/coach/artists"
                    className="text-white/70 hover:text-white"
                  >
                    Artists
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white font-medium">
                    Cyril
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Right side with search */}
          <div className="flex items-center pr-4 pl-2">
            <div className="relative flex-shrink-0">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search messages..."
                className="w-[180px] sm:w-[200px] md:w-[300px] pl-8 bg-[#23213A] border-none text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-white/20 text-sm"
              />
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
            <CoachChat />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
