import React from 'react';
import prismadb from '@/lib/prismadb';
import CategoryForm from './components/billboard-form';

async function CategoryPage({
  params,
}: {
  params: {
    categoryId: string;
  };
}) {
  const category = await prismadb.billboard.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <CategoryForm initialData={category} />
    </div>
  );
}

export default CategoryPage;
