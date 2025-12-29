'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, User, Phone, FileText, Activity, Check, PlusCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function IntakeForm() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('personal');
    const [showRiskPrompt, setShowRiskPrompt] = useState(false);

    const tabs = [
        { id: 'personal', label: 'Personal Details', icon: User },
        { id: 'contacts', label: 'Emergency Contacts', icon: Phone },
        { id: 'medical', label: 'Medical Info', icon: Activity },
        { id: 'funding', label: 'NDIS & Funding', icon: FileText },
    ];

    const handleFinalize = () => {
        // Show risk prompt instead of immediate submit
        setShowRiskPrompt(true);
    };

    if (showRiskPrompt) {
        return (
            <div className="max-w-xl mx-auto pt-20 text-center space-y-6 animate-in slide-in-from-bottom-2">
                <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-6 dark:bg-emerald-900/30">
                    <Check className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Intake Complete!</h2>
                <p className="text-slate-500 dark:text-slate-400">
                    The participant has been successfully onboarded. Would you like to create a risk profile for them now?
                </p>
                <div className="flex gap-4 justify-center pt-4">
                    <Button variant="outline" onClick={() => router.push('/participants')}>
                        No, skip for now
                    </Button>
                    <Button onClick={() => router.push('/registers/risk')} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        <PlusCircle className="mr-2 h-4 w-4" /> Create Risk Profile
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-20">
            <div className="flex items-center gap-4 mb-4">
                <Link href="/forms">
                    <Button variant="outline" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Participant Intake</h1>
                    <p className="text-slate-500 dark:text-slate-400">Onboard a new NDIS participant.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Tabs Sidebar */}
                <div className="w-full md:w-64 space-y-2">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                                activeTab === tab.id
                                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
                                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900"
                            )}
                        >
                            <tab.icon className="h-4 w-4 mr-3" />
                            {tab.label}
                        </button>
                    ))}

                    <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                        <div className="px-4">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Completion</p>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800">
                                <div
                                    className="h-full bg-emerald-500 transition-all duration-300"
                                    style={{ width: `${((tabs.findIndex(t => t.id === activeTab) + 1) / tabs.length) * 100}%` }}
                                />
                            </div>
                            <p className="text-xs text-right text-slate-400 mt-1">
                                {Math.round(((tabs.findIndex(t => t.id === activeTab) + 1) / tabs.length) * 100)}% Complete
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Content */}
                <div className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>{tabs.find(t => t.id === activeTab)?.label}</CardTitle>
                            <CardDescription>Please enter the details below.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300" key={activeTab}>
                            {activeTab === 'personal' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">First Name</label>
                                        <Input placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Last Name</label>
                                        <Input placeholder="Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Date of Birth</label>
                                        <Input type="date" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Gender</label>
                                        <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800">
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Non-binary</option>
                                            <option>Prefer not to say</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium">Address</label>
                                        <Input placeholder="123 Main St, Suburb..." />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'contacts' && (
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Primary Contact</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Name</label>
                                                <Input />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Relationship</label>
                                                <Input />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Phone</label>
                                                <Input type="tel" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Email</label>
                                                <Input type="email" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'medical' && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Primary Diagnosis</label>
                                        <Input />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Secondary Diagnosis</label>
                                        <Input />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Allergies</label>
                                        <textarea className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800" placeholder="List all allergies..." />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'funding' && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">NDIS Number</label>
                                        <Input placeholder="e.g. 430 123 456" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Plan Start Date</label>
                                            <Input type="date" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Plan End Date</label>
                                            <Input type="date" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Plan Management</label>
                                        <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800">
                                            <option>Agency Managed</option>
                                            <option>Plan Managed</option>
                                            <option>Self Managed</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                        <CardFooter className="flex justify-between border-t border-slate-200 dark:border-slate-800 pt-6">
                            <Button variant="outline" onClick={() => {
                                const index = tabs.findIndex(t => t.id === activeTab);
                                if (index > 0) setActiveTab(tabs[index - 1].id);
                            }}>
                                Previous
                            </Button>

                            {activeTab === 'funding' ? (
                                <Button
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                    onClick={handleFinalize}
                                >
                                    <Check className="mr-2 h-4 w-4" /> Finalize Intake
                                </Button>
                            ) : (
                                <Button onClick={() => {
                                    const index = tabs.findIndex(t => t.id === activeTab);
                                    if (index < tabs.length - 1) setActiveTab(tabs[index + 1].id);
                                }}>
                                    Next Section
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
