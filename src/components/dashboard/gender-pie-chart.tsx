'use client';

import * as React from 'react';
import { Pie, PieChart, Cell } from 'recharts';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

interface GenderPieChartProps {
  data: {
    gender: string;
    count: number;
    fill: string;
  }[];
}

export function GenderPieChart({ data }: GenderPieChartProps) {
  const chartConfig = data.reduce(
    (acc, item) => {
      acc[item.gender] = { label: item.gender, color: item.fill };
      return acc;
    },
    {} as any
  );

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[250px]"
    >
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="gender"
          innerRadius={0}
          outerRadius={80}
          strokeWidth={2}
          startAngle={90}
          endAngle={450}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <ChartLegend
          content={<ChartLegendContent nameKey="gender" />}
          className="-translate-y-2 flex-wrap justify-center gap-x-4 gap-y-2 [&>*]:basis-auto"
        />
      </PieChart>
    </ChartContainer>
  );
}
