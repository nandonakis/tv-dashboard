import React from 'react';
import { Clock } from 'lucide-react';

export function Header() {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-800 border-b border-slate-700 py-3 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">NSW NDC Erskine Park - AMR Picking</h1>
        <div className="flex items-center gap-2 text-xl font-medium text-slate-200">
          <Clock className="h-6 w-6" />
          {currentTime.toLocaleString()}
        </div>
      </div>
    </div>
  );
}