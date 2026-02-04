'use client';

import { useEffect, useMemo, useState } from 'react';

const tabs = [
  { id: 'warehousing', label: 'ওয়্যারহাউজিং ক্যালকুলেটর' },
  { id: 'packaging', label: 'প্যাকেজিং ক্যালকুলেটর' },
  { id: 'profit', label: 'প্রফিট ক্যালকুলেটর' }
] as const;

type TabId = (typeof tabs)[number]['id'];

type SettingsResponse = {
  usdToBdtRate: number;
  storageRatePerCubicMeterPerMonth: number;
  packagingDefaults: {
    boxCost: number;
    polyCost: number;
    tapeCost: number;
  };
};

export function CalculatorTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('warehousing');
  const [settings, setSettings] = useState<SettingsResponse | null>(null);
  const [usdAmount, setUsdAmount] = useState('100');
  const [volume, setVolume] = useState('1');
  const [months, setMonths] = useState('1');
  const [packCount, setPackCount] = useState('100');
  const [productCostUsd, setProductCostUsd] = useState('10');
  const [marketingBudgetUsd, setMarketingBudgetUsd] = useState('5');
  const [sellingPriceUsd, setSellingPriceUsd] = useState('25');

  useEffect(() => {
    fetch('/api/settings/public')
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch(() => setSettings(null));
  }, []);

  const exchangeRate = settings?.usdToBdtRate ?? 110;

  const usdToBdt = useMemo(() => {
    const amount = Number(usdAmount) || 0;
    return (amount * exchangeRate).toFixed(2);
  }, [usdAmount, exchangeRate]);

  const warehousingCost = useMemo(() => {
    const volumeValue = Number(volume) || 0;
    const monthValue = Number(months) || 0;
    const rate = settings?.storageRatePerCubicMeterPerMonth ?? 1800;
    return (volumeValue * monthValue * rate).toFixed(2);
  }, [volume, months, settings?.storageRatePerCubicMeterPerMonth]);

  const packagingCost = useMemo(() => {
    const count = Number(packCount) || 0;
    const defaults = settings?.packagingDefaults ?? { boxCost: 25, polyCost: 8, tapeCost: 6 };
    const total = count * (defaults.boxCost + defaults.polyCost + defaults.tapeCost);
    return total.toFixed(2);
  }, [packCount, settings?.packagingDefaults]);

  const profitResult = useMemo(() => {
    const productCost = Number(productCostUsd) || 0;
    const marketingCost = Number(marketingBudgetUsd) || 0;
    const selling = Number(sellingPriceUsd) || 0;
    const gross = selling - (productCost + marketingCost);
    return {
      grossUsd: gross.toFixed(2),
      grossBdt: (gross * exchangeRate).toFixed(2)
    };
  }, [productCostUsd, marketingBudgetUsd, sellingPriceUsd, exchangeRate]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab.id
                ? 'bg-brand-600 text-white'
                : 'border border-slate-200 text-slate-600 hover:border-brand-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        {activeTab === 'warehousing' && (
          <div className="space-y-5">
            <p className="text-sm text-slate-600">মোট স্টোরেজ খরচ (BDT) হিসাব করুন।</p>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-600">
                ভলিউম (কিউবিক মিটার)
                <input
                  type="number"
                  value={volume}
                  onChange={(event) => setVolume(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
                />
              </label>
              <label className="text-sm text-slate-600">
                মাস সংখ্যা
                <input
                  type="number"
                  value={months}
                  onChange={(event) => setMonths(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
                />
              </label>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              আনুমানিক খরচ: <span className="font-semibold">৳ {warehousingCost}</span>
            </div>
          </div>
        )}

        {activeTab === 'packaging' && (
          <div className="space-y-5">
            <p className="text-sm text-slate-600">প্যাকেজিং খরচের আনুমানিক হিসাব।</p>
            <label className="text-sm text-slate-600">
              মোট প্যাকেজ সংখ্যা
              <input
                type="number"
                value={packCount}
                onChange={(event) => setPackCount(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
              />
            </label>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              আনুমানিক খরচ: <span className="font-semibold">৳ {packagingCost}</span>
            </div>
          </div>
        )}

        {activeTab === 'profit' && (
          <div className="space-y-5">
            <p className="text-sm text-slate-600">প্রতি ইউনিট প্রফিট হিসাব করুন (মার্কেটিং বাজেটসহ)।</p>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-600">
                প্রোডাক্ট কস্ট (USD)
                <input
                  type="number"
                  value={productCostUsd}
                  onChange={(event) => setProductCostUsd(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
                />
              </label>
              <label className="text-sm text-slate-600">
                মার্কেটিং বাজেট (USD)
                <input
                  type="number"
                  value={marketingBudgetUsd}
                  onChange={(event) => setMarketingBudgetUsd(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
                />
              </label>
              <label className="text-sm text-slate-600">
                সেলিং প্রাইস (USD)
                <input
                  type="number"
                  value={sellingPriceUsd}
                  onChange={(event) => setSellingPriceUsd(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
                />
              </label>
              <label className="text-sm text-slate-600">
                USD থেকে BDT কনভার্সন
                <input
                  type="number"
                  value={usdAmount}
                  onChange={(event) => setUsdAmount(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
                />
                <p className="mt-2 text-xs text-slate-500">রেট (অ্যাডমিন নিয়ন্ত্রিত): 1 USD = {exchangeRate} BDT</p>
              </label>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              আনুমানিক প্রফিট: <span className="font-semibold">${profitResult.grossUsd}</span> / ৳ {profitResult.grossBdt}
            </div>
            <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-xs text-slate-500">
              লগইন করা CLIENT/ADMIN ব্যবহারকারী চাইলে অনুমোদিত API দিয়ে হিসাব সংরক্ষণ করতে পারবেন।
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              USD থেকে BDT: <span className="font-semibold">৳ {usdToBdt}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
