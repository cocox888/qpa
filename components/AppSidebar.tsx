"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  ProjectIcon,
  TaskIcon,
  FinanceIcon,
  KanbanIcon,
  TeamIcon,
  NoteIcon,
  SettingIcon,
} from "./Icons/CustomIcons";
import SidebarItem from "./SidebarItem";

export default function AppSidebar() {
  const currentPath = usePathname();
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);

  // Finance submenu items
  const financeMenuItems = [
    { url: "/admin/finance", title: "Overview" },
    { url: "/admin/finance/packages", title: "Package Management" },
    { url: "/admin/finance/client-billing", title: "Client Billing" },
    { url: "/admin/finance/payroll", title: "Payroll" },
    { url: "/admin/finance/expenses", title: "Expenses" },
    { url: "/admin/finance/invoices", title: "Invoices" },
    { url: "/admin/finance/reporting", title: "Financial Reports" },
  ];

  const isFinanceActive = currentPath.startsWith("/admin/finance");

  useEffect(() => {
    if (isFinanceActive) {
      setIsFinanceOpen(true);
    }
  }, [isFinanceActive]);

  return (
    <>
      <aside className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 fixed left-0 top-16 bottom-0 w-56 bg-white/80 backdrop-blur-xl border-r border-gray-100/50 shadow-lg shadow-gray-100/20 z-40">
        <div className="p-6 h-full flex flex-col">
          {/* Welcome Message */}
          <div className="welcome-card p-6 rounded-2xl mb-6 animate-in text-center hidden lg:block">
            <div className="flex flex-col items-center">
              <div className="profile-container mb-4">
                <div className="wave-emoji wave-animation text-lg">👋</div>
                <div className="profile-gradient">
                  <div className="profile-image relative">
                    <Image
                      src="/images/person1.jpg"
                      alt="Profile"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  Welcome back,
                </h2>
                <p className="text-xl font-bold text-brand-500">
                  Bernadette Bawuah
                </p>
                <p className="text-sm text-gray-500">Have a great day!</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <div className="text-xs font-medium text-gray-400 uppercase px-3 mb-2">
              Main Menu
            </div>

            <SidebarItem
              url="/admin/dashboard"
              title="Dashboard"
              icon={HomeIcon}
              isActive={currentPath === "/admin/dashboard"}
            />
            <SidebarItem
              url="/admin/projects"
              title="Projects"
              icon={ProjectIcon}
              isActive={currentPath === "/admin/projects"}
            />
            <SidebarItem
              url="/admin/tasks"
              title="Tasklist"
              icon={TaskIcon}
              isActive={currentPath === "/admin/tasks"}
            />

            {/* Finance Dropdown */}
            <div className="relative">
              <SidebarItem
                url="/admin/finance"
                title="Finance"
                icon={FinanceIcon}
                isActive={isFinanceActive}
                onClick={() => setIsFinanceOpen(!isFinanceOpen)}
              />

              {/* Finance Submenu */}
              {isFinanceOpen && (
                <div className="ml-7 mt-1 border-l border-gray-100/80 pl-3 max-h-[200px] overflow-y-auto custom-scrollbar">
                  <div className="space-y-1">
                    {financeMenuItems
                      .filter((item) => item.title !== "Overview")
                      .map((item) => (
                        <SidebarItem
                          key={item.url}
                          url={item.url}
                          title={item.title}
                          isSubmenu={true}
                          isActive={currentPath === item.url}
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Menu Items */}
            <SidebarItem
              url="/admin/kanban"
              title="Kanban Board"
              icon={KanbanIcon}
              isActive={currentPath === "/admin/kanban"}
            />

            <div className="text-xs font-medium text-gray-400 uppercase px-3 mb-2 mt-6">
              Workspace
            </div>

            <SidebarItem
              url="/admin/team"
              title="Team"
              icon={TeamIcon}
              isActive={currentPath === "/admin/team"}
            />
            <SidebarItem
              url="/admin/notes"
              title="Document/Notes"
              icon={NoteIcon}
              isActive={currentPath === "/admin/notes"}
            />
            <SidebarItem
              url="/admin/settings"
              title="Setting"
              icon={SettingIcon}
              isActive={currentPath === "/admin/settings"}
            />
          </nav>
        </div>
      </aside>
    </>
  );
}
