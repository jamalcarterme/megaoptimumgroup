export type Tier={name:string;price:string;features:string[]}
export type Service={slug:string;name:string;icon:string;tagline:string;desc:string;points:string[];tiers:Tier[]}
export const services:Service[]=[
 {
  "slug": "oil-gas",
  "name": "Oil & Gas",
  "icon": "🛢️",
  "tagline": "Energy services you can depend on",
  "desc": "Reliable oil and gas support for upstream, downstream and industrial clients.",
  "points": [
   "Supply of oilfield materials & equipment",
   "Maintenance & technical support",
   "Fuel and lubricant supply",
   "Safety-first project execution"
  ],
  "tiers": [
   {
    "name": "Starter",
    "price": "₦250,000",
    "features": [
     "Site assessment",
     "Basic supply support",
     "Phone & email support"
    ]
   },
   {
    "name": "Professional",
    "price": "₦900,000",
    "features": [
     "Full project planning",
     "Equipment & materials supply",
     "Dedicated engineer",
     "Weekly reports"
    ]
   },
   {
    "name": "Enterprise",
    "price": "Custom",
    "features": [
     "Long-term contracts",
     "Priority 24/7 response",
     "Compliance & HSE support",
     "Account manager"
    ]
   }
  ]
 },
 {
  "slug": "real-estate",
  "name": "Real Estate",
  "icon": "🏢",
  "tagline": "Find, buy, sell and manage with confidence",
  "desc": "Property sales, rentals, management and consultancy across Lagos and beyond.",
  "points": [
   "Property sales & rentals",
   "Property management",
   "Land sourcing & verification",
   "Investment advisory"
  ],
  "tiers": [
   {
    "name": "Basic",
    "price": "₦100,000",
    "features": [
     "Property search",
     "Site inspection",
     "Viewing arrangements"
    ]
   },
   {
    "name": "Premium",
    "price": "₦400,000",
    "features": [
     "Title verification",
     "Negotiation support",
     "Documentation help",
     "Inspection reports"
    ]
   },
   {
    "name": "Portfolio",
    "price": "Custom",
    "features": [
     "Full property management",
     "Tenant handling",
     "Monthly reports",
     "Investment advice"
    ]
   }
  ]
 },
 {
  "slug": "automobile",
  "name": "Automobile & Services",
  "icon": "🚗",
  "tagline": "Keep every vehicle running at its best",
  "desc": "Servicing, repairs, diagnostics and vehicle support for individuals and fleets.",
  "points": [
   "Engine diagnostics & repair",
   "Routine servicing",
   "Fleet maintenance",
   "Spare parts supply"
  ],
  "tiers": [
   {
    "name": "Basic Service",
    "price": "₦45,000",
    "features": [
     "Oil & filter change",
     "25-point check",
     "Tyre pressure & top-up"
    ]
   },
   {
    "name": "Full Service",
    "price": "₦120,000",
    "features": [
     "Full diagnostics",
     "Brake & suspension check",
     "Fluids & belts",
     "Interior clean"
    ]
   },
   {
    "name": "Fleet Plan",
    "price": "Custom",
    "features": [
     "Multi-vehicle scheduling",
     "Priority repairs",
     "Monthly health reports",
     "Discounted parts"
    ]
   }
  ]
 },
 {
  "slug": "welding",
  "name": "Welding, Metal & Wood Construction",
  "icon": "🔥",
  "tagline": "Strong builds, crafted to last",
  "desc": "Custom metal fabrication and wood construction for homes, industry and commerce.",
  "points": [
   "Gates, railings & frames",
   "Industrial fabrication",
   "Custom wood works",
   "On-site welding"
  ],
  "tiers": [
   {
    "name": "Small Job",
    "price": "₦80,000",
    "features": [
     "Repairs & small fabrication",
     "Site visit",
     "Quick turnaround"
    ]
   },
   {
    "name": "Standard Build",
    "price": "₦350,000",
    "features": [
     "Custom design",
     "Quality materials",
     "Installation",
     "Finishing & paint"
    ]
   },
   {
    "name": "Industrial",
    "price": "Custom",
    "features": [
     "Large structures",
     "Engineering drawings",
     "Project supervision",
     "Warranty support"
    ]
   }
  ]
 },
 {
  "slug": "interior",
  "name": "Interior Designs",
  "icon": "🛋️",
  "tagline": "Spaces that look and feel premium",
  "desc": "Elegant interior design, decoration and furnishing for homes, offices and shops.",
  "points": [
   "Concept & 3D layouts",
   "Furniture & décor sourcing",
   "POP, painting & finishing",
   "Full turnkey fit-out"
  ],
  "tiers": [
   {
    "name": "Room Refresh",
    "price": "₦150,000",
    "features": [
     "Design consultation",
     "Colour & décor plan",
     "Styling support"
    ]
   },
   {
    "name": "Full Interior",
    "price": "₦700,000",
    "features": [
     "3D concept",
     "Furniture sourcing",
     "Finishing works",
     "Project supervision"
    ]
   },
   {
    "name": "Turnkey",
    "price": "Custom",
    "features": [
     "End-to-end fit-out",
     "Premium materials",
     "Dedicated designer",
     "Handover & aftercare"
    ]
   }
  ]
 },
 {
  "slug": "security",
  "name": "Security Services",
  "icon": "🛡️",
  "tagline": "Protection you can trust, day and night",
  "desc": "Professional security and policing support for homes, estates, offices and events.",
  "points": [
   "Trained guards & escorts",
   "Estate & office security",
   "Event security",
   "Risk assessment"
  ],
  "tiers": [
   {
    "name": "Standard",
    "price": "₦120,000",
    "features": [
     "1 guard",
     "Day or night shift",
     "Daily log"
    ]
   },
   {
    "name": "Advanced",
    "price": "₦400,000",
    "features": [
     "Multiple guards",
     "Supervisor",
     "Patrol checks",
     "Incident reports"
    ]
   },
   {
    "name": "Estate / Corporate",
    "price": "Custom",
    "features": [
     "Full security team",
     "Control room support",
     "24/7 cover",
     "Risk audit"
    ]
   }
  ]
 },
 {
  "slug": "logistics",
  "name": "Logistics Service",
  "icon": "🚚",
  "tagline": "Moving your goods safely and on time",
  "desc": "Haulage, warehousing, delivery and freight coordination you can track and trust.",
  "points": [
   "Local & interstate haulage",
   "Warehousing",
   "Last-mile delivery",
   "Freight & clearing support"
  ],
  "tiers": [
   {
    "name": "Local Delivery",
    "price": "₦30,000",
    "features": [
     "Within Lagos",
     "Same-day option",
     "Delivery confirmation"
    ]
   },
   {
    "name": "Interstate",
    "price": "₦150,000",
    "features": [
     "Nationwide haulage",
     "Insured goods",
     "Tracking updates"
    ]
   },
   {
    "name": "Contract",
    "price": "Custom",
    "features": [
     "Dedicated vehicles",
     "Warehousing",
     "Monthly billing",
     "Account manager"
    ]
   }
  ]
 },
 {
  "slug": "cleaning",
  "name": "Industrial Cleaning",
  "icon": "🧼",
  "tagline": "Spotless facilities, safe workplaces",
  "desc": "Deep industrial, commercial and post-construction cleaning with trained crews.",
  "points": [
   "Factory & warehouse cleaning",
   "Post-construction cleanup",
   "Office & commercial cleaning",
   "Pressure washing"
  ],
  "tiers": [
   {
    "name": "Spot Clean",
    "price": "₦60,000",
    "features": [
     "One-off clean",
     "Standard equipment",
     "Same-week booking"
    ]
   },
   {
    "name": "Deep Clean",
    "price": "₦250,000",
    "features": [
     "Industrial machines",
     "Eco-safe chemicals",
     "Trained crew",
     "Post-clean inspection"
    ]
   },
   {
    "name": "Maintenance",
    "price": "Custom",
    "features": [
     "Scheduled cleaning",
     "Dedicated team",
     "Monthly contract",
     "Priority callout"
    ]
   }
  ]
 }
]
export const site={phone:'08039295071',wa:'2348039295071',email:'nwakubajerry@gmail.com',address:'No 4 Ajosa Otunba Street, Ilasan, Ikate, Lekki, Lagos',ceo:'Engr Jerry Nwakuba'}
export const bySlug=(s:string)=>services.find(x=>x.slug===s)!
