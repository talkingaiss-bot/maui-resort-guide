import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Waves, Info, Star, ExternalLink } from 'lucide-react';
import { regions } from '@/src/data/mauiData';
import { SEO } from '@/src/components/SEO';
import { cn } from '@/src/lib/utils';

export function RegionDetail() {
  const { regionId } = useParams();
  const region = regions.find(r => r.id === regionId);
  const navigate = useNavigate();

  if (!region) return <div className="py-40 text-center">Region not found</div>;

  return (
    <div className="pt-20">
      <SEO title={region.name} description={region.description} image={region.image} />
      
      {/* Region Hero */}
      <section className="relative h-[60vh] flex items-end px-6 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={region.image} 
            alt={region.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maui-paper via-maui-paper/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link to="/regions" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-8 hover:opacity-70">
            <ArrowLeft className="w-4 h-4" /> All Regions
          </Link>
          <h1 className="text-6xl md:text-8xl font-serif mb-6">{region.name}</h1>
          <p className="text-xl max-w-2xl text-maui-ink/80 leading-relaxed">{region.description}</p>
        </div>
      </section>

      {/* Beaches in Region */}
      <section className="py-20 px-6 bg-maui-paper">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-maui-blue mb-12 font-semibold">Beaches in {region.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {region.beaches.map((beach) => (
              <Link key={beach.id} to={`/regions/${region.id}/${beach.id}`} className="group">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                  <img 
                    src={beach.image} 
                    alt={beach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {beach.accommodations.length} Accommodations
                  </div>
                </div>
                <h3 className="text-3xl font-serif mb-3 group-hover:text-maui-blue transition-colors">{beach.name}</h3>
                <p className="text-maui-ink/60 line-clamp-2 leading-relaxed">{beach.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function BeachDetail() {
  const { regionId, beachId } = useParams();
  const region = regions.find(r => r.id === regionId);
  const beach = region?.beaches.find(b => b.id === beachId);

  if (!beach) return <div className="py-40 text-center">Beach not found</div>;

  return (
    <div className="pt-20">
      <SEO title={`${beach.name}, ${region?.name}`} description={beach.description} image={beach.image} />

      {/* Beach Hero */}
      <section className="relative h-[70vh] flex items-center justify-center text-white px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src={beach.image} 
            alt={beach.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl">
          <Link to={`/regions/${regionId}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-8 hover:opacity-70">
            <ArrowLeft className="w-4 h-4" /> Back to {region?.name}
          </Link>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">{beach.name}</h1>
          <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest opacity-80">
            <span className="flex items-center gap-2"><Waves className="w-4 h-4" /> {beach.conditions}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {region?.name}</span>
          </div>
        </div>
      </section>

      {/* Beach Info & Amenities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-sm uppercase tracking-widest text-maui-blue mb-6 font-semibold">About the Beach</h2>
            <p className="text-2xl font-serif leading-relaxed mb-8">{beach.description}</p>
            <div className="prose prose-lg text-maui-ink/70">
              <p>
                Whether you're looking for a peaceful morning swim or an afternoon of snorkeling, {beach.name} provides 
                the perfect backdrop for your Maui vacation. The beach is known for its {beach.conditions.toLowerCase()}, 
                making it a favorite among both locals and visitors.
              </p>
            </div>
          </div>
          <div className="bg-maui-paper p-10 rounded-3xl">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8 opacity-50">Beach Amenities</h3>
            <ul className="space-y-4">
              {beach.amenities.map((amenity) => (
                <li key={amenity} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-maui-blue" />
                  {amenity}
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-maui-ink/5">
              <div className="flex items-center gap-4 text-maui-blue">
                <Info className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Local Tip</span>
              </div>
              <p className="mt-4 text-sm text-maui-ink/60 italic">
                Arrive before 9 AM to secure the best spot and enjoy the calmest waters for snorkeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations on this Beach */}
      <section className="py-20 px-6 bg-maui-paper">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-maui-blue mb-4 font-semibold">Stay Nearby</h2>
              <h3 className="text-4xl font-serif">Hotels & Rentals on {beach.name}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beach.accommodations.map((acc) => (
              <div key={acc.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
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
                    <span className="bg-white text-maui-ink text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {acc.priceRange}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-serif">{acc.name}</h4>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-bold">{acc.rating}</span>
                    </div>
                  </div>
                  <p className="text-maui-ink/60 text-sm mb-8 leading-relaxed">{acc.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {acc.amenities.map(amenity => (
                      <span key={amenity} className="text-[10px] uppercase tracking-widest font-semibold text-maui-ink/40 bg-maui-paper px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={acc.bookingUrl}
                    className="w-full py-4 rounded-xl bg-maui-ink text-white font-medium flex items-center justify-center gap-2 hover:bg-maui-blue transition-colors"
                  >
                    Check Availability <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
