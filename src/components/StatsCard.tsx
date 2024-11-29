import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  subtitle?: string;
  className?: string;
}

export function StatsCard({ title, value, subtitle, className = '' }: StatsCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      <h3 className="text-gray-600 text-lg font-medium">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value.toLocaleString()}</p>
      {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
    </div>
  );
}