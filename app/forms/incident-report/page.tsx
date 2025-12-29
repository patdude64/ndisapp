'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Save, Send, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function IncidentReportForm() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: '',
        injury: false,
        restrictivePractice: false,
        participant: ''
    });

    const updateForm = (key: string, value: any) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        // Logic to redirect if Restrictive Practice was used
        if (formData.restrictivePractice) {
            router.push(`/forms/restrictive-practice?incidentId=${Math.floor(Math.random() * 1000)}&participant=${encodeURIComponent(formData.participant)}`);
        } else {
            // Normal submission
            router.push('/registers/incidents');
        }
    };

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

            <StepContent step={step} formData={formData} updateForm={updateForm} />

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
                    <Button
                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                        onClick={handleSubmit}
                    >
                        <Send className="mr-2 h-4 w-4" />
                        {formData.restrictivePractice ? 'Submit & Report Restrictive Practice' : 'Submit Report'}
                    </Button>
                )}
            </div>
        </div>
    );
}

function StepContent({ step, formData, updateForm }: { step: number, formData: any, updateForm: (k: string, v: any) => void }) {
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
                        <select
                            className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800"
                            value={formData.type}
                            onChange={(e) => updateForm('type', e.target.value)}
                        >
                            <option value="">Select Type...</option>
                            <option value="Physical Injury">Physical Injury</option>
                            <option value="Behaviour of Concern">Behaviour of Concern</option>
                            <option value="Medical Emergency">Medical Emergency</option>
                            <option value="Property Damage">Property Damage</option>
                        </select>
                    </div>

                    {/* Conditional Logic: Injury Details */}
                    {formData.type === 'Physical Injury' && (
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3 dark:bg-slate-900 dark:border-slate-800 animate-in fade-in slide-in-from-top-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Body Part Injured</label>
                                <Input placeholder="e.g. Left Knee" />
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="firstaid" className="h-4 w-4" />
                                <label htmlFor="firstaid" className="text-sm">First Aid Administered?</label>
                            </div>
                        </div>
                    )}

                    {/* Conditional Logic: Behaviour Details */}
                    {formData.type === 'Behaviour of Concern' && (
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3 dark:bg-slate-900 dark:border-slate-800 animate-in fade-in slide-in-from-top-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Trigger (Antecedent)</label>
                                <Input placeholder="What happened immediately before?" />
                            </div>
                            <div className="bg-red-50 p-3 rounded border border-red-100 dark:bg-red-900/10 dark:border-red-900/30">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="restrictive"
                                        checked={formData.restrictivePractice}
                                        onChange={(e) => updateForm('restrictivePractice', e.target.checked)}
                                        className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                                    />
                                    <label htmlFor="restrictive" className="text-sm font-medium text-red-900 dark:text-red-400 flex items-center gap-2">
                                        Was a restrictive practice used?
                                        <AlertTriangle className="h-3 w-3" />
                                    </label>
                                </div>
                                {formData.restrictivePractice && (
                                    <p className="text-xs text-red-600 mt-2 ml-6 dark:text-red-400">
                                        You will be redirected to the Restrictive Practice Register upon submission.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
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
                        <Input
                            placeholder="Search participant..."
                            value={formData.participant}
                            onChange={(e) => updateForm('participant', e.target.value)}
                        />
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
