import React from 'react';
import { Header } from './components/Header';
import { PickerTable } from './components/PickerTable';
import { CarrierStats } from './components/CarrierStats';
import { TotalsPanel } from './components/TotalsPanel';
import { PickTarget } from './components/PickTarget';
import { pickerData, carrierData, totalsData } from './data/mockData';

export default function App() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <div className="stats-grid">
          <PickTarget target={164} />
          <div className="bg-slate-800/50 rounded-xl p-4">
            <div className="text-base font-medium text-slate-400">Total Lines</div>
            <div className="text-3xl font-bold mt-1">{totalsData.grandTotal.lines}</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <div className="text-base font-medium text-slate-400">Average LPH</div>
            <div className="text-3xl font-bold mt-1">{totalsData.grandTotal.lph}</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <div className="text-base font-medium text-slate-400">Active Pickers</div>
            <div className="text-3xl font-bold mt-1">
              {pickerData.pickers.filter(p => p.active).length}
            </div>
          </div>
        </div>
        
        <div className="main-grid">
          <PickerTable {...pickerData} />
          <div className="space-y-4">
            <CarrierStats {...carrierData} />
            <TotalsPanel {...totalsData} />
          </div>
        </div>
      </div>
    </div>
  );
}