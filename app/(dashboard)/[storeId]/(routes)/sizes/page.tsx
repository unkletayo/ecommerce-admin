import React from 'react';
import prismadb from '@/lib/prismadb';
import { SizesClient } from './components/client';
import { format } from 'date-fns';
import { SizeColumn } from './components/columns';

export default async function SizesPage({
  params,
}: {
  params: { storeId: string };
}) {
  const billboards = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedSizes: SizeColumn[] = billboards.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
}
