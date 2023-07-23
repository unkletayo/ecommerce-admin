import React from 'react';
import prismadb from '@/lib/prismadb';
import ColorForm from './components/color-form';

async function ColorPage({
  params,
}: {
  params: {
    colorId: string;
  };
}) {
  const color = await prismadb.color.findUnique({
    where: {
      id: params.colorId,
    },
  });

  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <ColorForm initialData={color} />
    </div>
  );
}

export default ColorPage;
