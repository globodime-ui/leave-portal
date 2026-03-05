import React, { useState } from 'react';
import { Building2, Calendar, ClipboardCheck, ShieldCheck } from 'lucide-react';

const PharmaPortal = () => {
  // Logic: In production, this comes from the User Login
  const [company, setCompany] = useState('Pharmanova'); 
  const isAtlantic = company === 'Atlantic';

  const theme = {
    primary: isAtlantic ? 'bg-[#00AEEF]' : 'bg-[#1a237e]',
    accent: isAtlantic ? 'border-[#00AEEF]' : 'border-red-600',
    text: isAtlantic ? 'text-[#00AEEF]' : 'text-[#1a237e]'
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Dynamic Header */}
      <nav className={`p-4 text-white shadow-lg ${theme.primary} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Building2 size={28} />
            <h1 className="text-xl font-bold uppercase tracking-tight">{company} Portal</h1>
          </div>
          <button onClick={() => setCompany(isAtlantic ? 'Pharmanova' : 'Atlantic')} className="text-xs bg-white/20 px-3 py-1 rounded">
            Switch View (Demo)
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-12 px-4">
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 ${theme.accent}`}>
          <div className="p-8">
            <h2 className="text-3xl font-black text-gray-800 mb-2">Apply for Leave</h2>
            <p className="text-gray-500 mb-8 font-medium">Internal Management System - Production & QC Division</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase">Start Date</label>
                  <input type="date" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase">End Date</label>
                  <input type="date" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Handover Protocols (SOP-HR-001)</label>
                <textarea 
                  placeholder="Identify colleague(s) covering your production/lab duties..." 
                  className="w-full p-4 border rounded-lg h-32 outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button className={`w-full py-4 rounded-xl text-white font-black text-lg shadow-lg hover:brightness-110 transition-all ${theme.primary}`}>
                SUBMIT REQUEST TO MANAGER
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PharmaPortal;