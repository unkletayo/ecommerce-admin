import React from 'react';
import prismadb from '@/lib/prismadb';
import { ColorsClient } from './components/client';
import { format } from 'date-fns';
import { ColorColumn } from './components/columns';

export default async function ColorsPage({
  params,
}: {
  params: { storeId: string };
}) {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
}
