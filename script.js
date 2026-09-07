// ==========================================================================
// SRISHTI CLINIC — shared site script (index / doctors / contact)
// One copy of translations + behavior for all pages, instead of a duplicated
// block per file that could drift out of sync.
// ==========================================================================

const translations = {
  en: {
    'dialog-title': 'Choose Your Language',
    'dialog-subtitle': 'अपनी भाषा चुनें / Select your preferred language',
    'dialog-skip': 'Skip for now',
    'nav-home': 'Home',
    'nav-specialities': 'Specialities',
    'nav-doctors': 'Meet Your Doctors',
    'nav-reviews': 'Reviews',
    'nav-faq': 'FAQ',
    'nav-visit': 'Visit & Book',
    'book-visit': 'Book a visit',
    'call-clinic': 'Call clinic',

    // Home hero
    'hero-location': 'Kalibadi Chouk, Housing Board, Bhilai · Since 2003',
    'hero-title': 'Two doctors, one home — 23 years of caring for Bhilai\'s families.',
    'hero-lede': 'Dr. Savita Golan (BAMS, Ayurved) and Dr. N. Golan (MBBS, General Physician & Surgeon) practise side by side — modern medicine and classical Ayurveda under a single roof, for infertility care, Panchakarma and Agnikarma pain treatment.',
    'book-btn': 'Book an appointment',
    'whatsapp-btn': 'WhatsApp us',
    'years-healthcare': 'years in healthcare',
    'google-rating': 'Google rating',
    'doctors-practice': 'doctors, one practice',
    'rating-num': '4.8 rating',
    'clinic-type': 'Ayurvedic & General Clinic, Housing Board',

    // Specialities
    'what-treat': 'What we treat',
    'specialities-title': 'Speciality Ayurvedic & medical care',
    'specialities-desc': 'From infertility to chronic pain, our treatment plans are built around each patient — combining Dr. Savita Golan\'s classical Ayurvedic and Panchakarma protocols with Dr. N. Golan\'s clinical diagnosis.',
    'spec1-title': 'Infertility Care',
    'spec1-desc': 'PCOD/PCOS, tubal block, fibroid, irregular periods, low AMH, sperm issues & genetic factors — for both male and female infertility.',
    'spec2-title': 'Agnikarma',
    'spec2-desc': 'Instant, effective Ayurvedic pain management for arthritis, sciatica, frozen shoulder, cervical, knee and back pain — no injections needed.',
    'spec3-title': 'Panchakarma',
    'spec3-desc': 'All classical Panchakarma procedures, advised and administered according to your prakriti and condition.',
    'spec4-title': 'Skin & Spine',
    'spec4-desc': 'Psoriasis and other skin diseases, spinal cord conditions, piles, fissure & fistula treated with Ayurvedic care.',
    'spec5-title': 'PCOS & Menses',
    'spec5-desc': 'PCOS, fibroid and irregular menses management, with lifestyle and diet correction alongside medicine.',
    'spec6-title': 'Stress & Lifestyle',
    'spec6-desc': 'Stress management, diet consultation and lifestyle consultation rooted in the Ayurvedic daily rhythm.',
    'spec7-title': 'General Medicine',
    'spec7-desc': 'Dr. N. Golan sees general physician & minor surgical cases across all ages, every clinic day.',
    'spec8-title': 'Diet Consultation',
    'spec8-desc': 'Personalised diet and daily-rhythm guidance to support every treatment plan, not a one-size chart.',
    'spec9-title': 'Agnikarma — Cosmetic',
    'spec9-desc': 'Agnikarma for moles, skin tags, warts, corns and tattoo marks — precise aesthetic correction, the Ayurvedic way.',
    'spec10-title': 'Agnikarma — Curative',
    'spec10-desc': 'Agnikarma for abscess, piles, nail disease and more — fast, effective relief without surgery.',
    'spec11-title': 'Vidhikarma',
    'spec11-desc': 'For mental health concerns, PCOD, renal stones, urinary problems, infertility, gynaecological issues, headache, frozen shoulder, back ache, sciatica & more.',
    'spec12-title': 'Swarna Prashan',
    'spec12-desc': 'For children aged 0–16 years — an Ayurvedic immunity booster given as a monthly dose to support growth and health.',

    // Doctors strip / page
    'your-doctors': 'Your doctors',
    'doctors-title': 'A husband-and-wife practice, two disciplines',
    'lead-doctor': 'Lead Doctor · Panchakarma & Agnikarma Practitioner',
    'general-physician': 'General Physician & Surgeon',
    'meet-doctors': 'Meet your doctors',
    'meet-doctors-page': 'Meet your doctors',
    'meet-doctors-title': 'Meet your doctors',
    'doctors-lede': 'Two disciplines, one clinic. Dr. Savita Golan leads with classical Ayurvedic training focused on infertility, pain and Panchakarma; Dr. N. Golan brings 23 years of general medical practice. Patients often see both, one visit apart.',
    'panchakarma-specialist': 'Panchakarma & Agnikarma specialist',
    'savita-desc': 'Dr. Savita Golan treats through classical Ayurveda — from infertility support to instant, effective Agnikarma pain therapy. She builds each protocol around the patient\'s prakriti (constitution), the Ayurvedic daily rhythm, and diet, rather than a standard chart.',
    'savita-focus1': 'Female & male infertility (PCOD/PCOS, tubal block, fibroid)',
    'savita-focus2': 'Agnikarma for arthritis, sciatica & joint pain',
    'savita-focus3': 'All classical Panchakarma procedures',
    'savita-focus4': 'Psoriasis & other skin diseases',
    'savita-focus5': 'Spinal cord conditions, piles, fissure & fistula',
    'savita-focus6': 'Diet, lifestyle & stress management consultation',
    'book-savita': 'Book with Dr. Savita Golan',
    'years-practice': '23 years in practice',
    'narendra-desc': 'Dr. N. Golan sees general medical and minor surgical cases across all ages — from everyday illness and infections to post-operative and chronic condition follow-up. He works closely with Dr. Savita Golan on cases where infertility or pain treatment call for a combined medical and Ayurvedic approach.',
    'narendra-focus1': 'General medical consultation',
    'narendra-focus2': 'Minor surgical procedures',
    'narendra-focus3': 'Chronic condition management',
    'narendra-focus4': 'Male infertility & sperm-related issues',
    'narendra-focus5': 'Diagnosis & referral coordination',
    'narendra-focus6': 'Care for patients of all ages',
    'book-narendra': 'Book with Dr. N. Golan',
    'quote': '"Infertility is not a disease — it is a symptom. We treat what lies beneath it."',
    'quote-attr': '— The approach that guides every consultation at Srishti Clinic',
    'ready-speak': 'Ready to speak with one of us?',
    'ready-desc': 'Tell us who you\'d like to see and when — we\'ll confirm your slot on WhatsApp.',

    // Timings / booking
    'plan-visit': 'Plan your visit',
    'timings-title': 'Clinic timings & appointment',
    'timings-desc': 'Open six days a week, morning and evening. We recommend booking ahead to avoid last-minute waiting — send us your preferred slot on WhatsApp and we\'ll confirm it.',
    'this-week': 'This week',
    'monday': 'Monday', 'tuesday': 'Tuesday', 'wednesday': 'Wednesday',
    'thursday': 'Thursday', 'friday': 'Friday', 'saturday': 'Saturday', 'sunday': 'Sunday',
    'closed': 'Closed',
    'request-slot': 'Request a slot on WhatsApp',
    'your-name': 'Your name',
    'your-phone': 'Your phone number',
    'see-doctor': 'See which doctor?',
    'doc1': 'Dr. Savita Golan — Ayurved / Infertility / Panchakarma',
    'doc2': 'Dr. N. Golan — General Physician & Surgeon',
    'doc3': 'Not sure, please advise',
    'reason-visit': 'Reason for visit (optional)',
    'pref-date': 'Preferred date',
    'pref-time': 'Preferred time',
    'send-request': 'Send request on WhatsApp',
    'whatsapp-note': 'This opens WhatsApp with your details filled in — nothing is booked until we confirm with you.',
    'prefer-talk': 'Prefer to talk? Call',
    'directly': 'directly.',

    // Gallery / reviews / FAQ
    'inside-clinic': 'Inside the clinic',
    'what-expect': 'What to expect when you visit',
    'patients-words': "In patients' words",
    'reviews-title': 'Rated 5.0 by our patients',
    'reviews-desc': 'Real reviews from Google — Srishti Clinic, Housing Board, Bhilai.',
    'review1': '"Best therapy for cervical pain and heel pain."',
    'review2': '"Authentic doctors with genuine medication and no extra charges."',
    'review3': '"Good medicine and good job done."',
    'review4': '"Very good."',
    'review-when1': '6 months ago',
    'review-when2': 'a year ago',
    'review-when3': 'a year ago',
    'review-when4': '11 months ago',
    'good-know': 'Good to know',
    'faq-title': 'Frequently asked questions',
    'faq1-q': 'Does Srishti Clinic provide home visits?',
    'faq1-a': 'For most consultations and treatments, patients need to visit the clinic in person. Call us on 9993228024 for anything you\'re unsure about.',
    'faq2-q': 'Do I need an appointment before visiting?',
    'faq2-a': 'Yes — we advise booking ahead so you don\'t face last-minute waiting. Use the WhatsApp form above or call the clinic directly.',
    'faq3-q': 'Does Ayurvedic treatment have side effects?',
    'faq3-a': 'Ayurvedic treatment is one of the oldest natural systems of medicine and, when practised correctly, carries no side effects — Dr. Savita Golan tailors each protocol to the patient\'s constitution.',
    'faq4-q': 'How is Srishti Clinic rated by patients?',
    'faq4-a': 'Patient satisfaction comes first here — the clinic holds a 5.0 rating on Google, based on real patient reviews.',
    'faq5-q': 'Where exactly is the clinic located?',
    'faq5-a': 'HB, Kalibadi Chouk, I/E, beside Pizza Hut, Fauji Nagar, Housing Board, Bhilai – 490026, Chhattisgarh.',
    'visit-page': 'Visit & Book page',

    // Contact page
    'visit-book': 'Visit & book',
    'visit-lede': 'Find us at Kalibadi Chouk, right beside Pizza Hut in Housing Board. Call, WhatsApp, or send a booking request below and we\'ll confirm your slot.',
    'address': 'Address',
    'address-desc': 'HB, Kalibadi Chouk, I/E, Beside Pizza Hut, Fauji Nagar, Housing Board, Bhilai – 490026, Chhattisgarh',
    'phone': 'Phone',
    'whatsapp': 'WhatsApp',
    'message-us': 'Message us directly →',
    'timings': 'Timings',
    'timings-desc-contact': 'Mon–Sat: 9:30 AM–2:00 PM & 5:30 PM–9:30 PM<br>Sunday: Closed',
    'appointment-note': 'Appointments are recommended so you don\'t face last-minute waiting — use the form or WhatsApp button to request your slot.',
    'get-directions': 'Get directions',
    'request-appointment': 'Request an appointment',
    'book-visit-title': 'Book your visit',
    'book-desc': 'Fill this in and it opens WhatsApp with your details ready to send — we\'ll reply to confirm.',

    // Footer
    'footer-desc': 'Srishti Clinic & Infertility Center — general medicine and Ayurvedic Panchakarma care at Kalibadi Chouk, Housing Board, Bhilai. In service since 2003.',
    'quick-links': 'QUICK LINKS',
    'contact-title': 'CONTACT',
  },
  hi: {
    'dialog-title': 'अपनी भाषा चुनें',
    'dialog-subtitle': 'Choose Your Language / अपनी भाषा चुनें',
    'dialog-skip': 'अभी छोड़ें',
    'nav-home': 'होम',
    'nav-specialities': 'विशेषताएं',
    'nav-doctors': 'अपने डॉक्टरों से मिलें',
    'nav-reviews': 'समीक्षाएं',
    'nav-faq': 'सामान्य प्रश्न',
    'nav-visit': 'विजिट और बुक',
    'book-visit': 'विजिट बुक करें',
    'call-clinic': 'क्लिनिक कॉल करें',

    'hero-location': 'कालीबाड़ी चौक, हाउसिंग बोर्ड, भिलाई · 2003 से',
    'hero-title': 'दो डॉक्टर, एक घर — भिलाई के परिवारों की 23 सालों से देखभाल।',
    'hero-lede': 'डॉ. सविता गोलन (BAMS, आयुर्वेद) और डॉ. एन. गोलन (MBBS, जनरल फिजिशियन और सर्जन) साथ-साथ अभ्यास करते हैं — आधुनिक चिकित्सा और शास्त्रीय आयुर्वेद एक ही छत के नीचे, बांझपन देखभाल, पंचकर्म और अग्निकर्म दर्द उपचार के लिए।',
    'book-btn': 'अपॉइंटमेंट बुक करें',
    'whatsapp-btn': 'व्हाट्सएप करें',
    'years-healthcare': 'स्वास्थ्य सेवा में वर्ष',
    'google-rating': 'गूगल रेटिंग',
    'doctors-practice': 'डॉक्टर, एक प्रैक्टिस',
    'rating-num': '4.8 रेटिंग',
    'clinic-type': 'आयुर्वेदिक और जनरल क्लिनिक, हाउसिंग बोर्ड',

    'what-treat': 'हम क्या इलाज करते हैं',
    'specialities-title': 'विशेष आयुर्वेदिक और चिकित्सा देखभाल',
    'specialities-desc': 'बांझपन से लेकर पुराने दर्द तक, हमारी उपचार योजनाएं प्रत्येक रोगी के अनुसार बनाई जाती हैं — डॉ. सविता गोलन के शास्त्रीय आयुर्वेदिक और पंचकर्म प्रोटोकॉल को डॉ. एन. गोलन के क्लिनिकल निदान के साथ मिलाकर।',
    'spec1-title': 'बांझपन देखभाल',
    'spec1-desc': 'PCOD/PCOS, ट्यूबल ब्लॉक, फाइब्रॉएड, अनियमित मासिक धर्म, कम AMH, शुक्राणु समस्याएं और आनुवंशिक कारक — पुरुष और महिला दोनों बांझपन के लिए।',
    'spec2-title': 'अग्निकर्म',
    'spec2-desc': 'गठिया, साइटिका, फ्रोजन शोल्डर, सर्वाइकल, घुटने और पीठ दर्द के लिए तुरंत, प्रभावी आयुर्वेदिक दर्द प्रबंधन — कोई इंजेक्शन नहीं।',
    'spec3-title': 'पंचकर्म',
    'spec3-desc': 'सभी शास्त्रीय पंचकर्म प्रक्रियाएं, आपकी प्रकृति और स्थिति के अनुसार सलाह और प्रशासित।',
    'spec4-title': 'त्वचा और रीढ़',
    'spec4-desc': 'सोरायसिस और अन्य त्वचा रोग, रीढ़ की हड्डी की स्थिति, बवासीर, फिशर और फिस्टुला का आयुर्वेदिक देखभाल से इलाज।',
    'spec5-title': 'PCOS और मासिक धर्म',
    'spec5-desc': 'PCOS, फाइब्रॉएड और अनियमित मासिक धर्म प्रबंधन, दवा के साथ जीवनशैली और आहार सुधार।',
    'spec6-title': 'तनाव और जीवनशैली',
    'spec6-desc': 'आयुर्वेदिक दैनिक लय में निहित तनाव प्रबंधन, आहार परामर्श और जीवनशैली परामर्श।',
    'spec7-title': 'सामान्य चिकित्सा',
    'spec7-desc': 'डॉ. एन. गोलन हर क्लिनिक दिवस पर सभी उम्र के सामान्य चिकित्सक और छोटे सर्जिकल मामले देखते हैं।',
    'spec8-title': 'आहार परामर्श',
    'spec8-desc': 'प्रत्येक उपचार योजना का समर्थन करने के लिए व्यक्तिगत आहार और दैनिक लय मार्गदर्शन, एक-आकार चार्ट नहीं।',
    'spec9-title': 'अग्निकर्म — कॉस्मेटिक',
    'spec9-desc': 'तिल, स्किन टैग, मस्से, कॉर्न और टैटू के निशान के लिए अग्निकर्म — आयुर्वेदिक तरीके से सटीक सौंदर्य सुधार।',
    'spec10-title': 'अग्निकर्म — उपचारात्मक',
    'spec10-desc': 'फोड़ा, बवासीर, नाखून रोग और अन्य के लिए अग्निकर्म — बिना सर्जरी के तेज़, प्रभावी राहत।',
    'spec11-title': 'विधिकर्म',
    'spec11-desc': 'मानसिक स्वास्थ्य समस्याओं, PCOD, गुर्दे की पथरी, मूत्र संबंधी समस्याओं, बांझपन, स्त्री रोग, सिरदर्द, फ्रोजन शोल्डर, कमर दर्द, साइटिका और अन्य के लिए।',
    'spec12-title': 'स्वर्ण प्राशन',
    'spec12-desc': '0–16 वर्ष के बच्चों के लिए — विकास और स्वास्थ्य के समर्थन के लिए मासिक खुराक के रूप में दी जाने वाली एक आयुर्वेदिक प्रतिरक्षा बूस्टर।',

    'your-doctors': 'आपके डॉक्टर',
    'doctors-title': 'पति-पत्नी की प्रैक्टिस, दो विधाएं',
    'lead-doctor': 'मुख्य डॉक्टर · पंचकर्म और अग्निकर्म विशेषज्ञ',
    'general-physician': 'जनरल फिजिशियन और सर्जन',
    'meet-doctors': 'अपने डॉक्टरों से मिलें',
    'meet-doctors-page': 'अपने डॉक्टरों से मिलें',
    'meet-doctors-title': 'अपने डॉक्टरों से मिलें',
    'doctors-lede': 'दो विधाएं, एक क्लिनिक। डॉ. सविता गोलन बांझपन, दर्द और पंचकर्म पर केंद्रित शास्त्रीय आयुर्वेदिक प्रशिक्षण के साथ नेतृत्व करती हैं; डॉ. एन. गोलन 23 वर्षों का सामान्य चिकित्सा अभ्यास लाते हैं। मरीज अक्सर दोनों को देखते हैं, एक विजिट के अंतराल पर।',
    'panchakarma-specialist': 'पंचकर्म और अग्निकर्म विशेषज्ञ',
    'savita-desc': 'डॉ. सविता गोलन शास्त्रीय आयुर्वेद के माध्यम से इलाज करती हैं — बांझपन सहायता से लेकर तुरंत, प्रभावी अग्निकर्म दर्द चिकित्सा तक। वह प्रत्येक प्रोटोकॉल को रोगी की प्रकृति (संविधान), आयुर्वेदिक दैनिक लय और आहार के आसपास बनाती हैं, न कि एक मानक चार्ट।',
    'savita-focus1': 'महिला और पुरुष बांझपन (PCOD/PCOS, ट्यूबल ब्लॉक, फाइब्रॉएड)',
    'savita-focus2': 'गठिया, साइटिका और जोड़ों के दर्द के लिए अग्निकर्म',
    'savita-focus3': 'सभी शास्त्रीय पंचकर्म प्रक्रियाएं',
    'savita-focus4': 'सोरायसिस और अन्य त्वचा रोग',
    'savita-focus5': 'रीढ़ की हड्डी की स्थिति, बवासीर, फिशर और फिस्टुला',
    'savita-focus6': 'आहार, जीवनशैली और तनाव प्रबंधन परामर्श',
    'book-savita': 'डॉ. सविता गोलन के साथ बुक करें',
    'years-practice': '23 वर्षों का अभ्यास',
    'narendra-desc': 'डॉ. एन. गोलन सभी उम्र के सामान्य चिकित्सा और छोटे सर्जिकल मामले देखते हैं — रोजमर्रा की बीमारी और संक्रमण से लेकर पोस्ट-ऑपरेटिव और पुरानी स्थिति फॉलो-अप तक। वह उन मामलों पर डॉ. सविता गोलन के साथ मिलकर काम करते हैं जहां बांझपन या दर्द उपचार के लिए संयुक्त चिकित्सा और आयुर्वेदिक दृष्टिकोण की आवश्यकता होती है।',
    'narendra-focus1': 'सामान्य चिकित्सा परामर्श',
    'narendra-focus2': 'छोटी सर्जिकल प्रक्रियाएं',
    'narendra-focus3': 'पुरानी स्थिति प्रबंधन',
    'narendra-focus4': 'पुरुष बांझपन और शुक्राणु संबंधी समस्याएं',
    'narendra-focus5': 'निदान और रेफरल समन्वय',
    'narendra-focus6': 'सभी उम्र के रोगियों की देखभाल',
    'book-narendra': 'डॉ. एन. गोलन के साथ बुक करें',
    'quote': '"बांझपन कोई बीमारी नहीं है — यह एक लक्षण है। हम इसके नीचे जो है उसका इलाज करते हैं।"',
    'quote-attr': '— सृष्टि क्लिनिक में हर परामर्श का मार्गदर्शन करने वाला दृष्टिकोण',
    'ready-speak': 'हममें से किसी से बात करने के लिए तैयार हैं?',
    'ready-desc': 'हमें बताएं कि आप किससे मिलना चाहते हैं और कब — हम व्हाट्सएप पर आपके स्लॉट की पुष्टि करेंगे।',

    'plan-visit': 'अपनी यात्रा की योजना बनाएं',
    'timings-title': 'क्लिनिक समय और अपॉइंटमेंट',
    'timings-desc': 'सप्ताह में छह दिन, सुबह और शाम खुला। हम अंतिम समय की प्रतीक्षा से बचने के लिए पहले से बुकिंग की सलाह देते हैं — व्हाट्सएप पर अपना पसंदीदा समय भेजें और हम इसकी पुष्टि करेंगे।',
    'this-week': 'इस सप्ताह',
    'monday': 'सोमवार', 'tuesday': 'मंगलवार', 'wednesday': 'बुधवार',
    'thursday': 'गुरुवार', 'friday': 'शुक्रवार', 'saturday': 'शनिवार', 'sunday': 'रविवार',
    'closed': 'बंद',
    'request-slot': 'व्हाट्सएप पर स्लॉट का अनुरोध करें',
    'your-name': 'आपका नाम',
    'your-phone': 'आपका फोन नंबर',
    'see-doctor': 'किस डॉक्टर से मिलना है?',
    'doc1': 'डॉ. सविता गोलन — आयुर्वेद / बांझपन / पंचकर्म',
    'doc2': 'डॉ. एन. गोलन — जनरल फिजिशियन और सर्जन',
    'doc3': 'निश्चित नहीं, कृपया सलाह दें',
    'reason-visit': 'विजिट का कारण (वैकल्पिक)',
    'pref-date': 'पसंदीदा तारीख',
    'pref-time': 'पसंदीदा समय',
    'send-request': 'व्हाट्सएप पर अनुरोध भेजें',
    'whatsapp-note': 'यह आपके विवरण के साथ व्हाट्सएप खोलता है — जब तक हम पुष्टि नहीं करते, कुछ भी बुक नहीं होता।',
    'prefer-talk': 'बात करना पसंद करते हैं? कॉल करें',
    'directly': 'सीधे।',

    'inside-clinic': 'क्लिनिक के अंदर',
    'what-expect': 'जब आप आएं तो क्या उम्मीद करें',
    'patients-words': 'मरीजों के शब्दों में',
    'reviews-title': 'हमारे मरीजों द्वारा 5.0 रेटेड',
    'reviews-desc': 'गूगल से वास्तविक समीक्षाएं — सृष्टि क्लिनिक, हाउसिंग बोर्ड, भिलाई।',
    'review1': '"सर्वाइकल दर्द और एड़ी दर्द के लिए सबसे अच्छी थेरेपी।"',
    'review2': '"प्रामाणिक डॉक्टर, वास्तविक दवा और कोई अतिरिक्त शुल्क नहीं।"',
    'review3': '"अच्छी दवा और अच्छा काम।"',
    'review4': '"बहुत अच्छा।"',
    'review-when1': '6 महीने पहले',
    'review-when2': 'एक साल पहले',
    'review-when3': 'एक साल पहले',
    'review-when4': '11 महीने पहले',
    'good-know': 'जानना अच्छा है',
    'faq-title': 'अक्सर पूछे जाने वाले प्रश्न',
    'faq1-q': 'क्या सृष्टि क्लिनिक होम विजिट प्रदान करता है?',
    'faq1-a': 'अधिकांश परामर्श और उपचार के लिए, रोगियों को व्यक्तिगत रूप से क्लिनिक आना होगा। किसी भी अनिश्चितता के लिए 9993228024 पर कॉल करें।',
    'faq2-q': 'क्या मुझे आने से पहले अपॉइंटमेंट की आवश्यकता है?',
    'faq2-a': 'हां — हम अंतिम समय की प्रतीक्षा से बचने के लिए पहले से बुकिंग की सलाह देते हैं। ऊपर दिए व्हाट्सएप फॉर्म का उपयोग करें या सीधे क्लिनिक कॉल करें।',
    'faq3-q': 'क्या आयुर्वेदिक उपचार के दुष्प्रभाव होते हैं?',
    'faq3-a': 'आयुर्वेदिक उपचार चिकित्सा की सबसे पुरानी प्राकृतिक प्रणालियों में से एक है और, जब सही ढंग से अभ्यास किया जाता है, तो कोई दुष्प्रभाव नहीं होता — डॉ. सविता गोलन प्रत्येक प्रोटोकॉल को रोगी की प्रकृति के अनुसार तैयार करती हैं।',
    'faq4-q': 'रोगियों द्वारा सृष्टि क्लिनिक को कैसे रेट किया जाता है?',
    'faq4-a': 'यहां रोगी संतुष्टि सबसे पहले आती है — क्लिनिक वास्तविक रोगी समीक्षाओं के आधार पर गूगल पर 5.0 रेटिंग रखता है।',
    'faq5-q': 'क्लिनिक वास्तव में कहां स्थित है?',
    'faq5-a': 'HB, कालीबाड़ी चौक, I/E, पिज्जा हट के बगल में, फौजी नगर, हाउसिंग बोर्ड, भिलाई – 490026, छत्तीसगढ़।',
    'visit-page': 'विजिट और बुक पेज',

    'visit-book': 'विजिट और बुक',
    'visit-lede': 'हमें कालीबाड़ी चौक, हाउसिंग बोर्ड में पिज्जा हट के ठीक बगल में खोजें। कॉल करें, व्हाट्सएप करें, या नीचे बुकिंग अनुरोध भेजें और हम आपके स्लॉट की पुष्टि करेंगे।',
    'address': 'पता',
    'address-desc': 'HB, कालीबाड़ी चौक, I/E, पिज्जा हट के बगल में, फौजी नगर, हाउसिंग बोर्ड, भिलाई – 490026, छत्तीसगढ़',
    'phone': 'फोन',
    'whatsapp': 'व्हाट्सएप',
    'message-us': 'हमें सीधे संदेश भेजें →',
    'timings': 'समय',
    'timings-desc-contact': 'सोम–शनि: 9:30 AM–2:00 PM और 5:30 PM–9:30 PM<br>रविवार: बंद',
    'appointment-note': 'अपॉइंटमेंट की सिफारिश की जाती है ताकि आपको अंतिम समय की प्रतीक्षा न करनी पड़े — अपना स्लॉट अनुरोध करने के लिए फॉर्म या व्हाट्सएप बटन का उपयोग करें।',
    'get-directions': 'दिशा-निर्देश प्राप्त करें',
    'request-appointment': 'अपॉइंटमेंट का अनुरोध करें',
    'book-visit-title': 'अपनी विजिट बुक करें',
    'book-desc': 'इसे भरें और यह आपके विवरण के साथ व्हाट्सएप खोलता है — हम पुष्टि करने के लिए जवाब देंगे।',

    'footer-desc': 'सृष्टि क्लिनिक और इनफर्टिलिटी सेंटर — कालीबाड़ी चौक, हाउसिंग बोर्ड, भिलाई में सामान्य चिकित्सा और आयुर्वेदिक पंचकर्म देखभाल। 2003 से सेवा में।',
    'quick-links': 'त्वरित लिंक',
    'contact-title': 'संपर्क',
  }
};

let currentLang = 'en';
let currentTypewriter = null;

// ===== LANGUAGE DIALOG =====
function showLanguageDialog() {
  const dialog = document.getElementById('langDialog');
  if (dialog) {
    dialog.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function hideLanguageDialog() {
  const dialog = document.getElementById('langDialog');
  if (dialog) {
    dialog.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function setLanguage(lang, save = true) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === 'OPTION') {
        el.textContent = translations[lang][key];
      } else if (key === 'timings-desc-contact') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('data-lang-select') === lang);
  });

  if (save) {
    localStorage.setItem('srishti-lang', lang);
    localStorage.setItem('srishti-lang-set', 'true');
  }

  if (currentTypewriter) {
    currentTypewriter.stop();
    initTypewriter();
  }

  hideLanguageDialog();
  updateClinicStatus();
}

// ===== TYPEWRITER (home hero only — id="typewriter" absent elsewhere) =====
class Typewriter {
  constructor(element, texts, speed = 60, pauseTime = 2500) {
    this.element = element;
    this.texts = texts;
    this.speed = speed;
    this.pauseTime = pauseTime;
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.isRunning = false;
    this.timer = null;
  }
  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.type();
  }
  stop() {
    this.isRunning = false;
    if (this.timer) clearTimeout(this.timer);
  }
  type() {
    if (!this.isRunning) return;
    const currentText = this.texts[this.textIndex] || '';

    if (!this.isDeleting) {
      this.charIndex++;
      this.element.textContent = currentText.substring(0, this.charIndex);
      if (this.charIndex >= currentText.length) {
        this.isDeleting = true;
        this.timer = setTimeout(() => this.type(), this.pauseTime);
        return;
      }
    } else {
      this.charIndex--;
      this.element.textContent = currentText.substring(0, this.charIndex);
      if (this.charIndex <= 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
      }
    }
    const delay = this.isDeleting ? this.speed / 2 : this.speed;
    this.timer = setTimeout(() => this.type(), delay);
  }
}

function initTypewriter() {
  const heroTitle = document.getElementById('typewriter');
  if (!heroTitle) return; // not present on doctors.html / contact.html

  const texts = [
    translations[currentLang]['hero-title'],
    currentLang === 'en' ? 'Trusted by Bhilai families since 2003' : '2003 से भिलाई परिवारों का भरोसा',
    currentLang === 'en' ? 'Ayurveda & Modern Medicine together' : 'आयुर्वेद और आधुनिक चिकित्सा एक साथ',
    currentLang === 'en' ? 'Specialists in Infertility & Panchakarma' : 'बांझपन और पंचकर्म में विशेषज्ञ'
  ];

  currentTypewriter = new Typewriter(heroTitle, texts);
  currentTypewriter.start();
}

// ===== STATUS VARIATIONS =====
const STATUS_VARIATIONS = {
  open: {
    en: ['Open now', 'We are open', 'Clinic is open', 'Open for consultations'],
    hi: ['अभी खुला है', 'हम खुले हैं', 'क्लिनिक खुला है', 'परामर्श के लिए खुला']
  },
  closed: {
    en: ['Sorry, we\'re closed at the moment', 'We are currently closed', 'Clinic is closed right now', 'Closed for now'],
    hi: ['क्षमा करें, हम इस समय बंद हैं', 'हम वर्तमान में बंद हैं', 'क्लिनिक अभी बंद है', 'अभी बंद है']
  },
  opening: {
    en: ['Opening soon', 'We open shortly', 'About to open', 'Opening in a bit'],
    hi: ['जल्द खुलेगा', 'हम जल्द खुलेंगे', 'खुलने वाला है', 'थोड़ी देर में खुलेगा']
  },
  closing: {
    en: ['Closing soon', 'We close shortly', 'About to close', 'Closing in a bit'],
    hi: ['जल्द बंद होगा', 'हम जल्द बंद करेंगे', 'बंद होने वाला है', 'थोड़ी देर में बंद होगा']
  }
};

// Pick deterministically per minute (not per render) so both pills on a page
// always show the SAME phrase at the SAME time, instead of two different
// random picks looking like a mismatch/bug.
function getVariation(type, seedMinuteKey) {
  const variations = STATUS_VARIATIONS[type][currentLang] || STATUS_VARIATIONS[type].en;
  const idx = seedMinuteKey % variations.length;
  return variations[idx];
}

const CLINIC_HOURS = {
  0: null, // Sunday closed
  1: [[9 * 60 + 30, 14 * 60], [17 * 60 + 30, 21 * 60 + 30]],
  2: [[9 * 60 + 30, 14 * 60], [17 * 60 + 30, 21 * 60 + 30]],
  3: [[9 * 60 + 30, 14 * 60], [17 * 60 + 30, 21 * 60 + 30]],
  4: [[9 * 60 + 30, 14 * 60], [17 * 60 + 30, 21 * 60 + 30]],
  5: [[9 * 60 + 30, 14 * 60], [17 * 60 + 30, 21 * 60 + 30]],
  6: [[9 * 60 + 30, 14 * 60], [17 * 60 + 30, 21 * 60 + 30]],
};

function fmtTime(mins) {
  let h = Math.floor(mins / 60), m = mins % 60;
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12; if (h === 0) h = 12;
  return `${h}:${m.toString().padStart(2, '0')} ${ampm}`;
}

function updateClinicStatus() {
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const todaySlots = CLINIC_HOURS[day];
  const seed = Math.floor(now.getTime() / 60000); // changes once a minute

  let status = 'closed';
  let message = '';
  let nextOpening = null;

  const dayNames = currentLang === 'hi'
    ? ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार']
    : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const todayLabel = currentLang === 'hi' ? 'आज' : 'today';
  const tomorrowLabel = currentLang === 'hi' ? 'कल' : 'tomorrow';
  const opensLabel = currentLang === 'hi' ? 'खुलेगा' : 'Opens';
  const atLabel = currentLang === 'hi' ? 'पर' : 'at';
  const untilLabel = currentLang === 'hi' ? 'तक' : 'Until';
  const closesLabel = currentLang === 'hi' ? 'बंद होगा' : 'Closes';

  if (todaySlots) {
    for (const [start, end] of todaySlots) {
      if (mins < start && start - mins <= 30) {
        status = 'opening';
        message = `${getVariation('opening', seed)} <span class="status-note">${opensLabel} ${atLabel} ${fmtTime(start)}</span>`;
        break;
      }
      if (mins >= start && mins < end) {
        if (end - mins <= 30) {
          status = 'closing';
          message = `${getVariation('closing', seed)} <span class="status-note">${closesLabel} ${atLabel} ${fmtTime(end)}</span>`;
        } else {
          status = 'open';
          message = `${getVariation('open', seed)} <span class="status-note">${untilLabel} ${fmtTime(end)}</span>`;
        }
        break;
      }
    }
  }

  if (status === 'closed') {
    for (let offset = 0; offset <= 7; offset++) {
      const d = (day + offset) % 7;
      const slots = CLINIC_HOURS[d];
      if (!slots) continue;
      for (const [start] of slots) {
        if (offset === 0 && start <= mins) continue;
        const dayName = offset === 0 ? todayLabel
          : offset === 1 ? tomorrowLabel
          : dayNames[d];
        nextOpening = `${opensLabel} ${dayName} ${atLabel} ${fmtTime(start)}`;
        break;
      }
      if (nextOpening) break;
    }
    message = `${getVariation('closed', seed)} <span class="status-note">${nextOpening || ''}</span>`;
  }

  updateStatusPill('statusPill', 'statusText', status, message);
  updateStatusPill('statusPillTimings', 'statusTextTimings', status, message);
}

function updateStatusPill(pillId, textId, status, message) {
  const pill = document.getElementById(pillId);
  const text = document.getElementById(textId);
  if (!pill || !text) return;
  pill.classList.remove('status-open', 'status-closed', 'status-opening', 'status-closing');
  pill.classList.add(`status-${status}`);
  text.innerHTML = message;
}

// ===== EVAPORATION EFFECT (home hero image only) =====
function initEvaporationEffect() {
  const heroVisual = document.getElementById('heroVisual');
  const evapOverlay = document.getElementById('evapOverlay');
  if (!heroVisual || !evapOverlay) return;

  let particles = [];

  function createParticles() {
    particles.forEach(p => p.remove());
    particles = [];
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'evap-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.bottom = `${Math.random() * 40}%`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      particle.style.animationDuration = `${2 + Math.random() * 2}s`;
      particle.style.width = `${2 + Math.random() * 4}px`;
      particle.style.height = particle.style.width;
      heroVisual.appendChild(particle);
      particles.push(particle);
    }
  }

  function evaporateCycle() {
    evapOverlay.classList.add('active');
    createParticles();
    setTimeout(() => evapOverlay.classList.remove('active'), 3000);
  }

  evaporateCycle();
  setInterval(evaporateCycle, 6000); // was 3000/3000 (always-on) — now breathes
}

// ===== NAVIGATION =====
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const siteHeader = document.getElementById('siteHeader');

  navToggle?.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
  });

  mainNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });
}

// ===== TIMING ROW HIGHLIGHT (home only) =====
function highlightToday() {
  const dayMap = ['row-sun', 'row-mon', 'row-tue', 'row-wed', 'row-thu', 'row-fri', 'row-sat'];
  const todayId = dayMap[new Date().getDay()];
  document.getElementById(todayId)?.classList.add('today');
}

// ===== BOOKING FORM (home + contact; contact has extra fields) =====
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameEl = document.getElementById('bName');
    const phoneEl = document.getElementById('bPhone');
    const reasonEl = document.getElementById('bReason');

    const name = nameEl ? (nameEl.value.trim() || 'a patient') : 'a patient';
    const phone = phoneEl ? phoneEl.value.trim() : '';
    const reason = reasonEl ? reasonEl.value.trim() : '';
    const doctor = document.getElementById('bDoctor').value;
    const date = document.getElementById('bDate').value;
    const slotInput = document.querySelector('input[name="slot"]:checked');
    const slot = slotInput ? slotInput.value : 'a convenient time';

    let msg = `Namaste, I am ${name}`;
    if (phone) msg += ` (${phone})`;
    msg += `. I would like to book an appointment with ${doctor}.`;
    if (reason) msg += ` Reason: ${reason}.`;
    if (date) msg += ` Preferred date: ${date}.`;
    msg += ` Preferred time: ${slot}.`;

    const url = `https://wa.me/919993228024?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  const langSet = localStorage.getItem('srishti-lang-set');
  const savedLang = localStorage.getItem('srishti-lang') || 'en';

  document.querySelectorAll('[data-lang-select]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang-select')));
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
  document.getElementById('dialogClose')?.addEventListener('click', hideLanguageDialog);
  document.getElementById('dialogSkip')?.addEventListener('click', hideLanguageDialog);

  setLanguage(savedLang, false);
  if (!langSet) setTimeout(showLanguageDialog, 500);

  initTypewriter();
  initNavigation();
  highlightToday();
  initBookingForm();
  initEvaporationEffect();

  updateClinicStatus();
  setInterval(updateClinicStatus, 30 * 1000);
});
