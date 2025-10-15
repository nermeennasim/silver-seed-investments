import { 
  Building, 
  TrendingUp, 
  Shield, 
  ShieldCheck,
  HandHeart,
  Search,
  FileCheck,
  Home,
  Wrench,
  Receipt,
  RefreshCw,
  UserCheck,
  Target,
  DollarSign,
  BarChart3,
  Award,
  CheckCircle2
} from 'lucide-react';

export const siteData = {
  // Company Information
  company: {
    name: "Silver Seed Investments",
    shortName: "SSI",
    tagline: "Growing Wealth Together",
    taglineExtended: "Your Partner in Building Financial Freedom through Smart Real Estate Investments",
    motto: "Investing in Real Estate is not only the safest way, but generally also the quickest way to growing your wealth.",
    mission: "Helping clients make their money work for them, not the other way around.",
    philosophy: "Safe, easy, and rewarding real estate investment with skin in the game, transparency, and ROI focus.",
    
    // Contact details
    contact: {
      phone: "+1-437-984-1806",
      whatsapp: "+966-596-237-616", 
      email: "administration@silverseedinv.com",
      website: "www.SilverSeedInv.com",
      address: "6894, Barrisdale Drive, Mississauga, Ontario"
    },

    // Business metrics
    metrics: {
      minInvestment: 1000,
      expectedReturns: { min: 20, max: 37 }, // percentage (annualized)
      averageROI: { from2020: 20, to2024: 37 },
      ssiSharePercentage: 12.5, // SSI's share in rental model
      skinInGame: 50, // percentage - we invest alongside you
      managedAssets: "Multiple Million", // Will update with exact figure
      clientsServed: "100+",
      regions: ["North America", "Middle East"],
      
      // Computed values
      get returnsRange() {
        return `${this.expectedReturns.min}-${this.expectedReturns.max}%`;
      },
      
      get formattedMinInvestment() {
        return `$${this.minInvestment.toLocaleString()}`;
      }
    }
  },

  // Hero Section - "Growing Wealth Together"
  hero: {
    title: "Growing Wealth Together",
    subtitle: "Your Partner in Building Financial Freedom through Smart Real Estate Investments",
    description: "Silver Seed Investments helps you build wealth through strategic real estate investments with complete transparency, aligned interests, and proven results.",
    
    highlights: [
      "Skin in the game - We invest alongside you",
      "20-35% average ROI since 2020",
      "100% transparent fee structure",
      "Hands-on property management"
    ],
    
    // Call to action buttons
    cta: {
      primary: {
        text: "Explore Opportunities",
        action: "services"
      },
      secondary: {
        text: "Schedule a Consultation", 
        action: "contact"
      }
    },
    
    // Background image placeholder
    backgroundImage: "/hero-investment-bg.jpg"
  },

  // About SSI Section
  about: {
    title: "About Silver Seed Investments (SSI)",
    subtitle: "Building Credibility and Trust Through Transparency",
    mission: "Helping clients make their money work for them, not the other way around.",
    philosophy: "We believe in safe, easy, and rewarding real estate investment with complete transparency and aligned interests.",
    
    quote: {
      text: "Investing in Real Estate is not only the safest way, but generally also the quickest way to growing your wealth.",
      author: "Silver Seed Investments"
    },
    
    uniqueValue: [
      {
        title: "Skin in the Game",
        description: "We invest our own money alongside yours in every project, ensuring our interests are perfectly aligned.",
        icon: HandHeart
      },
      {
        title: "Complete Transparency",
        description: "Success-based fees with no hidden costs. You always know exactly what you're paying for.",
        icon: Shield
      },
      {
        title: "ROI Focused",
        description: "Every decision we make is driven by maximizing your return on investment while managing risk.",
        icon: TrendingUp
      }
    ],
    
    cta: {
      text: "Meet Our Team",
      action: "team"
    }
  },

  // How We Work Section
  howWeWork: {
    title: "How We Work",
    subtitle: "Our Step-by-Step Approach to Real Estate Investment Success",
    
    steps: [
      {
        id: 1,
        title: "Market Research & Deal Sourcing",
        description: "Finding the right opportunity through comprehensive analysis",
        icon: Search,
        details: [
          "Population growth trends analysis",
          "Rental potential assessment",
          "Off-market deal sourcing",
          "Comparative market analysis",
          "Future development potential evaluation"
        ]
      },
      {
        id: 2,
        title: "Due Diligence & Legal Safety",
        description: "Ensuring every investment is secure and properly structured",
        icon: FileCheck,
        details: [
          "Comprehensive title searches",
          "Land registry verification",
          "Insurance coverage review",
          "Professional home inspections",
          "Lawyer and realtor selection",
          "Contract review and negotiation"
        ]
      },
      {
        id: 3,
        title: "Property Management",
        description: "Hands-on management with skin in the game",
        icon: Home,
        details: [
          "Proactive maintenance scheduling",
          "Tenant relationship management",
          "Yield optimization strategies",
          "Asset value preservation",
          "24/7 emergency response",
          "Regular property inspections"
        ]
      },
      {
        id: 4,
        title: "Value Add & Renovation",
        description: "Strategic improvements for maximum returns",
        icon: Wrench,
        details: [
          "Cost-effective upgrade planning",
          "Municipal approval management",
          "Contractor network coordination",
          "Quality control oversight",
          "Budget optimization",
          "Timeline management"
        ]
      },
      {
        id: 5,
        title: "Tax Efficiency & Liability Management",
        description: "Maximizing returns through smart tax strategies",
        icon: Receipt,
        details: [
          "Legal entity setup (LLC/Corporation)",
          "Tax deduction optimization",
          "Capital gains strategies",
          "Liability protection structures",
          "Annual tax planning",
          "Professional filing services"
        ]
      },
      {
        id: 6,
        title: "Refinancing & Asset Multiplication",
        description: "Leveraging equity to grow your portfolio",
        icon: RefreshCw,
        details: [
          "Strategic refinancing timing",
          "Portfolio growth planning",
          "Tax-efficient equity withdrawal",
          "Multiple property acquisition",
          "Cash flow optimization",
          "Long-term wealth building"
        ]
      }
    ]
  },

  // Services Offered Section
  services: {
    title: "Services Offered",
    subtitle: "Comprehensive Real Estate Investment Management",
    description: "What investors get when partnering with SSI",
    
    offerings: [
      {
        id: "property-management",
        title: "Property Management",
        icon: Home,
        description: "Preserve assets and maintain yields with hands-on management",
        benefits: [
          "Proactive maintenance scheduling",
          "Asset value preservation",
          "Yield optimization",
          "24/7 emergency response"
        ],
        savings: "Save up to $8,000 annually in maintenance through our preferred contractor network",
        highlight: "$8K Annual Savings"
      },
      {
        id: "tenant-screening",
        title: "Tenant Screening",
        icon: UserCheck,
        description: "Direct dealing with comprehensive background checks",
        benefits: [
          "Thorough background verification",
          "Income and employment checks",
          "Rental history review",
          "Eviction management expertise"
        ],
        savings: "Save $2,000+ on brokerage fees with our in-house screening",
        highlight: "$2K+ Saved"
      },
      {
        id: "value-additions",
        title: "Targeted Value Additions",
        icon: Wrench,
        description: "Strategic renovations with expert contractor management",
        benefits: [
          "Cost-effective upgrade planning",
          "Contractor network access",
          "Quality control oversight",
          "ROI-focused improvements"
        ],
        savings: "20-25% cost savings on materials and labor",
        highlight: "25% Cost Savings"
      },
      {
        id: "tax-management",
        title: "Tax & Liability Management",
        icon: Receipt,
        description: "Legal structure optimization for maximum tax efficiency",
        benefits: [
          "LLC/Corporation setup",
          "Tax deduction strategies",
          "Liability protection",
          "Annual tax filing"
        ],
        savings: "Save $1,200+ annually on entity setup and management",
        highlight: "$1.2K+ Annual Savings"
      },
      {
        id: "deal-sourcing",
        title: "Deal Sourcing",
        icon: Search,
        description: "Off-market and high-ROI investment opportunities",
        benefits: [
          "Exclusive off-market deals",
          "Below-market acquisitions",
          "High-growth area targeting",
          "Comprehensive due diligence"
        ],
        savings: "Average 16% discount on market price",
        highlight: "16% Below Market"
      }
    ]
  },

  // ROI & Case Studies Section
  roiCaseStudies: {
    title: "ROI & Case Studies",
    subtitle: "Real deals, real returns. See how we consistently deliver value for our investors.",
    description: "Proven results showing profitability across multiple investment strategies",
    
    caseStudies: [
      {
        id: "spot-discount",
        title: "Spot Discount - Below Market Acquisition",
        type: "Acquisition",
        icon: Target,
        marketPrice: 144000,
        purchasePrice: 121200,
        roi: 18,
        description: "Secured property 16% below market value through off-market deal sourcing",
        details: {
          discount: "16%",
          savings: "$22,800",
          strategy: "Off-market negotiation",
          timeline: "3 months"
        },
        metrics: [
          { label: "Market Price", value: "$144,000" },
          { label: "Purchase Price", value: "$121,200" },
          { label: "Savings", value: "$22,800" },
          { label: "ROI", value: "18%" }
        ]
      },
      {
        id: "rental-roi",
        title: "Gross Annualized ROI - Long-Term Rental",
        type: "Rental Income",
        icon: DollarSign,
        monthlyRent: 2350,
        annualIncome: 28200,
        roi: 29,
        description: "Consistent rental income generating 29% annualized ROI",
        details: {
          monthlyRent: "$2,350",
          annualIncome: "$28,200",
          occupancyRate: "98%",
          timeline: "Ongoing"
        },
        metrics: [
          { label: "Monthly Rent", value: "$2,350" },
          { label: "Annual Income", value: "$28,200" },
          { label: "Gross ROI", value: "29%" },
          { label: "Occupancy", value: "98%" }
        ]
      },
      {
        id: "renovation-project",
        title: "Project ROI - Full Renovation & Resale",
        type: "Value Add",
        icon: Wrench,
        projectCost: 737367,
        salePrice: 940000,
        roi: 21,
        annualizedROI: 37,
        description: "Complete renovation project with 21% ROI (37% annualized)",
        details: {
          totalCost: "$737,367",
          salePrice: "$940,000",
          profit: "$202,633",
          duration: "8 months"
        },
        metrics: [
          { label: "Total Investment", value: "$737,367" },
          { label: "Sale Price", value: "$940,000" },
          { label: "Project ROI", value: "21%" },
          { label: "Annualized ROI", value: "37%" }
        ]
      },
      {
        id: "airbnb-model",
        title: "Airbnb Model - Short-Term Rental",
        type: "Airbnb",
        icon: Home,
        rentalYield: 27,
        twoYearROI: 37,
        description: "High-yield short-term rental strategy with 27% yield",
        details: {
          rentalYield: "27%",
          twoYearROI: "37%",
          avgNightlyRate: "$180",
          occupancyRate: "85%"
        },
        metrics: [
          { label: "Rental Yield", value: "27%" },
          { label: "2-Year ROI", value: "37%" },
          { label: "Nightly Rate", value: "$180" },
          { label: "Occupancy", value: "85%" }
        ]
      }
    ],
    
    // Average ROI Chart Data (2020-2024)
    roiTrend: {
      title: "Average ROI Growth 2020-2024",
      data: [
        { year: "2020", roi: 20 },
        { year: "2021", roi: 23 },
        { year: "2022", roi: 27 },
        { year: "2023", roi: 32 },
        { year: "2024", roi: 37 }
      ]
    },

    // Three Common Investment Mistakes
    investmentMistakes: {
      title: "3 Three-commodity store mistakes",
      subtitle: "Smart, hands-on investment that grows with you",
      
      options: [
        {
          id: "diy-investor",
          title: "DIY Investor",
          icon: UserCheck,
          problems: [
            "Time-intensive research and management",
            "Steep learning curve with costly mistakes",
            "100% of risk on your shoulders",
            "Limited market access",
            "No expert guidance"
          ],
          isRecommended: false
        },
        {
          id: "reit-fund",
          title: "REIT / Fund",
          icon: BarChart3,
          problems: [
            "High management fees (2-3% annually)",
            "Zero control over investments",
            "Tax inefficient structure",
            "Manager profits regardless of performance",
            "Lack of transparency"
          ],
          isRecommended: false
        },
        {
          id: "ssi-solution",
          title: "SSI",
          icon: CheckCircle2,
          benefits: [
            "Expert management with skin in the game",
            "12.5% success-based fees",
            "Full transparency and control",
            "Tax-optimized structure",
            "We only win when you win"
          ],
          isRecommended: true
        }
      ]
    },

    // Investment Opportunities to Look For
    opportunities: {
      title: "Opportunities to Look For",
      subtitle: "Strategic investment approaches that maximize returns",
      
      strategies: [
        {
          id: "off-market-deals",
          title: "Off-Market Deals",
          icon: Search,
          description: "Properties not publicly listed, reducing competition",
          benefits: [
            "Lower purchase prices (10-20% below market)",
            "Less bidding wars",
            "Direct negotiation with owners",
            "Hidden gems others miss"
          ],
          example: "Secured property 16% below market value - $22,800 savings"
        },
        {
          id: "value-add-properties",
          title: "Value-Add Properties",
          icon: TrendingUp,
          description: "Properties with renovation or improvement potential",
          benefits: [
            "Force appreciation through improvements",
            "Increase rental income potential",
            "Higher resale value",
            "Tax deduction on renovations"
          ],
          example: "21% ROI (37% annualized) on full renovation project"
        },
        {
          id: "emerging-markets",
          title: "Emerging Markets",
          icon: Target,
          description: "Growing areas with strong appreciation potential",
          benefits: [
            "Lower entry prices",
            "High growth trajectory",
            "First-mover advantage",
            "Diversification opportunities"
          ],
          example: "Alberta +6%, Nova Scotia +8% YoY growth"
        },
        {
          id: "cash-flow-properties",
          title: "Cash Flow Properties",
          icon: DollarSign,
          description: "High rental yield properties with consistent income",
          benefits: [
            "Immediate positive cash flow",
            "Passive income stream",
            "Tenant pays mortgage",
            "Compound wealth building"
          ],
          example: "$2,350/month generating 29% annualized ROI"
        },
        {
          id: "short-term-rentals",
          title: "Short-Term Rentals (Airbnb)",
          icon: Home,
          description: "Premium locations optimized for vacation rentals",
          benefits: [
            "Higher nightly rates",
            "Flexible usage (personal + rental)",
            "Tourism market growth",
            "Dynamic pricing optimization"
          ],
          example: "27% rental yield with 85% occupancy"
        }
      ]
    },

    // In Our Experience - Common Misconceptions
    commonMisconceptions: {
      title: "In Our Experience",
      subtitle: "What people think vs. reality",
      
      introduction: "In our experience, people think investing means choosing between:",
      
      perceivedOptions: [
        {
          id: "option1",
          label: "Option 1",
          title: "Do It Yourself",
          description: "Spend countless hours researching, managing, and hoping for the best",
          icon: UserCheck,
          drawbacks: [
            "Steep learning curve",
            "Time-consuming",
            "High risk of costly mistakes",
            "Limited market access"
          ]
        },
        {
          id: "option2",
          label: "Option 2",
          title: "REIT / Mutual Funds",
          description: "Hand over your money and hope the managers perform",
          icon: BarChart3,
          drawbacks: [
            "High management fees",
            "No control",
            "Tax inefficient",
            "Lack of transparency"
          ]
        },
        {
          id: "option3",
          label: "Option 3",
          title: "Don't Invest at All",
          description: "Keep cash in savings and watch inflation erode its value",
          icon: Shield,
          drawbacks: [
            "Inflation erodes savings",
            "Missed growth opportunities",
            "No wealth building",
            "Financial stagnation"
          ]
        }
      ],
      
      reality: {
        title: "But there's a better way...",
        subtitle: "The SSI Advantage",
        description: "Smart, hands-on investment management where we invest alongside you, treat your properties as our own, and only profit when you do.",
        
        benefits: [
          {
            title: "Skin in the Game",
            description: "We invest our money right beside yours in every deal",
            icon: HandHeart
          },
          {
            title: "Aligned Incentives",
            description: "12.5% share means we only win when you win",
            icon: CheckCircle2
          },
          {
            title: "Expert Management",
            description: "Decades of experience managing your investments",
            icon: Award
          },
          {
            title: "Full Transparency",
            description: "Complete visibility into every decision and dollar",
            icon: Shield
          }
        ],
        
        cta: {
          text: "Ready to see how your money can work for you?",
          buttonText: "Start Now",
          action: "contact"
        }
      }
    }
  },

  // Old case studies - keeping for reference, will remove later
  oldCaseStudies: {
    examples: [
      {
        id: "offmarket-deal",
        title: "Off-Market Acquisition",
        type: "acquisition",
        marketPrice: 144000,
        finalPrice: 121200,
        
        // Computed values
        get savings() {
          return this.marketPrice - this.finalPrice;
        },
        get savingsPercent() {
          return Math.round((this.savings / this.marketPrice) * 100);
        },
        get roi() {
          return 18; // Based on rental yield
        }
      },
      {
        id: "renovation-project", 
        title: "Renovation Project",
        type: "enhancement",
        projectCost: 737367,
        salesProceeds: 940000,
        
        get profit() {
          return this.salesProceeds - this.projectCost;
        },
        get roi() {
          return Math.round((this.profit / this.projectCost) * 100);
        }
      },
      {
        id: "cashflow-property",
        title: "Cash Flow Property", 
        type: "rental",
        purchasePrice: 136500,
        monthlyRent: 2350,
        
        get annualIncome() {
          return this.monthlyRent * 12;
        },
        get roi() {
          return Math.round((this.annualIncome / this.purchasePrice) * 100);
        }
      }
    ]
  },

  // Market Data (can be updated dynamically)
  marketData: {
    lastUpdated: "2023-09-01",
    
    canada: {
      title: "Canada's Fastest Growing Housing Markets",
      subtitle: "House prices Sept 2023 - YoY % Change",
      currency: "CAD",
      
      markets: [
        { region: "Northwest Territories", price: 561000, change: 46 },
        { region: "Nova Scotia", price: 398000, change: 8 },
        { region: "Quebec", price: 500000, change: 6 },
        { region: "Alberta", price: 450000, change: 6 },
        { region: "British Columbia", price: 969000, change: 5 },
        { region: "Ontario", price: 852000, change: 2 }
      ],
      
      // Helper function to get top markets
      getTopMarkets(limit = 5) {
        return this.markets
          .sort((a, b) => b.change - a.change)
          .slice(0, limit);
      }
    },

    usa: {
      title: "Most Valuable Housing Markets in America 2024",
      currency: "USD",
      
      markets: [
        { metro: "New York, NY", value: "2.4T", change: -1.0 },
        { metro: "Los Angeles, CA", value: "2.1T", change: 4.3 },
        { metro: "Atlanta, GA", value: "1.2T", change: 6.2 },
        { metro: "Boston, MA", value: "1.2T", change: 8.3 },
        { metro: "Anaheim, CA", value: "1.1T", change: 8.0 }
      ]
    }
  },

  // FAQ with expandable structure
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about investing with Silver Seed",
    
    categories: [
      {
        category: "Getting Started",
        questions: [
          {
            question: "What is the minimum investment?",
            answer: "The minimum investment is $1,000. For investments over $50,000, we use lawyers' trust accounts for additional security.",
            tags: ["minimum", "investment", "security"]
          },
          {
            question: "How do I get started?",
            answer: "Simply contact us to discuss your investment goals. We'll guide you through our project selection process and help you choose the right opportunity.",
            tags: ["getting-started", "process"]
          }
        ]
      },
      {
        category: "Returns & Fees", 
        questions: [
          {
            question: "What returns can I expect?",
            answer: "Our historical performance shows 18-22% annualized returns. However, past performance doesn't guarantee future results.",
            tags: ["returns", "performance"]
          },
          {
            question: "What are your fees?",
            answer: "We take 12.5% ownership in properties as our service fee. Our interests are aligned - we only profit when you profit.",
            tags: ["fees", "structure"]
          }
        ]
      }
    ],
    
    // Helper to get all questions
    getAllQuestions() {
      return this.categories.flatMap(cat => cat.questions);
    }
  },

  // Meet Our Team Section
  team: {
    title: "Meet Our Team",
    subtitle: "Decades of cumulative experience in real estate, finance, and project management",
    description: "Leadership credibility backed by proven expertise",
    
    members: [
      {
        id: "mubashir-zaman",
        name: "Mubashir Zaman",
        title: "CEO & Chairman of the Board",
        credentials: ["MBA", "CIMA"],
        experience: "30+ years in global management",
        image: "/team/mubashir-zaman.jpg",
        specialties: ["Executive Management", "Strategic Planning", "Real Estate Investment"],
        bio: "An MBA and qualified CIMA with over 30 years of global executive level management experience. Mr. Zaman leads Silver Seed Investments as its CEO and Chairman."
      },
      {
        id: "muhammed-yaqooby",
        name: "Muhammed Yaqooby", 
        title: "Independent Board Member",
        experience: "Real estate expert with multimillion-dollar projects",
        image: "/team/muhammed-yaqooby.jpg",
        specialties: ["Real Estate Investment", "Commercial Projects", "Board Governance"],
        bio: "Over a decade of experience in real estate investment and multi-million-dollar commercial projects. Member of Sheikh Builders Board of Directors."
      },
      {
        id: "anzar-faseeh",
        name: "Anzar Faseeh",
        title: "Board Member & Investment Advisor",
        experience: "20 years in investment banking",
        image: "/team/anzar-faseeh.jpg",
        specialties: ["Investment Banking", "Financial Strategy", "Portfolio Management"],
        bio: "Two decades of investment banking experience with expertise in portfolio management and financial strategy development."
      },
      {
        id: "nz-ahmed",
        name: "N.Z. Ahmed",
        title: "Board Member & Strategic Advisor",
        experience: "EY and American Express veteran",
        image: "/team/nz-ahmed.jpg",
        specialties: ["Corporate Strategy", "Mentorship", "Global Incubators"],
        bio: "Former executive at EY and American Express. Active mentor for global incubators and startup ecosystems."
      },
      {
        id: "ateeq-khan",
        name: "Ateeq Khan",
        title: "Project Manager",
        experience: "Project management specialist",
        image: "/team/ateeq-khan.jpg",
        specialties: ["Project Management", "Operations", "Execution"],
        bio: "Oversees project execution, timelines, and operational excellence across all SSI investments."
      },
      {
        id: "kamal-yousuf",
        name: "Kamal Yousuf",
        title: "Client Relations Manager",
        experience: "Client management expert",
        image: "/team/kamal-yousuf.jpg",
        specialties: ["Client Relations", "Communication", "Service Excellence"],
        bio: "Manages client relationships and ensures exceptional service delivery for all SSI investors."
      },
      {
        id: "jamal-al-mutairi",
        name: "Jamal Al-Mutairi",
        title: "Deal Manager",
        experience: "Deal sourcing and negotiation",
        image: "/team/jamal-al-mutairi.jpg",
        specialties: ["Deal Sourcing", "Negotiation", "Market Analysis"],
        bio: "Identifies and secures high-ROI investment opportunities through extensive market networks."
      },
      {
        id: "aavish-rabbani",
        name: "Aavish Rabbani",
        title: "Operations Manager",
        experience: "Operations and client management",
        image: "/team/aavish-rabbani.jpg",
        specialties: ["Operations Management", "Client Service", "Process Optimization"],
        bio: "Ensures smooth operations and maintains high standards of client service across all projects."
      }
    ]
  },

  // Testimonials - "Client Says About Us"
  testimonials: {
    title: "What Clients Say About Us",
    subtitle: "Real stories from real investors who trust SSI with their financial future",
    
    reviews: [
      {
        id: 1,
        name: "Sarah Johnson",
        location: "Toronto, Canada",
        role: "Real Estate Investor",
        rating: 5,
        image: "/testimonials/client-1.jpg",
        quote: "SSI transformed my approach to real estate investing. Their transparency and hands-on management give me complete peace of mind.",
        investment: "Multiple properties",
        roi: "32% average ROI"
      },
      {
        id: 2,
        name: "Ahmed Al-Rashid",
        location: "Dubai, UAE",
        role: "Business Owner",
        rating: 5,
        image: "/testimonials/client-2.jpg",
        quote: "The skin-in-the-game approach means SSI's success is tied to mine. I've never felt more confident about my investments.",
        investment: "Rental portfolio",
        roi: "27% annualized"
      },
      {
        id: 3,
        name: "Michael Chen",
        location: "Vancouver, Canada",
        role: "Tech Executive",
        rating: 5,
        image: "/testimonials/client-3.jpg",
        quote: "From deal sourcing to property management, SSI handles everything professionally. My passive income has tripled in two years.",
        investment: "Long-term rentals",
        roi: "35% total ROI"
      },
      {
        id: 4,
        name: "Jamal A. Muttairi",
        location: "Saudi Arabia",
        role: "Client Relationships",
        rating: 5,
        image: "/testimonials/jamal-muttairi.jpeg",
        quote: "Let's discuss your optimal path to financial freedom. Whether you are just starting, or you wish to accelerate, drop me a line and start the discussion.",
        investment: "Real Estate Portfolio",
        roi: "Consistent growth"
      }
    ]
  },

  // Why Invest With SSI Section
  whyInvest: {
    title: "Why Invest With SSI",
    subtitle: "What Sets Us Apart From the Rest",
    
    advantages: [
      {
        id: "transparent-fees",
        title: "Transparent & Success-Based Fees",
        icon: Shield,
        description: "12.5% ownership stake means we only profit when you profit. No hidden fees, no surprises.",
        comparison: {
          diy: "Hidden costs, time-intensive, steep learning curve",
          reit: "High management fees (2-3%), no control, tax inefficient",
          ssi: "Success-based fees, full transparency, tax optimized"
        }
      },
      {
        id: "hands-on",
        title: "Hands-On Investment Management",
        icon: HandHeart,
        description: "We treat every property as our own because we're invested alongside you in every deal.",
        comparison: {
          diy: "100% of your time, stress and responsibility",
          reit: "Zero control, passive only, no customization",
          ssi: "Expert management, your goals prioritized, maintained as our own"
        }
      },
      {
        id: "aligned-interests",
        title: "Aligned Interests",
        icon: CheckCircle2,
        description: "Skin in the game - we invest our money right beside yours in every project.",
        comparison: {
          diy: "Solo risk, no expertise backing",
          reit: "Manager fees regardless of performance",
          ssi: "We win only when you win, shared risk and reward"
        }
      },
      {
        id: "track-record",
        title: "Strong Track Record",
        icon: Award,
        description: "Consistent 20-37% ROI performance from 2020-2024 with 100+ satisfied clients.",
        comparison: {
          diy: "Unpredictable, learning expensive mistakes",
          reit: "Market average 6-10%, no control",
          ssi: "Proven 20-37% ROI, vetted opportunities only"
        }
      },
      {
        id: "safe-legal",
        title: "Safe, Legal, and Efficient",
        icon: ShieldCheck,
        description: "Comprehensive due diligence, legal safety, and tax optimization on every investment.",
        comparison: {
          diy: "Risk of legal mistakes, missed tax benefits",
          reit: "Generic tax treatment, no optimization",
          ssi: "Lawyers, inspections, tax optimization included"
        }
      }
    ],
    
    // 3-Column Comparison Visual
    comparisonTable: {
      title: "Compare Your Options",
      columns: [
        {
          type: "DIY Investor",
          status: "❌",
          pros: ["Full control"],
          cons: ["Time intensive", "Steep learning curve", "Hidden costs", "High risk of mistakes"]
        },
        {
          type: "REIT/Fund",
          status: "❌",
          pros: ["Passive income", "Diversification"],
          cons: ["High fees (2-3%)", "No control", "Tax inefficient", "Market average returns"]
        },
        {
          type: "SSI",
          status: "✅",
          pros: ["Expert management", "Aligned interests", "Transparent fees", "Strong ROI (20-37%)", "Tax optimized", "Hands-on care"],
          cons: []
        }
      ]
    }
  },

  // Our Track Record Section (2018-2024)
  trackRecord: {
    title: "Our Track Record (2020-2024)",
    subtitle: "Proven Performance Year After Year",
    
    stats: {
      averageROIGrowth: { from: 20, to: 37 },
      managedAssets: "Multiple Million",
      clientsServed: "100+",
      regions: ["North America", "Middle East"],
      yearsActive: 7
    },
    
    timeline: [
      {
        year: "2018",
        milestone: "Company Founded",
        description: "Silver Seed Investments established with mission to democratize real estate investing",
        icon: Building
      },
      {
        year: "2020",
        roi: 20,
        clients: "25+",
        description: "First full year of operations with 20% average ROI",
        icon: TrendingUp
      },
      {
        year: "2021",
        roi: 23,
        clients: "40+",
        description: "Expanded to Middle East markets, 23% average ROI",
        icon: TrendingUp
      },
      {
        year: "2022",
        roi: 27,
        clients: "65+",
        description: "Launched Airbnb investment model, 27% average ROI",
        icon: TrendingUp
      },
      {
        year: "2023",
        roi: 32,
        clients: "85+",
        description: "Achieved 32% average ROI, expanded team and services",
        icon: TrendingUp
      },
      {
        year: "2024",
        roi: 37,
        clients: "100+",
        description: "Record year with 37% annualized ROI, multiple million in managed assets",
        icon: Award
      }
    ],
    
    // Performance Chart Data
    performanceChart: {
      title: "ROI Performance Growth",
      years: ["2020", "2021", "2022", "2023", "2024"],
      roi: [20, 23, 27, 32, 37],
      benchmark: [8, 8, 9, 9, 10] // Market average for comparison
    }
  },

  // Contact & Consultation Section
  contact: {
    title: "Contact & Consultation",
    subtitle: "Book Your Free Consultation — Let's Plan Your Path to Financial Freedom",
    
    ctaMessage: "Ready to start building wealth through smart real estate investments? Get in touch with us today.",
    
    methods: [
      {
        type: "phone",
        icon: "Phone",
        label: "Phone",
        value: "+1-437-984-1806",
        link: "tel:+14379841806",
        primary: true
      },
      {
        type: "whatsapp",
        icon: "MessageCircle",
        label: "WhatsApp",
        value: "+966-596-237-616",
        link: "https://wa.me/966596237616",
        primary: true
      },
      {
        type: "email",
        icon: "Mail",
        label: "Email",
        value: "administration@silverseedinv.com",
        link: "mailto:administration@silverseedinv.com",
        primary: true
      },
      {
        type: "address",
        icon: "MapPin",
        label: "Office",
        value: "6894, Barrisdale Drive, Mississauga, Ontario",
        link: "https://maps.google.com/?q=6894+Barrisdale+Drive+Mississauga+Ontario"
      },
      {
        type: "website",
        icon: "Globe",
        label: "Website",
        value: "www.SilverSeedInv.com",
        link: "https://www.silverseedinv.com"
      }
    ],
    
    form: {
      title: "Schedule Your Free Consultation",
      fields: [
        { name: "fullName", label: "Full Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel", required: true },
        { name: "investmentAmount", label: "Investment Amount", type: "select", options: ["$1K-$25K", "$25K-$50K", "$50K-$100K", "$100K+"], required: false },
        { name: "message", label: "Tell us about your investment goals", type: "textarea", required: false }
      ],
      submitText: "Book Free Consultation",
      successMessage: "Thank you! We'll contact you within 24 hours to schedule your consultation."
    }
  },

  // Property Showcase - Canada & Niagara Falls
  properties: {
    title: "Featured Properties",
    subtitle: "Investment opportunities in prime Canadian and US locations",
    
    featured: [
      {
        id: "niagara-falls-rental",
        title: "Niagara Falls Family Home",
        location: "Niagara Falls, New York, USA",
        type: "Long-Term Rental",
        price: 165000,
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1450,
        roi: 24,
        monthlyRent: 2100,
        image: "/properties/niagara-falls-1.jpg",
        features: ["Recently Renovated", "Great School District", "Low Maintenance", "High Rental Demand"],
        status: "Available"
      },
      {
        id: "toronto-condo",
        title: "Downtown Toronto Condo",
        location: "Toronto, Ontario, Canada",
        type: "Airbnb/Short-Term Rental",
        price: 425000,
        bedrooms: 2,
        bathrooms: 2,
        sqft: 950,
        roi: 28,
        monthlyRent: 3800,
        image: "/properties/toronto-condo-1.jpg",
        features: ["Prime Location", "CN Tower View", "Transit Access", "High Tourism"],
        status: "Under Management"
      },
      {
        id: "mississauga-detached",
        title: "Mississauga Detached Home",
        location: "Mississauga, Ontario, Canada",
        price: 895000,
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2400,
        roi: 22,
        monthlyRent: 4200,
        type: "Long-Term Rental",
        image: "/properties/mississauga-home-1.jpg",
        features: ["Family Neighborhood", "Top Schools", "Finished Basement", "Double Garage"],
        status: "Fully Leased"
      },
      {
        id: "buffalo-investment",
        title: "Buffalo Multi-Unit Property",
        location: "Buffalo, New York, USA",
        type: "Multi-Family",
        price: 285000,
        units: 3,
        roi: 31,
        monthlyRent: 4500,
        image: "/properties/buffalo-multi-1.jpg",
        features: ["3 Rental Units", "Separate Utilities", "Strong Cash Flow", "Renovation Potential"],
        status: "Available"
      },
      {
        id: "hamilton-townhouse",
        title: "Hamilton Townhouse",
        location: "Hamilton, Ontario, Canada",
        type: "Long-Term Rental",
        price: 565000,
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 1650,
        roi: 25,
        monthlyRent: 2850,
        image: "/properties/hamilton-townhouse-1.jpg",
        features: ["Modern Kitchen", "End Unit", "Low Condo Fees", "Growing Area"],
        status: "Under Renovation"
      },
      {
        id: "niagara-on-the-lake",
        title: "Niagara-on-the-Lake Cottage",
        location: "Niagara-on-the-Lake, Ontario, Canada",
        type: "Airbnb/Vacation Rental",
        price: 625000,
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1800,
        roi: 29,
        monthlyRent: 4250,
        image: "/properties/notl-cottage-1.jpg",
        features: ["Wine Country", "Tourist Hotspot", "Scenic Views", "Premium Rental Rates"],
        status: "Fully Booked"
      }
    ]
  },

  // Site configuration
  config: {
    theme: {
      primaryColor: "teal",
      secondaryColor: "blue", 
      accentColor: "purple"
    },
    
    navigation: [
      { id: "hero", label: "Home", href: "#hero" },
      { id: "why-us", label: "Why Us", href: "#why-us" },
      { id: "services", label: "Services", href: "#services" },
      { id: "results", label: "Results", href: "#results" },
      { id: "contact", label: "Contact", href: "#contact" }
    ],
    
    socialMedia: {
      linkedin: "Silver Seed Investments",
      // Can add more platforms as needed
    }
  }
};

// Export individual sections for easier imports
export const { 
  company, 
  hero, 
  about, 
  howWeWork,
  services, 
  roiCaseStudies,
  team,
  testimonials,
  whyInvest,
  trackRecord,
  contact,
  properties,
  marketData, 
  faq, 
  config 
} = siteData;

// Default export
export default siteData;