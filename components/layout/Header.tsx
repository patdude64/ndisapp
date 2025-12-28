'use client';

import { Bell, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 md:left-64 h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 flex items-center justify-between z-40 dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex items-center gap-4 w-full max-w-sm">
                <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                    <Input className="pl-9 bg-slate-50/50 dark:bg-slate-900/50" placeholder="Search resources, incidents..." />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-950" />
                </Button>
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium border border-indigo-200">
                    JD
                </div>
            </div>
        </header>
    );
}
