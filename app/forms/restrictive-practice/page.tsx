'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, AlertTriangle, Shield, Check, Info } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function RestrictivePracticeContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const incidentId = searchParams.get('incidentId');
    const participantName = searchParams.get('participant');

    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [practiceType, setPracticeType] = useState('');
    const [isAuthorized, setIsAuthorized] = useState<string | null>(null);

    const handleSubmit = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            router.push('/registers/restrictive-practices');
        }, 1500);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6 pb-20">
            <div className="flex items-center gap-4 mb-4">
                <Link href="/forms">
                    <Button variant="outline" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Restrictive Practices Reporting</h1>
                    <p className="text-slate-500 dark:text-slate-400">
                        {incidentId ? `Linked to Incident #${incidentId}` : 'Report usage of a restrictive practice'}
                    </p>
                </div>
            </div>

            {incidentId && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3 dark:bg-amber-900/20 dark:border-amber-800">
                    <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                    <div>
                        <h4 className="font-semibold text-amber-900 dark:text-amber-100">Incident Context</h4>
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                            This report is automatically linked to the incident involving {participantName || 'the participant'}.
                            Please ensure details align with the incident report.
                        </p>
                    </div>
                </div>
            )}

            <Card>
                <CardHeader>
                    <CardTitle>Practice Details</CardTitle>
                    <CardDescription>Step {step} of 3</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {step === 1 && (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Type of Practice</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {['Chemical', 'Mechanical', 'Physical', 'Environmental', 'Seclusion'].map((type) => (
                                        <div
                                            key={type}
                                            onClick={() => setPracticeType(type)}
                                            className={cn(
                                                "cursor-pointer border rounded-lg p-4 flex items-center justify-between transition-all hover:bg-slate-50 dark:hover:bg-slate-900",
                                                practiceType === type ? "border-indigo-600 ring-1 ring-indigo-600 bg-indigo-50 dark:bg-indigo-900/20" : "border-slate-200 dark:border-slate-800"
                                            )}
                                        >
                                            <span className="font-medium">{type} Restraint</span>
                                            {practiceType === type && <Check className="h-4 w-4 text-indigo-600" />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {practiceType && (
                                <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                                    <label className="text-sm font-medium">Is this practice authorized in the participant&apos;s Behaviour Support Plan?</label>
                                    <div className="flex gap-4">
                                        <Button
                                            variant={isAuthorized === 'yes' ? 'default' : 'outline'}
                                            onClick={() => setIsAuthorized('yes')}
                                            className={isAuthorized === 'yes' ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                                        >
                                            Yes, Authorized
                                        </Button>
                                        <Button
                                            variant={isAuthorized === 'no' ? 'default' : 'outline'}
                                            onClick={() => setIsAuthorized('no')}
                                            className={isAuthorized === 'no' ? "bg-red-600 hover:bg-red-700" : ""}
                                        >
                                            No / Unauthorized
                                        </Button>
                                    </div>
                                    {isAuthorized === 'no' && (
                                        <p className="text-sm text-red-500 flex items-center gap-2 mt-2">
                                            <AlertTriangle className="h-4 w-4" />
                                            Unauthorized use requires immediate notification to the NDIS Commission within 5 days.
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Start Time</label>
                                    <Input type="datetime-local" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">End Time</label>
                                    <Input type="datetime-local" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Reason for Use</label>
                                <textarea
                                    className="flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800"
                                    placeholder="Describe the immediate risk of harm..."
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">De-escalation Strategies Attempted</label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800"
                                    placeholder="What was tried before resorting to this practice?"
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Staff Involved</label>
                                <Input placeholder="Names of staff administering practice" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Witnesses</label>
                                <Input placeholder="Names of any witnesses" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Post-Incident Support</label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800"
                                    placeholder="Describe support provided to participant after the event..."
                                />
                            </div>
                            <div className="flex items-center gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                <input type="checkbox" id="declare" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label htmlFor="declare" className="text-sm text-slate-600 dark:text-slate-400">
                                    I declare that the information provided is true and accurate record of the event.
                                </label>
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-between border-t border-slate-200 dark:border-slate-800 pt-6">
                    <Button variant="outline" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>
                        Back
                    </Button>
                    {step < 3 ? (
                        <Button onClick={() => setStep(step + 1)} disabled={step === 1 && !practiceType}>
                            Next Step
                        </Button>
                    ) : (
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit Report'} <Shield className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}

export default function RestrictivePracticeForm() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RestrictivePracticeContent />
        </Suspense>
    );
}
