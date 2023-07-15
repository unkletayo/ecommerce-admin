import React from 'react';
import { BillboardClient } from './components/client';

type Props = {};

export default async function BillboardsPage({}: Props) {
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillboardClient />
      </div>
    </div>
  );
}
