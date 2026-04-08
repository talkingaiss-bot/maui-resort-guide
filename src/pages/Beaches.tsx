import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { regions } from '@/src/data/mauiData';
import { SEO } from '@/src/components/SEO';
import { Waves, MapPin, ArrowRight } from 'lucide-react';

export default function Beaches() {
  // Flatten all beaches from all regions
  const allBeaches = regions.flatMap(region => 
    region.beaches.map(beach => ({ ...beach, regionName: region.name, regionId: region.id }))
  );

  return (
    <div className="pt-40 pb-20 px-6">
      <SEO 
        title="Maui Beaches Guide" 
        description="Explore the best beaches in Maui, from the golden sands of Wailea to the crystal waters of Ka'anapali." 
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-serif mb-8">Pristine Shores</h1>
          <p className="text-xl text-maui-ink/60 max-w-2xl mx-auto">
            Discover over 30 miles of world-famous coastline. Filter by region or browse our curated selection of Maui's finest beaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allBeaches.map((beach, index) => (
            <motion.div
              key={beach.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/regions/${beach.regionId}/${beach.id}`} className="group block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                  <img 
                    src={beach.image} 
                    alt={beach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-maui-ink flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {beach.regionName}
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-serif group-hover:text-maui-blue transition-colors">{beach.name}</h2>
                </div>
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest opacity-60 mb-4">
                  <span className="flex items-center gap-1"><Waves className="w-3 h-3" /> {beach.conditions}</span>
                </div>
                <p className="text-maui-ink/60 leading-relaxed line-clamp-2 mb-6">{beach.description}</p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-maui-blue group-hover:gap-4 transition-all">
                  View Beach Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
