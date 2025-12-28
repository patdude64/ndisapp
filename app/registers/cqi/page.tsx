import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, Plus } from "lucide-react";
import Link from "next/link";

const cqiData = [
    { id: 'CQI-001', source: 'Internal Audit', issue: 'Incomplete Staff Files', action: 'Audit all files', owner: 'HR Manager', status: 'In Progress', due: '2025-01-15' },
    { id: 'CQI-002', source: 'Participant Feedback', issue: 'Late arrivals', action: 'Review scheduling', owner: 'Ops Manager', status: 'Open', due: '2025-01-20' },
];

export default function CQIRegister() {
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
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">CQI Register</h1>
                        <p className="text-slate-500 dark:text-slate-400">Continuous Quality Improvement tracking.</p>
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
                    <CardTitle>Improvement Plan</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm text-left">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">ID</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Source</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Issue/Opportunity</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Action Required</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Owner</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Due Date</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {cqiData.map((item) => (
                                    <tr key={item.id} className="border-b border-slate-100 dark:border-slate-800 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50">
                                        <td className="p-4 align-middle font-medium">{item.id}</td>
                                        <td className="p-4 align-middle">{item.source}</td>
                                        <td className="p-4 align-middle">{item.issue}</td>
                                        <td className="p-4 align-middle">{item.action}</td>
                                        <td className="p-4 align-middle">{item.owner}</td>
                                        <td className="p-4 align-middle">{item.due}</td>
                                        <td className="p-4 align-middle">
                                            <Badge variant={item.status === 'Open' ? 'warning' : 'secondary'}>
                                                {item.status}
                                            </Badge>
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
