import React from 'react';
import clsx from 'clsx';

const categories = [
  { label: 'All', value: 'ALL' },
  { label: 'Transfers', value: 'TRANSFER' },
  { label: 'Matches', value: 'MATCH' },
  { label: 'Interviews', value: 'INTERVIEW' },
  { label: 'Injuries', value: 'INJURY' },
  { label: 'Analysis', value: 'ANALYSIS' },
  { label: 'Fan Opinion', value: 'FAN_OPINION' },
  { label: 'Other', value: 'OTHER' },
];

type Props = {
  selected: string;
  onSelect: (category: string) => void;
};

export default function NewsCategoryTabs({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={clsx(
            'px-4 py-1 rounded-full text-sm font-medium',
            selected === cat.value
              ? 'bg-blue-600 text-white shadow'
              : 'bg-gray-100 text-gray-900 hover:bg-blue-100'
          )}
          onClick={() => onSelect(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
