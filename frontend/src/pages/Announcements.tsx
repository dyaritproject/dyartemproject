import { Bell, AlertTriangle, Info } from 'lucide-react';

const Announcements = () => {
  return (
    <div className="font-sans text-gray-800 bg-[#F8F9FA] min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
              <Bell size={24} strokeWidth={2} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Updates &amp; Emergency Announcements
            </h1>
          </div>
          
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mb-8 flex flex-col md:flex-row gap-5 items-start">
            <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm">
              <AlertTriangle size={20} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Emergency Communication Protocol</h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                In the event of an emergency or natural disaster, this page will be immediately updated with critical information. You will also receive an urgent <strong>SMS text message</strong> and <strong>email notification</strong> outlining the situation and any necessary steps to stay safe.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info size={18} className="text-[#6A0DAD]" /> Recent Announcements
            </h3>
            
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900">Welcome to the New Resources Hub</h4>
                <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded-md">General</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                We have updated our website to make it easier for you to find important forms and emergency plans. Check back here for future news and updates from DYAR!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Announcements;
