import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Clock, FileWarning, Plus, Search } from "lucide-react";

import { alerts as mockAlerts } from "@/lib/mock-data";

export default function Dashboard() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-outfit">Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400">Welcome back, here&apos;s your compliance overview.</p>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <CheckCircle className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-slate-500">+2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Incidents</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-slate-500">1 High Severity</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Renewals</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-slate-500">Documents expiring soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Staff</CardTitle>
            <Search className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-slate-500">All compliant</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
        {/* Alerts Section */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100 dark:bg-slate-900/50 dark:border-slate-800">
                  {alert.type === 'critical' && <FileWarning className="h-5 w-5 text-red-500 mt-0.5" />}
                  {alert.type === 'warning' && <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />}
                  {alert.type === 'info' && <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />}

                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-200">{alert.message}</p>
                    <p className="text-xs text-slate-500 mt-1">{alert.date}</p>
                  </div>
                  <Button size="sm" variant="outline">Action</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start text-left h-auto py-4" variant="outline">
              <div className="bg-red-100 text-red-600 p-2 rounded-lg mr-3">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Log Incident</div>
                <div className="text-xs text-slate-500">Report a new incident or hazard</div>
              </div>
            </Button>
            <Button className="w-full justify-start text-left h-auto py-4" variant="outline">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Add Shift Note</div>
                <div className="text-xs text-slate-500">Record daily logs</div>
              </div>
            </Button>
            <Button className="w-full justify-start text-left h-auto py-4" variant="outline">
              <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg mr-3">
                <Plus className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">New Staff Member</div>
                <div className="text-xs text-slate-500">Onboard new employee</div>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
