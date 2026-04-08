import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Anchor, Hotel } from 'lucide-react';
import { Link } from 'react-router-dom';
import { regions, blogPosts } from '@/src/data/mauiData';
import { SEO } from '@/src/components/SEO';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SEO 
        title="Luxury Maui Travel Guide" 
        description="Discover the best of Maui. Browse by region, find pristine beaches, and book luxury resorts and vacation rentals." 
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=2000" 
            alt="Maui Coastline"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] mb-6 font-medium"
          >
            The Definitive Guide to Paradise
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif mb-8 leading-[1.1]"
          >
            Maui, <br />
            <span className="italic">Reimagined.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              to="/regions" 
              className="bg-white text-maui-ink px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-maui-paper transition-colors"
            >
              Explore Regions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/hotels" 
              className="glass-panel text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              View Accommodations
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-70">Scroll to Explore</span>
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Region Discovery */}
      <section className="py-32 px-6 bg-maui-paper">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm uppercase tracking-widest text-maui-blue mb-4 font-semibold">Location-First Discovery</h2>
              <p className="text-4xl md:text-5xl font-serif leading-tight">
                Start your journey by choosing a region that speaks to you.
              </p>
            </div>
            <Link to="/regions" className="text-sm font-medium uppercase tracking-widest border-b border-maui-ink pb-1 hover:opacity-70 transition-opacity">
              View All Regions
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-maui-ink"
              >
                <img 
                  src={region.image} 
                  alt={region.name}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-serif text-white mb-2">{region.name}</h3>
                  <p className="text-white/60 text-sm mb-6 line-clamp-2">{region.description}</p>
                  <Link 
                    to={`/regions/${region.id}`}
                    className="inline-flex items-center gap-2 text-white text-xs font-medium uppercase tracking-widest group-hover:gap-4 transition-all"
                  >
                    Explore {region.name} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&q=80&w=1200" 
                alt="Maui Lifestyle"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              style={{ x: 40, y: -40 }}
              className="absolute top-0 right-0 bg-maui-paper p-8 rounded-2xl shadow-xl hidden md:block max-w-xs"
            >
              <p className="font-serif text-xl italic mb-4">"The air in Maui smells like flowers and salt. It's a place where time slows down."</p>
              <p className="text-xs uppercase tracking-widest opacity-50">— Local Expert</p>
            </motion.div>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-widest text-maui-blue mb-6 font-semibold">The Maui Experience</h2>
            <h3 className="text-5xl font-serif mb-8 leading-tight">More than just a destination. A state of mind.</h3>
            <p className="text-lg text-maui-ink/70 mb-12 leading-relaxed">
              From the sunrise at Haleakalā to the sunset at Ka'anapali, Maui offers a diverse range of experiences. 
              Our guide is designed to help you navigate the island's unique micro-climates and find the perfect 
              base for your Hawaiian adventure.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-maui-paper flex items-center justify-center text-maui-blue">
                  <Anchor className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl">Pristine Beaches</h4>
                <p className="text-sm text-maui-ink/60">Over 30 miles of world-famous white, red, and black sand beaches.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-maui-paper flex items-center justify-center text-maui-blue">
                  <Hotel className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl">Luxury Resorts</h4>
                <p className="text-sm text-maui-ink/60">Hand-picked selection of the island's most exclusive accommodations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-32 px-6 bg-maui-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-maui-blue mb-4 font-semibold">Local Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Island Stories & Guides</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest opacity-50 mb-3">{post.date}</p>
                <h4 className="text-2xl font-serif mb-4 group-hover:text-maui-blue transition-colors">{post.title}</h4>
                <p className="text-maui-ink/60 leading-relaxed line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
