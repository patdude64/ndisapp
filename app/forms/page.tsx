import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, PenTool } from "lucide-react";
import Link from "next/link";

export default function FormsPage() {
    const forms = [
        { title: "Incident Report", desc: "Report an incident involving a participant or staff." },
        { title: "Feedback Form", desc: "Log complaints, compliments, or feedback." },
        { title: "Shift Report", desc: "Daily shift handover and progress notes." },
        { title: "Participant Intake", desc: "New participant onboarding form." },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Digital Forms</h1>
                <p className="text-slate-500 dark:text-slate-400">Complete compliance forms digitally.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {forms.map((form) => (
                    <Card key={form.title} className="hover:border-indigo-400 transition-colors">
                        <CardHeader>
                            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-2 dark:bg-indigo-900/30">
                                <PenTool className="h-5 w-5" />
                            </div>
                            <CardTitle>{form.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-500 mb-4">{form.desc}</p>
                            <Link href={
                                form.title === "Incident Report" ? "/forms/incident-report" :
                                    form.title === "Feedback Form" ? "/forms/feedback" :
                                        form.title === "Shift Report" ? "/forms/shift-report" :
                                            form.title === "Participant Intake" ? "/forms/intake" : "#"
                            }>
                                <Button className="w-full">Start Form</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
