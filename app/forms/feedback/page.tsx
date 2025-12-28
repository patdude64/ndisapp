'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MessageSquare, Send, ThumbsUp, ThumbsDown, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FeedbackForm() {
    const [type, setType] = useState<string | null>(null);

    return (
        <div className="max-w-3xl mx-auto space-y-6 pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/forms">
                    <Button variant="outline" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Feedback Form</h1>
                    <p className="text-slate-500 dark:text-slate-400">We value your feedback to improve our services.</p>
                </div>
            </div>

            <form className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Feedback Type</CardTitle>
                        <CardDescription>What kind of feedback would you like to provide?</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div
                                onClick={() => setType('compliment')}
                                className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 ${type === 'compliment' ? 'ring-2 ring-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500' : 'border-slate-200 dark:border-slate-800'}`}
                            >
                                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                    <ThumbsUp className="h-6 w-6" />
                                </div>
                                <span className="font-medium">Compliment</span>
                            </div>

                            <div
                                onClick={() => setType('complaint')}
                                className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 ${type === 'complaint' ? 'ring-2 ring-red-500 bg-red-50 dark:bg-red-900/20 border-red-500' : 'border-slate-200 dark:border-slate-800'}`}
                            >
                                <div className="h-12 w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                                    <ThumbsDown className="h-6 w-6" />
                                </div>
                                <span className="font-medium">Complaint</span>
                            </div>

                            <div
                                onClick={() => setType('suggestion')}
                                className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 ${type === 'suggestion' ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20 border-blue-500' : 'border-slate-200 dark:border-slate-800'}`}
                            >
                                <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                    <Lightbulb className="h-6 w-6" />
                                </div>
                                <span className="font-medium">Suggestion</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Date</label>
                                <Input type="date" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Submitted By (Optional)</label>
                                <Input placeholder="Your name" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Feedback Details</label>
                            <textarea
                                className="flex min-h-[150px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800"
                                placeholder="Please describe your feedback in detail..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Desired Outcome (Optional)</label>
                            <textarea
                                className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:bg-slate-950 dark:border-slate-800"
                                placeholder="What would you like to see happen?"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end border-t border-slate-200 dark:border-slate-800 pt-6">
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                            <Send className="mr-2 h-4 w-4" /> Submit Feedback
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}
