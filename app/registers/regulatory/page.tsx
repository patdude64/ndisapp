import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, Plus } from "lucide-react";
import Link from "next/link";

const regulatoryData = [
    { id: 'REG-001', standard: 'NDIS Practice Standards', requirement: 'Incident Management System', status: 'Compliant', lastAudit: '2024-11-20' },
    { id: 'REG-002', standard: 'NDIS Code of Conduct', requirement: 'Staff Training', status: 'Review Needed', lastAudit: '2024-10-15' },
];

export default function RegulatoryRegister() {
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
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Regulatory Compliance</h1>
                        <p className="text-slate-500 dark:text-slate-400">Track NDIS Practice Standards compliance.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Item
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Compliance Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm text-left">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">ID</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Standard</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Requirement</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Last Audit</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {regulatoryData.map((item) => (
                                    <tr key={item.id} className="border-b border-slate-100 dark:border-slate-800 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50">
                                        <td className="p-4 align-middle font-medium">{item.id}</td>
                                        <td className="p-4 align-middle">{item.standard}</td>
                                        <td className="p-4 align-middle">{item.requirement}</td>
                                        <td className="p-4 align-middle">
                                            <Badge variant={item.status === 'Compliant' ? 'success' : 'warning'}>
                                                {item.status}
                                            </Badge>
                                        </td>
                                        <td className="p-4 align-middle">{item.lastAudit}</td>
                                        <td className="p-4 align-middle text-right">
                                            <Button variant="ghost" size="sm">View Evidence</Button>
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
