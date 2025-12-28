import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, Plus } from "lucide-react";
import Link from "next/link";

export default function RestrictivePracticesRegister() {
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
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Restrictive Practices</h1>
                        <p className="text-slate-500 dark:text-slate-400">Log and report authorized restrictive practices.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> New Authorization
                    </Button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-12 text-center bg-slate-50 rounded-lg border border-dashed border-slate-300 dark:bg-slate-900 dark:border-slate-800">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 dark:bg-slate-800">
                    <Filter className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">No Restrictive Practices Recorded</h3>
                <p className="text-slate-500 max-w-sm mt-2 mb-6">There are currently no active restrictive practice authorizations or reports.</p>
                <Button>Add New Record</Button>
            </div>
        </div>
    );
}
