'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, FileText, Users, Settings, FolderOpen, ClipboardList } from 'lucide-react';

const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Registers', href: '/registers', icon: ClipboardList },
    { name: 'Resources', href: '/resources', icon: FolderOpen },
    { name: 'Forms', href: '/forms', icon: FileText },
    { name: 'Staff', href: '/staff', icon: Users },
    { name: 'Participants', href: '/participants', icon: Users },
    { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 hidden md:flex flex-col z-50">
            <div className="flex h-16 items-center border-b border-slate-200 px-6 dark:border-slate-800">
                <div className="flex items-center gap-2 font-bold text-xl text-indigo-600 dark:text-indigo-400">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">N</div>
                    <span>NDIS Portal</span>
                </div>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t border-slate-200 p-4 dark:border-slate-800">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
                    <p className="text-xs font-medium text-slate-500 mb-1">Audit Readiness</p>
                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                        <div className="h-2 rounded-full bg-emerald-500 w-[75%]" />
                    </div>
                    <p className="text-right text-xs text-slate-500 mt-1">75% Ready</p>
                </div>
            </div>
        </aside>
    );
}
