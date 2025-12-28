import { staffCompliance } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, UserPlus } from "lucide-react";
import Link from "next/link";

export default function HRRegister() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/registers">
                        <Button variant="outline" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">HR Staff Matrix</h1>
                        <p className="text-slate-500 dark:text-slate-400">Monitor staff qualifications and compliance checks.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                    <Button>
                        <UserPlus className="mr-2 h-4 w-4" /> Add Staff
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Staff Compliance Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm text-left">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Name</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Role</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">WWCC</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">First Aid</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">NDIS Screen</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {staffCompliance.map((staff, i) => (
                                    <tr key={i} className="border-b border-slate-100 dark:border-slate-800 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50">
                                        <td className="p-4 align-middle font-medium">{staff.name}</td>
                                        <td className="p-4 align-middle text-slate-500">{staff.role}</td>
                                        <td className="p-4 align-middle">
                                            <StatusBadge status={staff.checks.wwcc} />
                                        </td>
                                        <td className="p-4 align-middle">
                                            <StatusBadge status={staff.checks.firstAid} />
                                        </td>
                                        <td className="p-4 align-middle">
                                            <StatusBadge status={staff.checks.ndisScreen} />
                                        </td>
                                        <td className="p-4 align-middle text-right">
                                            <Button variant="ghost" size="sm">Manage</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    if (status === 'Valid') {
        return <Badge variant="success" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400">Valid</Badge>
    }
    if (status === 'Expired') {
        return <Badge variant="destructive">Expired</Badge>
    }
    return <Badge variant="outline">{status}</Badge>
}
