import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, MoreHorizontal, Plus, Search } from "lucide-react";

const participants = [
    {
        name: "Sarah Jones",
        id: "NDIS-001",
        planDate: "2026-05-12",
        status: "Active",
        location: "Sydney, NSW",
        avatar: "SJ"
    },
    {
        name: "Michael Brown",
        id: "NDIS-002",
        planDate: "2025-11-30",
        status: "Active",
        location: "Melbourne, VIC",
        avatar: "MB"
    },
    {
        name: "Emily Davis",
        id: "NDIS-003",
        planDate: "2025-08-15",
        status: "Pending Review",
        location: "Brisbane, QLD",
        avatar: "ED"
    },
];

export default function ParticipantsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Participants</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage NDIS participants.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Participant
                </Button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                    <Input className="pl-9" placeholder="Search participants..." />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {participants.map((p) => (
                    <Card key={p.id} className="hover:border-indigo-400 transition-colors cursor-pointer">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
                                        {p.avatar}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">{p.name}</h3>
                                        <p className="text-xs text-slate-500">{p.id}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="-mr-2 -mt-2">
                                    <MoreHorizontal className="h-5 w-5 text-slate-400" />
                                </Button>
                            </div>

                            <div className="mt-6 space-y-3">
                                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                    <Calendar className="mr-2 h-4 w-4 text-slate-400" />
                                    Plan Review: {p.planDate}
                                </div>
                                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                    <MapPin className="mr-2 h-4 w-4 text-slate-400" />
                                    {p.location}
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <Badge variant={p.status === 'Active' ? 'success' : 'warning'}>
                                    {p.status}
                                </Badge>
                                <Button variant="outline" size="sm">View Profile</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
