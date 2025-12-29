'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calendar, Clock, Heart, Save, User, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ShiftReportForm() {
    const router = useRouter();
    const [mood, setMood] = useState<string | null>(null);
    const [incidentOccurred, setIncidentOccurred] = useState(false);
    const [participant, setParticipant] = useState('');

    const handleSubmit = () => {
        if (incidentOccurred) {
            router.push(`/forms/incident-report?source=shift&participant=${encodeURIComponent(participant)}`);
        } else {
            // Normal save
            router.push('/forms');
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-20">
            <div className="flex items-center gap-4 mb-4">
                <Link href="/forms">
                    <Button variant="outline" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Shift Report</h1>
                    <p className="text-slate-500 dark:text-slate-400">Record shift details and progress notes.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Form Area */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-indigo-600" />
                                Shift Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                        <Input type="date" className="pl-9" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Shift Type</label>
                                    <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800">
                                        <option>Morning (07:00 - 15:00)</option>
                                        <option>Afternoon (15:00 - 23:00)</option>
                                        <option>Night (23:00 - 07:00)</option>
                                        <option>Sleepover</option>
                                        <option>Custom</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Start Time</label>
                                    <Input type="time" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">End Time</label>
                                    <Input type="time" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Staff Member</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input className="pl-9" placeholder="Enter staff name..." />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Heart className="h-5 w-5 text-rose-500" />
                                Health & Wellbeing
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">General Mood</label>
                                <div className="flex gap-2">
                                    {['Happy', 'Calm', 'Anxious', 'Upset', 'Unwell'].map(m => (
                                        <Button
                                            key={m}
                                            variant={mood === m ? 'default' : 'outline'}
                                            size="sm"
                                            className={cn("rounded-full", mood === m ? "bg-indigo-600 text-white" : "")}
                                            onClick={() => setMood(m)}
                                        >
                                            {m}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Medication Administered?</label>
                                <div className="flex items-center gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="meds" className="text-indigo-600" /> Yes
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="meds" className="text-indigo-600" defaultChecked /> No
                                    </label>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Detailed Notes</label>
                                <textarea
                                    className="flex min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800"
                                    placeholder="Describe activities, meals, and any observations..."
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar / Participant Info */}
                <div className="space-y-6">
                    <Card className="bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                        <CardHeader>
                            <CardTitle className="text-base">Participant</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <select
                                className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800 mb-4"
                                value={participant}
                                onChange={(e) => setParticipant(e.target.value)}
                            >
                                <option value="">Select Participant...</option>
                                <option value="Sarah Jones">Sarah Jones</option>
                                <option value="Michael Brown">Michael Brown</option>
                                <option value="Emily Davis">Emily Davis</option>
                            </select>

                            {participant && (
                                <div className="bg-white p-4 rounded-lg border border-slate-200 dark:bg-slate-950 dark:border-slate-800 animate-in fade-in">
                                    <p className="text-sm font-medium text-slate-500 mb-2">Important Alerts</p>
                                    <ul className="text-xs space-y-1 text-red-600">
                                        <li>• Allergies: Peanuts</li>
                                        <li>• Risk of falls in shower</li>
                                    </ul>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className={cn("transition-colors", incidentOccurred ? "border-red-400 bg-red-50 dark:bg-red-900/10" : "")}>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center justify-between">
                                Incident Check
                                {incidentOccurred && <AlertTriangle className="h-5 w-5 text-red-600" />}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 p-2">
                                <input
                                    type="checkbox"
                                    id="incident"
                                    checked={incidentOccurred}
                                    onChange={(e) => setIncidentOccurred(e.target.checked)}
                                    className="h-5 w-5 rounded border-gray-300 text-red-600 focus:ring-red-600"
                                />
                                <label htmlFor="incident" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    An incident occurred during this shift
                                </label>
                            </div>
                            {incidentOccurred && (
                                <p className="text-xs text-red-600 mt-2 px-2">
                                    You will be redirected to the Incident Report form after saving this shift note.
                                </p>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Handover</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Items for Next Shift</label>
                                <textarea
                                    className="flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800"
                                    placeholder="e.g., Doctors appointment at 2pm..."
                                />
                            </div>
                            <Button
                                className={cn("w-full text-white", incidentOccurred ? "bg-red-600 hover:bg-red-700" : "bg-indigo-600 hover:bg-indigo-700")}
                                onClick={handleSubmit}
                            >
                                <Save className="mr-2 h-4 w-4" />
                                {incidentOccurred ? 'Save & Report Incident' : 'Save Report'}
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
