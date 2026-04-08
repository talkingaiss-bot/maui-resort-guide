import React from 'react';
import { motion } from 'motion/react';
import { blogPosts } from '@/src/data/mauiData';
import { SEO } from '@/src/components/SEO';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="pt-40 pb-20 px-6">
      <SEO title="Maui Travel Blog" description="Local expertise and travel guides for your Maui vacation." />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-serif mb-8">Island Stories</h1>
          <p className="text-xl text-maui-ink/60 max-w-2xl mx-auto">
            Insights, guides, and stories from the heart of Maui. Curated by locals who know the island best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest opacity-50 mb-3">{post.date}</p>
                <h2 className="text-2xl font-serif mb-4 group-hover:text-maui-blue transition-colors">{post.title}</h2>
                <p className="text-maui-ink/60 leading-relaxed line-clamp-3">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ChatWidget() {
  React.useEffect(() => {
    // This is a placeholder for Chatbase integration as requested
    // In a real scenario, the user would provide their script tag
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "chatbase-script";
    script.setAttribute("chatbotId", "placeholder-id"); // User would replace this
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;
    // document.body.appendChild(script); // Commented out to avoid errors in preview without real ID
    
    return () => {
      const existingScript = document.getElementById('chatbase-script');
      if (existingScript) {
        // existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button className="w-16 h-16 rounded-full bg-maui-blue text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <div className="absolute right-full mr-4 bg-white text-maui-ink px-4 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Need recommendations? Ask our AI guide.
        </div>
      </button>
    </div>
  );
}
