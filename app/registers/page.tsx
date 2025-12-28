import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, BookOpen, FileText, Scale, Shield, Users } from "lucide-react";

const registers = [
    {
        name: "Incident Management",
        description: "Log and track all incidents, accidents, and near misses.",
        icon: AlertTriangle,
        href: "/registers/incidents",
        color: "text-amber-500",
        bg: "bg-amber-100 dark:bg-amber-900/20",
        count: 3,
    },
    {
        name: "Continuous Quality Improvement",
        description: "Track feedback, complaints, and improvement initiatives.",
        icon: BookOpen,
        href: "/registers/cqi",
        color: "text-blue-500",
        bg: "bg-blue-100 dark:bg-blue-900/20",
        count: 8,
    },
    {
        name: "Regulatory Compliance",
        description: "Monitor adherence to NDIS Practice Standards and laws.",
        icon: Scale,
        href: "/registers/regulatory",
        color: "text-purple-500",
        bg: "bg-purple-100 dark:bg-purple-900/20",
        count: 12,
    },
    {
        name: "HR Staff Matrix",
        description: "Manage staff qualifications, checks, and training.",
        icon: Users,
        href: "/registers/hr",
        color: "text-emerald-500",
        bg: "bg-emerald-100 dark:bg-emerald-900/20",
        count: 24,
    },
    {
        name: "Restrictive Practices",
        description: "Record and report unauthorized use of restrictive practices.",
        icon: Shield,
        href: "/registers/restrictive-practices",
        color: "text-red-500",
        bg: "bg-red-100 dark:bg-red-900/20",
        count: 0,
    },
    {
        name: "Corporate Risk",
        description: "Identify and mitigate business and operational risks.",
        icon: FileText,
        href: "/registers/risk",
        color: "text-slate-500",
        bg: "bg-slate-100 dark:bg-slate-800",
        count: 5,
    },
];

export default function RegistersPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Compliance Registers</h1>
                <p className="text-slate-500 dark:text-slate-400">Access and manage all key compliance registers.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {registers.map((item) => (
                    <Link key={item.name} href={item.href}>
                        <Card className="h-full transition-all hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 cursor-pointer group">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className={`p-3 rounded-xl ${item.bg} group-hover:scale-105 transition-transform`}>
                                        <item.icon className={`h-6 w-6 ${item.color}`} />
                                    </div>
                                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                                        {item.count}
                                    </div>
                                </div>
                                <CardTitle className="mt-4">{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
