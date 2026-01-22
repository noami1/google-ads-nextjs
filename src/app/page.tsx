'use client';

import { useState } from 'react';
import { translations, Language } from './translations';

interface FieldMetaProps {
  ai?: boolean;
  importance?: number;
  bestPractice?: string;
  impact?: string;
  recommendedAmount?: string;
  t: {
    aiCanGenerate: string;
    importance: string;
    bestPractice: string;
    impactOnResults: string;
  };
}

function FieldMeta({ ai, importance, bestPractice, impact, recommendedAmount, t }: FieldMetaProps) {
  if (!ai && !importance && !bestPractice && !impact && !recommendedAmount) return null;
  
  const getImportanceColor = (score: number) => {
    if (score >= 10) return 'bg-red-100 text-red-700 border-red-200';
    if (score >= 8) return 'bg-orange-100 text-orange-700 border-orange-200';
    if (score >= 6) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    if (score >= 4) return 'bg-blue-100 text-blue-700 border-blue-200';
    return 'bg-gray-100 text-gray-600 border-gray-200';
  };

  return (
    <div className="mt-2 space-y-1.5">
      <div className="flex flex-wrap gap-2 items-center">
        {ai && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200 rounded-full">
            ✨ {t.aiCanGenerate}
          </span>
        )}
        {importance !== undefined && (
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium border rounded-full ${getImportanceColor(importance)}`}>
            ⭐ {t.importance}: {importance}/10
          </span>
        )}
        {recommendedAmount && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 border border-green-200 rounded-full">
            📊 {recommendedAmount}
          </span>
        )}
      </div>
      
      {bestPractice && (
        <div className="text-xs bg-amber-50 border border-amber-200 rounded p-2">
          <span className="font-semibold text-amber-800">💡 {t.bestPractice}:</span>{' '}
          <span className="text-amber-700">{bestPractice}</span>
        </div>
      )}
      
      {impact && (
        <div className="text-xs bg-indigo-50 border border-indigo-200 rounded p-2">
          <span className="font-semibold text-indigo-800">📈 {t.impactOnResults}:</span>{' '}
          <span className="text-indigo-700">{impact}</span>
        </div>
      )}
    </div>
  );
}

interface Headline {
  text: string;
}

interface Description {
  text: string;
}

interface PriceOffering {
  header: string;
  description: string;
  amount: string;
  currency: string;
  unit: string;
  url: string;
}

interface Callout {
  text: string;
  startDate: string;
  endDate: string;
}

export default function CampaignCreationForm() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];
  const isRTL = lang === 'he';

  const [campaignName, setCampaignName] = useState('Test Campaign - Digital Marketing');
  const [dailyBudget, setDailyBudget] = useState('0.10');
  const [status, setStatus] = useState('PAUSED');

  const [adGroupName, setAdGroupName] = useState('Digital Marketing Services');
  const [keywords, setKeywords] = useState('digital marketing, online advertising, seo services, social media marketing, ppc management');
  const [maxCpc, setMaxCpc] = useState('1.00');

  const [headlines, setHeadlines] = useState<Headline[]>([
    { text: 'Expert Digital Marketing' },
    { text: 'Grow Your Business Online' },
    { text: 'Get Results Fast' },
  ]);
  const [descriptions, setDescriptions] = useState<Description[]>([
    { text: 'Professional digital marketing services to help your business reach more customers online.' },
    { text: 'SEO, PPC, and social media marketing. Get a free consultation today. Call now!' },
  ]);

  const [finalUrl, setFinalUrl] = useState('https://example.com/digital-marketing/services');

  const [promoEnabled, setPromoEnabled] = useState(true);
  const [promoOccasion, setPromoOccasion] = useState('NEW_YEARS');
  const [promoLanguage, setPromoLanguage] = useState('en');
  const [promoCurrency, setPromoCurrency] = useState('USD');
  const [promoDiscountType, setPromoDiscountType] = useState('percent');
  const [promoMoneyOff, setPromoMoneyOff] = useState('');
  const [promoPercentOff, setPromoPercentOff] = useState('20');
  const [promoTarget, setPromoTarget] = useState('All Services');
  const [promoFinalUrl, setPromoFinalUrl] = useState('https://example.com/new-year-sale');
  const [promoDetailsType, setPromoDetailsType] = useState('code');
  const [promoCode, setPromoCode] = useState('NEWYEAR20');
  const [promoMinimum, setPromoMinimum] = useState('');
  const [promoStartDate, setPromoStartDate] = useState('');
  const [promoEndDate, setPromoEndDate] = useState('');

  const [pricesEnabled, setPricesEnabled] = useState(true);
  const [priceType, setPriceType] = useState('SERVICES');
  const [priceQualifier, setPriceQualifier] = useState('FROM');
  const [priceLanguage, setPriceLanguage] = useState('en');
  const [priceOfferings, setPriceOfferings] = useState<PriceOffering[]>([
    { header: 'Basic SEO', description: 'Small business package', amount: '299', currency: 'USD', unit: 'PER_MONTH', url: 'https://example.com/pricing/basic' },
    { header: 'Professional', description: 'Growing businesses', amount: '599', currency: 'USD', unit: 'PER_MONTH', url: 'https://example.com/pricing/pro' },
    { header: 'Enterprise', description: 'Full-service solution', amount: '1299', currency: 'USD', unit: 'PER_MONTH', url: 'https://example.com/pricing/enterprise' },
  ]);

  const [callEnabled, setCallEnabled] = useState(true);
  const [callCountryCode, setCallCountryCode] = useState('US');
  const [callPhone, setCallPhone] = useState('+1-555-123-4567');

  const [calloutsEnabled, setCalloutsEnabled] = useState(true);
  const [callouts, setCallouts] = useState<Callout[]>([
    { text: 'Free Consultation', startDate: '', endDate: '' },
    { text: '24/7 Support', startDate: '', endDate: '' },
  ]);

  const [leadFormEnabled, setLeadFormEnabled] = useState(true);
  const [leadBusiness, setLeadBusiness] = useState('Digital Marketing Pro');
  const [leadHeadline, setLeadHeadline] = useState('Get Your Free Marketing Audit');
  const [leadDescription, setLeadDescription] = useState('Fill out this quick form and one of our experts will contact you within 24 hours to discuss your digital marketing needs.');
  const [leadPrivacyUrl, setLeadPrivacyUrl] = useState('https://example.com/privacy');
  const [leadCtaType, setLeadCtaType] = useState('GET_QUOTE');
  const [leadCtaDesc, setLeadCtaDesc] = useState('Get your free audit now');
  const [leadPostHeadline, setLeadPostHeadline] = useState('Thank You!');
  const [leadPostDesc, setLeadPostDesc] = useState('Our team will contact you within 24 hours');
  const [leadFields, setLeadFields] = useState<string[]>(['FULL_NAME', 'EMAIL', 'PHONE_NUMBER']);

  const [appEnabled, setAppEnabled] = useState(true);
  const [appStore, setAppStore] = useState('GOOGLE_APP_STORE');
  const [appId, setAppId] = useState('com.example.marketing');
  const [appLinkText, setAppLinkText] = useState('Get the App');

  const addHeadline = () => {
    if (headlines.length < 15) {
      setHeadlines([...headlines, { text: '' }]);
    }
  };

  const removeHeadline = (index: number) => {
    if (headlines.length > 2) {
      setHeadlines(headlines.filter((_, i) => i !== index));
    }
  };

  const updateHeadline = (index: number, text: string) => {
    const updated = [...headlines];
    updated[index] = { text };
    setHeadlines(updated);
  };

  const addDescription = () => {
    if (descriptions.length < 4) {
      setDescriptions([...descriptions, { text: '' }]);
    }
  };

  const removeDescription = (index: number) => {
    if (descriptions.length > 2) {
      setDescriptions(descriptions.filter((_, i) => i !== index));
    }
  };

  const updateDescription = (index: number, text: string) => {
    const updated = [...descriptions];
    updated[index] = { text };
    setDescriptions(updated);
  };

  const addPriceOffering = () => {
    if (priceOfferings.length < 8) {
      setPriceOfferings([...priceOfferings, { header: '', description: '', amount: '', currency: 'USD', unit: '', url: '' }]);
    }
  };

  const removePriceOffering = (index: number) => {
    if (priceOfferings.length > 3) {
      setPriceOfferings(priceOfferings.filter((_, i) => i !== index));
    }
  };

  const updatePriceOffering = (index: number, field: keyof PriceOffering, value: string) => {
    const updated = [...priceOfferings];
    updated[index] = { ...updated[index], [field]: value };
    setPriceOfferings(updated);
  };

  const addCallout = () => {
    setCallouts([...callouts, { text: '', startDate: '', endDate: '' }]);
  };

  const removeCallout = (index: number) => {
    if (callouts.length > 1) {
      setCallouts(callouts.filter((_, i) => i !== index));
    }
  };

  const updateCallout = (index: number, field: keyof Callout, value: string) => {
    const updated = [...callouts];
    updated[index] = { ...updated[index], [field]: value };
    setCallouts(updated);
  };

  const toggleLeadField = (field: string) => {
    if (leadFields.includes(field)) {
      setLeadFields(leadFields.filter(f => f !== field));
    } else {
      setLeadFields([...leadFields, field]);
    }
  };

  const getCharCounterClass = (current: number, max: number) => {
    const ratio = current / max;
    if (ratio >= 1) return 'text-red-500';
    if (ratio >= 0.9) return 'text-yellow-500';
    return 'text-gray-500';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.pageTitle}</h1>
          <button
            onClick={() => setLang(lang === 'en' ? 'he' : 'en')}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium text-gray-700 transition-colors"
          >
            {lang === 'en' ? 'עברית' : 'English'}
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              {t.campaignBudget.title}
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">{t.required}</span>
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 font-medium mb-2">{t.campaignBudget.whatIsThis}</p>
              <p className="text-sm text-blue-700">{t.campaignBudget.description}</p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>{t.campaignBudget.whyItMatters}</strong> {t.campaignBudget.whyItMattersText}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.campaignBudget.campaignName}</label>
                <p className="text-xs text-gray-500 mb-2">{t.campaignBudget.campaignNameHelp}</p>
                <input
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder={t.campaignBudget.campaignNamePlaceholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FieldMeta
                  ai={t.campaignBudget.campaignNameAI}
                  importance={t.campaignBudget.campaignNameImportance}
                  bestPractice={t.campaignBudget.campaignNameBestPractice}
                  impact={t.campaignBudget.campaignNameImpact}
                  t={t}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.campaignBudget.dailyBudget}</label>
                <p className="text-xs text-gray-500 mb-2">{t.campaignBudget.dailyBudgetHelp}</p>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={dailyBudget}
                  onChange={(e) => setDailyBudget(e.target.value)}
                  placeholder="10.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FieldMeta
                  ai={t.campaignBudget.dailyBudgetAI}
                  importance={t.campaignBudget.dailyBudgetImportance}
                  bestPractice={t.campaignBudget.dailyBudgetBestPractice}
                  impact={t.campaignBudget.dailyBudgetImpact}
                  t={t}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.campaignBudget.status}</label>
                <p className="text-xs text-gray-500 mb-2">{t.campaignBudget.statusHelp}</p>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="PAUSED">{t.campaignBudget.statusPaused}</option>
                  <option value="ENABLED">{t.campaignBudget.statusEnabled}</option>
                </select>
                <FieldMeta
                  ai={t.campaignBudget.statusAI}
                  importance={t.campaignBudget.statusImportance}
                  bestPractice={t.campaignBudget.statusBestPractice}
                  impact={t.campaignBudget.statusImpact}
                  t={t}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              {t.adGroupKeywords.title}
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">{t.required}</span>
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 font-medium mb-2">{t.adGroupKeywords.whatIsThis}</p>
              <p className="text-sm text-blue-700">{t.adGroupKeywords.description}</p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>{t.adGroupKeywords.example}</strong> {t.adGroupKeywords.exampleText}
              </p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>{t.adGroupKeywords.whyItMatters}</strong> {t.adGroupKeywords.whyItMattersText}
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.adGroupKeywords.adGroupName}</label>
                <p className="text-xs text-gray-500 mb-2">{t.adGroupKeywords.adGroupNameHelp}</p>
                <input
                  type="text"
                  value={adGroupName}
                  onChange={(e) => setAdGroupName(e.target.value)}
                  placeholder={t.adGroupKeywords.adGroupNamePlaceholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FieldMeta
                  ai={t.adGroupKeywords.adGroupNameAI}
                  importance={t.adGroupKeywords.adGroupNameImportance}
                  bestPractice={t.adGroupKeywords.adGroupNameBestPractice}
                  impact={t.adGroupKeywords.adGroupNameImpact}
                  t={t}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.adGroupKeywords.keywords}</label>
                <p className="text-xs text-gray-500 mb-2">{t.adGroupKeywords.keywordsHelp}</p>
                <textarea
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  rows={2}
                  placeholder={t.adGroupKeywords.keywordsPlaceholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FieldMeta
                  ai={t.adGroupKeywords.keywordsAI}
                  importance={t.adGroupKeywords.keywordsImportance}
                  bestPractice={t.adGroupKeywords.keywordsBestPractice}
                  impact={t.adGroupKeywords.keywordsImpact}
                  recommendedAmount={t.adGroupKeywords.keywordsRecommendedAmount}
                  t={t}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.adGroupKeywords.maxCpc}</label>
                <p className="text-xs text-gray-500 mb-2">{t.adGroupKeywords.maxCpcHelp}</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    value={maxCpc}
                    onChange={(e) => setMaxCpc(e.target.value)}
                    placeholder="1.00"
                    className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{t.adGroupKeywords.maxCpcNote}</p>
                <FieldMeta
                  ai={t.adGroupKeywords.maxCpcAI}
                  importance={t.adGroupKeywords.maxCpcImportance}
                  bestPractice={t.adGroupKeywords.maxCpcBestPractice}
                  impact={t.adGroupKeywords.maxCpcImpact}
                  t={t}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              {t.headlinesDescriptions.title}
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">{t.required}</span>
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 font-medium mb-2">{t.headlinesDescriptions.whatIsThis}</p>
              <p className="text-sm text-blue-700">{t.headlinesDescriptions.description}</p>
              <ul className="text-sm text-blue-700 mt-2 list-disc list-inside space-y-1">
                <li><strong>{t.headlinesDescriptions.headlines}</strong> {t.headlinesDescriptions.headlinesDesc}</li>
                <li><strong>{t.headlinesDescriptions.descriptions}</strong> {t.headlinesDescriptions.descriptionsDesc}</li>
              </ul>
              <p className="text-sm text-blue-700 mt-2">
                <strong>{t.headlinesDescriptions.howItWorks}</strong> {t.headlinesDescriptions.howItWorksText}
              </p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>{t.headlinesDescriptions.whyItMatters}</strong> {t.headlinesDescriptions.whyItMattersText}
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.headlinesDescriptions.headlinesLabel}</label>
                <p className="text-xs text-gray-500 mb-2">{t.headlinesDescriptions.headlinesHelp}</p>
                <div className="space-y-2">
                  {headlines.map((headline, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        maxLength={30}
                        value={headline.text}
                        onChange={(e) => updateHeadline(index, e.target.value)}
                        placeholder={`${t.headlinesDescriptions.headlinePlaceholder} ${index + 1}`}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <span className={`text-xs ${getCharCounterClass(headline.text.length, 30)}`}>
                        {headline.text.length}/30
                      </span>
                      {headlines.length > 2 && (
                        <button
                          type="button"
                          onClick={() => removeHeadline(index)}
                          className="text-red-500 hover:text-red-700 text-xl"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {headlines.length < 15 && (
                  <button
                    type="button"
                    onClick={addHeadline}
                    className="mt-2 text-sm text-green-600 hover:text-green-700"
                  >
                    {t.headlinesDescriptions.addHeadline}
                  </button>
                )}
                <FieldMeta
                  ai={t.headlinesDescriptions.headlinesAI}
                  importance={t.headlinesDescriptions.headlinesImportance}
                  bestPractice={t.headlinesDescriptions.headlinesBestPractice}
                  impact={t.headlinesDescriptions.headlinesImpact}
                  recommendedAmount={t.headlinesDescriptions.headlinesRecommendedAmount}
                  t={t}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.headlinesDescriptions.descriptionsLabel}</label>
                <p className="text-xs text-gray-500 mb-2">{t.headlinesDescriptions.descriptionsHelp}</p>
                <div className="space-y-2">
                  {descriptions.map((desc, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        maxLength={90}
                        value={desc.text}
                        onChange={(e) => updateDescription(index, e.target.value)}
                        placeholder={`${t.headlinesDescriptions.descriptionPlaceholder} ${index + 1}`}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <span className={`text-xs ${getCharCounterClass(desc.text.length, 90)}`}>
                        {desc.text.length}/90
                      </span>
                      {descriptions.length > 2 && (
                        <button
                          type="button"
                          onClick={() => removeDescription(index)}
                          className="text-red-500 hover:text-red-700 text-xl"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {descriptions.length < 4 && (
                  <button
                    type="button"
                    onClick={addDescription}
                    className="mt-2 text-sm text-green-600 hover:text-green-700"
                  >
                    {t.headlinesDescriptions.addDescription}
                  </button>
                )}
                <FieldMeta
                  ai={t.headlinesDescriptions.descriptionsAI}
                  importance={t.headlinesDescriptions.descriptionsImportance}
                  bestPractice={t.headlinesDescriptions.descriptionsBestPractice}
                  impact={t.headlinesDescriptions.descriptionsImpact}
                  recommendedAmount={t.headlinesDescriptions.descriptionsRecommendedAmount}
                  t={t}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              {t.finalUrl.title}
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">{t.required}</span>
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 font-medium mb-2">{t.finalUrl.whatIsThis}</p>
              <p className="text-sm text-blue-700">{t.finalUrl.description}</p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>{t.finalUrl.whyItMatters}</strong> {t.finalUrl.whyItMattersText}
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.finalUrl.label}</label>
              <p className="text-xs text-gray-500 mb-2">{t.finalUrl.help}</p>
              <input
                type="url"
                value={finalUrl}
                onChange={(e) => setFinalUrl(e.target.value)}
                placeholder={t.finalUrl.placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">{t.finalUrl.note}</p>
              <FieldMeta
                ai={t.finalUrl.urlAI}
                importance={t.finalUrl.urlImportance}
                bestPractice={t.finalUrl.urlBestPractice}
                impact={t.finalUrl.urlImpact}
                t={t}
              />
            </div>
          </div>

          <div className="border-t-4 border-dashed border-gray-300 pt-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">{t.optionalExtensions.title}</h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">{t.optionalExtensions.description}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {t.promotions.title}
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{t.optional}</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={promoEnabled}
                  onChange={(e) => setPromoEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{t.enable}</span>
              </label>
            </div>

            {promoEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-green-800 font-medium mb-2">{t.promotions.whatIsThis}</p>
                  <p className="text-sm text-green-700">{t.promotions.description}</p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>{t.promotions.example}</strong> {t.promotions.exampleText}
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>{t.promotions.whyUseIt}</strong> {t.promotions.whyUseItText}
                  </p>
                </div>
                <FieldMeta
                  ai={t.promotions.sectionAI}
                  importance={t.promotions.sectionImportance}
                  bestPractice={t.promotions.sectionBestPractice}
                  impact={t.promotions.sectionImpact}
                  t={t}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.occasion}</label>
                    <p className="text-xs text-gray-500 mb-1">{t.promotions.occasionHelp}</p>
                    <select
                      value={promoOccasion}
                      onChange={(e) => setPromoOccasion(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t.promotions.occasionNone}</option>
                      <option value="NEW_YEARS">{t.occasions.newYears}</option>
                      <option value="VALENTINES_DAY">{t.occasions.valentinesDay}</option>
                      <option value="EASTER">{t.occasions.easter}</option>
                      <option value="MOTHERS_DAY">{t.occasions.mothersDay}</option>
                      <option value="FATHERS_DAY">{t.occasions.fathersDay}</option>
                      <option value="LABOR_DAY">{t.occasions.laborDay}</option>
                      <option value="BACK_TO_SCHOOL">{t.occasions.backToSchool}</option>
                      <option value="HALLOWEEN">{t.occasions.halloween}</option>
                      <option value="BLACK_FRIDAY">{t.occasions.blackFriday}</option>
                      <option value="CYBER_MONDAY">{t.occasions.cyberMonday}</option>
                      <option value="CHRISTMAS">{t.occasions.christmas}</option>
                      <option value="BOXING_DAY">{t.occasions.boxingDay}</option>
                      <option value="INDEPENDENCE_DAY">{t.occasions.independenceDay}</option>
                      <option value="NATIONAL_DAY">{t.occasions.nationalDay}</option>
                      <option value="END_OF_SEASON">{t.occasions.endOfSeason}</option>
                      <option value="WINTER_SALE">{t.occasions.winterSale}</option>
                      <option value="SUMMER_SALE">{t.occasions.summerSale}</option>
                      <option value="FALL_SALE">{t.occasions.fallSale}</option>
                      <option value="SPRING_SALE">{t.occasions.springSale}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.language}</label>
                    <p className="text-xs text-gray-500 mb-1">{t.promotions.languageHelp}</p>
                    <select
                      value={promoLanguage}
                      onChange={(e) => setPromoLanguage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="en">{t.languages.english}</option>
                      <option value="es">{t.languages.spanish}</option>
                      <option value="fr">{t.languages.french}</option>
                      <option value="de">{t.languages.german}</option>
                      <option value="he">{t.languages.hebrew}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.currency}</label>
                    <select
                      value={promoCurrency}
                      onChange={(e) => setPromoCurrency(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="USD">{t.currencies.usd}</option>
                      <option value="EUR">{t.currencies.eur}</option>
                      <option value="GBP">{t.currencies.gbp}</option>
                      <option value="ILS">{t.currencies.ils}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.promotionType}</label>
                    <select
                      value={promoDiscountType}
                      onChange={(e) => setPromoDiscountType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t.promotions.promotionTypeSelect}</option>
                      <option value="money">{t.promotions.monetaryDiscount}</option>
                      <option value="percent">{t.promotions.percentDiscount}</option>
                    </select>
                  </div>
                  {promoDiscountType === 'money' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.amountOff}</label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={promoMoneyOff}
                        onChange={(e) => setPromoMoneyOff(e.target.value)}
                        placeholder="10.00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                  {promoDiscountType === 'percent' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.percentOff}</label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={promoPercentOff}
                        onChange={(e) => setPromoPercentOff(e.target.value)}
                        placeholder="20"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.item}</label>
                  <input
                    type="text"
                    maxLength={20}
                    value={promoTarget}
                    onChange={(e) => setPromoTarget(e.target.value)}
                    placeholder={t.promotions.itemPlaceholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className={`text-xs ${getCharCounterClass(promoTarget.length, 20)}`}>
                    {promoTarget.length}/20
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.finalUrl}</label>
                  <input
                    type="url"
                    value={promoFinalUrl}
                    onChange={(e) => setPromoFinalUrl(e.target.value)}
                    placeholder={t.promotions.finalUrlPlaceholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.promotionDetails}</label>
                    <select
                      value={promoDetailsType}
                      onChange={(e) => setPromoDetailsType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t.promotions.detailsNone}</option>
                      <option value="code">{t.promotions.detailsCode}</option>
                      <option value="minimum">{t.promotions.detailsMinimum}</option>
                    </select>
                  </div>
                  {promoDetailsType === 'code' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.promoCode}</label>
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder={t.promotions.promoCodePlaceholder}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                  {promoDetailsType === 'minimum' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.minimumOrder}</label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={promoMinimum}
                        onChange={(e) => setPromoMinimum(e.target.value)}
                        placeholder="50.00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.startDate}</label>
                    <input
                      type="date"
                      value={promoStartDate}
                      onChange={(e) => setPromoStartDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.promotions.endDate}</label>
                    <input
                      type="date"
                      value={promoEndDate}
                      onChange={(e) => setPromoEndDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {t.prices.title}
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{t.optional}</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={pricesEnabled}
                  onChange={(e) => setPricesEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{t.enable}</span>
              </label>
            </div>

            {pricesEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-green-800 font-medium mb-2">{t.prices.whatIsThis}</p>
                  <p className="text-sm text-green-700">{t.prices.description}</p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>{t.prices.example}</strong> {t.prices.exampleText}
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>{t.prices.whyUseIt}</strong> {t.prices.whyUseItText}
                  </p>
                </div>
                <FieldMeta
                  ai={t.prices.sectionAI}
                  importance={t.prices.sectionImportance}
                  bestPractice={t.prices.sectionBestPractice}
                  impact={t.prices.sectionImpact}
                  t={t}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.prices.priceType}</label>
                    <p className="text-xs text-gray-500 mb-1">{t.prices.priceTypeHelp}</p>
                    <select
                      value={priceType}
                      onChange={(e) => setPriceType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t.prices.priceTypeSelect}</option>
                      <option value="BRANDS">{t.priceTypes.brands}</option>
                      <option value="EVENTS">{t.priceTypes.events}</option>
                      <option value="LOCATIONS">{t.priceTypes.locations}</option>
                      <option value="NEIGHBORHOODS">{t.priceTypes.neighborhoods}</option>
                      <option value="PRODUCT_CATEGORIES">{t.priceTypes.productCategories}</option>
                      <option value="PRODUCT_TIERS">{t.priceTypes.productTiers}</option>
                      <option value="SERVICES">{t.priceTypes.services}</option>
                      <option value="SERVICE_CATEGORIES">{t.priceTypes.serviceCategories}</option>
                      <option value="SERVICE_TIERS">{t.priceTypes.serviceTiers}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.prices.priceQualifier}</label>
                    <select
                      value={priceQualifier}
                      onChange={(e) => setPriceQualifier(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t.prices.qualifierNone}</option>
                      <option value="FROM">{t.prices.qualifierFrom}</option>
                      <option value="UP_TO">{t.prices.qualifierUpTo}</option>
                      <option value="AVERAGE">{t.prices.qualifierAverage}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.prices.language}</label>
                    <select
                      value={priceLanguage}
                      onChange={(e) => setPriceLanguage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="en">{t.languages.english}</option>
                      <option value="es">{t.languages.spanish}</option>
                      <option value="fr">{t.languages.french}</option>
                      <option value="de">{t.languages.german}</option>
                      <option value="he">{t.languages.hebrew}</option>
                    </select>
                  </div>
                </div>

                <p className="text-sm text-gray-600">{t.prices.offeringsLabel}</p>
                
                {priceOfferings.map((offering, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{t.prices.offeringTitle} {index + 1}</span>
                      {priceOfferings.length > 3 && (
                        <button
                          type="button"
                          onClick={() => removePriceOffering(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          {t.prices.remove}
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">{t.prices.header}</label>
                        <input
                          type="text"
                          maxLength={25}
                          value={offering.header}
                          onChange={(e) => updatePriceOffering(index, 'header', e.target.value)}
                          placeholder={t.prices.headerPlaceholder}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className={`text-xs ${getCharCounterClass(offering.header.length, 25)}`}>
                          {offering.header.length}/25
                        </span>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">{t.prices.offeringDescription}</label>
                        <input
                          type="text"
                          maxLength={25}
                          value={offering.description}
                          onChange={(e) => updatePriceOffering(index, 'description', e.target.value)}
                          placeholder={t.prices.descriptionPlaceholder}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className={`text-xs ${getCharCounterClass(offering.description.length, 25)}`}>
                          {offering.description.length}/25
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">{t.prices.price}</label>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={offering.amount}
                          onChange={(e) => updatePriceOffering(index, 'amount', e.target.value)}
                          placeholder={t.prices.pricePlaceholder}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">{t.promotions.currency}</label>
                        <select
                          value={offering.currency}
                          onChange={(e) => updatePriceOffering(index, 'currency', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="USD">{t.currencies.usd}</option>
                          <option value="EUR">{t.currencies.eur}</option>
                          <option value="GBP">{t.currencies.gbp}</option>
                          <option value="ILS">{t.currencies.ils}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">{t.prices.unit}</label>
                        <select
                          value={offering.unit}
                          onChange={(e) => updatePriceOffering(index, 'unit', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">{t.prices.unitNone}</option>
                          <option value="PER_HOUR">{t.prices.unitPerHour}</option>
                          <option value="PER_DAY">{t.prices.unitPerDay}</option>
                          <option value="PER_WEEK">{t.prices.unitPerWeek}</option>
                          <option value="PER_MONTH">{t.prices.unitPerMonth}</option>
                          <option value="PER_YEAR">{t.prices.unitPerYear}</option>
                          <option value="PER_NIGHT">{t.prices.unitPerNight}</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">{t.prices.offeringUrl}</label>
                      <input
                        type="url"
                        value={offering.url}
                        onChange={(e) => updatePriceOffering(index, 'url', e.target.value)}
                        placeholder={t.prices.urlPlaceholder}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                ))}

                {priceOfferings.length < 8 && (
                  <button
                    type="button"
                    onClick={addPriceOffering}
                    className="text-sm text-green-600 hover:text-green-700"
                  >
                    {t.prices.addOffering}
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {t.calls.title}
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{t.optional}</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={callEnabled}
                  onChange={(e) => setCallEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{t.enable}</span>
              </label>
            </div>

            {callEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium mb-2">{t.calls.whatIsThis}</p>
                  <p className="text-sm text-green-700">{t.calls.description}</p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>{t.calls.whyUseIt}</strong> {t.calls.whyUseItText}
                  </p>
                </div>
                <FieldMeta
                  ai={t.calls.sectionAI}
                  importance={t.calls.sectionImportance}
                  bestPractice={t.calls.sectionBestPractice}
                  impact={t.calls.sectionImpact}
                  t={t}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.calls.countryCode}</label>
                    <p className="text-xs text-gray-500 mb-1">{t.calls.countryCodeHelp}</p>
                    <select
                      value={callCountryCode}
                      onChange={(e) => setCallCountryCode(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="US">{t.countries.us}</option>
                      <option value="GB">{t.countries.uk}</option>
                      <option value="IL">{t.countries.israel}</option>
                      <option value="DE">{t.countries.germany}</option>
                      <option value="FR">{t.countries.france}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.calls.phoneNumber}</label>
                    <p className="text-xs text-gray-500 mb-1">{t.calls.phoneNumberHelp}</p>
                    <input
                      type="tel"
                      value={callPhone}
                      onChange={(e) => setCallPhone(e.target.value)}
                      placeholder={t.calls.phonePlaceholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {t.callouts.title}
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{t.optional}</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={calloutsEnabled}
                  onChange={(e) => setCalloutsEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{t.enable}</span>
              </label>
            </div>

            {calloutsEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium mb-2">{t.callouts.whatIsThis}</p>
                  <p className="text-sm text-green-700">{t.callouts.description}</p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>{t.callouts.examples}</strong> {t.callouts.examplesText}
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>{t.callouts.whyUseIt}</strong> {t.callouts.whyUseItText}
                  </p>
                </div>
                <FieldMeta
                  ai={t.callouts.sectionAI}
                  importance={t.callouts.sectionImportance}
                  bestPractice={t.callouts.sectionBestPractice}
                  impact={t.callouts.sectionImpact}
                  recommendedAmount={t.callouts.calloutsRecommendedAmount}
                  t={t}
                />
                {callouts.map((callout, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <input
                          type="text"
                          maxLength={25}
                          value={callout.text}
                          onChange={(e) => updateCallout(index, 'text', e.target.value)}
                          placeholder={t.callouts.textPlaceholder}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className={`text-xs ${getCharCounterClass(callout.text.length, 25)}`}>
                          {callout.text.length}/25
                        </span>
                      </div>
                      {callouts.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeCallout(index)}
                          className={`${isRTL ? 'mr-2' : 'ml-2'} text-red-500 hover:text-red-700 text-xl`}
                        >
                          ×
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">{t.callouts.startDate}</label>
                        <input
                          type="date"
                          value={callout.startDate}
                          onChange={(e) => updateCallout(index, 'startDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">{t.callouts.endDate}</label>
                        <input
                          type="date"
                          value={callout.endDate}
                          onChange={(e) => updateCallout(index, 'endDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addCallout}
                  className="text-sm text-green-600 hover:text-green-700"
                >
                  {t.callouts.addCallout}
                </button>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {t.leadForm.title}
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{t.optional}</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={leadFormEnabled}
                  onChange={(e) => setLeadFormEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{t.enable}</span>
              </label>
            </div>

            {leadFormEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium mb-2">{t.leadForm.whatIsThis}</p>
                  <p className="text-sm text-green-700">{t.leadForm.description}</p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>{t.leadForm.howItWorks}</strong> {t.leadForm.howItWorksText}
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>{t.leadForm.whyUseIt}</strong> {t.leadForm.whyUseItText}
                  </p>
                </div>
                <FieldMeta
                  ai={t.leadForm.sectionAI}
                  importance={t.leadForm.sectionImportance}
                  bestPractice={t.leadForm.sectionBestPractice}
                  impact={t.leadForm.sectionImpact}
                  t={t}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.leadForm.businessName}</label>
                    <p className="text-xs text-gray-500 mb-1">{t.leadForm.businessNameHelp}</p>
                    <input
                      type="text"
                      maxLength={25}
                      value={leadBusiness}
                      onChange={(e) => setLeadBusiness(e.target.value)}
                      placeholder={t.leadForm.businessNamePlaceholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(leadBusiness.length, 25)}`}>
                      {leadBusiness.length}/25
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.leadForm.headline}</label>
                    <input
                      type="text"
                      maxLength={30}
                      value={leadHeadline}
                      onChange={(e) => setLeadHeadline(e.target.value)}
                      placeholder={t.leadForm.headlinePlaceholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(leadHeadline.length, 30)}`}>
                      {leadHeadline.length}/30
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.leadForm.description2}</label>
                  <textarea
                    maxLength={200}
                    value={leadDescription}
                    onChange={(e) => setLeadDescription(e.target.value)}
                    rows={2}
                    placeholder={t.leadForm.descriptionPlaceholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className={`text-xs ${getCharCounterClass(leadDescription.length, 200)}`}>
                    {leadDescription.length}/200
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.leadForm.privacyUrl}</label>
                  <input
                    type="url"
                    value={leadPrivacyUrl}
                    onChange={(e) => setLeadPrivacyUrl(e.target.value)}
                    placeholder={t.leadForm.privacyUrlPlaceholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.leadForm.ctaType}</label>
                    <select
                      value={leadCtaType}
                      onChange={(e) => setLeadCtaType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="LEARN_MORE">{t.leadForm.ctaLearnMore}</option>
                      <option value="GET_QUOTE">{t.leadForm.ctaGetQuote}</option>
                      <option value="APPLY_NOW">{t.leadForm.ctaApplyNow}</option>
                      <option value="SIGN_UP">{t.leadForm.ctaSignUp}</option>
                      <option value="CONTACT_US">{t.leadForm.ctaContactUs}</option>
                      <option value="SUBSCRIBE">{t.leadForm.ctaSubscribe}</option>
                      <option value="DOWNLOAD">{t.leadForm.ctaDownload}</option>
                      <option value="BOOK_NOW">{t.leadForm.ctaBookNow}</option>
                      <option value="GET_OFFER">{t.leadForm.ctaGetOffer}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.leadForm.ctaDescription}</label>
                    <input
                      type="text"
                      maxLength={30}
                      value={leadCtaDesc}
                      onChange={(e) => setLeadCtaDesc(e.target.value)}
                      placeholder={t.leadForm.ctaDescPlaceholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(leadCtaDesc.length, 30)}`}>
                      {leadCtaDesc.length}/30
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.leadForm.postSubmitHeadline}</label>
                    <input
                      type="text"
                      maxLength={30}
                      value={leadPostHeadline}
                      onChange={(e) => setLeadPostHeadline(e.target.value)}
                      placeholder={t.leadForm.postSubmitHeadlinePlaceholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(leadPostHeadline.length, 30)}`}>
                      {leadPostHeadline.length}/30
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.leadForm.postSubmitDescription}</label>
                    <input
                      type="text"
                      maxLength={200}
                      value={leadPostDesc}
                      onChange={(e) => setLeadPostDesc(e.target.value)}
                      placeholder={t.leadForm.postSubmitDescPlaceholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(leadPostDesc.length, 200)}`}>
                      {leadPostDesc.length}/200
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.leadForm.fieldsToCollect}</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <p className="col-span-full text-xs text-gray-500 mb-1">{t.leadForm.contactInfo}</p>
                    {[
                      { key: 'FULL_NAME', label: t.leadForm.fieldFullName },
                      { key: 'EMAIL', label: t.leadForm.fieldEmail },
                      { key: 'PHONE_NUMBER', label: t.leadForm.fieldPhoneNumber },
                      { key: 'COUNTRY', label: t.leadForm.fieldCountry },
                      { key: 'CITY', label: t.leadForm.fieldCity },
                      { key: 'POSTAL_CODE', label: t.leadForm.fieldPostalCode },
                      { key: 'REGION', label: t.leadForm.fieldRegion },
                    ].map((field) => (
                      <label key={field.key} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={leadFields.includes(field.key)}
                          onChange={() => toggleLeadField(field.key)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{field.label}</span>
                      </label>
                    ))}
                    <p className="col-span-full text-xs text-gray-500 mt-2 mb-1">{t.leadForm.workInfo}</p>
                    {[
                      { key: 'COMPANY_NAME', label: t.leadForm.fieldCompanyName },
                      { key: 'WORK_EMAIL', label: t.leadForm.fieldWorkEmail },
                      { key: 'WORK_PHONE', label: t.leadForm.fieldWorkPhone },
                      { key: 'JOB_TITLE', label: t.leadForm.fieldJobTitle },
                    ].map((field) => (
                      <label key={field.key} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={leadFields.includes(field.key)}
                          onChange={() => toggleLeadField(field.key)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{field.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {t.mobileApp.title}
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{t.optional}</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={appEnabled}
                  onChange={(e) => setAppEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{t.enable}</span>
              </label>
            </div>

            {appEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium mb-2">{t.mobileApp.whatIsThis}</p>
                  <p className="text-sm text-green-700">{t.mobileApp.description}</p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>{t.mobileApp.whyUseIt}</strong> {t.mobileApp.whyUseItText}
                  </p>
                </div>
                <FieldMeta
                  ai={t.mobileApp.sectionAI}
                  importance={t.mobileApp.sectionImportance}
                  bestPractice={t.mobileApp.sectionBestPractice}
                  impact={t.mobileApp.sectionImpact}
                  t={t}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.mobileApp.appStore}</label>
                    <p className="text-xs text-gray-500 mb-1">{t.mobileApp.appStoreHelp}</p>
                    <select
                      value={appStore}
                      onChange={(e) => setAppStore(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t.mobileApp.appStoreSelect}</option>
                      <option value="APPLE_APP_STORE">{t.mobileApp.appStoreApple}</option>
                      <option value="GOOGLE_APP_STORE">{t.mobileApp.appStoreGoogle}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.mobileApp.appId}</label>
                    <input
                      type="text"
                      value={appId}
                      onChange={(e) => setAppId(e.target.value)}
                      placeholder={t.mobileApp.appIdPlaceholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.mobileApp.linkText}</label>
                    <input
                      type="text"
                      maxLength={25}
                      value={appLinkText}
                      onChange={(e) => setAppLinkText(e.target.value)}
                      placeholder={t.mobileApp.linkTextPlaceholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(appLinkText.length, 25)}`}>
                      {appLinkText.length}/25
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t.submit.createCampaign}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
