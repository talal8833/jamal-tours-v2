export interface Tour {
  name: string;
  slug: string;
  description: string;
  price: string;
  duration: string;
  location: string;
  groupSize: string;
  image: string;
  includes: string[];
  longDescription: string[];
}

export const tours: Tour[] = [
  {
    name: "Discover Magical Muscat",
    slug: "desert-safari-adventure",
    description:
      "Discover the vibrant city of Muscat, where centuries-old tradition seamlessly blends with contemporary elegance.",
    price: "From $195",
    duration: "8 hours",
    location: "Muscat",
    groupSize: "1-4 people",
    image: "/images/tour-desert.jfif",
    includes: [
      "Round-trip transport",
      "Traditional lunch",
      "Water and drinks",
      "Private tour guide",
    ],
    longDescription: [
      "Discover the vibrant city of Muscat, where centuries-old tradition seamlessly blends with contemporary elegance.",
      "Begin your adventure at the awe-inspiring Sultan Qaboos Grand Mosque, a masterpiece of Islamic architecture, featuring serene courtyards, glittering chandeliers, and one of the world’s largest hand-woven carpets (except on Fridays, it is closed).",
      "A short drive brings you to the Royal Opera House Muscat, an iconic cultural venue where world-class performances meet stunning modern design.",
      "Next, enjoy a scenic drive along the Muttrah Corniche to the bustling Muttrah Fish Market, where the lively atmosphere and fresh catch offer an authentic taste of local life.",
      "Continue to the National Museum of Oman, where beautifully curated exhibits bring the country’s rich heritage to life.",
      "The tour then takes you to the majestic Al Alam Palace, framed by the historic Portuguese forts of Al Jalali and Al Mirani, offering a glimpse into Oman’s royal and strategic past.",
      "Marvel at the Oman Parliament Building (Majlis Oman), a striking modern landmark that combines traditional Omani artistry with contemporary architecture. Afterward, we will continue our journey to explore several scenic seaside locations, where breathtaking coastal views, serene waterfront paths, and refreshing sea breezes showcase the stunning natural beauty along Muscat’s coastline.",
      "Finally, conclude your journey at the colorful Muttrah Souq, one of the region’s oldest traditional markets, where you can wander through narrow alleys filled with Omani handicrafts, perfumes, silver jewelry, and spices. This immersive tour captures the heart and soul of Muscat, leaving visitors with unforgettable memories of a city that perfectly balances heritage, culture, and modern charm.",
    ],
  },
  {
    name: "Explore Wadi Shab",
    slug: "mountain-hiking-experience",
    description:
      "Discover the breathtaking natural wonders of Oman on a scenic journey starting from Muscat with a visit to Wadi Shab and Hawiyat Najm (Bimmah Sinkhole).",
    price: "From $290",
    duration: "8 hours",
    location: "Location: Sink Hole & Wadi Shab",
    groupSize: "1-4 people",
    image: "/images/tour-mountain.jpg",
    includes: [
      "Round-trip transport",
      "Light snack",
      "Hiking gear",
      "Specialized guide",
    ],
    longDescription: [
      "Discover the breathtaking natural wonders of Oman on a scenic journey starting from Muscat with a visit to Wadi Shab and Hawiyat Najm (Bimmah Sinkhole)",
        "Begin your adventure at Wadi Shab, where towering canyon walls, lush date palms, and crystal-clear pools create a paradise for hikers and nature lovers. Trek through rocky paths, cross tranquil streams, and dive into hidden waterfalls and turquoise caves for an unforgettable experience.",
        "Then, continue to Hawiyat Najm, a mesmerizing limestone sinkhole filled with striking blue-green waters, where the rugged desert landscape contrasts beautifully with the serene pool below. Whether swimming in refreshing waters, capturing stunning photos, or simply soaking in the natural beauty, these iconic Omani sites offer an immersive glimpse into the country’s dramatic landscapes and timeless charm.",
    ],
  },
  {
    name: "Discover Nizwa Mountains and Markets",
    slug: "wadi-swimming-escape",
    description: "Embark on an unforgettable journey through Oman’s stunning landscapes and rich cultural heritage.",
    price: "From $290",
    duration: "8 hours",
    location: "Nizwa & Jabal Al Akhdar",
    groupSize: "1-4 people",
    image: "/images/tour-wadi.svg",
    includes: [
      "Round-trip transport",
      "Swimming gear",
      "Light snack",
      "Local guide",
    ],
    longDescription: [
      "Swim in crystal-clear pools and walk through lush wadi passages in one of Oman's most beloved wadis.",
      "Perfect for relaxation and enjoying the beauty of turquoise waters and shaded oases.",
    ],
  },
  {
    name: "Desert & Oasis Adventure",
    slug: "coastal-sunset-cruise",
    description: "Embark on an exciting one-day adventure from Muscat to explore the stunning Bidiya Desert and the lush Wadi Bani Khalid. Experience the contrast of Oman’s landscapes, from golden desert dunes to crystal-clear oasis pools surrounded by palm trees.",
    price: "From $290",
    duration: "8 hours",
    location: "Bidya Desert & Wadi Bani Khalid",
    groupSize: "1-4 people",
    image: "/images/tour-coast.svg",
    includes: [
      "4x4 vehicle",
      "Drinks and snacks",
      "Photography equipment",
      "Specialized crew",
    ],
    longDescription: [
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
  },
  {
    name: "Dimaniyat Islands Adventure",
    slug: "cultural-muscat-city-tour",
    description:
      "Embark on an exciting one-day adventure from Muscat to explore the stunning Bidiya Desert and the lush Wadi Bani Khalid. Experience the contrast of Oman’s landscapes, from golden desert dunes to crystal-clear oasis pools surrounded by palm trees.",
    price: "From $140",
    duration: "1-4 hours",
    location: "Al Hoota Cave, Oman",
    groupSize: "1-4 people",
    image: "/images/tour-city.svg",
    includes: [
      "Comfortable transport",
      "Heritage site entry",
      "Cultural guide",
      "Local lunch",
    ],
    longDescription: [
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
  },
  {
    name: "Explore Oman 7 Days of Magic",
    slug: "cave-exploration-journey",
    description:
      "Discover the Wonders of Oman in 7 Unforgettable DaysEmbark on an extraordinary journey that will reveal the breathtaking beauty of Oman in just 7 days. From pristine islands to dramatic mountains, lush wadis, and historic forts, this adventure blends nature, culture, and heritage for an unforgettable experience",
    price: "contact for price",
    duration: "Full Day",
    location: "Muscat Coast, Oman",
    groupSize: "1-4 people",
    image: "/images/tour-cave.svg",
    includes: [
      "Round-trip transport",
      "Entry tickets",
      "Exploration gear",
      "Specialized guide",
    ],
    longDescription: [
    "Discover the Wonders of Oman in 7 Unforgettable Days Embark on an extraordinary journey that will reveal the breathtaking beauty of Oman in just 7 days. From pristine islands to dramatic mountains, lush wadis, and historic forts, this adventure blends nature, culture, and heritage for an unforgettable experience..",
      "Day 1 – Muscat HighlightsStart your journey in Muscat, exploring the city’s cultural gems. Visit the Sultan Qaboos Grand Mosque, wander through the vibrant Muttrah Souq, and admire the stunning architecture of the Royal Opera House. Discover the perfect blend of modern elegance and centuries-old tradition in Oman’s capital.",
      "Day 2 – Dimaniyat Islands Adventure, Turtle Watching & Refreshments Set sail to the Dimaniyat Islands, a tropical paradise with crystal-clear waters and abundant marine life. Snorkel among colorful fish using the provided snorkeling gear, swim in turquoise lagoons, and relax on pristine beaches. Experience the magic of the islands while spotting majestic sea turtles in their natural habitat. To make your day even more enjoyable, light snacks and refreshing juices will be provided, keeping you energized throughout this unforgettable adventure.",
      "Day 3 – Hawiyat Najm, Wadi Shab & Sur City Exploration with Turtle Nesting Begin the day at Hawiyat Najm (Bimmah Sinkhole), a mesmerizing limestone crater filled with striking blue-green waters, where the rugged desert landscape contrasts beautifully with the serene pool below. Continue to Wadi Shab, a magical oasis with turquoise pools, hidden waterfalls, and scenic caves perfect for swimming and photography. After exploring the natural wonders, head to the historic coastal city of Sur, famous for its traditional dhow shipyards, lighthouse, and picturesque corniche. Wander through the vibrant streets and immerse yourself in the city’s maritime heritage. In the evening, travel to Ras Al Jinz, where you will spend the night and have the extraordinary opportunity to watch sea turtles nesting and laying eggs along the shore—a truly unforgettable wildlife experience.",
      "Day 4 – Wadi Bani Khalid & Desert Camp in Bidiyah with Sunset Explore the lush oasis of Wadi Bani Khalid, famous for its clear pools and palm-fringed landscapes. In the evening, journey to the desert of Bidiyah and spend the night under the stars in a traditional desert camp. Enjoy the tranquility and vast beauty of Oman’s sands, and don’t miss the spectacular desert sunset, painting the dunes in golden hues—a truly magical experience that captures the essence of Oman’s desert landscapes.",
      "Day 5 – Al Minzafah Village, Nizwa & Nizwa Fort Exploration Start the day with a visit to the traditional Al Minzafah village in Ibra, an authentic Omani village where you can immerse yourself in local culture and witness the charm of historic mud-brick houses. Continue your journey to Nizwa, one of Oman’s most iconic cities, known for its rich history and cultural heritage. Explore the famous Nizwa Fort, a 17th-century masterpiece with impressive architecture and panoramic views of the surrounding date palm plantations and mountains. Wander through the bustling Nizwa Souq, where you can find Omani handicrafts, silver jewelry, spices, and traditional goods. Nizwa is also home to Oman’s first mosque and one of the oldest and most significant Islamic educational institutions in the country..",
      "Day 6 – Birkat Al Mauz & Jebel Akhdar Begin the day at the serene village of Birkat Al Mauz, surrounded by lush terraces and the ancient falaj irrigation system. Then ascend to the Green Mountain (Jebel Akhdar), known for its cool climate, terraced orchards, rose gardens, and panoramic views. Return to Nizwa for the night.",
      "Day 7 – Jabreen, Bahla, Jebel Shams & Misfat Al Abriyeen On your final day, explore the rich history and breathtaking landscapes of Oman. Visit Jabreen Castle, a 17th-century fort known for its stunning architecture and historical significance. Then, continue to the ancient Bahla Fort, a UNESCO World Heritage site that offers panoramic views of the surrounding oasis. Next, head to Jebel Shams, Oman’s highest peak, where you can enjoy stunning views of the Grand Canyon of Oman and hike along the cliffside trails. End the day in the traditional mountain village of Misfat Al Abriyeen, known for its charming mud-brick houses and terraced plantations. Return to Muscat, completing your week-long journey through Oman’s history, culture, and natural beauty.",
    ],
  },
];
