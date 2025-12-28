import { riskRegister } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, Plus } from "lucide-react";
import Link from "next/link";

export default function RiskRegister() {
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
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Corporate Risk Register</h1>
                        <p className="text-slate-500 dark:text-slate-400">Identify and mitigate operational risks.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Risk
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Active Risks</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm text-left">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">ID</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Risk Description</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Probability</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Impact</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Mitigation Strategy</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {riskRegister.map((risk) => (
                                    <tr key={risk.id} className="border-b border-slate-100 dark:border-slate-800 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50">
                                        <td className="p-4 align-middle font-medium">{risk.id}</td>
                                        <td className="p-4 align-middle">{risk.risk}</td>
                                        <td className="p-4 align-middle">{risk.probability}</td>
                                        <td className="p-4 align-middle">
                                            <Badge variant={risk.impact === 'Critical' ? 'destructive' : risk.impact === 'High' ? 'warning' : 'outline'}>
                                                {risk.impact}
                                            </Badge>
                                        </td>
                                        <td className="p-4 align-middle max-w-[200px] truncate">{risk.mitigation}</td>
                                        <td className="p-4 align-middle">
                                            <Badge variant="outline">{risk.status}</Badge>
                                        </td>
                                        <td className="p-4 align-middle text-right">
                                            <Button variant="ghost" size="sm">Edit</Button>
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
