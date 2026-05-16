import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ShieldCheck, Eye, EyeOff, LogIn } from 'lucide-react';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(form.username, form.password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF5FF] via-white to-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <Link to="/">
            <img src="/logo.jpg" alt="Dyar Logo" className="h-16 w-auto object-contain mx-auto mb-4"
              onError={(e) => { const t = e.target as HTMLImageElement; t.onerror = null; t.src = 'https://ui-avatars.com/api/?name=Dyar&background=6A0DAD&color=fff&size=64'; }} />
          </Link>
          <h1 className="text-2xl font-extrabold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 mt-1 text-sm">Sign in to your Dyar participant portal</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Banner */}
          <div className="bg-gradient-to-r from-[#6A0DAD] to-blue-600 px-6 py-4 flex items-center gap-3">
            <ShieldCheck className="text-white/80" size={20} />
            <p className="text-white text-sm font-medium">Your data is encrypted and NDIS-compliant</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-5" aria-label="Login form">
            {error && (
              <div role="alert" className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-2">Username</label>
              <input
                id="username" type="text" required autoComplete="username"
                value={form.username} onChange={e => setForm({ ...form, username: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  id="password" type={showPassword ? 'text' : 'password'} required autoComplete="current-password"
                  value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Enter your password"
                />
                <button type="button" onClick={() => setShowPassword(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#6A0DAD] hover:bg-purple-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><LogIn size={18} /> Sign In</>}
            </button>

            <p className="text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#6A0DAD] font-bold hover:underline">Create one free</Link>
            </p>
          </form>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          Protected by 256-bit SSL encryption · NDIS compliant
        </p>
      </div>
    </div>
  );
};

export default Login;
