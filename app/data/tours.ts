import type { Locale } from "../i18n/routing";

type L = { en: string; ar: string };
type LArr = { en: string[]; ar: string[] };

interface RawTour {
  slug: string;
  images: string[];
  name: L;
  description: L;
  price: L;
  duration: L;
  location: L;
  groupSize: L;
  includes: LArr;
  longDescription: LArr;
}

export interface Tour {
  name: string;
  slug: string;
  description: string;
  price: string;
  duration: string;
  location: string;
  groupSize: string;
  images: string[];
  includes: string[];
  longDescription: string[];
}

const rawTours: RawTour[] = [
  {
    slug: "desert-safari-adventure",
    // First image is the cover. Add as many photo paths as you like — they appear
    // in the card carousel and the detail-page gallery. (Placeholder extras for now.)
    images: ["/images/tour-desert.jfif", "/images/hero-oman.jpg"],
    name: {
      en: "Discover Magical Muscat",
      ar: "اكتشف مسقط الساحرة",
    },
    description: {
      en: "Discover the vibrant city of Muscat, where centuries-old tradition seamlessly blends with contemporary elegance.",
      ar: "اكتشف مدينة مسقط النابضة بالحياة، حيث تمتزج التقاليد العريقة بأناقة العصر الحديث بسلاسة تامة.",
    },
    price: { en: "From $195", ar: "يبدأ من 195$" },
    duration: { en: "8 hours", ar: "8 ساعات" },
    location: { en: "Muscat", ar: "مسقط" },
    groupSize: { en: "1-4 people", ar: "من 1 إلى 4 أشخاص" },
    includes: {
      en: [
        "Round-trip transport",
        "Traditional lunch",
        "Water and drinks",
        "Private tour guide",
      ],
      ar: [
        "نقل ذهاباً وإياباً",
        "غداء تقليدي",
        "مياه ومشروبات",
        "مرشد سياحي خاص",
      ],
    },
    longDescription: {
      en: [
        "Discover the vibrant city of Muscat, where centuries-old tradition seamlessly blends with contemporary elegance.",
        "Begin your adventure at the awe-inspiring Sultan Qaboos Grand Mosque, a masterpiece of Islamic architecture, featuring serene courtyards, glittering chandeliers, and one of the world’s largest hand-woven carpets (except on Fridays, it is closed).",
        "A short drive brings you to the Royal Opera House Muscat, an iconic cultural venue where world-class performances meet stunning modern design.",
        "Next, enjoy a scenic drive along the Muttrah Corniche to the bustling Muttrah Fish Market, where the lively atmosphere and fresh catch offer an authentic taste of local life.",
        "Continue to the National Museum of Oman, where beautifully curated exhibits bring the country’s rich heritage to life.",
        "The tour then takes you to the majestic Al Alam Palace, framed by the historic Portuguese forts of Al Jalali and Al Mirani, offering a glimpse into Oman’s royal and strategic past.",
        "Marvel at the Oman Parliament Building (Majlis Oman), a striking modern landmark that combines traditional Omani artistry with contemporary architecture. Afterward, we will continue our journey to explore several scenic seaside locations, where breathtaking coastal views, serene waterfront paths, and refreshing sea breezes showcase the stunning natural beauty along Muscat’s coastline.",
        "Finally, conclude your journey at the colorful Muttrah Souq, one of the region’s oldest traditional markets, where you can wander through narrow alleys filled with Omani handicrafts, perfumes, silver jewelry, and spices. This immersive tour captures the heart and soul of Muscat, leaving visitors with unforgettable memories of a city that perfectly balances heritage, culture, and modern charm.",
      ],
      ar: [
        "اكتشف مدينة مسقط النابضة بالحياة، حيث تمتزج التقاليد العريقة بأناقة العصر الحديث بسلاسة تامة.",
        "ابدأ مغامرتك من جامع السلطان قابوس الأكبر المهيب، تحفة العمارة الإسلامية، بأفنيته الهادئة وثرياته المتلألئة وواحدة من أكبر السجاد المنسوج يدوياً في العالم (الجامع مغلق أيام الجمعة).",
        "بعد مسافة قصيرة بالسيارة تصل إلى دار الأوبرا السلطانية مسقط، الصرح الثقافي الأيقوني حيث تلتقي العروض العالمية بتصميم عصري مذهل.",
        "بعد ذلك، استمتع برحلة خلابة على طول كورنيش مطرح وصولاً إلى سوق سمك مطرح النابض بالحياة، حيث تمنحك الأجواء الحيوية والصيد الطازج مذاقاً أصيلاً للحياة المحلية.",
        "ثم تنتقل إلى المتحف الوطني العُماني، حيث تُحيي المعروضات المنسّقة بعناية تراث البلاد العريق.",
        "تأخذك الجولة بعد ذلك إلى قصر العلم الفخم، الذي تحيط به قلعتا الجلالي والميراني البرتغاليتان التاريخيتان، ما يمنحك لمحة عن ماضي عُمان الملكي والاستراتيجي.",
        "تعجّب بمبنى مجلس عُمان، المعلم العصري اللافت الذي يجمع بين الفن العُماني التقليدي والعمارة المعاصرة. بعد ذلك نواصل رحلتنا لاستكشاف عدة مواقع ساحلية خلابة، حيث تُبرز الإطلالات البحرية الآسرة والممرات الساحلية الهادئة ونسائم البحر المنعشة الجمال الطبيعي الأخّاذ على امتداد ساحل مسقط.",
        "وأخيراً، اختتم رحلتك في سوق مطرح الملوّن، أحد أقدم الأسواق التقليدية في المنطقة، حيث يمكنك التجوّل في أزقته الضيقة المليئة بالحرف العُمانية والعطور والمجوهرات الفضية والتوابل. تلتقط هذه الجولة الغامرة قلب مسقط وروحها، لتترك للزوّار ذكريات لا تُنسى عن مدينة توازن ببراعة بين التراث والثقافة وسحر الحداثة.",
      ],
    },
  },
  {
    slug: "mountain-hiking-experience",
    images: ["/images/tour-mountain.jpg", "/images/hero-oman.jpg"],
    name: {
      en: "Explore Wadi Shab",
      ar: "استكشف وادي شاب",
    },
    description: {
      en: "Discover the breathtaking natural wonders of Oman on a scenic journey starting from Muscat with a visit to Wadi Shab and Hawiyat Najm (Bimmah Sinkhole).",
      ar: "اكتشف عجائب الطبيعة الخلابة في عُمان في رحلة ساحرة تنطلق من مسقط لزيارة وادي شاب وهاوية نجم (سنكهول بيمة).",
    },
    price: { en: "From $290", ar: "يبدأ من 290$" },
    duration: { en: "8 hours", ar: "8 ساعات" },
    location: {
      en: "Location: Sink Hole & Wadi Shab",
      ar: "الموقع: هاوية نجم ووادي شاب",
    },
    groupSize: { en: "1-4 people", ar: "من 1 إلى 4 أشخاص" },
    includes: {
      en: ["Round-trip transport", "Light snack", "Hiking gear", "Specialized guide"],
      ar: ["نقل ذهاباً وإياباً", "وجبة خفيفة", "معدات المشي الجبلي", "مرشد متخصص"],
    },
    longDescription: {
      en: [
        "Discover the breathtaking natural wonders of Oman on a scenic journey starting from Muscat with a visit to Wadi Shab and Hawiyat Najm (Bimmah Sinkhole)",
        "Begin your adventure at Wadi Shab, where towering canyon walls, lush date palms, and crystal-clear pools create a paradise for hikers and nature lovers. Trek through rocky paths, cross tranquil streams, and dive into hidden waterfalls and turquoise caves for an unforgettable experience.",
        "Then, continue to Hawiyat Najm, a mesmerizing limestone sinkhole filled with striking blue-green waters, where the rugged desert landscape contrasts beautifully with the serene pool below. Whether swimming in refreshing waters, capturing stunning photos, or simply soaking in the natural beauty, these iconic Omani sites offer an immersive glimpse into the country’s dramatic landscapes and timeless charm.",
      ],
      ar: [
        "اكتشف عجائب الطبيعة الخلابة في عُمان في رحلة ساحرة تنطلق من مسقط لزيارة وادي شاب وهاوية نجم (سنكهول بيمة).",
        "ابدأ مغامرتك في وادي شاب، حيث تشكّل جدران الوادي الشاهقة وأشجار النخيل الوارفة والبرك الصافية جنةً لعشّاق المشي والطبيعة. اسلك المسارات الصخرية، واعبر الجداول الهادئة، واغطس في الشلالات الخفية والكهوف الفيروزية لتجربة لا تُنسى.",
        "ثم تابع إلى هاوية نجم، حفرة الحجر الجيري الساحرة المليئة بمياه زرقاء مخضرّة لافتة، حيث يتباين المشهد الصحراوي الوعر بجمال مع البركة الهادئة في الأسفل. وسواء بالسباحة في مياهها المنعشة، أو التقاط صور خلابة، أو مجرد الاستمتاع بجمال الطبيعة، تقدّم هذه المواقع العُمانية الأيقونية لمحة غامرة عن مناظر البلاد المذهلة وسحرها الخالد.",
      ],
    },
  },
  {
    slug: "wadi-swimming-escape",
    images: ["/images/tour-wadi.jpg", "/images/hero-oman.jpg"],
    name: {
      en: "Discover Nizwa Mountains and Markets",
      ar: "اكتشف جبال وأسواق نزوى",
    },
    description: {
      en: "Embark on an unforgettable journey through Oman’s stunning landscapes and rich cultural heritage.",
      ar: "انطلق في رحلة لا تُنسى عبر مناظر عُمان الخلابة وتراثها الثقافي الغني.",
    },
    price: { en: "From $290", ar: "يبدأ من 290$" },
    duration: { en: "8 hours", ar: "8 ساعات" },
    location: { en: "Nizwa & Jabal Al Akhdar", ar: "نزوى والجبل الأخضر" },
    groupSize: { en: "1-4 people", ar: "من 1 إلى 4 أشخاص" },
    includes: {
      en: ["Round-trip transport", "Swimming gear", "Light snack", "Local guide"],
      ar: ["نقل ذهاباً وإياباً", "معدات السباحة", "وجبة خفيفة", "مرشد محلي"],
    },
    longDescription: {
      en: [
        "Swim in crystal-clear pools and walk through lush wadi passages in one of Oman's most beloved wadis.",
        "Perfect for relaxation and enjoying the beauty of turquoise waters and shaded oases.",
      ],
      ar: [
        "اسبح في البرك الصافية وتجوّل عبر ممرات الوادي الوارفة في أحد أحبّ أودية عُمان.",
        "مثالية للاسترخاء والاستمتاع بجمال المياه الفيروزية والواحات الظليلة.",
      ],
    },
  },
  {
    slug: "coastal-sunset-cruise",
    images: ["/images/tour-coast.svg", "/images/hero-oman.jpg"],
    name: {
      en: "Desert & Oasis Adventure",
      ar: "مغامرة الصحراء والواحة",
    },
    description: {
      en: "Embark on an exciting one-day adventure from Muscat to explore the stunning Bidiya Desert and the lush Wadi Bani Khalid. Experience the contrast of Oman’s landscapes, from golden desert dunes to crystal-clear oasis pools surrounded by palm trees.",
      ar: "انطلق في مغامرة مثيرة ليوم واحد من مسقط لاستكشاف صحراء بدية الخلابة ووادي بني خالد الوارف. اختبر التباين في مناظر عُمان، من كثبان الصحراء الذهبية إلى برك الواحة الصافية المحاطة بأشجار النخيل.",
    },
    price: { en: "From $290", ar: "يبدأ من 290$" },
    duration: { en: "8 hours", ar: "8 ساعات" },
    location: {
      en: "Bidya Desert & Wadi Bani Khalid",
      ar: "صحراء بدية ووادي بني خالد",
    },
    groupSize: { en: "1-4 people", ar: "من 1 إلى 4 أشخاص" },
    includes: {
      en: [
        "4x4 vehicle",
        "Drinks and snacks",
        "Photography equipment",
        "Specialized crew",
      ],
      ar: [
        "مركبة دفع رباعي",
        "مشروبات ووجبات خفيفة",
        "معدات تصوير",
        "طاقم متخصص",
      ],
    },
    longDescription: {
      en: [
        "Embark on an exciting one-day adventure from Muscat to explore the stunning Bidiya Desert and the lush Wadi Bani Khalid. Experience the contrast of Oman’s landscapes, from golden desert dunes to crystal-clear oasis pools surrounded by palm trees.",
        "Start your day with a journey into the Bidiya Desert, where you can marvel at the vast golden dunes and enjoy the peaceful desert atmosphere.",
        "Continue to Wadi Bani Khalid, a beautiful oasis famous for its turquoise pools, shaded spots, and refreshing waters—perfect for swimming and relaxing.",
        "To keep you energized throughout the day, light snacks, refreshing drinks, and water will be provided. This day trip offers the perfect mix of adventure, nature, and relaxation, giving you a memorable glimpse of Oman’s diverse landscape",
        "Highlights:",
        "Explore the golden dunes of Bidiya Desert",
        "Relax and swim in Wadi Bani Khalid’s turquoise pools",
        "Marvel at lush palm-fringed landscapes",
        "Enjoy light snacks, drinks, and water provided",
        "Perfect for photography, swimming, and a taste of Omani nature",
      ],
      ar: [
        "انطلق في مغامرة مثيرة ليوم واحد من مسقط لاستكشاف صحراء بدية الخلابة ووادي بني خالد الوارف. اختبر التباين في مناظر عُمان، من كثبان الصحراء الذهبية إلى برك الواحة الصافية المحاطة بأشجار النخيل.",
        "ابدأ يومك برحلة إلى صحراء بدية، حيث يمكنك التعجّب من الكثبان الرملية الذهبية الشاسعة والاستمتاع بأجواء الصحراء الهادئة.",
        "تابع إلى وادي بني خالد، الواحة الجميلة الشهيرة ببركها الفيروزية وأماكنها الظليلة ومياهها المنعشة — المثالية للسباحة والاسترخاء.",
        "وللحفاظ على نشاطك طوال اليوم، ستُقدَّم وجبات خفيفة ومشروبات منعشة ومياه. تقدّم هذه الرحلة اليومية مزيجاً مثالياً من المغامرة والطبيعة والاسترخاء، لتمنحك لمحة لا تُنسى عن تنوّع مناظر عُمان.",
        "أبرز المعالم:",
        "استكشاف الكثبان الذهبية في صحراء بدية",
        "الاسترخاء والسباحة في برك وادي بني خالد الفيروزية",
        "التعجّب من المناظر الوارفة المحاطة بأشجار النخيل",
        "الاستمتاع بوجبات خفيفة ومشروبات ومياه مقدّمة",
        "مثالية للتصوير والسباحة وتذوّق طبيعة عُمان",
      ],
    },
  },
  {
    slug: "cultural-muscat-city-tour",
    images: ["/images/tour-city.svg", "/images/hero-oman.jpg"],
    name: {
      en: "Dimaniyat Islands Adventure",
      ar: "مغامرة جزر الديمانيات",
    },
    description: {
      en: "Set sail from Muscat to the pristine Dimaniyat Islands — a protected marine reserve of crystal-clear waters, vibrant coral reefs, and abundant sea life, perfect for snorkeling, swimming, and relaxing on untouched beaches.",
      ar: "أبحر من مسقط إلى جزر الديمانيات البِكر — محمية بحرية طبيعية بمياه صافية وشعاب مرجانية نابضة بالحياة وحياة بحرية وفيرة، مثالية للغطس والسباحة والاسترخاء على شواطئ بكر.",
    },
    price: { en: "From $140", ar: "يبدأ من 140$" },
    duration: { en: "1-4 hours", ar: "من 1 إلى 4 ساعات" },
    location: { en: "Dimaniyat Islands, Oman", ar: "جزر الديمانيات، عُمان" },
    groupSize: { en: "1-4 people", ar: "من 1 إلى 4 أشخاص" },
    includes: {
      en: [
        "Comfortable transport",
        "Heritage site entry",
        "Cultural guide",
        "Local lunch",
      ],
      ar: [
        "وسيلة نقل مريحة",
        "دخول الموقع التراثي",
        "مرشد ثقافي",
        "غداء محلي",
      ],
    },
    longDescription: {
      en: [
        "Embark on an unforgettable journey to the pristine Dimaniyat Islands, a tropical paradise just off the coast of Oman. Known for their crystal-clear waters, vibrant coral reefs, and abundant marine life, these islands are perfect for snorkeling, swimming, and relaxing on untouched beaches.",
        "Explore hidden lagoons, snorkel among colorful fish, and discover the beauty of this protected nature reserve. You might even spot majestic sea turtles in their natural habitat! To keep you energized throughout the day, light snacks, refreshing drinks, and water will be provided. Your day at the Dimaniyat Islands promises adventure, relaxation, and memories that will last a lifetime.",
        "Highlights:",
        "Snorkeling in vibrant coral reefs",
        "Swimming in turquoise lagoons",
        "Turtle watching in a natural habitat",
        "Relaxing on pristine, secluded beaches",
        "Guided exploration of the islands’ natural beauty",
        "Light snacks, drinks, and water provided",
      ],
      ar: [
        "انطلق في رحلة لا تُنسى إلى جزر الديمانيات البكر، جنة استوائية قبالة ساحل عُمان. تشتهر هذه الجزر بمياهها الصافية وشعابها المرجانية النابضة بالحياة وحياتها البحرية الوفيرة، وهي مثالية للغطس والسباحة والاسترخاء على شواطئها البكر.",
        "استكشف البحيرات الخفية، واغطس بين الأسماك الملوّنة، واكتشف جمال هذه المحمية الطبيعية. وقد تحظى بفرصة رؤية السلاحف البحرية المهيبة في موطنها الطبيعي! وللحفاظ على نشاطك طوال اليوم، ستُقدَّم وجبات خفيفة ومشروبات منعشة ومياه. يَعِدك يومك في جزر الديمانيات بالمغامرة والاسترخاء وذكريات تدوم مدى الحياة.",
        "أبرز المعالم:",
        "الغطس في الشعاب المرجانية النابضة بالحياة",
        "السباحة في البحيرات الفيروزية",
        "مشاهدة السلاحف في موطنها الطبيعي",
        "الاسترخاء على شواطئ بكر ومنعزلة",
        "استكشاف جمال الجزر الطبيعي بصحبة مرشد",
        "وجبات خفيفة ومشروبات ومياه مقدّمة",
      ],
    },
  },
  {
    slug: "cave-exploration-journey",
    images: ["/images/tour-cave.svg", "/images/hero-oman.jpg"],
    name: {
      en: "Explore Oman 7 Days of Magic",
      ar: "استكشف عُمان: 7 أيام من السحر",
    },
    description: {
      en: "Discover the Wonders of Oman in 7 Unforgettable DaysEmbark on an extraordinary journey that will reveal the breathtaking beauty of Oman in just 7 days. From pristine islands to dramatic mountains, lush wadis, and historic forts, this adventure blends nature, culture, and heritage for an unforgettable experience",
      ar: "اكتشف عجائب عُمان في 7 أيام لا تُنسى. انطلق في رحلة استثنائية تكشف لك جمال عُمان الأخّاذ في 7 أيام فقط. من الجزر البكر إلى الجبال الشامخة والأودية الوارفة والقلاع التاريخية، تمزج هذه المغامرة بين الطبيعة والثقافة والتراث لتجربة لا تُنسى.",
    },
    price: { en: "contact for price", ar: "تواصل لمعرفة السعر" },
    duration: { en: "Full Day", ar: "يوم كامل" },
    location: { en: "Muscat Coast, Oman", ar: "ساحل مسقط، عُمان" },
    groupSize: { en: "1-4 people", ar: "من 1 إلى 4 أشخاص" },
    includes: {
      en: [
        "Round-trip transport",
        "Entry tickets",
        "Exploration gear",
        "Specialized guide",
      ],
      ar: [
        "نقل ذهاباً وإياباً",
        "تذاكر الدخول",
        "معدات الاستكشاف",
        "مرشد متخصص",
      ],
    },
    longDescription: {
      en: [
        "Discover the Wonders of Oman in 7 Unforgettable Days Embark on an extraordinary journey that will reveal the breathtaking beauty of Oman in just 7 days. From pristine islands to dramatic mountains, lush wadis, and historic forts, this adventure blends nature, culture, and heritage for an unforgettable experience..",
        "Day 1 – Muscat HighlightsStart your journey in Muscat, exploring the city’s cultural gems. Visit the Sultan Qaboos Grand Mosque, wander through the vibrant Muttrah Souq, and admire the stunning architecture of the Royal Opera House. Discover the perfect blend of modern elegance and centuries-old tradition in Oman’s capital.",
        "Day 2 – Dimaniyat Islands Adventure, Turtle Watching & Refreshments Set sail to the Dimaniyat Islands, a tropical paradise with crystal-clear waters and abundant marine life. Snorkel among colorful fish using the provided snorkeling gear, swim in turquoise lagoons, and relax on pristine beaches. Experience the magic of the islands while spotting majestic sea turtles in their natural habitat. To make your day even more enjoyable, light snacks and refreshing juices will be provided, keeping you energized throughout this unforgettable adventure.",
        "Day 3 – Hawiyat Najm, Wadi Shab & Sur City Exploration with Turtle Nesting Begin the day at Hawiyat Najm (Bimmah Sinkhole), a mesmerizing limestone crater filled with striking blue-green waters, where the rugged desert landscape contrasts beautifully with the serene pool below. Continue to Wadi Shab, a magical oasis with turquoise pools, hidden waterfalls, and scenic caves perfect for swimming and photography. After exploring the natural wonders, head to the historic coastal city of Sur, famous for its traditional dhow shipyards, lighthouse, and picturesque corniche. Wander through the vibrant streets and immerse yourself in the city’s maritime heritage. In the evening, travel to Ras Al Jinz, where you will spend the night and have the extraordinary opportunity to watch sea turtles nesting and laying eggs along the shore—a truly unforgettable wildlife experience.",
        "Day 4 – Wadi Bani Khalid & Desert Camp in Bidiyah with Sunset Explore the lush oasis of Wadi Bani Khalid, famous for its clear pools and palm-fringed landscapes. In the evening, journey to the desert of Bidiyah and spend the night under the stars in a traditional desert camp. Enjoy the tranquility and vast beauty of Oman’s sands, and don’t miss the spectacular desert sunset, painting the dunes in golden hues—a truly magical experience that captures the essence of Oman’s desert landscapes.",
        "Day 5 – Al Minzafah Village, Nizwa & Nizwa Fort Exploration Start the day with a visit to the traditional Al Minzafah village in Ibra, an authentic Omani village where you can immerse yourself in local culture and witness the charm of historic mud-brick houses. Continue your journey to Nizwa, one of Oman’s most iconic cities, known for its rich history and cultural heritage. Explore the famous Nizwa Fort, a 17th-century masterpiece with impressive architecture and panoramic views of the surrounding date palm plantations and mountains. Wander through the bustling Nizwa Souq, where you can find Omani handicrafts, silver jewelry, spices, and traditional goods. Nizwa is also home to Oman’s first mosque and one of the oldest and most significant Islamic educational institutions in the country..",
        "Day 6 – Birkat Al Mauz & Jebel Akhdar Begin the day at the serene village of Birkat Al Mauz, surrounded by lush terraces and the ancient falaj irrigation system. Then ascend to the Green Mountain (Jebel Akhdar), known for its cool climate, terraced orchards, rose gardens, and panoramic views. Return to Nizwa for the night.",
        "Day 7 – Jabreen, Bahla, Jebel Shams & Misfat Al Abriyeen On your final day, explore the rich history and breathtaking landscapes of Oman. Visit Jabreen Castle, a 17th-century fort known for its stunning architecture and historical significance. Then, continue to the ancient Bahla Fort, a UNESCO World Heritage site that offers panoramic views of the surrounding oasis. Next, head to Jebel Shams, Oman’s highest peak, where you can enjoy stunning views of the Grand Canyon of Oman and hike along the cliffside trails. End the day in the traditional mountain village of Misfat Al Abriyeen, known for its charming mud-brick houses and terraced plantations. Return to Muscat, completing your week-long journey through Oman’s history, culture, and natural beauty.",
      ],
      ar: [
        "اكتشف عجائب عُمان في 7 أيام لا تُنسى. انطلق في رحلة استثنائية تكشف لك جمال عُمان الأخّاذ في 7 أيام فقط. من الجزر البكر إلى الجبال الشامخة والأودية الوارفة والقلاع التاريخية، تمزج هذه المغامرة بين الطبيعة والثقافة والتراث لتجربة لا تُنسى.",
        "اليوم الأول – أبرز معالم مسقط: ابدأ رحلتك في مسقط باستكشاف كنوز المدينة الثقافية. زُر جامع السلطان قابوس الأكبر، وتجوّل في سوق مطرح النابض بالحياة، وتأمّل روعة عمارة دار الأوبرا السلطانية. اكتشف المزيج المثالي بين الأناقة العصرية والتقاليد العريقة في عاصمة عُمان.",
        "اليوم الثاني – مغامرة جزر الديمانيات ومشاهدة السلاحف والمرطبات: أبحر إلى جزر الديمانيات، الجنة الاستوائية ذات المياه الصافية والحياة البحرية الوفيرة. اغطس بين الأسماك الملوّنة باستخدام معدات الغطس المتوفّرة، واسبح في البحيرات الفيروزية، واسترخِ على الشواطئ البكر. عِش سحر الجزر مع رصد السلاحف البحرية المهيبة في موطنها الطبيعي. ولجعل يومك أكثر متعة، ستُقدَّم وجبات خفيفة وعصائر منعشة تحافظ على نشاطك طوال هذه المغامرة التي لا تُنسى.",
        "اليوم الثالث – هاوية نجم ووادي شاب واستكشاف مدينة صور مع تعشيش السلاحف: ابدأ اليوم في هاوية نجم (سنكهول بيمة)، الحفرة الجيرية الساحرة المليئة بمياه زرقاء مخضرّة لافتة، حيث يتباين المشهد الصحراوي الوعر بجمال مع البركة الهادئة في الأسفل. تابع إلى وادي شاب، الواحة الساحرة ببركها الفيروزية وشلالاتها الخفية وكهوفها الخلابة المثالية للسباحة والتصوير. بعد استكشاف عجائب الطبيعة، توجّه إلى مدينة صور الساحلية التاريخية، الشهيرة بأحواض بناء السفن الشراعية (الداو) والمنارة والكورنيش الخلاب. تجوّل في شوارعها النابضة بالحياة واغمر نفسك في تراثها البحري. وفي المساء، انتقل إلى رأس الجنز حيث تقضي ليلتك وتحظى بفرصة استثنائية لمشاهدة السلاحف البحرية وهي تعشّش وتضع بيضها على الشاطئ — تجربة برية لا تُنسى.",
        "اليوم الرابع – وادي بني خالد والمخيّم الصحراوي في بدية مع الغروب: استكشف واحة وادي بني خالد الوارفة، الشهيرة ببركها الصافية ومناظرها المحاطة بأشجار النخيل. وفي المساء، انطلق إلى صحراء بدية وأمضِ ليلتك تحت النجوم في مخيّم صحراوي تقليدي. استمتع بالهدوء وجمال رمال عُمان الشاسع، ولا تفوّت غروب الشمس الصحراوي المذهل الذي يصبغ الكثبان بألوان ذهبية — تجربة ساحرة حقاً تجسّد روح المناظر الصحراوية العُمانية.",
        "اليوم الخامس – قرية المنزفة ونزوى واستكشاف قلعة نزوى: ابدأ اليوم بزيارة قرية المنزفة التقليدية في إبراء، القرية العُمانية الأصيلة حيث يمكنك الانغماس في الثقافة المحلية ومشاهدة سحر البيوت الطينية التاريخية. تابع رحلتك إلى نزوى، إحدى أعرق مدن عُمان، المعروفة بتاريخها الغني وتراثها الثقافي. استكشف قلعة نزوى الشهيرة، تحفة القرن السابع عشر بعمارتها المذهلة وإطلالاتها البانورامية على مزارع النخيل والجبال المحيطة. تجوّل في سوق نزوى النابض بالحياة، حيث تجد الحرف العُمانية والمجوهرات الفضية والتوابل والبضائع التقليدية. نزوى أيضاً موطن أول مسجد في عُمان وأحد أقدم وأهم المؤسسات التعليمية الإسلامية في البلاد.",
        "اليوم السادس – بركة الموز والجبل الأخضر: ابدأ اليوم في قرية بركة الموز الهادئة، المحاطة بالمدرّجات الوارفة ونظام الري القديم (الأفلاج). ثم اصعد إلى الجبل الأخضر، المعروف بمناخه البارد ومدرّجاته المثمرة وحدائق الورد وإطلالاته البانورامية. عُد إلى نزوى لقضاء الليلة.",
        "اليوم السابع – جبرين وبهلاء وجبل شمس ومسفاة العبريين: في يومك الأخير، استكشف تاريخ عُمان الغني ومناظرها الخلابة. زُر قلعة جبرين، حصن القرن السابع عشر المعروف بعمارته المذهلة وأهميته التاريخية. ثم تابع إلى قلعة بهلاء العريقة، الموقع المدرج على قائمة اليونسكو للتراث العالمي، التي تطل بمنظر بانورامي على الواحة المحيطة. بعد ذلك، توجّه إلى جبل شمس، أعلى قمة في عُمان، حيث تستمتع بإطلالات مذهلة على الأخدود الكبير في عُمان وتسير على مسارات حافة الجرف. اختتم يومك في قرية مسفاة العبريين الجبلية التقليدية، المعروفة ببيوتها الطينية الساحرة ومزارعها المدرّجة. عُد إلى مسقط لتكمل رحلتك التي دامت أسبوعاً عبر تاريخ عُمان وثقافتها وجمالها الطبيعي.",
      ],
    },
  },
];

function localize(t: RawTour, locale: Locale): Tour {
  return {
    slug: t.slug,
    name: t.name[locale],
    description: t.description[locale],
    price: t.price[locale],
    duration: t.duration[locale],
    location: t.location[locale],
    groupSize: t.groupSize[locale],
    images: t.images,
    includes: t.includes[locale],
    longDescription: t.longDescription[locale],
  };
}

export function getTours(locale: Locale): Tour[] {
  return rawTours.map((t) => localize(t, locale));
}

export function getTour(slug: string, locale: Locale): Tour | undefined {
  const t = rawTours.find((t) => t.slug === slug);
  return t ? localize(t, locale) : undefined;
}

export function getTourSlugs(): string[] {
  return rawTours.map((t) => t.slug);
}
