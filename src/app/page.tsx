'use client';

import { useState } from 'react';

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
  // Campaign & Budget
  const [campaignName, setCampaignName] = useState('Test Campaign - Digital Marketing');
  const [dailyBudget, setDailyBudget] = useState('0.10');
  const [status, setStatus] = useState('PAUSED');

  // Ad Group & Keywords
  const [adGroupName, setAdGroupName] = useState('Digital Marketing Services');
  const [keywords, setKeywords] = useState('digital marketing, online advertising, seo services, social media marketing, ppc management');
  const [maxCpc, setMaxCpc] = useState('1.00');

  // Headlines & Descriptions
  const [headlines, setHeadlines] = useState<Headline[]>([
    { text: 'Expert Digital Marketing' },
    { text: 'Grow Your Business Online' },
    { text: 'Get Results Fast' },
  ]);
  const [descriptions, setDescriptions] = useState<Description[]>([
    { text: 'Professional digital marketing services to help your business reach more customers online.' },
    { text: 'SEO, PPC, and social media marketing. Get a free consultation today. Call now!' },
  ]);

  // Final URL
  const [finalUrl, setFinalUrl] = useState('https://example.com/digital-marketing/services');

  // Promotions
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

  // Prices
  const [pricesEnabled, setPricesEnabled] = useState(true);
  const [priceType, setPriceType] = useState('SERVICES');
  const [priceQualifier, setPriceQualifier] = useState('FROM');
  const [priceLanguage, setPriceLanguage] = useState('en');
  const [priceOfferings, setPriceOfferings] = useState<PriceOffering[]>([
    { header: 'Basic SEO', description: 'Small business package', amount: '299', currency: 'USD', unit: 'PER_MONTH', url: 'https://example.com/pricing/basic' },
    { header: 'Professional', description: 'Growing businesses', amount: '599', currency: 'USD', unit: 'PER_MONTH', url: 'https://example.com/pricing/pro' },
    { header: 'Enterprise', description: 'Full-service solution', amount: '1299', currency: 'USD', unit: 'PER_MONTH', url: 'https://example.com/pricing/enterprise' },
  ]);

  // Calls
  const [callEnabled, setCallEnabled] = useState(true);
  const [callCountryCode, setCallCountryCode] = useState('US');
  const [callPhone, setCallPhone] = useState('+1-555-123-4567');

  // Callouts
  const [calloutsEnabled, setCalloutsEnabled] = useState(true);
  const [callouts, setCallouts] = useState<Callout[]>([
    { text: 'Free Consultation', startDate: '', endDate: '' },
    { text: '24/7 Support', startDate: '', endDate: '' },
  ]);

  // Lead Form
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

  // Mobile App
  const [appEnabled, setAppEnabled] = useState(true);
  const [appStore, setAppStore] = useState('GOOGLE_APP_STORE');
  const [appId, setAppId] = useState('com.example.marketing');
  const [appLinkText, setAppLinkText] = useState('Get the App');

  // Helper functions
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
    // Form data would be collected here for submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create Campaign</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* CAMPAIGN & BUDGET */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Campaign & Budget
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Required</span>
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 font-medium mb-2">What is this?</p>
              <p className="text-sm text-blue-700">
                A campaign is like a folder that holds all your ads. Think of it as your advertising project. 
                The budget is how much money you want to spend each day - you&apos;ll never be charged more than this amount on average.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>Why it matters:</strong> Good campaign organization helps you track what&apos;s working and control your spending.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
                <p className="text-xs text-gray-500 mb-2">Give your campaign a name you&apos;ll recognize later. Example: &quot;Summer Sale 2024&quot; or &quot;Website Traffic - January&quot;</p>
                <input
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder="My Campaign"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Daily Budget (USD)</label>
                <p className="text-xs text-gray-500 mb-2">The maximum you want to spend per day. Start small ($5-10) to test, then increase once you see results.</p>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={dailyBudget}
                  onChange={(e) => setDailyBudget(e.target.value)}
                  placeholder="10.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <p className="text-xs text-gray-500 mb-2">&quot;Paused&quot; means your ads won&apos;t show yet. We recommend starting paused so you can review everything first.</p>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="PAUSED">Paused</option>
                  <option value="ENABLED">Enabled</option>
                </select>
              </div>
            </div>
          </div>

          {/* AD GROUP & KEYWORDS */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Ad Group & Keywords
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Required</span>
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 font-medium mb-2">What is this?</p>
              <p className="text-sm text-blue-700">
                Keywords are the words or phrases people type into Google when searching. When someone searches for your keyword, your ad can appear.
                An ad group is a container that groups related keywords together with your ads.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>Example:</strong> If you sell shoes, your keywords might be &quot;buy running shoes&quot;, &quot;best sneakers&quot;, &quot;athletic footwear&quot;.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>Why it matters:</strong> Choosing the right keywords means your ads show to people who are actually looking for what you offer.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ad Group Name</label>
                <p className="text-xs text-gray-500 mb-2">A name to organize your keywords. Example: &quot;Running Shoes&quot; or &quot;Free Consultation&quot;</p>
                <input
                  type="text"
                  value={adGroupName}
                  onChange={(e) => setAdGroupName(e.target.value)}
                  placeholder="My Ad Group"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (comma-separated)</label>
                <p className="text-xs text-gray-500 mb-2">Enter the words people might search for when looking for your product or service. Separate each keyword with a comma. Think: &quot;What would my customers type into Google?&quot;</p>
                <textarea
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  rows={2}
                  placeholder="keyword 1, keyword 2, keyword 3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max CPC (USD)</label>
                <p className="text-xs text-gray-500 mb-2">CPC = Cost Per Click. This is the maximum you&apos;re willing to pay when someone clicks your ad. You only pay when someone actually clicks - not just when they see it. Start with $1-2 and adjust later.</p>
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
                <p className="text-xs text-gray-500 mt-1">Will be automatically converted to your account&apos;s currency.</p>
              </div>
            </div>
          </div>

          {/* HEADLINES & DESCRIPTIONS */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Headlines & Descriptions
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Required</span>
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 font-medium mb-2">What is this?</p>
              <p className="text-sm text-blue-700">
                This is the actual text people will see in your ad on Google. Your ad has two parts:
              </p>
              <ul className="text-sm text-blue-700 mt-2 list-disc list-inside space-y-1">
                <li><strong>Headlines:</strong> The big, clickable titles at the top of your ad (shown in blue on Google)</li>
                <li><strong>Descriptions:</strong> The smaller text below that explains your offer in more detail</li>
              </ul>
              <p className="text-sm text-blue-700 mt-2">
                <strong>How it works:</strong> You provide multiple options, and Google automatically tests different combinations to find what works best. The more options you give, the better Google can optimize!
              </p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>Why it matters:</strong> Great ad copy = more clicks = more customers. Make it compelling!
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Headlines (min 2, max 15)</label>
                <p className="text-xs text-gray-500 mb-2">Short, punchy titles that grab attention. Tips: Include your main benefit, use action words, mention your brand. Keep each under 30 characters.</p>
                <div className="space-y-2">
                  {headlines.map((headline, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        maxLength={30}
                        value={headline.text}
                        onChange={(e) => updateHeadline(index, e.target.value)}
                        placeholder={`Headline ${index + 1}`}
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
                    + Add Headline
                  </button>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descriptions (min 2, max 4)</label>
                <p className="text-xs text-gray-500 mb-2">More space to explain what you offer. Include: what makes you different, why choose you, what action to take. Keep each under 90 characters.</p>
                <div className="space-y-2">
                  {descriptions.map((desc, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        maxLength={90}
                        value={desc.text}
                        onChange={(e) => updateDescription(index, e.target.value)}
                        placeholder={`Description ${index + 1}`}
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
                    + Add Description
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* FINAL URL */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Final URL
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Required</span>
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 font-medium mb-2">What is this?</p>
              <p className="text-sm text-blue-700">
                This is where people go when they click your ad - your landing page. It should be relevant to your ad and keywords.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>Why it matters:</strong> A relevant landing page improves your ad quality score (meaning lower costs) and converts more visitors into customers.
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Final URL</label>
              <p className="text-xs text-gray-500 mb-2">The webpage people land on after clicking your ad. Make sure it matches what your ad promises!</p>
              <input
                type="url"
                value={finalUrl}
                onChange={(e) => setFinalUrl(e.target.value)}
                placeholder="https://example.com/products/shoes"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Display paths will be auto-extracted from URL (max 2 path segments, 15 chars each)</p>
            </div>
          </div>

          {/* OPTIONAL EXTENSIONS */}
          <div className="border-t-4 border-dashed border-gray-300 pt-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">Optional Extensions</h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
              Extensions add extra information to your ads, making them bigger and more useful. Ads with extensions typically get 10-15% more clicks. 
              These are optional but highly recommended!
            </p>
          </div>

          {/* PROMOTIONS */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                Promotions
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Optional</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={promoEnabled}
                  onChange={(e) => setPromoEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Enable</span>
              </label>
            </div>

            {promoEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-green-800 font-medium mb-2">What is this?</p>
                  <p className="text-sm text-green-700">
                    Highlight special offers, discounts, or sales directly in your ad. A promotion badge appears below your ad showing the deal.
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Example:</strong> &quot;20% off - Use code SAVE20&quot; or &quot;Black Friday Sale - Up to 50% off&quot;
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Why use it:</strong> Promotions catch the eye and create urgency. People are more likely to click when they see a deal!
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Occasion</label>
                    <p className="text-xs text-gray-500 mb-1">Link your promotion to a holiday or event for extra relevance.</p>
                    <select
                      value={promoOccasion}
                      onChange={(e) => setPromoOccasion(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">None</option>
                      <option value="NEW_YEARS">New Year&apos;s</option>
                      <option value="VALENTINES_DAY">Valentine&apos;s Day</option>
                      <option value="EASTER">Easter</option>
                      <option value="MOTHERS_DAY">Mother&apos;s Day</option>
                      <option value="FATHERS_DAY">Father&apos;s Day</option>
                      <option value="LABOR_DAY">Labor Day</option>
                      <option value="BACK_TO_SCHOOL">Back to School</option>
                      <option value="HALLOWEEN">Halloween</option>
                      <option value="BLACK_FRIDAY">Black Friday</option>
                      <option value="CYBER_MONDAY">Cyber Monday</option>
                      <option value="CHRISTMAS">Christmas</option>
                      <option value="BOXING_DAY">Boxing Day</option>
                      <option value="INDEPENDENCE_DAY">Independence Day</option>
                      <option value="NATIONAL_DAY">National Day</option>
                      <option value="END_OF_SEASON">End of Season</option>
                      <option value="WINTER_SALE">Winter Sale</option>
                      <option value="SUMMER_SALE">Summer Sale</option>
                      <option value="FALL_SALE">Fall Sale</option>
                      <option value="SPRING_SALE">Spring Sale</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                    <select
                      value={promoLanguage}
                      onChange={(e) => setPromoLanguage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="he">Hebrew</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                    <select
                      value={promoCurrency}
                      onChange={(e) => setPromoCurrency(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="ILS">ILS</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Type</label>
                    <select
                      value={promoDiscountType}
                      onChange={(e) => setPromoDiscountType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Select --</option>
                      <option value="money">Monetary Discount</option>
                      <option value="percent">Percent Discount</option>
                    </select>
                  </div>
                  {promoDiscountType === 'money' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Amount Off</label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Percent Off (%)</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Item (what&apos;s being promoted)</label>
                  <input
                    type="text"
                    maxLength={20}
                    value={promoTarget}
                    onChange={(e) => setPromoTarget(e.target.value)}
                    placeholder="Summer Sale"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className={`text-xs ${getCharCounterClass(promoTarget.length, 20)}`}>
                    {promoTarget.length}/20
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Final URL</label>
                  <input
                    type="url"
                    value={promoFinalUrl}
                    onChange={(e) => setPromoFinalUrl(e.target.value)}
                    placeholder="https://example.com/promo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Details</label>
                    <select
                      value={promoDetailsType}
                      onChange={(e) => setPromoDetailsType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">None</option>
                      <option value="code">On orders with promo code</option>
                      <option value="minimum">On orders over</option>
                    </select>
                  </div>
                  {promoDetailsType === 'code' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Promo Code</label>
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="SAVE20"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                  {promoDetailsType === 'minimum' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Amount</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Displayed Start Date</label>
                    <input
                      type="date"
                      value={promoStartDate}
                      onChange={(e) => setPromoStartDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Displayed End Date</label>
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

          {/* PRICES */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                Prices
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Optional</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={pricesEnabled}
                  onChange={(e) => setPricesEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Enable</span>
              </label>
            </div>

            {pricesEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-green-800 font-medium mb-2">What is this?</p>
                  <p className="text-sm text-green-700">
                    Show a menu of your products or services with prices directly in your ad. Each item links to its own page.
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Example:</strong> A restaurant could show &quot;Lunch Special - $12&quot;, &quot;Dinner Menu - $25&quot;, &quot;Catering - From $100&quot;
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Why use it:</strong> Price transparency builds trust. People can see if you fit their budget before clicking, leading to more qualified leads.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Type</label>
                    <p className="text-xs text-gray-500 mb-1">What category are you showing prices for?</p>
                    <select
                      value={priceType}
                      onChange={(e) => setPriceType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Select --</option>
                      <option value="BRANDS">Brands</option>
                      <option value="EVENTS">Events</option>
                      <option value="LOCATIONS">Locations</option>
                      <option value="NEIGHBORHOODS">Neighborhoods</option>
                      <option value="PRODUCT_CATEGORIES">Product Categories</option>
                      <option value="PRODUCT_TIERS">Product Tiers</option>
                      <option value="SERVICES">Services</option>
                      <option value="SERVICE_CATEGORIES">Service Categories</option>
                      <option value="SERVICE_TIERS">Service Tiers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Qualifier</label>
                    <select
                      value={priceQualifier}
                      onChange={(e) => setPriceQualifier(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">None</option>
                      <option value="FROM">From</option>
                      <option value="UP_TO">Up To</option>
                      <option value="AVERAGE">Average</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                    <select
                      value={priceLanguage}
                      onChange={(e) => setPriceLanguage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="he">Hebrew</option>
                    </select>
                  </div>
                </div>

                <p className="text-sm text-gray-600">Price Offerings (min 3, max 8)</p>
                
                {priceOfferings.map((offering, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">Offering {index + 1}</span>
                      {priceOfferings.length > 3 && (
                        <button
                          type="button"
                          onClick={() => removePriceOffering(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Header</label>
                        <input
                          type="text"
                          maxLength={25}
                          value={offering.header}
                          onChange={(e) => updatePriceOffering(index, 'header', e.target.value)}
                          placeholder="Basic Plan"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className={`text-xs ${getCharCounterClass(offering.header.length, 25)}`}>
                          {offering.header.length}/25
                        </span>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Description</label>
                        <input
                          type="text"
                          maxLength={25}
                          value={offering.description}
                          onChange={(e) => updatePriceOffering(index, 'description', e.target.value)}
                          placeholder="Great for starters"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className={`text-xs ${getCharCounterClass(offering.description.length, 25)}`}>
                          {offering.description.length}/25
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Price</label>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={offering.amount}
                          onChange={(e) => updatePriceOffering(index, 'amount', e.target.value)}
                          placeholder="9.99"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Currency</label>
                        <select
                          value={offering.currency}
                          onChange={(e) => updatePriceOffering(index, 'currency', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                          <option value="ILS">ILS</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Unit</label>
                        <select
                          value={offering.unit}
                          onChange={(e) => updatePriceOffering(index, 'unit', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">None</option>
                          <option value="PER_HOUR">Per Hour</option>
                          <option value="PER_DAY">Per Day</option>
                          <option value="PER_WEEK">Per Week</option>
                          <option value="PER_MONTH">Per Month</option>
                          <option value="PER_YEAR">Per Year</option>
                          <option value="PER_NIGHT">Per Night</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Offering URL</label>
                      <input
                        type="url"
                        value={offering.url}
                        onChange={(e) => updatePriceOffering(index, 'url', e.target.value)}
                        placeholder="https://example.com/pricing"
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
                    + Add Price Offering
                  </button>
                )}
              </div>
            )}
          </div>

          {/* CALLS */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                Calls
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Optional</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={callEnabled}
                  onChange={(e) => setCallEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Enable</span>
              </label>
            </div>

            {callEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium mb-2">What is this?</p>
                  <p className="text-sm text-green-700">
                    Add a clickable phone number to your ad. On mobile, people can call you with one tap!
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Why use it:</strong> Perfect if phone calls are valuable to your business (restaurants, services, support). Makes it instant and easy for customers to reach you.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country Code</label>
                    <p className="text-xs text-gray-500 mb-1">Select your phone number&apos;s country.</p>
                    <select
                      value={callCountryCode}
                      onChange={(e) => setCallCountryCode(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="US">US (+1)</option>
                      <option value="GB">UK (+44)</option>
                      <option value="IL">Israel (+972)</option>
                      <option value="DE">Germany (+49)</option>
                      <option value="FR">France (+33)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <p className="text-xs text-gray-500 mb-1">Your business phone number that customers will call.</p>
                    <input
                      type="tel"
                      value={callPhone}
                      onChange={(e) => setCallPhone(e.target.value)}
                      placeholder="+1-555-123-4567"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CALLOUTS */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                Callouts
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Optional</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={calloutsEnabled}
                  onChange={(e) => setCalloutsEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Enable</span>
              </label>
            </div>

            {calloutsEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium mb-2">What is this?</p>
                  <p className="text-sm text-green-700">
                    Short phrases that highlight key benefits or features. They appear as extra text below your ad.
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Examples:</strong> &quot;Free Shipping&quot;, &quot;24/7 Support&quot;, &quot;Money-Back Guarantee&quot;, &quot;Family Owned Since 1990&quot;
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Why use it:</strong> Callouts let you highlight what makes you special without taking up headline space. They build trust and differentiate you from competitors.
                  </p>
                </div>
                {callouts.map((callout, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <input
                          type="text"
                          maxLength={25}
                          value={callout.text}
                          onChange={(e) => updateCallout(index, 'text', e.target.value)}
                          placeholder="Free Shipping"
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
                          className="ml-2 text-red-500 hover:text-red-700 text-xl"
                        >
                          ×
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Start Date (optional)</label>
                        <input
                          type="date"
                          value={callout.startDate}
                          onChange={(e) => updateCallout(index, 'startDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">End Date (optional)</label>
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
                  + Add Callout
                </button>
              </div>
            )}
          </div>

          {/* LEAD FORM */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                Lead Form
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Optional</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={leadFormEnabled}
                  onChange={(e) => setLeadFormEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Enable</span>
              </label>
            </div>

            {leadFormEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium mb-2">What is this?</p>
                  <p className="text-sm text-green-700">
                    A form that appears directly in your ad! People can submit their contact info (name, email, phone) without leaving Google. 
                    You get their details as leads.
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>How it works:</strong> User clicks your ad → form pops up → they fill it out → you receive their info instantly
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Why use it:</strong> Reduces friction - people don&apos;t need to visit your website to become a lead. Great for service businesses, consultations, quotes, and signups.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                    <p className="text-xs text-gray-500 mb-1">Your company name shown on the form.</p>
                    <input
                      type="text"
                      maxLength={25}
                      value={leadBusiness}
                      onChange={(e) => setLeadBusiness(e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(leadBusiness.length, 25)}`}>
                      {leadBusiness.length}/25
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                    <input
                      type="text"
                      maxLength={30}
                      value={leadHeadline}
                      onChange={(e) => setLeadHeadline(e.target.value)}
                      placeholder="Get a Free Quote"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(leadHeadline.length, 30)}`}>
                      {leadHeadline.length}/30
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    maxLength={200}
                    value={leadDescription}
                    onChange={(e) => setLeadDescription(e.target.value)}
                    rows={2}
                    placeholder="Fill out the form to get started..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className={`text-xs ${getCharCounterClass(leadDescription.length, 200)}`}>
                    {leadDescription.length}/200
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Privacy Policy URL</label>
                  <input
                    type="url"
                    value={leadPrivacyUrl}
                    onChange={(e) => setLeadPrivacyUrl(e.target.value)}
                    placeholder="https://example.com/privacy"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Call to Action Type</label>
                    <select
                      value={leadCtaType}
                      onChange={(e) => setLeadCtaType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="LEARN_MORE">Learn More</option>
                      <option value="GET_QUOTE">Get Quote</option>
                      <option value="APPLY_NOW">Apply Now</option>
                      <option value="SIGN_UP">Sign Up</option>
                      <option value="CONTACT_US">Contact Us</option>
                      <option value="SUBSCRIBE">Subscribe</option>
                      <option value="DOWNLOAD">Download</option>
                      <option value="BOOK_NOW">Book Now</option>
                      <option value="GET_OFFER">Get Offer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CTA Description</label>
                    <input
                      type="text"
                      maxLength={30}
                      value={leadCtaDesc}
                      onChange={(e) => setLeadCtaDesc(e.target.value)}
                      placeholder="Request your free quote today"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(leadCtaDesc.length, 30)}`}>
                      {leadCtaDesc.length}/30
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Post-Submit Headline</label>
                    <input
                      type="text"
                      maxLength={30}
                      value={leadPostHeadline}
                      onChange={(e) => setLeadPostHeadline(e.target.value)}
                      placeholder="Thank you!"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(leadPostHeadline.length, 30)}`}>
                      {leadPostHeadline.length}/30
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Post-Submit Description</label>
                    <input
                      type="text"
                      maxLength={200}
                      value={leadPostDesc}
                      onChange={(e) => setLeadPostDesc(e.target.value)}
                      placeholder="We'll be in touch soon"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className={`text-xs ${getCharCounterClass(leadPostDesc.length, 200)}`}>
                      {leadPostDesc.length}/200
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fields to Collect</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <p className="col-span-full text-xs text-gray-500 mb-1">Contact Information:</p>
                    {['FULL_NAME', 'EMAIL', 'PHONE_NUMBER', 'COUNTRY', 'CITY', 'POSTAL_CODE', 'REGION'].map((field) => (
                      <label key={field} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={leadFields.includes(field)}
                          onChange={() => toggleLeadField(field)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{field.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}</span>
                      </label>
                    ))}
                    <p className="col-span-full text-xs text-gray-500 mt-2 mb-1">Work Information:</p>
                    {['COMPANY_NAME', 'WORK_EMAIL', 'WORK_PHONE', 'JOB_TITLE'].map((field) => (
                      <label key={field} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={leadFields.includes(field)}
                          onChange={() => toggleLeadField(field)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{field.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* MOBILE APP */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                Mobile App
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Optional</span>
              </h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={appEnabled}
                  onChange={(e) => setAppEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Enable</span>
              </label>
            </div>

            {appEnabled && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium mb-2">What is this?</p>
                  <p className="text-sm text-green-700">
                    Add a link to download your mobile app directly from your ad. Shows an app icon and download button.
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Why use it:</strong> Drive app installs alongside your regular ad. Perfect if you have an app and want to grow your user base.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">App Store</label>
                    <p className="text-xs text-gray-500 mb-1">Where is your app available?</p>
                    <select
                    value={appStore}
                    onChange={(e) => setAppStore(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">-- Select --</option>
                    <option value="APPLE_APP_STORE">Apple App Store</option>
                    <option value="GOOGLE_APP_STORE">Google Play Store</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">App ID</label>
                  <input
                    type="text"
                    value={appId}
                    onChange={(e) => setAppId(e.target.value)}
                    placeholder="com.example.app"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Link Text</label>
                  <input
                    type="text"
                    maxLength={25}
                    value={appLinkText}
                    onChange={(e) => setAppLinkText(e.target.value)}
                    placeholder="Download Now"
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

          {/* SUBMIT BUTTON */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
