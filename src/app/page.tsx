import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StatCard } from '@/components/dashboard/stat-card';
import { GenderPieChart } from '@/components/dashboard/gender-pie-chart';
import { DoctorIcon } from '@/components/icons/doctor-icon';
import { PatientIcon } from '@/components/icons/patient-icon';
import { ClinicIcon } from '@/components/icons/clinic-icon';
import { SpecialtyIcon } from '@/components/icons/specialty-icon';
import { GenderIcon } from '@/components/icons/gender-icon';
import { AgeIcon } from '@/components/icons/age-icon';
import { RegionIcon } from '@/components/icons/region-icon';
import { SpecialtyIcon as SpecialtyTabIcon } from '@/components/icons/specialty-icon-2';
import { stats, patientGenderData, doctorGenderData } from '@/lib/data';

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Doctors" value={stats.doctors.toString()} icon={<DoctorIcon className="size-8 text-blue-500" />} />
        <StatCard title="Patients" value={stats.patients.toString()} icon={<PatientIcon className="size-8 text-green-500" />} />
        <StatCard title="Clinics" value={stats.clinics.toString()} icon={<ClinicIcon className="size-8 text-yellow-500" />} />
        <StatCard title="Specialties" value={stats.specialties.toString()} icon={<SpecialtyIcon className="size-8 text-purple-500" />} />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Patient's Gender</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="gender">
              <TabsList>
                <TabsTrigger value="gender" className="gap-2 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600">
                  <GenderIcon className="size-4" />
                  Gender
                </TabsTrigger>
                <TabsTrigger value="age" className="gap-2 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600">
                  <AgeIcon className="size-4" />
                  Age
                </TabsTrigger>
                <TabsTrigger value="region" className="gap-2 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600">
                  <RegionIcon className="size-4" />
                  Region
                </TabsTrigger>
                <TabsTrigger value="specialty" className="gap-2 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600">
                  <SpecialtyTabIcon className="size-4" />
                  Specialty
                </TabsTrigger>
              </TabsList>
              <TabsContent value="gender">
                <GenderPieChart data={patientGenderData} />
              </TabsContent>
              <TabsContent value="age">
                 <GenderPieChart data={patientGenderData} />
              </TabsContent>
              <TabsContent value="region">
                 <GenderPieChart data={patientGenderData} />
              </TabsContent>
              <TabsContent value="specialty">
                 <GenderPieChart data={patientGenderData} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Doctor's Gender</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="gender">
              <TabsList>
                 <TabsTrigger value="gender" className="gap-2 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600">
                  <GenderIcon className="size-4" />
                  Gender
                </TabsTrigger>
                <TabsTrigger value="age" className="gap-2 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600">
                  <AgeIcon className="size-4" />
                  Age
                </TabsTrigger>
                <TabsTrigger value="region" className="gap-2 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600">
                  <RegionIcon className="size-4" />
                  Region
                </TabsTrigger>
                <TabsTrigger value="specialty" className="gap-2 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600">
                  <SpecialtyTabIcon className="size-4" />
                  Specialty
                </TabsTrigger>
              </TabsList>
              <TabsContent value="gender">
                <GenderPieChart data={doctorGenderData} />
              </TabsContent>
               <TabsContent value="age">
                <GenderPieChart data={doctorGenderData} />
              </TabsContent>
               <TabsContent value="region">
                <GenderPieChart data={doctorGenderData} />
              </TabsContent>
               <TabsContent value="specialty">
                <GenderPieChart data={doctorGenderData} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
