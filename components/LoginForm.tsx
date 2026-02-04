'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/admin'
    });

    if (result?.error) {
      setError('ইমেইল বা পাসওয়ার্ড সঠিক নয়।');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm text-slate-600">
        ইমেইল
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
        />
      </label>
      <label className="block text-sm text-slate-600">
        পাসওয়ার্ড
        <input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
        />
      </label>
      {error ? <p className="text-sm text-red-500">{error}</p> : null}
      <button
        type="submit"
        className="w-full rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white"
      >
        লগইন করুন
      </button>
    </form>
  );
}
