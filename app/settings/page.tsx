'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Moon, Sun, User } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Settings</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage your preferences and account settings.</p>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" /> Profile Settings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <label className="text-sm font-medium">Full Name</label>
                            <Input defaultValue="John Doe" />
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <Input defaultValue="john.doe@example.com" />
                        </div>
                        <Button>Save Changes</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Sun className="h-5 w-5" /> Appearance
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Button
                                variant={theme === 'light' ? 'default' : 'outline'}
                                onClick={() => setTheme('light')}
                                className="w-full justify-start"
                            >
                                <Sun className="mr-2 h-4 w-4" /> Light Mode
                            </Button>
                            <Button
                                variant={theme === 'dark' ? 'default' : 'outline'}
                                onClick={() => setTheme('dark')}
                                className="w-full justify-start"
                            >
                                <Moon className="mr-2 h-4 w-4" /> Dark Mode
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5" /> Notifications
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium">Email Notifications</label>
                                <input type="checkbox" className="toggle" checked readOnly />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium">Desktop Alerts</label>
                                <input type="checkbox" className="toggle" checked readOnly />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
