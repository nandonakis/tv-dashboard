import React from 'react';
import { formatDecimal } from '../utils/formatters';

interface ShiftData {
  shift: string;
  lph: number;
  lines: number;
  hoursActive: number;
  minHoursToday: number;
}

interface TotalsPanelProps {
  shifts: ShiftData[];
  grandTotal: {
    lph: number;
    lines: number;
    hoursActive: number;
    minHoursToday: number;
  };
}

export function TotalsPanel({ shifts, grandTotal }: TotalsPanelProps) {
  return (
    <div className="bg-slate-800/50 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-3xl font-bold text-white">Shift Totals</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Shift</th>
              <th className="text-right">LPH</th>
              <th className="text-right">Lines</th>
              <th className="text-right">Hours</th>
              <th className="text-right">Min Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-700/50 grand-total">
              <td className="font-semibold">Grand Total</td>
              <td className="text-right font-semibold">{grandTotal.lph}</td>
              <td className="text-right font-semibold">{grandTotal.lines}</td>
              <td className="text-right font-semibold">{formatDecimal(grandTotal.hoursActive)}</td>
              <td className="text-right font-semibold">{formatDecimal(grandTotal.minHoursToday)}</td>
            </tr>
            {shifts.map((shift) => (
              <tr key={shift.shift}>
                <td>{shift.shift}</td>
                <td className="text-right">{shift.lph}</td>
                <td className="text-right">{shift.lines}</td>
                <td className="text-right">{formatDecimal(shift.hoursActive)}</td>
                <td className="text-right">{formatDecimal(shift.minHoursToday)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}