import React from 'react';
import prismadb from '@/lib/prismadb';
import SizeForm from './components/size-form';

async function SizePage({
  params,
}: {
  params: {
    sizeId: string;
  };
}) {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <SizeForm initialData={size} />
    </div>
  );
}

export default SizePage;
