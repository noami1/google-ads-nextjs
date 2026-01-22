export const translations = {
  en: {
    pageTitle: "Create Campaign",
    required: "Required",
    optional: "Optional",
    enable: "Enable",
    
    // Campaign & Budget
    campaignBudget: {
      title: "Campaign & Budget",
      description: "A campaign is like a folder that holds all your ads. Think of it as your advertising project. The budget is how much money you want to spend each day - you'll never be charged more than this amount on average.",
      whyItMatters: "Why it matters:",
      whyItMattersText: "Good campaign organization helps you track what's working and control your spending.",
      whatIsThis: "What is this?",
      
      campaignName: "Campaign Name",
      campaignNameHelp: "Give your campaign a name you'll recognize later. Example: \"Summer Sale 2024\" or \"Website Traffic - January\"",
      campaignNamePlaceholder: "My Campaign",
      
      dailyBudget: "Daily Budget (USD)",
      dailyBudgetHelp: "The maximum you want to spend per day. Start small ($5-10) to test, then increase once you see results.",
      
      status: "Status",
      statusHelp: "\"Paused\" means your ads won't show yet. We recommend starting paused so you can review everything first.",
      statusPaused: "Paused",
      statusEnabled: "Enabled",
    },
    
    // Ad Group & Keywords
    adGroupKeywords: {
      title: "Ad Group & Keywords",
      whatIsThis: "What is this?",
      description: "Keywords are the words or phrases people type into Google when searching. When someone searches for your keyword, your ad can appear. An ad group is a container that groups related keywords together with your ads.",
      example: "Example:",
      exampleText: "If you sell shoes, your keywords might be \"buy running shoes\", \"best sneakers\", \"athletic footwear\".",
      whyItMatters: "Why it matters:",
      whyItMattersText: "Choosing the right keywords means your ads show to people who are actually looking for what you offer.",
      
      adGroupName: "Ad Group Name",
      adGroupNameHelp: "A name to organize your keywords. Example: \"Running Shoes\" or \"Free Consultation\"",
      adGroupNamePlaceholder: "My Ad Group",
      
      keywords: "Keywords (comma-separated)",
      keywordsHelp: "Enter the words people might search for when looking for your product or service. Separate each keyword with a comma. Think: \"What would my customers type into Google?\"",
      keywordsPlaceholder: "keyword 1, keyword 2, keyword 3",
      
      maxCpc: "Max CPC (USD)",
      maxCpcHelp: "CPC = Cost Per Click. This is the maximum you're willing to pay when someone clicks your ad. You only pay when someone actually clicks - not just when they see it. Start with $1-2 and adjust later.",
      maxCpcNote: "Will be automatically converted to your account's currency.",
    },
    
    // Headlines & Descriptions
    headlinesDescriptions: {
      title: "Headlines & Descriptions",
      whatIsThis: "What is this?",
      description: "This is the actual text people will see in your ad on Google. Your ad has two parts:",
      headlines: "Headlines:",
      headlinesDesc: "The big, clickable titles at the top of your ad (shown in blue on Google)",
      descriptions: "Descriptions:",
      descriptionsDesc: "The smaller text below that explains your offer in more detail",
      howItWorks: "How it works:",
      howItWorksText: "You provide multiple options, and Google automatically tests different combinations to find what works best. The more options you give, the better Google can optimize!",
      whyItMatters: "Why it matters:",
      whyItMattersText: "Great ad copy = more clicks = more customers. Make it compelling!",
      
      headlinesLabel: "Headlines (min 2, max 15)",
      headlinesHelp: "Short, punchy titles that grab attention. Tips: Include your main benefit, use action words, mention your brand. Keep each under 30 characters.",
      headlinePlaceholder: "Headline",
      addHeadline: "+ Add Headline",
      
      descriptionsLabel: "Descriptions (min 2, max 4)",
      descriptionsHelp: "More space to explain what you offer. Include: what makes you different, why choose you, what action to take. Keep each under 90 characters.",
      descriptionPlaceholder: "Description",
      addDescription: "+ Add Description",
    },
    
    // Final URL
    finalUrl: {
      title: "Final URL",
      whatIsThis: "What is this?",
      description: "This is where people go when they click your ad - your landing page. It should be relevant to your ad and keywords.",
      whyItMatters: "Why it matters:",
      whyItMattersText: "A relevant landing page improves your ad quality score (meaning lower costs) and converts more visitors into customers.",
      
      label: "Final URL",
      help: "The webpage people land on after clicking your ad. Make sure it matches what your ad promises!",
      placeholder: "https://example.com/products/shoes",
      note: "Display paths will be auto-extracted from URL (max 2 path segments, 15 chars each)",
    },
    
    // Optional Extensions
    optionalExtensions: {
      title: "Optional Extensions",
      description: "Extensions add extra information to your ads, making them bigger and more useful. Ads with extensions typically get 10-15% more clicks. These are optional but highly recommended!",
    },
    
    // Promotions
    promotions: {
      title: "Promotions",
      whatIsThis: "What is this?",
      description: "Highlight special offers, discounts, or sales directly in your ad. A promotion badge appears below your ad showing the deal.",
      example: "Example:",
      exampleText: "\"20% off - Use code SAVE20\" or \"Black Friday Sale - Up to 50% off\"",
      whyUseIt: "Why use it:",
      whyUseItText: "Promotions catch the eye and create urgency. People are more likely to click when they see a deal!",
      
      occasion: "Occasion",
      occasionHelp: "Link your promotion to a holiday or event for extra relevance.",
      occasionNone: "None",
      
      language: "Language",
      languageHelp: "The language of your promotion text.",
      
      currency: "Currency",
      
      promotionType: "Promotion Type",
      promotionTypeSelect: "-- Select --",
      monetaryDiscount: "Monetary Discount",
      percentDiscount: "Percent Discount",
      
      amountOff: "Amount Off",
      percentOff: "Percent Off (%)",
      
      item: "Item (what's being promoted)",
      itemPlaceholder: "Summer Sale",
      
      finalUrl: "Final URL",
      finalUrlPlaceholder: "https://example.com/promo",
      
      promotionDetails: "Promotion Details",
      detailsNone: "None",
      detailsCode: "On orders with promo code",
      detailsMinimum: "On orders over",
      
      promoCode: "Promo Code",
      promoCodePlaceholder: "SAVE20",
      
      minimumOrder: "Minimum Order Amount",
      
      startDate: "Displayed Start Date",
      endDate: "Displayed End Date",
    },
    
    // Prices
    prices: {
      title: "Prices",
      whatIsThis: "What is this?",
      description: "Show a menu of your products or services with prices directly in your ad. Each item links to its own page.",
      example: "Example:",
      exampleText: "A restaurant could show \"Lunch Special - $12\", \"Dinner Menu - $25\", \"Catering - From $100\"",
      whyUseIt: "Why use it:",
      whyUseItText: "Price transparency builds trust. People can see if you fit their budget before clicking, leading to more qualified leads.",
      
      priceType: "Price Type",
      priceTypeHelp: "What category are you showing prices for?",
      priceTypeSelect: "-- Select --",
      
      priceQualifier: "Price Qualifier",
      qualifierNone: "None",
      qualifierFrom: "From",
      qualifierUpTo: "Up To",
      qualifierAverage: "Average",
      
      language: "Language",
      
      offeringsLabel: "Price Offerings (min 3, max 8)",
      offeringTitle: "Offering",
      
      header: "Header",
      headerPlaceholder: "Basic Plan",
      
      offeringDescription: "Description",
      descriptionPlaceholder: "Great for starters",
      
      price: "Price",
      pricePlaceholder: "9.99",
      
      unit: "Unit",
      unitNone: "None",
      unitPerHour: "Per Hour",
      unitPerDay: "Per Day",
      unitPerWeek: "Per Week",
      unitPerMonth: "Per Month",
      unitPerYear: "Per Year",
      unitPerNight: "Per Night",
      
      offeringUrl: "Offering URL",
      urlPlaceholder: "https://example.com/pricing",
      
      addOffering: "+ Add Price Offering",
      remove: "Remove",
    },
    
    // Calls
    calls: {
      title: "Calls",
      whatIsThis: "What is this?",
      description: "Add a clickable phone number to your ad. On mobile, people can call you with one tap!",
      whyUseIt: "Why use it:",
      whyUseItText: "Perfect if phone calls are valuable to your business (restaurants, services, support). Makes it instant and easy for customers to reach you.",
      
      countryCode: "Country Code",
      countryCodeHelp: "Select your phone number's country.",
      
      phoneNumber: "Phone Number",
      phoneNumberHelp: "Your business phone number that customers will call.",
      phonePlaceholder: "+1-555-123-4567",
    },
    
    // Callouts
    callouts: {
      title: "Callouts",
      whatIsThis: "What is this?",
      description: "Short phrases that highlight key benefits or features. They appear as extra text below your ad.",
      examples: "Examples:",
      examplesText: "\"Free Shipping\", \"24/7 Support\", \"Money-Back Guarantee\", \"Family Owned Since 1990\"",
      whyUseIt: "Why use it:",
      whyUseItText: "Callouts let you highlight what makes you special without taking up headline space. They build trust and differentiate you from competitors.",
      
      textPlaceholder: "Free Shipping",
      startDate: "Start Date (optional)",
      endDate: "End Date (optional)",
      addCallout: "+ Add Callout",
    },
    
    // Lead Form
    leadForm: {
      title: "Lead Form",
      whatIsThis: "What is this?",
      description: "A form that appears directly in your ad! People can submit their contact info (name, email, phone) without leaving Google. You get their details as leads.",
      howItWorks: "How it works:",
      howItWorksText: "User clicks your ad → form pops up → they fill it out → you receive their info instantly",
      whyUseIt: "Why use it:",
      whyUseItText: "Reduces friction - people don't need to visit your website to become a lead. Great for service businesses, consultations, quotes, and signups.",
      
      businessName: "Business Name",
      businessNameHelp: "Your company name shown on the form.",
      businessNamePlaceholder: "Acme Corp",
      
      headline: "Headline",
      headlinePlaceholder: "Get a Free Quote",
      
      description2: "Description",
      descriptionPlaceholder: "Fill out the form to get started...",
      
      privacyUrl: "Privacy Policy URL",
      privacyUrlPlaceholder: "https://example.com/privacy",
      
      ctaType: "Call to Action Type",
      ctaLearnMore: "Learn More",
      ctaGetQuote: "Get Quote",
      ctaApplyNow: "Apply Now",
      ctaSignUp: "Sign Up",
      ctaContactUs: "Contact Us",
      ctaSubscribe: "Subscribe",
      ctaDownload: "Download",
      ctaBookNow: "Book Now",
      ctaGetOffer: "Get Offer",
      
      ctaDescription: "CTA Description",
      ctaDescPlaceholder: "Request your free quote today",
      
      postSubmitHeadline: "Post-Submit Headline",
      postSubmitHeadlinePlaceholder: "Thank you!",
      
      postSubmitDescription: "Post-Submit Description",
      postSubmitDescPlaceholder: "We'll be in touch soon",
      
      fieldsToCollect: "Fields to Collect",
      contactInfo: "Contact Information:",
      workInfo: "Work Information:",
      
      fieldFullName: "Full Name",
      fieldEmail: "Email",
      fieldPhoneNumber: "Phone Number",
      fieldCountry: "Country",
      fieldCity: "City",
      fieldPostalCode: "Postal Code",
      fieldRegion: "Region",
      fieldCompanyName: "Company Name",
      fieldWorkEmail: "Work Email",
      fieldWorkPhone: "Work Phone",
      fieldJobTitle: "Job Title",
    },
    
    // Mobile App
    mobileApp: {
      title: "Mobile App",
      whatIsThis: "What is this?",
      description: "Add a link to download your mobile app directly from your ad. Shows an app icon and download button.",
      whyUseIt: "Why use it:",
      whyUseItText: "Drive app installs alongside your regular ad. Perfect if you have an app and want to grow your user base.",
      
      appStore: "App Store",
      appStoreHelp: "Where is your app available?",
      appStoreSelect: "-- Select --",
      appStoreApple: "Apple App Store",
      appStoreGoogle: "Google Play Store",
      
      appId: "App ID",
      appIdPlaceholder: "com.example.app",
      
      linkText: "Link Text",
      linkTextPlaceholder: "Download Now",
    },
    
    // Submit
    submit: {
      createCampaign: "Create Campaign",
    },
    
    // Languages
    languages: {
      english: "English",
      spanish: "Spanish",
      french: "French",
      german: "German",
      hebrew: "Hebrew",
    },
    
    // Occasions
    occasions: {
      newYears: "New Year's",
      valentinesDay: "Valentine's Day",
      easter: "Easter",
      mothersDay: "Mother's Day",
      fathersDay: "Father's Day",
      laborDay: "Labor Day",
      backToSchool: "Back to School",
      halloween: "Halloween",
      blackFriday: "Black Friday",
      cyberMonday: "Cyber Monday",
      christmas: "Christmas",
      boxingDay: "Boxing Day",
      independenceDay: "Independence Day",
      nationalDay: "National Day",
      endOfSeason: "End of Season",
      winterSale: "Winter Sale",
      summerSale: "Summer Sale",
      fallSale: "Fall Sale",
      springSale: "Spring Sale",
    },
    
    // Price Types
    priceTypes: {
      brands: "Brands",
      events: "Events",
      locations: "Locations",
      neighborhoods: "Neighborhoods",
      productCategories: "Product Categories",
      productTiers: "Product Tiers",
      services: "Services",
      serviceCategories: "Service Categories",
      serviceTiers: "Service Tiers",
    },
    
    // Countries
    countries: {
      us: "US (+1)",
      uk: "UK (+44)",
      israel: "Israel (+972)",
      germany: "Germany (+49)",
      france: "France (+33)",
    },
    
    // Currencies
    currencies: {
      usd: "USD",
      eur: "EUR",
      gbp: "GBP",
      ils: "ILS",
    },
  },
  
  he: {
    pageTitle: "יצירת קמפיין",
    required: "חובה",
    optional: "אופציונלי",
    enable: "הפעל",
    
    // Campaign & Budget
    campaignBudget: {
      title: "קמפיין ותקציב",
      description: "קמפיין הוא כמו תיקייה שמכילה את כל המודעות שלך. חשוב על זה כפרויקט הפרסום שלך. התקציב הוא כמה כסף אתה רוצה להוציא כל יום - לעולם לא תחויב יותר מהסכום הזה בממוצע.",
      whyItMatters: "למה זה חשוב:",
      whyItMattersText: "ארגון קמפיינים טוב עוזר לך לעקוב אחרי מה עובד ולשלוט בהוצאות שלך.",
      whatIsThis: "מה זה?",
      
      campaignName: "שם הקמפיין",
      campaignNameHelp: "תן לקמפיין שם שתזהה אותו אחר כך. לדוגמה: \"מבצע קיץ 2024\" או \"תנועה לאתר - ינואר\"",
      campaignNamePlaceholder: "הקמפיין שלי",
      
      dailyBudget: "תקציב יומי (דולר)",
      dailyBudgetHelp: "המקסימום שאתה רוצה להוציא ביום. התחל קטן ($5-10) לבדיקה, ואז הגדל כשתראה תוצאות.",
      
      status: "סטטוס",
      statusHelp: "\"מושהה\" אומר שהמודעות שלך עוד לא יופיעו. אנחנו ממליצים להתחיל מושהה כדי שתוכל לבדוק הכל קודם.",
      statusPaused: "מושהה",
      statusEnabled: "פעיל",
    },
    
    // Ad Group & Keywords
    adGroupKeywords: {
      title: "קבוצת מודעות ומילות מפתח",
      whatIsThis: "מה זה?",
      description: "מילות מפתח הן המילים או הביטויים שאנשים מקלידים בגוגל כשהם מחפשים. כשמישהו מחפש את מילת המפתח שלך, המודעה שלך יכולה להופיע. קבוצת מודעות היא מיכל שמקבץ מילות מפתח קשורות יחד עם המודעות שלך.",
      example: "דוגמה:",
      exampleText: "אם אתה מוכר נעליים, מילות המפתח שלך יכולות להיות \"לקנות נעלי ריצה\", \"סניקרס הכי טובות\", \"הנעלה אתלטית\".",
      whyItMatters: "למה זה חשוב:",
      whyItMattersText: "בחירת מילות המפתח הנכונות אומרת שהמודעות שלך מוצגות לאנשים שבאמת מחפשים את מה שאתה מציע.",
      
      adGroupName: "שם קבוצת המודעות",
      adGroupNameHelp: "שם לארגון מילות המפתח שלך. לדוגמה: \"נעלי ריצה\" או \"ייעוץ חינם\"",
      adGroupNamePlaceholder: "קבוצת המודעות שלי",
      
      keywords: "מילות מפתח (מופרדות בפסיק)",
      keywordsHelp: "הכנס את המילים שאנשים עשויים לחפש כשהם מחפשים את המוצר או השירות שלך. הפרד כל מילת מפתח בפסיק. חשוב: \"מה הלקוחות שלי היו מקלידים בגוגל?\"",
      keywordsPlaceholder: "מילת מפתח 1, מילת מפתח 2, מילת מפתח 3",
      
      maxCpc: "מקסימום לקליק (דולר)",
      maxCpcHelp: "CPC = עלות לקליק. זה המקסימום שאתה מוכן לשלם כשמישהו לוחץ על המודעה שלך. אתה משלם רק כשמישהו באמת לוחץ - לא רק כשהוא רואה את זה. התחל עם $1-2 והתאם אחר כך.",
      maxCpcNote: "יומר אוטומטית למטבע של החשבון שלך.",
    },
    
    // Headlines & Descriptions
    headlinesDescriptions: {
      title: "כותרות ותיאורים",
      whatIsThis: "מה זה?",
      description: "זה הטקסט שאנשים באמת יראו במודעה שלך בגוגל. למודעה שלך יש שני חלקים:",
      headlines: "כותרות:",
      headlinesDesc: "הכותרות הגדולות והלחיצות בראש המודעה שלך (מוצגות בכחול בגוגל)",
      descriptions: "תיאורים:",
      descriptionsDesc: "הטקסט הקטן יותר למטה שמסביר את ההצעה שלך בפירוט",
      howItWorks: "איך זה עובד:",
      howItWorksText: "אתה מספק מספר אפשרויות, וגוגל בודקת אוטומטית שילובים שונים כדי למצוא מה עובד הכי טוב. ככל שתיתן יותר אפשרויות, גוגל יכולה לבצע אופטימיזציה טובה יותר!",
      whyItMatters: "למה זה חשוב:",
      whyItMattersText: "טקסט מודעה מעולה = יותר קליקים = יותר לקוחות. תעשה את זה משכנע!",
      
      headlinesLabel: "כותרות (מינימום 2, מקסימום 15)",
      headlinesHelp: "כותרות קצרות וקולעות שתופסות תשומת לב. טיפים: כלול את היתרון העיקרי שלך, השתמש במילות פעולה, הזכר את המותג שלך. שמור על פחות מ-30 תווים לכל אחת.",
      headlinePlaceholder: "כותרת",
      addHeadline: "+ הוסף כותרת",
      
      descriptionsLabel: "תיאורים (מינימום 2, מקסימום 4)",
      descriptionsHelp: "יותר מקום להסביר מה אתה מציע. כלול: מה מייחד אותך, למה לבחור בך, איזו פעולה לנקוט. שמור על פחות מ-90 תווים לכל אחד.",
      descriptionPlaceholder: "תיאור",
      addDescription: "+ הוסף תיאור",
    },
    
    // Final URL
    finalUrl: {
      title: "כתובת URL סופית",
      whatIsThis: "מה זה?",
      description: "לכאן אנשים מגיעים כשהם לוחצים על המודעה שלך - דף הנחיתה שלך. הוא צריך להיות רלוונטי למודעה ולמילות המפתח שלך.",
      whyItMatters: "למה זה חשוב:",
      whyItMattersText: "דף נחיתה רלוונטי משפר את ציון האיכות של המודעה שלך (כלומר עלויות נמוכות יותר) וממיר יותר מבקרים ללקוחות.",
      
      label: "כתובת URL סופית",
      help: "דף האינטרנט שאנשים מגיעים אליו אחרי שהם לוחצים על המודעה שלך. וודא שהוא תואם למה שהמודעה שלך מבטיחה!",
      placeholder: "https://example.com/products/shoes",
      note: "נתיבי התצוגה יופקו אוטומטית מה-URL (מקסימום 2 מקטעי נתיב, 15 תווים כל אחד)",
    },
    
    // Optional Extensions
    optionalExtensions: {
      title: "הרחבות אופציונליות",
      description: "הרחבות מוסיפות מידע נוסף למודעות שלך, והופכות אותן לגדולות ויותר שימושיות. מודעות עם הרחבות בדרך כלל מקבלות 10-15% יותר קליקים. אלה אופציונליות אבל מומלצות מאוד!",
    },
    
    // Promotions
    promotions: {
      title: "מבצעים",
      whatIsThis: "מה זה?",
      description: "הדגש הצעות מיוחדות, הנחות או מבצעים ישירות במודעה שלך. תג מבצע מופיע מתחת למודעה שלך ומציג את העסקה.",
      example: "דוגמה:",
      exampleText: "\"20% הנחה - השתמש בקוד SAVE20\" או \"מבצע בלאק פריידי - עד 50% הנחה\"",
      whyUseIt: "למה להשתמש בזה:",
      whyUseItText: "מבצעים תופסים את העין ויוצרים דחיפות. אנשים יותר סביר ללחוץ כשהם רואים עסקה!",
      
      occasion: "אירוע",
      occasionHelp: "קשר את המבצע שלך לחג או אירוע לרלוונטיות נוספת.",
      occasionNone: "ללא",
      
      language: "שפה",
      languageHelp: "השפה של טקסט המבצע שלך.",
      
      currency: "מטבע",
      
      promotionType: "סוג מבצע",
      promotionTypeSelect: "-- בחר --",
      monetaryDiscount: "הנחה כספית",
      percentDiscount: "הנחה באחוזים",
      
      amountOff: "סכום ההנחה",
      percentOff: "אחוז הנחה (%)",
      
      item: "פריט (מה מקודם)",
      itemPlaceholder: "מבצע קיץ",
      
      finalUrl: "כתובת URL סופית",
      finalUrlPlaceholder: "https://example.com/promo",
      
      promotionDetails: "פרטי המבצע",
      detailsNone: "ללא",
      detailsCode: "בהזמנות עם קוד מבצע",
      detailsMinimum: "בהזמנות מעל",
      
      promoCode: "קוד מבצע",
      promoCodePlaceholder: "SAVE20",
      
      minimumOrder: "סכום הזמנה מינימלי",
      
      startDate: "תאריך התחלה מוצג",
      endDate: "תאריך סיום מוצג",
    },
    
    // Prices
    prices: {
      title: "מחירים",
      whatIsThis: "מה זה?",
      description: "הצג תפריט של המוצרים או השירותים שלך עם מחירים ישירות במודעה שלך. כל פריט מקשר לדף שלו.",
      example: "דוגמה:",
      exampleText: "מסעדה יכולה להציג \"ספיישל צהריים - 45₪\", \"תפריט ערב - 95₪\", \"קייטרינג - מ-400₪\"",
      whyUseIt: "למה להשתמש בזה:",
      whyUseItText: "שקיפות במחירים בונה אמון. אנשים יכולים לראות אם אתה מתאים לתקציב שלהם לפני שהם לוחצים, מה שמוביל ללידים יותר איכותיים.",
      
      priceType: "סוג מחיר",
      priceTypeHelp: "לאיזו קטגוריה אתה מציג מחירים?",
      priceTypeSelect: "-- בחר --",
      
      priceQualifier: "תיאור מחיר",
      qualifierNone: "ללא",
      qualifierFrom: "החל מ-",
      qualifierUpTo: "עד",
      qualifierAverage: "ממוצע",
      
      language: "שפה",
      
      offeringsLabel: "הצעות מחיר (מינימום 3, מקסימום 8)",
      offeringTitle: "הצעה",
      
      header: "כותרת",
      headerPlaceholder: "חבילה בסיסית",
      
      offeringDescription: "תיאור",
      descriptionPlaceholder: "מעולה למתחילים",
      
      price: "מחיר",
      pricePlaceholder: "9.99",
      
      unit: "יחידה",
      unitNone: "ללא",
      unitPerHour: "לשעה",
      unitPerDay: "ליום",
      unitPerWeek: "לשבוע",
      unitPerMonth: "לחודש",
      unitPerYear: "לשנה",
      unitPerNight: "ללילה",
      
      offeringUrl: "כתובת URL של ההצעה",
      urlPlaceholder: "https://example.com/pricing",
      
      addOffering: "+ הוסף הצעת מחיר",
      remove: "הסר",
    },
    
    // Calls
    calls: {
      title: "שיחות",
      whatIsThis: "מה זה?",
      description: "הוסף מספר טלפון לחיץ למודעה שלך. בנייד, אנשים יכולים להתקשר אליך בלחיצה אחת!",
      whyUseIt: "למה להשתמש בזה:",
      whyUseItText: "מושלם אם שיחות טלפון בעלות ערך לעסק שלך (מסעדות, שירותים, תמיכה). מאפשר ללקוחות להגיע אליך מיידית ובקלות.",
      
      countryCode: "קידומת מדינה",
      countryCodeHelp: "בחר את המדינה של מספר הטלפון שלך.",
      
      phoneNumber: "מספר טלפון",
      phoneNumberHelp: "מספר הטלפון העסקי שלקוחות יתקשרו אליו.",
      phonePlaceholder: "+972-50-123-4567",
    },
    
    // Callouts
    callouts: {
      title: "הדגשות",
      whatIsThis: "מה זה?",
      description: "ביטויים קצרים שמדגישים יתרונות או תכונות מפתח. הם מופיעים כטקסט נוסף מתחת למודעה שלך.",
      examples: "דוגמאות:",
      examplesText: "\"משלוח חינם\", \"תמיכה 24/7\", \"החזר כספי מובטח\", \"עסק משפחתי מאז 1990\"",
      whyUseIt: "למה להשתמש בזה:",
      whyUseItText: "הדגשות מאפשרות לך להדגיש מה מייחד אותך בלי לתפוס מקום בכותרת. הן בונות אמון ומבדילות אותך מהמתחרים.",
      
      textPlaceholder: "משלוח חינם",
      startDate: "תאריך התחלה (אופציונלי)",
      endDate: "תאריך סיום (אופציונלי)",
      addCallout: "+ הוסף הדגשה",
    },
    
    // Lead Form
    leadForm: {
      title: "טופס לידים",
      whatIsThis: "מה זה?",
      description: "טופס שמופיע ישירות במודעה שלך! אנשים יכולים לשלוח את פרטי הקשר שלהם (שם, אימייל, טלפון) בלי לעזוב את גוגל. אתה מקבל את הפרטים שלהם כלידים.",
      howItWorks: "איך זה עובד:",
      howItWorksText: "משתמש לוחץ על המודעה שלך ← טופס קופץ ← הוא ממלא אותו ← אתה מקבל את המידע שלו מיידית",
      whyUseIt: "למה להשתמש בזה:",
      whyUseItText: "מפחית חיכוך - אנשים לא צריכים לבקר באתר שלך כדי להפוך ללידים. מעולה לעסקי שירותים, ייעוץ, הצעות מחיר והרשמות.",
      
      businessName: "שם העסק",
      businessNameHelp: "שם החברה שלך שמוצג בטופס.",
      businessNamePlaceholder: "חברת דוגמה",
      
      headline: "כותרת",
      headlinePlaceholder: "קבל הצעת מחיר חינם",
      
      description2: "תיאור",
      descriptionPlaceholder: "מלא את הטופס להתחלה...",
      
      privacyUrl: "כתובת URL של מדיניות פרטיות",
      privacyUrlPlaceholder: "https://example.com/privacy",
      
      ctaType: "סוג קריאה לפעולה",
      ctaLearnMore: "למד עוד",
      ctaGetQuote: "קבל הצעת מחיר",
      ctaApplyNow: "הגש בקשה עכשיו",
      ctaSignUp: "הירשם",
      ctaContactUs: "צור קשר",
      ctaSubscribe: "הירשם לעדכונים",
      ctaDownload: "הורד",
      ctaBookNow: "הזמן עכשיו",
      ctaGetOffer: "קבל הצעה",
      
      ctaDescription: "תיאור קריאה לפעולה",
      ctaDescPlaceholder: "בקש הצעת מחיר חינם היום",
      
      postSubmitHeadline: "כותרת לאחר שליחה",
      postSubmitHeadlinePlaceholder: "תודה!",
      
      postSubmitDescription: "תיאור לאחר שליחה",
      postSubmitDescPlaceholder: "ניצור איתך קשר בקרוב",
      
      fieldsToCollect: "שדות לאיסוף",
      contactInfo: "פרטי קשר:",
      workInfo: "פרטי עבודה:",
      
      fieldFullName: "שם מלא",
      fieldEmail: "אימייל",
      fieldPhoneNumber: "מספר טלפון",
      fieldCountry: "מדינה",
      fieldCity: "עיר",
      fieldPostalCode: "מיקוד",
      fieldRegion: "אזור",
      fieldCompanyName: "שם חברה",
      fieldWorkEmail: "אימייל עבודה",
      fieldWorkPhone: "טלפון עבודה",
      fieldJobTitle: "תפקיד",
    },
    
    // Mobile App
    mobileApp: {
      title: "אפליקציה לנייד",
      whatIsThis: "מה זה?",
      description: "הוסף קישור להורדת האפליקציה לנייד שלך ישירות מהמודעה. מציג אייקון אפליקציה וכפתור הורדה.",
      whyUseIt: "למה להשתמש בזה:",
      whyUseItText: "קדם התקנות אפליקציה לצד המודעה הרגילה שלך. מושלם אם יש לך אפליקציה ואתה רוצה להגדיל את בסיס המשתמשים שלך.",
      
      appStore: "חנות אפליקציות",
      appStoreHelp: "היכן האפליקציה שלך זמינה?",
      appStoreSelect: "-- בחר --",
      appStoreApple: "App Store של Apple",
      appStoreGoogle: "Google Play Store",
      
      appId: "מזהה אפליקציה",
      appIdPlaceholder: "com.example.app",
      
      linkText: "טקסט קישור",
      linkTextPlaceholder: "הורד עכשיו",
    },
    
    // Submit
    submit: {
      createCampaign: "צור קמפיין",
    },
    
    // Languages
    languages: {
      english: "אנגלית",
      spanish: "ספרדית",
      french: "צרפתית",
      german: "גרמנית",
      hebrew: "עברית",
    },
    
    // Occasions
    occasions: {
      newYears: "ראש השנה האזרחית",
      valentinesDay: "יום האהבה",
      easter: "חג הפסחא",
      mothersDay: "יום האם",
      fathersDay: "יום האב",
      laborDay: "יום העבודה",
      backToSchool: "חזרה לבית הספר",
      halloween: "ליל כל הקדושים",
      blackFriday: "בלאק פריידי",
      cyberMonday: "סייבר מאנדיי",
      christmas: "חג המולד",
      boxingDay: "יום הקופסאות",
      independenceDay: "יום העצמאות",
      nationalDay: "יום לאומי",
      endOfSeason: "סוף עונה",
      winterSale: "מבצע חורף",
      summerSale: "מבצע קיץ",
      fallSale: "מבצע סתיו",
      springSale: "מבצע אביב",
    },
    
    // Price Types
    priceTypes: {
      brands: "מותגים",
      events: "אירועים",
      locations: "מיקומים",
      neighborhoods: "שכונות",
      productCategories: "קטגוריות מוצרים",
      productTiers: "רמות מוצרים",
      services: "שירותים",
      serviceCategories: "קטגוריות שירותים",
      serviceTiers: "רמות שירותים",
    },
    
    // Countries
    countries: {
      us: "ארה\"ב (+1)",
      uk: "בריטניה (+44)",
      israel: "ישראל (+972)",
      germany: "גרמניה (+49)",
      france: "צרפת (+33)",
    },
    
    // Currencies
    currencies: {
      usd: "דולר",
      eur: "יורו",
      gbp: "לירה שטרלינג",
      ils: "שקל",
    },
  },
};

export type Language = 'en' | 'he';
export type Translations = typeof translations.en;
