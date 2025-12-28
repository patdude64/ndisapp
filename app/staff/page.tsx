import { staffCompliance } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, Calendar, Mail, MoreHorizontal, Phone, Search, Shield, User } from "lucide-react";

export default function StaffPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Staff Management</h1>
                    <p className="text-slate-500 dark:text-slate-400">View and manage your team.</p>
                </div>
                <Button>
                    <User className="mr-2 h-4 w-4" /> Add Employee
                </Button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                    <Input className="pl-9" placeholder="Search staff by name or role..." />
                </div>
                <Button variant="outline">View All</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {staffCompliance.map((staff, i) => (
                    <Card key={i} className="overflow-hidden group hover:border-indigo-400 transition-colors">
                        <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                        <div className="px-6 -mt-12">
                            <div className="h-24 w-24 rounded-full border-4 border-white dark:border-slate-950 bg-slate-200 flex items-center justify-center text-3xl font-bold text-slate-500">
                                {staff.name.split(' ').map(n => n[0]).join('')}
                            </div>
                        </div>
                        <CardContent className="pt-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{staff.name}</h3>
                                    <p className="text-sm text-slate-500 flex items-center gap-1">
                                        <Briefcase className="h-3 w-3" /> {staff.role}
                                    </p>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-5 w-5 text-slate-500" />
                                </Button>
                            </div>

                            <div className="mt-6 space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                        <Shield className="h-4 w-4" /> WWCC
                                    </span>
                                    <Badge variant={staff.checks.wwcc === 'Valid' ? 'success' : 'destructive'}>
                                        {staff.checks.wwcc}
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                        <Calendar className="h-4 w-4" /> First Aid
                                    </span>
                                    <Badge variant={staff.checks.firstAid === 'Valid' ? 'success' : 'destructive'}>
                                        {staff.checks.firstAid}
                                    </Badge>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                                <Button className="flex-1" variant="outline">
                                    <Mail className="mr-2 h-4 w-4" /> Email
                                </Button>
                                <Button className="flex-1" variant="outline">
                                    <Phone className="mr-2 h-4 w-4" /> Call
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
