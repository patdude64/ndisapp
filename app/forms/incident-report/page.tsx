'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Save, Send } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function IncidentReportForm() {
    const [step, setStep] = useState(1);

    return (
        <div className="max-w-3xl mx-auto space-y-6 pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/forms">
                    <Button variant="outline" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Incident Report</h1>
                    <p className="text-slate-500 dark:text-slate-400">Step {step} of 3</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800">
                <div
                    className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                />
            </div>

            <StepContent step={step} />

            <div className="flex justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
                <Button
                    variant="outline"
                    onClick={() => setStep(s => Math.max(1, s - 1))}
                    disabled={step === 1}
                >
                    Back
                </Button>

                {step < 3 ? (
                    <Button onClick={() => setStep(s => Math.min(3, s + 1))}>
                        Next Step
                    </Button>
                ) : (
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Send className="mr-2 h-4 w-4" /> Submit Report
                    </Button>
                )}
            </div>
        </div>
    );
}

function StepContent({ step }: { step: number }) {
    if (step === 1) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>1. Incident Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Date of Incident</label>
                            <Input type="date" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Time of Incident</label>
                            <Input type="time" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Location</label>
                        <Input placeholder="e.g., Kitchen, Living Room, Community Park" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Type of Incident</label>
                        <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800">
                            <option>Physical Injury</option>
                            <option>Behaviour of Concern</option>
                            <option>Medical Emergency</option>
                            <option>Property Damage</option>
                        </select>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (step === 2) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>2. People Involved</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Participant Name (if applicable)</label>
                        <Input placeholder="Search participant..." />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Staff Member Name</label>
                        <Input placeholder="Staff member reporting..." />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Witnesses</label>
                        <Input placeholder="Names of any witnesses..." />
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (step === 3) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>3. Description & Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Description of Incident</label>
                        <textarea className="flex min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800" placeholder="Describe exactly what happened..." />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Immediate Actions Taken</label>
                        <textarea className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800" placeholder="What did you do immediately after?" />
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-amber-50 rounded-lg border border-amber-100 dark:bg-amber-900/10 dark:border-amber-900/30">
                        <input type="checkbox" id="manager-notify" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label htmlFor="manager-notify" className="text-sm font-medium text-amber-900 dark:text-amber-400">I have notified the on-call manager.</label>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return null;
}
