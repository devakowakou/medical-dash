'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { LogoIcon } from '@/components/icons/logo';
import { ChevronRight } from 'lucide-react';
import { OverviewIcon } from '../icons/overview-icon';
import { DoctorsIcon } from '../icons/doctors-icon';
import { PatientsIcon } from '../icons/patients-icon';
import { MessagesIcon } from '../icons/messages-icon';
import { SpecialtiesIcon } from '../icons/specialties-icon';
import { CountriesIcon } from '../icons/countries-icon';
import { UsersRolesIcon } from '../icons/users-roles-icon';
import { PaymentsIcon } from '../icons/payments-icon';
import { AppointmentsIcon } from '../icons/appointments-icon';
import { PlansIcon } from '../icons/plans-icon';
import { PushNotificationsIcon } from '../icons/push-notifications-icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <LogoIcon className="size-8 text-sidebar-foreground" />
          <h2 className="text-xl font-semibold font-headline text-sidebar-foreground">
            dashboard
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" passHref>
              <SidebarMenuButton
                tooltip={{
                  children: 'Overview',
                }}
                isActive={pathname === '/'}
              >
                <OverviewIcon />
                <span>Overview</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/appointments" passHref>
              <SidebarMenuButton
                tooltip={{
                  children: 'Appointments',
                }}
                isActive={pathname === '/appointments'}
                className="justify-between"
              >
                <div className="flex items-center gap-2">
                  <AppointmentsIcon />
                  <span>Appointments</span>
                </div>
                <ChevronRight className="size-4" />
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: 'Doctors',
              }}
            >
              <DoctorsIcon />
              <span>Doctors</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: 'Patients',
              }}
            >
              <PatientsIcon />
              <span>Patients</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: 'Specialties',
              }}
            >
              <SpecialtiesIcon />
              <span>Specialties</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: 'Countries',
              }}
            >
              <CountriesIcon />
              <span>Countries</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: 'Users & Roles',
              }}
            >
              <UsersRolesIcon />
              <span>Users & Roles</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: 'Payments',
              }}
            >
              <PaymentsIcon />
              <span>Payments</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: 'Plans',
              }}
            >
              <PlansIcon />
              <span>Plans</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: 'Push Notifications',
              }}
            >
              <PushNotificationsIcon />
              <span>Push Notifications</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: 'Messages',
              }}
            >
              <MessagesIcon />
              <span>Messages</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
