import React, { useEffect, useMemo, useState } from 'react';
import {
  Search, Check, Sparkles, Filter, Package,
  ArrowRight, ShoppingCart, Plus, Minus, Trash2, MessageCircle, X
} from 'lucide-react';
import { Logo } from './Logo';
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

type ProductVisualKind = 'bottle' | 'spray' | 'polish' | 'dispenser' | 'freshener' | 'scrubber' | 'vacuum' | 'mop' | 'gloves';

const escapeSvgText = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const productImage = (label: string, kind: ProductVisualKind, accent = '#059669') => {
  const title = escapeSvgText(label);
  const icons: Record<ProductVisualKind, string> = {
    bottle: `
      <rect x="220" y="82" width="80" height="58" rx="16" fill="#dbeafe"/>
      <rect x="235" y="126" width="50" height="32" rx="8" fill="#0f766e"/>
      <rect x="175" y="145" width="170" height="215" rx="34" fill="#ecfdf5" stroke="${accent}" stroke-width="8"/>
      <rect x="205" y="205" width="110" height="80" rx="20" fill="${accent}" opacity=".9"/>
      <path d="M214 314h92" stroke="#99f6e4" stroke-width="10" stroke-linecap="round"/>
      <path d="M224 334h72" stroke="#99f6e4" stroke-width="8" stroke-linecap="round"/>
    `,
    spray: `
      <rect x="201" y="92" width="115" height="42" rx="14" fill="#0f766e"/>
      <path d="M308 104h70c18 0 33 15 33 33v3h-103z" fill="#99f6e4"/>
      <path d="M186 149h145l-21 211H206z" fill="#ecfdf5" stroke="${accent}" stroke-width="8" stroke-linejoin="round"/>
      <rect x="210" y="210" width="96" height="70" rx="18" fill="${accent}"/>
      <circle cx="404" cy="136" r="8" fill="#0f766e"/>
      <circle cx="438" cy="124" r="5" fill="#14b8a6"/>
      <circle cx="462" cy="151" r="4" fill="#14b8a6"/>
    `,
    polish: `
      <ellipse cx="260" cy="330" rx="118" ry="32" fill="#0f172a" opacity=".18"/>
      <rect x="188" y="130" width="144" height="205" rx="34" fill="#ecfdf5" stroke="${accent}" stroke-width="8"/>
      <rect x="214" y="92" width="92" height="58" rx="18" fill="#0f766e"/>
      <path d="M198 246c46 26 88 26 124 0v48c-37 28-82 28-124 0z" fill="${accent}"/>
      <path d="M356 122l68-24m-44 63l75-4m-68 43l58 25" stroke="#facc15" stroke-width="10" stroke-linecap="round"/>
    `,
    dispenser: `
      <rect x="186" y="92" width="148" height="238" rx="30" fill="#f8fafc" stroke="${accent}" stroke-width="8"/>
      <rect x="218" y="122" width="84" height="70" rx="16" fill="#dbeafe"/>
      <circle cx="260" cy="238" r="30" fill="${accent}"/>
      <path d="M236 300h48" stroke="#0f766e" stroke-width="12" stroke-linecap="round"/>
      <path d="M356 186c25 18 25 56 0 74m34-104c43 39 43 105 0 144" stroke="#99f6e4" stroke-width="12" stroke-linecap="round" fill="none"/>
    `,
    freshener: `
      <rect x="196" y="112" width="128" height="220" rx="40" fill="#f8fafc" stroke="${accent}" stroke-width="8"/>
      <circle cx="260" cy="172" r="26" fill="#99f6e4"/>
      <rect x="226" y="226" width="68" height="72" rx="18" fill="${accent}"/>
      <path d="M360 142c-46 40-46 81 0 121m36-152c-66 60-66 125 0 185" stroke="#14b8a6" stroke-width="11" stroke-linecap="round" fill="none"/>
    `,
    scrubber: `
      <ellipse cx="262" cy="332" rx="135" ry="34" fill="#0f172a" opacity=".18"/>
      <rect x="171" y="248" width="190" height="70" rx="32" fill="${accent}"/>
      <circle cx="220" cy="314" r="38" fill="#ecfdf5" stroke="#0f766e" stroke-width="8"/>
      <circle cx="312" cy="314" r="38" fill="#ecfdf5" stroke="#0f766e" stroke-width="8"/>
      <path d="M305 245l72-128" stroke="#0f766e" stroke-width="16" stroke-linecap="round"/>
      <path d="M373 116h58" stroke="#0f766e" stroke-width="16" stroke-linecap="round"/>
    `,
    vacuum: `
      <ellipse cx="262" cy="334" rx="138" ry="32" fill="#0f172a" opacity=".18"/>
      <rect x="177" y="166" width="146" height="154" rx="34" fill="#f8fafc" stroke="${accent}" stroke-width="8"/>
      <rect x="210" y="118" width="80" height="58" rx="20" fill="#0f766e"/>
      <circle cx="220" cy="322" r="25" fill="#0f766e"/>
      <circle cx="304" cy="322" r="25" fill="#0f766e"/>
      <path d="M322 214c59-8 94 13 105 63 7 31-8 54-37 62" stroke="#14b8a6" stroke-width="14" stroke-linecap="round" fill="none"/>
    `,
    mop: `
      <path d="M330 90l-130 245" stroke="#0f766e" stroke-width="16" stroke-linecap="round"/>
      <rect x="154" y="292" width="155" height="52" rx="22" fill="${accent}"/>
      <path d="M170 344l-42 44m82-42l-24 50m66-52l24 50m18-50l50 44" stroke="#99f6e4" stroke-width="10" stroke-linecap="round"/>
      <rect x="342" y="204" width="88" height="118" rx="24" fill="#ecfdf5" stroke="${accent}" stroke-width="8"/>
      <path d="M356 250h60" stroke="#0f766e" stroke-width="10" stroke-linecap="round"/>
    `,
    gloves: `
      <path d="M188 318c-20-54-4-112 38-134l13 90 13-144c2-18 31-17 32 1l3 133 19-105c4-19 32-14 30 6l-10 109 30-58c10-19 38-6 30 15l-42 102c-16 38-52 57-96 49-30-5-50-25-60-64z" fill="#ecfdf5" stroke="${accent}" stroke-width="8"/>
      <path d="M317 314c36-10 64 2 81 34" stroke="#14b8a6" stroke-width="12" stroke-linecap="round" fill="none"/>
      <circle cx="401" cy="176" r="28" fill="#dbeafe"/>
      <path d="M389 176h24m-12-12v24" stroke="#0f766e" stroke-width="8" stroke-linecap="round"/>
    `,
  };

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f0fdfa"/>
          <stop offset=".55" stop-color="#d1fae5"/>
          <stop offset="1" stop-color="#ccfbf1"/>
        </linearGradient>
        <radialGradient id="glow" cx=".72" cy=".22" r=".52">
          <stop offset="0" stop-color="#ffffff" stop-opacity=".95"/>
          <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="420" fill="url(#bg)"/>
      <circle cx="462" cy="72" r="170" fill="url(#glow)"/>
      <path d="M38 95c76-54 151-68 224-41 95 36 152-16 252-1" fill="none" stroke="#ffffff" stroke-opacity=".65" stroke-width="20" stroke-linecap="round"/>
      ${icons[kind]}
      <rect x="54" y="42" width="164" height="32" rx="16" fill="#ffffff" opacity=".8"/>
      <text x="72" y="64" font-family="Arial, sans-serif" font-size="15" font-weight="800" fill="#065f46">Ayudhklin</text>
      <text x="54" y="386" font-family="Arial, sans-serif" font-size="25" font-weight="900" fill="#064e3b">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Bathroom Cleaner',
    category: 'Cleaning Solutions',
    type: 'Domestic',
    description: 'Professional-grade bathroom cleaning solution formulated for heavy lime-scale and tile stain removal.',
    features: ['Deep Cleaning', 'Anti-bacterial', 'Fresh Scent'],
    image: productImage('Bathroom Cleaner', 'bottle'),
  },
  {
    id: 'prod-2',
    name: 'Hard Surface Disinfectant',
    category: 'Cleaning Solutions',
    type: 'Both',
    description: 'Hospital-grade disinfection for all hard surfaces, counter tops, and heavy foot-traffic floors.',
    features: ['Kills 99.9% Germs', 'Quick Action', 'Safe on Surfaces'],
    image: productImage('Surface Disinfectant', 'spray', '#0d9488'),
    badge: 'Best Seller',
  },
  {
    id: 'prod-3',
    name: 'Glass & Surface Cleaner',
    category: 'Cleaning Solutions',
    type: 'Domestic',
    description: 'Streak-free shine for all glass, window panes, and mirror surfaces with anti-dust formulation.',
    features: ['Streak-Free Formula', 'Quick Drying', 'Anti-Static'],
    image: productImage('Glass Cleaner', 'spray', '#0284c7'),
  },
  {
    id: 'prod-4',
    name: 'Multi Purpose Polish',
    category: 'Cleaning Solutions',
    type: 'Both',
    description: 'Professional polish for multiple furniture, stainless steel, and composite surface shine.',
    features: ['Long-lasting Shine', 'Protective Layer', 'Multi-Surface Use'],
    image: productImage('Multi Purpose Polish', 'polish', '#ca8a04'),
  },
  {
    id: 'prod-5',
    name: 'Heavy Duty Floor Degreaser',
    category: 'Cleaning Solutions',
    type: 'Industrial',
    description: 'Industrial-strength concentrated floor degreaser formulated for factories, automotive bays & warehouses.',
    features: ['Removes Oil & Grease', 'Low Foaming Formula', 'Concentrated Liquid'],
    image: productImage('Floor Degreaser', 'bottle', '#16a34a'),
  },
  {
    id: 'prod-6',
    name: 'Automatic Hand Sanitizer Dispenser',
    category: 'Hygiene Products',
    type: 'Both',
    description: 'Touchless infrared wall-mounted & stand dispenser for high-traffic entryways and lobbies.',
    features: ['Touchless Sensor', '1000ml Refill Tank', 'Battery / Adapter Powered'],
    image: productImage('Sanitizer Dispenser', 'dispenser', '#0891b2'),
    badge: 'Corporate Standard',
  },
  {
    id: 'prod-7',
    name: 'Foaming Anti-Bacterial Hand Wash',
    category: 'Hygiene Products',
    type: 'Domestic',
    description: 'Gentle skin-safe antibacterial foaming hand wash with soothing moisturizers.',
    features: ['Moisturizing Formula', 'pH Balanced', 'Skin Protective'],
    image: productImage('Anti-Bacterial Hand Wash', 'bottle', '#0d9488'),
  },
  {
    id: 'prod-8',
    name: 'Automated Aerosol Air Freshener',
    category: 'Air Care',
    type: 'Both',
    description: 'Programmable wall-mounted fragrance dispenser unit for continuous ambient freshness.',
    features: ['24/7 Odor Control', 'Adjustable Timer Intervals', '3000 Spray Capacity'],
    image: productImage('Aerosol Air Freshener', 'freshener', '#7c3aed'),
  },
  {
    id: 'prod-9',
    name: 'Heavy Duty Single Disc Floor Scrubber',
    category: 'Equipment',
    type: 'Industrial',
    description: 'High performance 17-inch commercial floor scrubbing and polishing machine with gear drive.',
    features: ['Heavy Duty Motor', 'Ergonomic Handle', 'Multi-Surface Pad'],
    image: productImage('Floor Scrubber', 'scrubber', '#0f766e'),
  },
  {
    id: 'prod-10',
    name: 'Industrial Wet & Dry Vacuum Cleaner',
    category: 'Equipment',
    type: 'Industrial',
    description: 'High suction 30L stainless steel commercial wet and dry extractor with heavy duty accessories.',
    features: ['Dual Turbine Motor', 'Blower Function', 'HEPA Filtration'],
    image: productImage('Wet & Dry Vacuum', 'vacuum', '#334155'),
  },
  {
    id: 'prod-11',
    name: 'Microfiber Mop & Bucket System',
    category: 'Supplies',
    type: 'Both',
    description: 'Professional dual-chamber spin mop bucket set with lint-free microfiber heads.',
    features: ['Dual Chamber Wringer', '360 Spin Mop Head', 'Lint-Free Microfiber'],
    image: productImage('Mop & Bucket System', 'mop', '#059669'),
  },
  {
    id: 'prod-12',
    name: 'Nitrile Safety Gloves & PPE Supplies',
    category: 'Supplies',
    type: 'Industrial',
    description: 'Chemical resistant powder-free heavy duty nitrile safety gloves for sanitation teams.',
    features: ['Chemical Resistant', 'Textured Grip', 'Tear Resistant'],
    image: productImage('Safety Gloves & PPE', 'gloves', '#2563eb'),
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
    <div className="min-h-screen bg-white pb-8 font-sans text-slate-900">
      {cartCount > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-28 right-3 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-900/35 ring-4 ring-white transition-transform hover:scale-105 sm:bottom-24 sm:right-5 sm:h-14 sm:w-14"
          aria-label="Open AyudhKlin cart"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 grid h-6 min-w-6 place-items-center rounded-full bg-red-600 px-1.5 text-[11px] font-black text-white ring-2 ring-white">
            {cartCount}
          </span>
        </button>
      )}

      {cartToast && (
        <div className="fixed bottom-44 left-3 right-3 z-50 max-w-sm rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-2xl shadow-slate-950/15 sm:left-auto sm:right-5 sm:max-w-[18rem]">
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

      <div className="mx-auto max-w-7xl space-y-12 px-4 pb-8 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <section className="rounded-3xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Logo size="lg" showText textColor="text-slate-950" />
              <span className="hidden h-12 w-px bg-emerald-100 sm:block" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">AyudhKlin by Ayudh Vikas</p>
                <h1 className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl">Cleaning Products Catalog</h1>
                <p className="mt-1 max-w-2xl text-base leading-relaxed text-slate-600">
                  Professional cleaning products and supplies from the Ayudh Vikas service ecosystem.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-extrabold text-emerald-800 hover:bg-emerald-100"
            >
              <ShoppingCart className="h-4 w-4" />
              View Cart ({cartCount})
            </button>
          </div>
        </section>

        <section id="product-catalog" className="space-y-6">
          
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
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
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
