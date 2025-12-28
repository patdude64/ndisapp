import { getResources } from "@/lib/resources";
import { Folder, FileText, Download } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Only Server Components can be async
export default async function ResourcesPage({
    searchParams,
}: {
    searchParams: Promise<{ path?: string }>;
}) {
    const params = await searchParams; // Next.js 15 requires awaiting searchParams
    const currentPath = params.path || '';
    const resources = await getResources(currentPath);

    // Parent path logic
    const parts = currentPath.split('/').filter(Boolean);
    const parentPath = parts.slice(0, -1).join('/');

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Resource Library</h1>
                    <p className="text-slate-500 dark:text-slate-400">
                        Browsing: <span className="font-mono text-indigo-600">{currentPath || 'Root'}</span>
                    </p>
                </div>
                {currentPath && (
                    <Link href={parentPath ? `/resources?path=${parentPath}` : '/resources'}>
                        <Button variant="outline">Back</Button>
                    </Link>
                )}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {resources.map((item) => (
                    <Card key={item.path} className="group hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${item.type === 'directory' ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30' : 'bg-slate-100 text-slate-600 dark:bg-slate-800'}`}>
                                {item.type === 'directory' ? <Folder className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                {item.type === 'directory' ? (
                                    <Link href={`/resources?path=${encodeURIComponent(item.path)}`} className="block focus:outline-none">
                                        <p className="font-medium text-slate-900 dark:text-slate-100 truncate group-hover:text-indigo-600 transition-colors">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-slate-500">Folder</p>
                                    </Link>
                                ) : (
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-slate-100 truncate">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-slate-500">File</p>
                                    </div>
                                )}
                            </div>
                            {item.type === 'file' && (
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-indigo-600">
                                    <Download className="h-4 w-4" />
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
                {resources.length === 0 && (
                    <div className="col-span-full p-12 text-center text-slate-500">
                        <p>No files found in this folder.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
