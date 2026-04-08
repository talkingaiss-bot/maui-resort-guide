import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { regions } from '@/src/data/mauiData';
import { SEO } from '@/src/components/SEO';
import { ArrowRight, Map } from 'lucide-react';

export default function Regions() {
  return (
    <div className="pt-40 pb-20 px-6">
      <SEO 
        title="Maui Regions Guide" 
        description="Explore Maui's diverse regions, from the luxury of Wailea to the lush beauty of Kapalua." 
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-serif mb-8">Island Regions</h1>
          <p className="text-xl text-maui-ink/60 max-w-2xl mx-auto">
            Maui is an island of micro-climates and diverse landscapes. Choose a region to begin your discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-3xl bg-maui-ink"
            >
              <img 
                src={region.image} 
                alt={region.name}
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <div className="flex items-center gap-3 text-maui-blue mb-4">
                  <Map className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                    {region.beaches.length} Beaches to Explore
                  </span>
                </div>
                <h2 className="text-5xl font-serif text-white mb-6">{region.name}</h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl leading-relaxed">{region.description}</p>
                <Link 
                  to={`/regions/${region.id}`}
                  className="inline-flex items-center gap-3 bg-white text-maui-ink px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-maui-blue hover:text-white transition-all"
                >
                  Explore {region.name} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
