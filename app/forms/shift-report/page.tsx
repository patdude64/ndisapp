'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calendar, Clock, Heart, Save, User } from "lucide-react";
import Link from "next/link";

export default function ShiftReportForm() {
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
                                    {['Happy', 'Calm', 'Anxious', 'Upset', 'Unwell'].map(mood => (
                                        <Button key={mood} variant="outline" size="sm" className="rounded-full">
                                            {mood}
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
                            <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800 mb-4">
                                <option>Select Participant...</option>
                                <option>Sarah Jones</option>
                                <option>Michael Brown</option>
                                <option>Emily Davis</option>
                            </select>

                            <div className="bg-white p-4 rounded-lg border border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                                <p className="text-sm font-medium text-slate-500 mb-2">Important Alerts</p>
                                <ul className="text-xs space-y-1 text-red-600">
                                    <li>• Allergies: Peanuts</li>
                                    <li>• Risk of falls in shower</li>
                                </ul>
                            </div>
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
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                                <Save className="mr-2 h-4 w-4" /> Save Report
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
