import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Plus } from 'lucide-react';
import { LayoutGridIcon } from '@/components/icons/layout-grid-icon';
import { MapPinIcon } from '@/components/icons/map-pin-icon';
import AlgeriaMapChart from '@/components/dashboard/algeria-map-chart';

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <h1 className="text-2xl font-semibold">Appointments</h1>
          <span className="text-muted-foreground">465</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-9 w-9">
            <LayoutGridIcon className="size-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <MapPinIcon className="size-4" />
          </Button>
          <Button className="h-9 gap-1">
            <Plus className="size-4" />
            <span>New</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium">Algiers</h2>
            <ChevronRight className="size-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-5xl font-bold">36%</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p>
              Appointments : <span className="font-semibold text-blue-500">300</span>
            </p>
            <p>
              Done : <span className="font-semibold text-green-500">230</span>
            </p>
            <p>
              Canceled : <span className="font-semibold text-red-500">70</span>
            </p>
            <p>
              Missed : <span className="font-semibold">-</span>
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium">Top Specialities :</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-sky-500 hover:underline">
                Dental Care
              </a>
              <a href="#" className="text-sm text-sky-500 hover:underline">
                Dermatology
              </a>
              <a href="#" className="text-sm text-sky-500 hover:underline">
                Cardiology
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-2">
          <Card className="h-full min-h-[400px] overflow-hidden">
            <CardContent className="h-full p-0">
              <AlgeriaMapChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
