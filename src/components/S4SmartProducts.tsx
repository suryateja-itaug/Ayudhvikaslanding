import React, { useEffect, useMemo, useState } from 'react';
import {
  Search, Check, Sparkles, Filter, Package,
  ArrowRight, Building2, Home, ShoppingCart, Plus, Minus, Trash2, MessageCircle, X
} from 'lucide-react';
import { AyudhKlinLogo } from './AyudhKlinLogo';
import brandPosterImg from '../assets/images/brand_official_poster_1784802712788.jpg';
import brandTeamworkImg from '../assets/images/brand_teamwork_quote_1784802669697.jpg';

interface S4SmartProductsProps {
  onOpenQuoteModal: (serviceOrProductName?: string) => void;
  onSelectTab: (tab: string) => void;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Cleaning Solutions' | 'Hygiene Products' | 'Air Care' | 'Equipment' | 'Supplies';
  type: 'Domestic' | 'Industrial' | 'Both';
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

type ProductCart = Record<string, number>;

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Bathroom Cleaner',
    category: 'Cleaning Solutions',
    type: 'Domestic',
    description: 'Professional-grade bathroom cleaning solution formulated for heavy lime-scale and tile stain removal.',
    features: ['Deep Cleaning', 'Anti-bacterial', 'Fresh Scent'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-2',
    name: 'Hard Surface Disinfectant',
    category: 'Cleaning Solutions',
    type: 'Both',
    description: 'Hospital-grade disinfection for all hard surfaces, counter tops, and heavy foot-traffic floors.',
    features: ['Kills 99.9% Germs', 'Quick Action', 'Safe on Surfaces'],
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=600&q=80',
    badge: 'Best Seller',
  },
  {
    id: 'prod-3',
    name: 'Glass & Surface Cleaner',
    category: 'Cleaning Solutions',
    type: 'Domestic',
    description: 'Streak-free shine for all glass, window panes, and mirror surfaces with anti-dust formulation.',
    features: ['Streak-Free Formula', 'Quick Drying', 'Anti-Static'],
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-4',
    name: 'Multi Purpose Polish',
    category: 'Cleaning Solutions',
    type: 'Both',
    description: 'Professional polish for multiple furniture, stainless steel, and composite surface shine.',
    features: ['Long-lasting Shine', 'Protective Layer', 'Multi-Surface Use'],
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-5',
    name: 'Heavy Duty Floor Degreaser',
    category: 'Cleaning Solutions',
    type: 'Industrial',
    description: 'Industrial-strength concentrated floor degreaser formulated for factories, automotive bays & warehouses.',
    features: ['Removes Oil & Grease', 'Low Foaming Formula', 'Concentrated Liquid'],
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-6',
    name: 'Automatic Hand Sanitizer Dispenser',
    category: 'Hygiene Products',
    type: 'Both',
    description: 'Touchless infrared wall-mounted & stand dispenser for high-traffic entryways and lobbies.',
    features: ['Touchless Sensor', '1000ml Refill Tank', 'Battery / Adapter Powered'],
    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80',
    badge: 'Corporate Standard',
  },
  {
    id: 'prod-7',
    name: 'Foaming Anti-Bacterial Hand Wash',
    category: 'Hygiene Products',
    type: 'Domestic',
    description: 'Gentle skin-safe antibacterial foaming hand wash with soothing moisturizers.',
    features: ['Moisturizing Formula', 'pH Balanced', 'Skin Protective'],
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-8',
    name: 'Automated Aerosol Air Freshener',
    category: 'Air Care',
    type: 'Both',
    description: 'Programmable wall-mounted fragrance dispenser unit for continuous ambient freshness.',
    features: ['24/7 Odor Control', 'Adjustable Timer Intervals', '3000 Spray Capacity'],
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-9',
    name: 'Heavy Duty Single Disc Floor Scrubber',
    category: 'Equipment',
    type: 'Industrial',
    description: 'High performance 17-inch commercial floor scrubbing and polishing machine with gear drive.',
    features: ['Heavy Duty Motor', 'Ergonomic Handle', 'Multi-Surface Pad'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-10',
    name: 'Industrial Wet & Dry Vacuum Cleaner',
    category: 'Equipment',
    type: 'Industrial',
    description: 'High suction 30L stainless steel commercial wet and dry extractor with heavy duty accessories.',
    features: ['Dual Turbine Motor', 'Blower Function', 'HEPA Filtration'],
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-11',
    name: 'Microfiber Mop & Bucket System',
    category: 'Supplies',
    type: 'Both',
    description: 'Professional dual-chamber spin mop bucket set with lint-free microfiber heads.',
    features: ['Dual Chamber Wringer', '360 Spin Mop Head', 'Lint-Free Microfiber'],
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-12',
    name: 'Nitrile Safety Gloves & PPE Supplies',
    category: 'Supplies',
    type: 'Industrial',
    description: 'Chemical resistant powder-free heavy duty nitrile safety gloves for sanitation teams.',
    features: ['Chemical Resistant', 'Textured Grip', 'Tear Resistant'],
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=600&q=80',
  },
];

const CATEGORIES = [
  'All Products',
  'Cleaning Solutions',
  'Hygiene Products',
  'Air Care',
  'Equipment',
  'Supplies',
] as const;

export const S4SmartProducts: React.FC<S4SmartProductsProps> = ({ onSelectTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [selectedType, setSelectedType] = useState<'All' | 'Domestic' | 'Industrial'>('All');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartToast, setCartToast] = useState<string | null>(null);
  const [cart, setCart] = useState<ProductCart>(() => {
    try {
      const savedCart = sessionStorage.getItem('ayudhklin-product-cart');
      return savedCart ? JSON.parse(savedCart) as ProductCart : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    sessionStorage.setItem('ayudhklin-product-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!cartToast) return;

    const timeout = window.setTimeout(() => {
      setCartToast(null);
    }, 2200);

    return () => window.clearTimeout(timeout);
  }, [cartToast]);

  // Filter products
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    // Search query filter
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category filter
    const matchesCategory = 
      selectedCategory === 'All Products' || product.category === selectedCategory;

    // Type filter
    const matchesType = 
      selectedType === 'All' || 
      product.type === selectedType || 
      product.type === 'Both';

    return matchesSearch && matchesCategory && matchesType;
  });

  const handleSelectDomesticCard = () => {
    setSelectedType('Domestic');
    const catalogEl = document.getElementById('product-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectIndustrialCard = () => {
    setSelectedType('Industrial');
    const catalogEl = document.getElementById('product-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartItems = useMemo(() => (
    Object.entries(cart)
      .map(([productId, quantity]) => {
        const product = PRODUCTS_DATA.find((item) => item.id === productId);
        return product ? { product, quantity } : null;
      })
      .filter((item): item is { product: ProductItem; quantity: number } => Boolean(item))
  ), [cart]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const showCartToast = (message = 'Your cart has been updated') => {
    setCartToast(message);
  };

  const addToCart = (productId: string) => {
    const product = PRODUCTS_DATA.find((item) => item.id === productId);

    setCart((current) => ({
      ...current,
      [productId]: (current[productId] || 0) + 1,
    }));
    showCartToast(product ? `${product.name} added. Cart updated.` : 'Product added. Cart updated.');
  };

  const reduceFromCart = (productId: string) => {
    setCart((current) => {
      const nextQuantity = (current[productId] || 0) - 1;
      const nextCart = { ...current };

      if (nextQuantity <= 0) {
        delete nextCart[productId];
      } else {
        nextCart[productId] = nextQuantity;
      }

      return nextCart;
    });
    showCartToast('Quantity updated in cart.');
  };

  const removeFromCart = (productId: string) => {
    const product = PRODUCTS_DATA.find((item) => item.id === productId);

    setCart((current) => {
      const nextCart = { ...current };
      delete nextCart[productId];
      return nextCart;
    });
    showCartToast(product ? `${product.name} removed. Cart updated.` : 'Product removed. Cart updated.');
  };

  const clearCart = () => {
    setCart({});
    showCartToast('Cart cleared.');
  };

  const handleBuyOnWhatsApp = () => {
    if (cartItems.length === 0) return;

    const productLines = cartItems
      .map(({ product, quantity }, index) => (
        `${index + 1}. ${product.name}\n` +
        `   Quantity: ${quantity}\n` +
        `   Category: ${product.category}\n` +
        `   Type: ${product.type}\n` +
        `   Notes: ${product.features.join(', ')}`
      ))
      .join('\n\n');

    const message = [
      'Hi AyudhKlin Team,',
      '',
      'I would like to buy/order the following AyudhKlin products:',
      '',
      productLines,
      '',
      `Total selected items: ${cartCount}`,
      '',
      'Please share availability, pricing, delivery charges, and payment details.',
      '',
      'Customer details:',
      'Name:',
      'Delivery address:',
      'Preferred delivery time:',
    ].join('\n');

    window.open(`https://wa.me/919000045073?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white min-h-screen pb-20 text-slate-900 font-sans">
      {cartCount > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-24 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-900/35 ring-4 ring-white transition-transform hover:scale-105"
          aria-label="Open AyudhKlin cart"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 grid h-6 min-w-6 place-items-center rounded-full bg-red-600 px-1.5 text-[11px] font-black text-white ring-2 ring-white">
            {cartCount}
          </span>
        </button>
      )}

      {cartToast && (
        <div className="fixed bottom-40 right-5 z-50 max-w-[18rem] rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-2xl shadow-slate-950/15">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span>{cartToast}</span>
          </div>
        </div>
      )}

      {cartOpen && (
        <div className="fixed inset-0 z-[70] bg-slate-950/50 backdrop-blur-sm">
          <div className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-emerald-100 px-4 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShoppingCart className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-lg font-extrabold text-slate-950">AyudhKlin Cart</h2>
                  <p className="text-xs font-semibold text-slate-500">
                    {cartCount} item{cartCount === 1 ? '' : 's'} selected for WhatsApp order
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingCart className="h-12 w-12 text-emerald-200" />
                  <h3 className="mt-3 text-lg font-extrabold text-slate-950">Your cart is empty</h3>
                  <p className="mt-1 max-w-xs text-sm text-slate-500">Add AyudhKlin products from the catalog to prepare a WhatsApp order.</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-5 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-extrabold text-white hover:bg-emerald-700"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map(({ product, quantity }) => (
                    <div key={product.id} className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-3">
                      <div className="flex gap-3">
                        <img src={product.image} alt={product.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover" />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-sm font-extrabold text-slate-950">{product.name}</h3>
                              <p className="mt-1 text-[11px] font-bold text-emerald-700">{product.category} | {product.type}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-red-600 border border-red-100 hover:bg-red-50"
                              aria-label={`Remove ${product.name}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between gap-3">
                            <div className="grid grid-cols-[2.25rem_3rem_2.25rem] items-center rounded-xl border border-emerald-200 bg-white p-1">
                              <button
                                onClick={() => reduceFromCart(product.id)}
                                className="grid h-8 place-items-center rounded-lg text-emerald-700 hover:bg-emerald-50"
                                aria-label={`Reduce ${product.name}`}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <div className="text-center text-xs font-extrabold text-emerald-900">{quantity}</div>
                              <button
                                onClick={() => addToCart(product.id)}
                                className="grid h-8 place-items-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                                aria-label={`Add another ${product.name}`}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <span className="text-xs font-bold text-slate-500">Qty {quantity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-emerald-100 bg-white px-4 py-4 sm:px-6">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="font-bold text-slate-600">Total quantity</span>
                <span className="font-black text-slate-950">{cartCount}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={clearCart}
                  disabled={cartCount === 0}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Clear
                </button>
                <button
                  onClick={handleBuyOnWhatsApp}
                  disabled={cartCount === 0}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-extrabold text-white shadow-md shadow-emerald-900/15 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <MessageCircle className="h-4 w-4" />
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {/* Pristine Green & White Top Banner / Brand Header */}
      <div className="bg-gradient-to-b from-emerald-50/80 via-emerald-100/40 to-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-100 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-300/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-5">
          {/* Brand Logo & Tagline Component backgroundless */}
          <div className="flex justify-center mb-2">
            <AyudhKlinLogo size="xl" showTagline={true} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>EXCLUSIVELY GREEN & CLEAN SOLUTIONS</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-emerald-950 tracking-tight">
            AyudhKlin Professional Products
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Add domestic and industrial hygiene products to your cart, review quantities, and send your selected order directly to our WhatsApp desk.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">

        {/* SECTION 1: 2 Main Cards (Domestic & Industrial) - Green & White Style */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Domestic Products Card */}
          <div 
            onClick={handleSelectDomesticCard}
            className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200 cursor-pointer flex flex-col ${
              selectedType === 'Domestic' ? 'ring-2 ring-emerald-600 bg-emerald-50/20' : ''
            }`}
          >
            <div className="relative h-56 sm:h-64 overflow-hidden bg-emerald-50">
              <img 
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80" 
                alt="Domestic Products" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-emerald-900 border border-emerald-200 shadow-sm">
                <Home className="w-3.5 h-3.5 text-emerald-600" />
                <span>Home & Office</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex flex-col">
                  <span>Domestic Products</span>
                  <span className="w-12 h-1 bg-emerald-500 rounded-full mt-1.5" />
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Professional eco-safe cleaning solutions for homes, residential units, and small business offices.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Browse Domestic Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Industrial Products Card */}
          <div 
            onClick={handleSelectIndustrialCard}
            className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200 cursor-pointer flex flex-col ${
              selectedType === 'Industrial' ? 'ring-2 ring-emerald-600 bg-emerald-50/20' : ''
            }`}
          >
            <div className="relative h-56 sm:h-64 overflow-hidden bg-emerald-50">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" 
                alt="Industrial Products" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-emerald-900 border border-emerald-200 shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Heavy Duty Commercial</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex flex-col">
                  <span>Industrial Products</span>
                  <span className="w-12 h-1 bg-emerald-500 rounded-full mt-1.5" />
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Heavy-duty industrial floor scrubbers, degreasers, and automated hygiene systems.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Browse Industrial Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </section>


        {/* SECTION 2: Search Bar & Filter Pills - Green & White Style */}
        <section id="product-catalog" className="pt-6 space-y-6">
          
          {/* Green-focused Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AyudhKlin products..."
                className="w-full h-14 pl-6 pr-14 rounded-full bg-white border border-emerald-300 text-slate-800 text-sm sm:text-base font-medium shadow-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-slate-400"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-emerald-600 pointer-events-none">
                <Search className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Sub-Filter: Type Tabs */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold">
            <span className="text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-emerald-600" /> Type:
            </span>
            {(['All', 'Domestic', 'Industrial'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                  selectedType === t
                    ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-sm'
                    : 'bg-white text-emerald-800 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50'
                }`}
              >
                {t} {t !== 'All' ? 'Only' : ''}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md border border-emerald-600'
                      : 'bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </section>


        {/* Cart Summary */}
        <section className="rounded-3xl border border-emerald-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShoppingCart className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-slate-950">AyudhKlin Cart</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {cartCount > 0
                    ? `${cartCount} item${cartCount === 1 ? '' : 's'} selected. Add more quantities or buy through WhatsApp.`
                    : 'Add products from the catalog below. Your cart is saved for this browser session.'}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={clearCart}
                disabled={cartCount === 0}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Clear Cart</span>
              </button>
              <button
                onClick={handleBuyOnWhatsApp}
                disabled={cartCount === 0}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-extrabold text-white shadow-md shadow-emerald-900/15 transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Buy</span>
              </button>
            </div>
          </div>

          {cartItems.length > 0 && (
            <div className="mt-4 grid gap-2 border-t border-emerald-100 pt-4 md:grid-cols-2 xl:grid-cols-3">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-3 rounded-2xl bg-emerald-50/70 p-2.5 border border-emerald-100">
                  <img src={product.image} alt={product.name} className="h-14 w-14 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-extrabold text-slate-950">{product.name}</p>
                    <p className="text-[11px] font-bold text-emerald-700">Qty: {quantity}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => reduceFromCart(product.id)}
                      className="grid h-7 w-7 place-items-center rounded-lg bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                      aria-label={`Reduce ${product.name}`}
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                      aria-label={`Add ${product.name}`}
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="grid h-7 w-7 place-items-center rounded-lg bg-white text-red-600 border border-red-100 hover:bg-red-50"
                      aria-label={`Remove ${product.name}`}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION 3: Product Cards Grid - Green & White Style */}
        <section className="pt-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-emerald-200 p-8">
              <Package className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching AyudhKlin products found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Try adjusting your search terms or select a different category pill.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Products');
                  setSelectedType('All');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const quantity = cart[product.id] || 0;

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-3xl border border-emerald-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                  {/* Top Product Display Header */}
                  <div className="relative h-48 overflow-hidden bg-emerald-50 border-b border-emerald-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/15 to-transparent" />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    <span className="absolute top-3 right-3 text-[10px] font-semibold text-emerald-800 bg-white px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {product.type}
                    </span>

                    <h3 className="absolute bottom-3 left-4 right-4 text-lg font-extrabold text-white tracking-tight leading-tight">
                      {product.name}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Category Badge Pill */}
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                          {product.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        {product.name}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-slate-500 leading-relaxed min-h-[36px]">
                        {product.description}
                      </p>

                      {/* Features with Green Checkmarks */}
                      <div className="space-y-1.5 pt-2 border-t border-emerald-100">
                        {product.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                            <div className="flex items-center text-emerald-600 font-bold shrink-0">
                              <Check className="w-3.5 h-3.5 -mr-1" />
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-medium text-[11px]">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cart Action Button */}
                    <div className="pt-3">
                      {quantity > 0 ? (
                        <div className="grid grid-cols-[2.5rem_1fr_2.5rem] items-center rounded-xl border border-emerald-200 bg-emerald-50 p-1">
                          <button
                            onClick={() => reduceFromCart(product.id)}
                            className="grid h-9 place-items-center rounded-lg bg-white text-emerald-700 hover:bg-emerald-100"
                            aria-label={`Reduce ${product.name}`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <div className="text-center text-xs font-extrabold text-emerald-900">
                            {quantity} in cart
                          </div>
                          <button
                            onClick={() => addToCart(product.id)}
                            className="grid h-9 place-items-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                            aria-label={`Add another ${product.name}`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(product.id)}
                          className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <Plus className="w-3.5 h-3.5 text-emerald-100" />
                          <span>Add</span>
                        </button>
                      )}
                    </div>
                  </div>

                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Brand Artwork & Poster Showcase */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-emerald-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>AYUDHKLIN BRAND IDENTITY</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Official AyudhKlin Product & Cleaning Posters</h3>
            </div>
            <button
              onClick={() => onSelectTab('services')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <span>View Cleaning Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-emerald-200 overflow-hidden bg-slate-50 flex flex-col sm:flex-row items-center group">
              <div className="w-full sm:w-1/2 h-52 overflow-hidden">
                <img
                  src={brandPosterImg}
                  alt="Official AyudhKlin Deep Cleaning & Civil Cleaning Poster"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full sm:w-1/2 p-4 space-y-2">
                <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-100 px-2 py-0.5 rounded">AyudhKlin Division</span>
                <h4 className="text-sm font-bold text-slate-900">Clean. Care. Protect.</h4>
                <p className="text-xs text-slate-600">
                  Housekeeping, Deep Cleaning, Civil Cleaning & Chemical Hygiene Supplies under AyudhKlin brand.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200 overflow-hidden bg-slate-50 flex flex-col sm:flex-row items-center group">
              <div className="w-full sm:w-1/2 h-52 overflow-hidden">
                <img
                  src={brandTeamworkImg}
                  alt="AyudhKlin Teamwork and Leadership Philosophy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full sm:w-1/2 p-4 space-y-2">
                <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-100 px-2 py-0.5 rounded">Team Culture</span>
                <h4 className="text-sm font-bold text-slate-900">Productivity & Care</h4>
                <p className="text-xs text-slate-600">
                  "Do everything in love." Our janitorial teams operate with discipline, thoroughness, and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Cart CTA Card - Green & White */}
        <section className="bg-emerald-600 text-white rounded-3xl p-8 sm:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-500">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-emerald-100 tracking-wider uppercase">AyudhKlin WhatsApp Checkout</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to buy selected cleaning products?</h3>
            <p className="text-emerald-50 text-xs sm:text-sm max-w-xl">
              Add multiple quantities per product, review your cart, and send the complete product list to our WhatsApp desk for pricing, availability, and delivery coordination.
            </p>
          </div>

          <button
            onClick={handleBuyOnWhatsApp}
            disabled={cartCount === 0}
            className="px-6 py-3.5 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs sm:text-sm cursor-pointer shadow-md transition-all shrink-0 flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>{cartCount > 0 ? `Buy ${cartCount} Item${cartCount === 1 ? '' : 's'}` : 'Add Products First'}</span>
          </button>
        </section>

      </div>
    </div>
  );
};
