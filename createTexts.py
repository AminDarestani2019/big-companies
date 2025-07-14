import os
companies =[
  {
    "id": "nvidia",
    "title": "Nvidia",
    "image": "/images/nvidia.svg",
    "address": "2788 San Tomas Expressway, Santa Clara, CA",
    "description": "GPU and AI computing leader."
  },
  {
    "id": "berkshire",
    "title": "Berkshire Hathaway",
    "image": "/images/berkshire-hathaway.svg",
    "address": "3555 Farnam St, Omaha, NE",
    "description": "Multinational conglomerate holding company."
  },
  {
    "id": "nike",
    "title": "Nike",
    "image": "/images/nike.png",
    "address": "One Bowerman Drive, Beaverton, OR",
    "description": "Athletic apparel and footwear brand."
  },
  {
    "id": "starbucks",
    "title": "Starbucks",
    "image": "/images/starbucks.svg",
    "address": "2401 Utah Avenue South, Seattle, WA",
    "description": "Global coffeehouse chain."
  },
  {
    "id": "visa",
    "title": "Visa",
    "image": "/images/visa.svg",
    "address": "900 Metro Center Blvd, Foster City, CA",
    "description": "Leader in digital payments."
  },
  {
    "id": "costco",
    "title": "Costco",
    "image": "/images/costco.svg",
    "address": "999 Lake Drive, Issaquah, WA",
    "description": "Wholesale retail corporation."
  },
  {
    "id": "renaissance",
    "title": "Renaissance Technologies",
    "image": "/images/Renaissance_Technologies.png",
    "address": "600 Route 25A, East Setauket, NY",
    "description": "Quant hedge fund firm."
  },
  {
    "id": "novo",
    "title": "Novo Nordisk",
    "image": "/images/novo-nordisk.svg",
    "address": "Novo Allé, Bagsværd, Denmark",
    "description": "Pharmaceutical company focused on diabetes care."
  },
  {
    "id": "pixar",
    "title": "Pixar",
    "image": "/images/pixar1.svg",
    "address": "1200 Park Avenue, Emeryville, CA",
    "description": "Animated film production studio."
  },
  {
    "id": "instagram",
    "title": "Instagram",
    "image": "/images/instagram.png",
    "address": "1 Hacker Way, Menlo Park, CA",
    "description": "Photo and video sharing social platform."
  },
  {
    "id": "twitch",
    "title": "Twitch",
    "image": "/images/twitch.svg",
    "address": "350 Bush Street, San Francisco, CA",
    "description": "Live streaming platform for gamers."
  },
  {
    "id": "uber",
    "title": "Uber",
    "image": "/images/uber.svg",
    "address": "1515 3rd Street, San Francisco, CA",
    "description": "Ride-hailing and delivery services company."
  },
  {
    "id": "hermes",
    "title": "Hermès",
    "image": "/images/hermes2.svg",
    "address": "24 Rue du Faubourg Saint-Honoré, Paris, France",
    "description": "Luxury fashion and accessories brand."
  },
  {
    "id": "plaid",
    "title": "Plaid",
    "image": "/images/plaid.svg",
    "address": "85 2nd Street, San Francisco, CA",
    "description": "Financial services and API platform."
  },
  {
    "id": "tsmc",
    "title": "TSMC",
    "image": "/images/tsmc.svg",
    "address": "No. 8, Li-Hsin Rd 6, Hsinchu Science Park, Taiwan",
    "description": "World’s largest semiconductor foundry."
  },
  {
    "id": "epic",
    "title": "Epic Systems",
    "image": "/images/Epic_Systems.png",
    "address": "1979 Milky Way, Verona, WI",
    "description": "Healthcare software company."
  },
  {
    "id": "ikea",
    "title": "IKEA",
    "image": "/images/ikea2.svg",
    "address": "Olof Palmestraat 1, Delft, Netherlands",
    "description": "Swedish furniture and home goods retailer."
  },
  {
    "id": "rolex",
    "title": "Rolex",
    "image": "/images/rolex.svg",
    "address": "Rue François-Dussaud 3-5-7, Geneva, Switzerland",
    "description": "Luxury watchmaker."
  },
  {
    "id": "mars",
    "title": "Mars Inc.",
    "image": "/images/Mars_Incorporated.png",
    "address": "6885 Elm Street, McLean, VA",
    "description": "Confectionery and pet care products."
  },
  {
    "id": "servicenow",
    "title": "ServiceNow",
    "image": "/images/ServiceNow.png",
    "address": "2225 Lawson Ln, Santa Clara, CA",
    "description": "Cloud-based workflow automation."
  },
  {
    "id": "ipl",
    "title": "Indian Premier League (IPL)",
    "image": "/images/Indian_Premier_League.png",
    "address": "BCCI HQ, Wankhede Stadium, Mumbai, India",
    "description": "Professional Twenty20 cricket league."
  },
  {
    "id": "savannah",
    "title": "Savannah Bananas",
    "image": "/images/SavannahBananas.png",
    "address": "1401 E Victory Dr, Savannah, GA",
    "description": "Entertaining minor league baseball team."
  },
  {
    "id": "vercel",
    "title": "Vercel",
    "image": "/images/vercel.svg",
    "address": "340 S Lemon Ave, Walnut, CA",
    "description": "Platform for frontend frameworks and static sites."
  },
  {
    "id": "lockheed",
    "title": "Lockheed Martin",
    "image": "/images/Lockheed_Martin.svg",
    "address": "6801 Rockledge Dr, Bethesda, MD",
    "description": "Aerospace and defense company."
  },
  {
    "id": "spotify",
    "title": "Spotify",
    "image": "/images/spotify.svg",
    "address": "Regeringsgatan 19, Stockholm, Sweden",
    "description": "Music streaming platform."
  },
  {
    "id": "lucasfilm",
    "title": "Lucasfilm",
    "image": "/images/Lucasfilm.png",
    "address": "1110 Gorgas Ave, San Francisco, CA",
    "description": "Film production company, creator of Star Wars."
  },
  {
    "id": "bungie",
    "title": "Bungie",
    "image": "/images/Bungie.png",
    "address": "550 106th Ave NE, Bellevue, WA",
    "description": "Video game developer (Destiny, Halo)."
  },
  {
    "id": "angellist",
    "title": "AngelList",
    "image": "/images/angellist.svg",
    "address": "995 Market St, San Francisco, CA",
    "description": "Startup job and investing platform."
  },
  {
    "id": "emergence",
    "title": "Emergence Capital",
    "image": "/images/Emergence-Capital.svg",
    "address": "2735 Sand Hill Rd #150, Menlo Park, CA",
    "description": "Venture capital firm."
  },
  {
    "id": "benchmark",
    "title": "Benchmark",
    "image": "/images/benchmark-capital.svg",
    "address": "2965 Woodside Rd, Woodside, CA",
    "description": "Venture capital firm based in Silicon Valley."
  },
  {
    "id": "duolingo",
    "title": "Duolingo",
    "image": "/images/duolingo.svg",
    "address": "5900 Penn Ave, Pittsburgh, PA",
    "description": "Language-learning platform with gamification."
  }
]
folder_path="db/descriptions"
os.makedirs(folder_path,exist_ok=True)
for company in companies:
    file_path = os.path.join(folder_path, f"{company['id']}.txt")
    with open(file_path,"w",encoding="utf-8") as f:
        pass

print("Empty files created successfully")
