import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'signup'
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signUp, logIn } = useAuth();

  if (!isOpen) return null;

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPassword('');
    setStatus({ type: '', message: '' });
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      if (activeTab === 'signup') {
        await signUp(email, password, fullName);
        setStatus({ type: 'success', message: 'Account created successfully! You can now log in.' });
        resetForm();
        // Switch to login tab after successful signup
        setTimeout(() => setActiveTab('login'), 1500);
      } else {
        await logIn(email, password);
        setStatus({ type: 'success', message: 'Logged in successfully!' });
        resetForm();
        // Close modal after successful login
        setTimeout(() => onClose(), 800);
      }
    } catch (err) {
      console.error('Auth error:', err);
      let errorMessage = 'Something went wrong. Please try again.';
      if (err.message) {
        if (err.message.includes('User already registered')) {
          errorMessage = 'This email is already registered. Please log in.';
        } else if (err.message.includes('Invalid login credentials')) {
          errorMessage = 'Invalid email or password. Please try again.';
        } else if (err.message.includes('Password should be at least')) {
          errorMessage = 'Password is too weak. Use at least 6 characters.';
        } else {
          errorMessage = err.message;
        }
      }
      setStatus({ type: 'error', message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={() => { resetForm(); onClose(); }}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-800 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header / Tabs */}
        <div className="flex border-b border-gray-100">
          <button 
            className={`flex-1 py-4 text-center font-semibold text-lg transition-colors ${activeTab === 'login' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => handleTabSwitch('login')}
          >
            Log In
          </button>
          <button 
            className={`flex-1 py-4 text-center font-semibold text-lg transition-colors ${activeTab === 'signup' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => handleTabSwitch('signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Form Body */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary">
              {activeTab === 'login' ? 'Welcome Back' : 'Create an Account'}
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              {activeTab === 'login' 
                ? 'Enter your credentials to access your account' 
                : 'Join PackWithGati to manage your seamless relocations'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {activeTab === 'signup' && (
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-400"><User className="w-5 h-5" /></span>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required 
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-secondary"
                />
              </div>
            )}

            <div className="relative">
              <span className="absolute left-4 top-3.5 text-gray-400"><Mail className="w-5 h-5" /></span>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-secondary"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-3.5 text-gray-400"><Lock className="w-5 h-5" /></span>
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-secondary"
              />
            </div>

            {activeTab === 'login' && (
              <div className="flex justify-end pr-1">
                <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="btn-primary w-full shadow-lg shadow-orange-500/20 py-3.5 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting 
                ? (activeTab === 'login' ? 'Logging in...' : 'Creating account...') 
                : (activeTab === 'login' ? 'Log In' : 'Sign Up')}
            </button>

            {status.message && (
              <p className={`text-sm text-center mt-2 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}
            
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            {activeTab === 'login' ? "Don't have an account? " : "Already have an account? "}
            <button 
              type="button"
              className="text-primary hover:underline font-medium"
              onClick={() => handleTabSwitch(activeTab === 'login' ? 'signup' : 'login')}
            >
              {activeTab === 'login' ? 'Sign up' : 'Log in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

