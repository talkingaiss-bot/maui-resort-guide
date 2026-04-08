import React from 'react';
import { motion } from 'motion/react';
import { regions } from '@/src/data/mauiData';
import { SEO } from '@/src/components/SEO';
import { Star, MapPin, ExternalLink, Filter } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Hotels() {
  const [filter, setFilter] = React.useState<'all' | 'hotel' | 'condo' | 'rental'>('all');

  // Flatten all accommodations from all beaches in all regions
  const allAccommodations = regions.flatMap(region => 
    region.beaches.flatMap(beach => 
      beach.accommodations.map(acc => ({ 
        ...acc, 
        regionName: region.name, 
        beachName: beach.name,
        regionId: region.id,
        beachId: beach.id
      }))
    )
  );

  const filteredAcc = filter === 'all' 
    ? allAccommodations 
    : allAccommodations.filter(acc => acc.type === filter);

  return (
    <div className="pt-40 pb-20 px-6">
      <SEO 
        title="Luxury Maui Accommodations" 
        description="Browse our curated selection of Maui's finest hotels, luxury condos, and private vacation rentals." 
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-serif mb-8">Stay in Paradise</h1>
          <p className="text-xl text-maui-ink/60 max-w-2xl mx-auto mb-12">
            From world-renowned 5-star resorts to secluded private villas, find your perfect home away from home on Maui.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'hotel', 'condo', 'rental'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={cn(
                  "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border",
                  filter === type 
                    ? "bg-maui-ink text-white border-maui-ink" 
                    : "bg-white text-maui-ink border-maui-ink/10 hover:border-maui-ink/30"
                )}
              >
                {type === 'all' ? 'All Stays' : `${type}s`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredAcc.map((acc, index) => (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={acc.image} 
                  alt={acc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-maui-blue text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {acc.type}
                  </span>
                  <span className="bg-white/90 backdrop-blur text-maui-ink text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {acc.priceRange}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-serif mb-2">{acc.name}</h2>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-50 font-semibold">
                      <MapPin className="w-3 h-3" /> {acc.beachName}, {acc.regionName}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">{acc.rating}</span>
                  </div>
                </div>
                <p className="text-maui-ink/60 text-base mb-8 leading-relaxed line-clamp-3">{acc.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {acc.amenities.map(amenity => (
                    <span key={amenity} className="text-[10px] uppercase tracking-widest font-bold text-maui-ink/40 bg-maui-paper px-3 py-1.5 rounded-lg">
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={acc.bookingUrl}
                    className="flex-grow py-4 rounded-xl bg-maui-ink text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-maui-blue transition-colors"
                  >
                    Book Now <ExternalLink className="w-4 h-4" />
                  </a>
                  <button className="px-6 py-4 rounded-xl border border-maui-ink/10 hover:bg-maui-paper transition-colors">
                    <Star className="w-5 h-5 text-maui-ink/30" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAcc.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-serif opacity-40">No accommodations found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
