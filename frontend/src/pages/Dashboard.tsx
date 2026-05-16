import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  LayoutDashboard, FileText, Download, LogOut, Plus,
  Clock, CheckCircle, XCircle, RefreshCw, User, BookOpen
} from 'lucide-react';

const API_BASE = window.location.hostname === 'localhost' ? 'http://localhost:8000/api' : '/api';

const statusConfig: Record<string, { color: string; icon: JSX.Element }> = {
  'Pending':      { color: 'bg-amber-100 text-amber-800 border-amber-200',  icon: <Clock size={12} /> },
  'Under Review': { color: 'bg-blue-100 text-blue-800 border-blue-200',    icon: <RefreshCw size={12} /> },
  'Approved':     { color: 'bg-emerald-100 text-emerald-800 border-emerald-200', icon: <CheckCircle size={12} /> },
  'Rejected':     { color: 'bg-red-100 text-red-800 border-red-200',       icon: <XCircle size={12} /> },
};

const Dashboard = () => {
  const { user, logout, accessToken } = useAuth();
  const navigate = useNavigate();
  const [referrals, setReferrals] = useState<any[]>([]);
  const [documents, setDocuments] = useState<any[]>([]);
  const [loadingReferrals, setLoadingReferrals] = useState(true);
  const [loadingDocs, setLoadingDocs] = useState(true);
  const [activeTab, setActiveTab] = useState<'referrals' | 'documents'>('referrals');

  const authHeaders = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };

  useEffect(() => {
    fetch(`${API_BASE}/referrals/`, { headers: authHeaders })
      .then(r => r.json()).then(setReferrals).catch(() => setReferrals([]))
      .finally(() => setLoadingReferrals(false));

    fetch(`${API_BASE}/documents/`, { headers: authHeaders })
      .then(r => r.json()).then(setDocuments).catch(() => setDocuments([]))
      .finally(() => setLoadingDocs(false));
  }, [accessToken]);

  const handleLogout = async () => { await logout(); navigate('/'); };

  const stats = [
    { label: 'Total Referrals', value: referrals.length, color: 'from-purple-500 to-[#6A0DAD]' },
    { label: 'Pending', value: referrals.filter(r => r.status === 'Pending').length, color: 'from-amber-400 to-orange-500' },
    { label: 'Approved', value: referrals.filter(r => r.status === 'Approved').length, color: 'from-emerald-400 to-teal-600' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src="/logo.jpg" alt="Dyar" className="h-10 w-auto object-contain"
                onError={(e) => { const t = e.target as HTMLImageElement; t.onerror = null; t.src = 'https://ui-avatars.com/api/?name=Dyar&background=6A0DAD&color=fff&size=40'; }} />
            </Link>
            <span className="hidden sm:block text-xs font-bold text-[#6A0DAD] bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">Participant Portal</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <User size={16} className="text-[#6A0DAD]" />
              </div>
              <span className="font-medium">{user?.first_name || user?.username}</span>
            </div>
            <button onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all">
              <LogOut size={16} /> <span className="hidden sm:block">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Welcome back, <span className="text-[#6A0DAD]">{user?.first_name || user?.username}</span> 👋
          </h1>
          <p className="text-gray-500 mt-1">Here's an overview of your NDIS referrals and available resources.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map(s => (
            <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-2xl p-5 text-white shadow-md`}>
              <p className="text-white/80 text-sm font-medium">{s.label}</p>
              <p className="text-4xl font-extrabold mt-1">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Action */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Link to="/referral"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#6A0DAD] text-white font-bold rounded-xl hover:bg-purple-800 shadow-md transition-all hover:-translate-y-0.5">
            <Plus size={18} /> Submit New Referral
          </Link>
          <Link to="/hub"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:border-purple-300 hover:text-[#6A0DAD] shadow-sm transition-all hover:-translate-y-0.5">
            <BookOpen size={18} /> Knowledge Hub
          </Link>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-100 flex">
            {[{ id: 'referrals', label: 'My Referrals', icon: <FileText size={16} /> },
              { id: 'documents', label: 'Resources & Documents', icon: <Download size={16} /> }].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-all ${activeTab === tab.id ? 'border-[#6A0DAD] text-[#6A0DAD]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* Referrals Tab */}
            {activeTab === 'referrals' && (
              loadingReferrals ? (
                <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-purple-200 border-t-[#6A0DAD] rounded-full animate-spin" /></div>
              ) : referrals.length === 0 ? (
                <div className="text-center py-16">
                  <LayoutDashboard size={48} className="text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">No referrals yet</p>
                  <p className="text-gray-400 text-sm mt-1">Submit your first referral to get started.</p>
                  <Link to="/referral" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#6A0DAD] text-white font-bold rounded-xl hover:bg-purple-800 transition-all text-sm">
                    <Plus size={16} /> Submit Referral
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {referrals.map((r: any) => {
                    const sc = statusConfig[r.status] || statusConfig['Pending'];
                    return (
                      <div key={r.id} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-sm transition-all bg-gray-50 hover:bg-white">
                        <div>
                          <p className="font-bold text-gray-900">{r.first_name} {r.last_name}</p>
                          <p className="text-sm text-gray-500">{r.service_requested} · {new Date(r.created_at).toLocaleDateString('en-AU')}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${sc.color}`}>
                          {sc.icon} {r.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )
            )}

            {/* Documents Tab */}
            {activeTab === 'documents' && (
              loadingDocs ? (
                <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-purple-200 border-t-[#6A0DAD] rounded-full animate-spin" /></div>
              ) : documents.length === 0 ? (
                <div className="text-center py-16">
                  <Download size={48} className="text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">No documents available yet</p>
                  <p className="text-gray-400 text-sm mt-1">Your coordinator will upload resources here shortly.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {documents.map((doc: any) => (
                    <div key={doc.id} className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-sm transition-all p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                          <FileText size={20} className="text-[#6A0DAD]" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{doc.file_extension || 'PDF'}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1 leading-snug">{doc.title}</h3>
                      <p className="text-xs text-gray-500 mb-4 line-clamp-2">{doc.description || doc.category}</p>
                      <a href={doc.file} download target="_blank" rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2 bg-[#6A0DAD] text-white text-xs font-bold rounded-xl hover:bg-purple-800 transition-all">
                        <Download size={14} /> Download
                      </a>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
