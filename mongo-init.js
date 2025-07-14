db = db.getSiblingDB('companiesdb')

db.companies.insertMany([
  {
    id: "apple",
    title: "Apple",
    image: "/images/apple.png",
    address: "One Apple Park Way, Cupertino, CA 95014",
    description: "db/descriptions/apple.txt"
  },
  {
    id: "amazon",
    title: "Amazon",
    image: "/images/amazon.svg",
    address: "410 Terry Ave N, Seattle, WA 98109",
    description: "db/descriptions/amazon.txt"
  },
  {
    id: "google",
    title: "Google (Alphabet)",
    image: "/images/google.svg",
    address: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    description: "db/descriptions/google.txt"
  },
  {
    id: "microsoft",
    title: "Microsoft",
    image: "/images/microsoft.svg",
    address: "One Microsoft Way, Redmond, WA 98052",
    description: "db/descriptions/microsoft.txt"
  },
  {
    id: "meta",
    title: "Meta (Facebook)",
    image: "/images/facebook.svg",
    address: "1 Hacker Way, Menlo Park, CA 94025",
    description: "db/descriptions/meta.txt"
  },
  {
    id: "netflix",
    title: "Netflix",
    image: "/images/netflix.svg",
    address: "121 Albright Way, Los Gatos, CA 95032",
    description: "db/descriptions/netflix.txt"
  },
  {
    id: "nvidia",
    title: "Nvidia",
    image: "/images/nvidia.svg",
    address: "2788 San Tomas Expressway, Santa Clara, CA 95051",
    description: "db/descriptions/nvidia.txt"
  },
  {
    id: "berkshire",
    title: "Berkshire Hathaway",
    image: "/images/berkshire-hathaway.svg",
    address: "3555 Farnam St, Omaha, NE 68131",
    description: "db/descriptions/berkshire.txt"
  },
  {
    id: "nike",
    title: "Nike",
    image: "/images/nike.png",
    address: "One Bowerman Drive, Beaverton, OR 97005",
    description: "db/descriptions/nike.txt"
  },
  {
    id: "starbucks",
    title: "Starbucks",
    image: "/images/starbucks.svg",
    address: "2401 Utah Avenue South, Seattle, WA 98134",
    description: "db/descriptions/starbucks.txt"
  },
  {
    id: "visa",
    title: "Visa",
    image: "/images/visa.svg",
    address: "900 Metro Center Blvd, Foster City, CA 94404",
    description: "db/descriptions/visa.txt"
  },
  {
    id: "costco",
    title: "Costco",
    image: "/images/costco.svg",
    address: "999 Lake Drive, Issaquah, WA 98027",
    description: "db/descriptions/costco.txt"
  },
  {
    id: "renaissance",
    title: "Renaissance Technologies",
    image: "/images/Renaissance_Technologies.png",
    address: "600 Route 25A, East Setauket, NY 11733",
    description: "db/descriptions/renaissance.txt"
  },
  {
    id: "novo",
    title: "Novo Nordisk",
    image: "/images/novo-nordisk.svg",
    address: "Novo Allé, 2880 Bagsværd, Denmark",
    description: "db/descriptions/novo.txt"
  },
  {
    id: "pixar",
    title: "Pixar",
    image: "/images/pixar1.svg",
    address: "1200 Park Avenue, Emeryville, CA 94608",
    description: "db/descriptions/pixar.txt"
  },
  {
    id: "instagram",
    title: "Instagram",
    image: "/images/instagram.png",
    address: "1 Hacker Way, Menlo Park, CA 94025",
    description: "db/descriptions/instagram.txt"
  },
  {
    id: "twitch",
    title: "Twitch",
    image: "/images/twitch.svg",
    address: "350 Bush Street, San Francisco, CA 94104",
    description: "db/descriptions/twitch.txt"
  },
  {
    id: "uber",
    title: "Uber",
    image: "/images/uber.svg",
    address: "1515 3rd Street, San Francisco, CA 94158",
    description: "db/descriptions/uber.txt"
  },
  {
    id: "hermes",
    title: "Hermès",
    image: "/images/hermes2.svg",
    address: "24 Rue du Faubourg Saint-Honoré, 75008 Paris, France",
    description: "db/descriptions/hermes.txt"
  },
  {
    id: "plaid",
    title: "Plaid",
    image: "/images/plaid.svg",
    address: "85 2nd Street, San Francisco, CA 94105",
    description: "db/descriptions/plaid.txt"
  },
  {
    id: "tsmc",
    title: "TSMC",
    image: "/images/tsmc.svg",
    address: "No. 8, Li‑Hsin Rd 6, Hsinchu Science Park, Hsinchu, Taiwan 30078",
    description: "db/descriptions/tsmc.txt"
  },
  {
    id: "epic",
    title: "Epic Systems",
    image: "/images/Epic_Systems.png",
    address: "1979 Milky Way, Verona, WI 53593",
    description: "db/descriptions/epic.txt"
  },
  {
    id: "ikea",
    title: "IKEA",
    image: "/images/ikea2.svg",
    address: "Olof Palmestraat 1, 2616 LM Delft, Netherlands",
    description: "db/descriptions/ikea.txt"
  },
  {
    id: "rolex",
    title: "Rolex",
    image: "/images/rolex.svg",
    address: "3‑5‑7 Rue François‑Dussaud, 1211 Genève 26, Switzerland",
    description: "db/descriptions/rolex.txt"
  },
  {
    id: "mars",
    title: "Mars Inc.",
    image: "/images/Mars_Incorporated.png",
    address: "6885 Elm Street, McLean, VA 22101",
    description: "db/descriptions/mars.txt"
  },
  {
    id: "servicenow",
    title: "ServiceNow",
    image: "/images/ServiceNow.png",
    address: "2225 Lawson Lane, Santa Clara, CA 95054",
    description: "db/descriptions/servicenow.txt"
  },
  {
    id: "ipl",
    title: "Indian Premier League (IPL)",
    image: "/images/Indian_Premier_League.png",
    address: "BCCI HQ, Wankhede Stadium, Dadar, Mumbai, Maharashtra 400028, India",
    description: "db/descriptions/ipl.txt"
  },
  {
    id: "savannah",
    title: "Savannah Bananas",
    image: "/images/SavannahBananas.png",
    address: "1401 E Victory Drive, Savannah, GA 31404",
    description: "db/descriptions/savannah.txt"
  },
  {
    id: "vercel",
    title: "Vercel",
    image: "/images/vercel.svg",
    address: "340 S Lemon Ave, Walnut, CA 91789",
    description: "db/descriptions/vercel.txt"
  },
  {
    id: "lockheed",
    title: "Lockheed Martin",
    image: "/images/Lockheed_Martin.svg",
    address: "6801 Rockledge Drive, Bethesda, MD 20817",
    description: "db/descriptions/lockheed.txt"
  },
  {
    id: "spotify",
    title: "Spotify",
    image: "/images/spotify.svg",
    address: "Regeringsgatan 19, 111 53 Stockholm, Sweden",
    description: "db/descriptions/spotify.txt"
  },
  {
    id: "lucasfilm",
    title: "Lucasfilm",
    image: "/images/Lucasfilm.png",
    address: "1110 Gorgas Avenue, San Francisco, CA 94129",
    description: "db/descriptions/lucasfilm.txt"
  },
  {
    id: "bungie",
    title: "Bungie",
    image: "/images/Bungie.png",
    address: "550 106th Ave NE, Bellevue, WA 98004",
    description: "db/descriptions/bungie.txt"
  },
  {
    id: "angellist",
    title: "AngelList",
    image: "/images/angellist.svg",
    address: "995 Market Street, San Francisco, CA 94103",
    description: "db/descriptions/angellist.txt"
  },
  {
    id: "emergence",
    title: "Emergence Capital",
    image: "/images/Emergence-Capital.svg",
    address: "2735 Sand Hill Road #150, Menlo Park, CA 94025",
    description: "db/descriptions/emergence.txt"
  },
  {
    id: "benchmark",
    title: "Benchmark",
    image: "/images/benchmark-capital.svg",
    address: "2965 Woodside Road, Woodside, CA 94062",
    description: "db/descriptions/benchmark.txt"
  },
  {
    id: "duolingo",
    title: "Duolingo",
    image: "/images/duolingo.svg",
    address: "5900 Penn Avenue, Pittsburgh, PA 15206",
    description: "db/descriptions/duolingo.txt"
  }
]
)