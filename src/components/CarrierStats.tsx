import React from 'react';

interface CarrierData {
  carrier: string;
  allocated: number;
  picked: number;
}

interface CarrierStatsProps {
  carriers: CarrierData[];
  grandTotal: {
    allocated: number;
    picked: number;
  };
}

export function CarrierStats({ carriers, grandTotal }: CarrierStatsProps) {
  return (
    <div className="bg-slate-800/50 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-3xl font-bold text-white">Carrier Status</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Carrier</th>
              <th className="text-right">Allocated</th>
              <th className="text-right">Picked</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-700/50 grand-total">
              <td className="font-semibold">Grand Total</td>
              <td className="text-right font-semibold">{grandTotal.allocated}</td>
              <td className="text-right font-semibold">{grandTotal.picked}</td>
            </tr>
            {carriers.map((carrier) => (
              <tr key={carrier.carrier}>
                <td>{carrier.carrier}</td>
                <td className="text-right">{carrier.allocated}</td>
                <td className="text-right">{carrier.picked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}