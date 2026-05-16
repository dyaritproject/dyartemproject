import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ShieldCheck, Eye, EyeOff, UserPlus } from 'lucide-react';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', first_name: '', last_name: '', password: '', password2: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) { setError('Please accept the privacy policy to continue.'); return; }
    if (form.password !== form.password2) { setError('Passwords do not match.'); return; }
    setError(''); setLoading(true);
    try {
      await register(form);
      navigate('/login?registered=true');
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const field = (id: keyof typeof form, label: string, type = 'text', placeholder = '') => (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-gray-700 mb-2">{label} *</label>
      <input id={id} type={type} required value={form[id]}
        onChange={e => setForm({ ...form, [id]: e.target.value })}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF5FF] via-white to-slate-50 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link to="/"><img src="/logo.jpg" alt="Dyar Logo" className="h-14 w-auto object-contain mx-auto mb-4"
            onError={(e) => { const t = e.target as HTMLImageElement; t.onerror = null; t.src = 'https://ui-avatars.com/api/?name=Dyar&background=6A0DAD&color=fff&size=64'; }} /></Link>
          <h1 className="text-2xl font-extrabold text-gray-900">Create your account</h1>
          <p className="text-gray-500 mt-1 text-sm">Access your NDIS referrals and resources</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#6A0DAD] to-blue-600 px-6 py-4 flex items-center gap-3">
            <ShieldCheck className="text-white/80" size={20} />
            <p className="text-white text-sm font-medium">Your information is protected under the Australian Privacy Act 1988</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-5" aria-label="Registration form">
            {error && (
              <div role="alert" className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">{error}</div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {field('first_name', 'First Name', 'text', 'John')}
              {field('last_name', 'Last Name', 'text', 'Smith')}
            </div>
            {field('email', 'Email Address', 'email', 'john@example.com')}
            {field('username', 'Username', 'text', 'Choose a username')}

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">Password *</label>
              <div className="relative">
                <input id="password" type={showPassword ? 'text' : 'password'} required
                  value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
                  placeholder="Minimum 8 characters"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                />
                <button type="button" onClick={() => setShowPassword(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            {field('password2', 'Confirm Password', 'password', 'Re-enter your password')}

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#6A0DAD] rounded border-gray-300 focus:ring-[#6A0DAD]" aria-required="true" />
              <span className="text-sm text-gray-600">
                I agree to Dyar's <Link to="/support" className="text-[#6A0DAD] font-semibold hover:underline">Privacy Policy</Link> and consent to my personal information being handled in accordance with the NDIS Act 2013.
              </span>
            </label>

            <button type="submit" disabled={loading || !agreed}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#6A0DAD] hover:bg-purple-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><UserPlus size={18} /> Create Account</>}
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-[#6A0DAD] font-bold hover:underline">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
