export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'condo' | 'rental';
  description: string;
  image: string;
  priceRange: string;
  amenities: string[];
  bookingUrl: string;
  rating: number;
}

export interface Beach {
  id: string;
  name: string;
  description: string;
  image: string;
  videoUrl?: string;
  conditions: string;
  amenities: string[];
  accommodations: Accommodation[];
}

export interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  beaches: Beach[];
}

export const regions: Region[] = [
  {
    id: 'wailea',
    name: 'Wailea',
    description: 'The pinnacle of luxury on Maui, Wailea is home to world-class resorts, championship golf courses, and pristine crescent-shaped beaches.',
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=1200',
    beaches: [
      {
        id: 'wailea-beach',
        name: 'Wailea Beach',
        description: 'Voted one of the best beaches in the world, Wailea Beach offers golden sands and calm waters perfect for swimming and snorkeling.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
        conditions: 'Calm morning waters, gentle afternoon breezes.',
        amenities: ['Restrooms', 'Showers', 'Beach Rentals', 'Lifeguards'],
        accommodations: [
          {
            id: 'grand-wailea',
            name: 'Grand Wailea, A Waldorf Astoria Resort',
            type: 'hotel',
            description: 'An iconic luxury resort featuring 40 acres of lush tropical gardens and the legendary Wailea Canyon Activity Pool.',
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
            priceRange: '$$$$',
            amenities: ['Spa', 'Pools', 'Fine Dining', 'Kids Club'],
            bookingUrl: '#',
            rating: 4.8
          },
          {
            id: 'four-seasons-wailea',
            name: 'Four Seasons Resort Maui at Wailea',
            type: 'hotel',
            description: 'The only resort on Maui with no resort fees, offering unparalleled service and an adult-only serenity pool.',
            image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800',
            priceRange: '$$$$',
            amenities: ['Infinity Pool', 'Private Cabanas', 'Tennis', 'Spa'],
            bookingUrl: '#',
            rating: 4.9
          }
        ]
      },
      {
        id: 'polo-beach',
        name: 'Polo Beach',
        description: 'A more secluded beach at the southern end of Wailea, ideal for those seeking a quieter escape.',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1200',
        conditions: 'Good for snorkeling near the rocky points.',
        amenities: ['Restrooms', 'Showers', 'Picnic Tables'],
        accommodations: [
          {
            id: 'fairmont-kea-lani',
            name: 'Fairmont Kea Lani',
            type: 'hotel',
            description: 'Hawaii\'s only all-suite and villa luxury oceanfront resort, inspired by the beauty of the islands.',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
            priceRange: '$$$$',
            amenities: ['Suites', 'Villas', 'Cultural Programs', 'Pools'],
            bookingUrl: '#',
            rating: 4.7
          }
        ]
      }
    ]
  },
  {
    id: 'kaanapali',
    name: 'Ka\'anapali',
    description: 'Maui\'s first planned resort area, Ka\'anapali is famous for its long sandy beach and the daily cliff diving ceremony at Black Rock.',
    image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&q=80&w=1200',
    beaches: [
      {
        id: 'kaanapali-beach',
        name: 'Ka\'anapali Beach',
        description: 'Three miles of white sand and crystal clear water, lined with world-class resorts and the Whalers Village shopping center.',
        image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=1200',
        conditions: 'Excellent for swimming and water sports.',
        amenities: ['Shopping', 'Dining', 'Water Sports', 'Lifeguards'],
        accommodations: [
          {
            id: 'westin-maui',
            name: 'The Westin Maui Resort & Spa',
            type: 'hotel',
            description: 'A family-friendly resort with a massive pool complex and prime location on Ka\'anapali Beach.',
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
            priceRange: '$$$',
            amenities: ['Water Slides', 'Spa', 'Multiple Pools', 'Luau'],
            bookingUrl: '#',
            rating: 4.5
          }
        ]
      }
    ]
  },
  {
    id: 'kapalua',
    name: 'Kapalua',
    description: 'Nestled at the foot of the West Maui Mountains, Kapalua is known for its dramatic coastline, luxury estates, and championship golf.',
    image: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?auto=format&fit=crop&q=80&w=1200',
    beaches: [
      {
        id: 'kapalua-bay',
        name: 'Kapalua Bay',
        description: 'A sheltered cove with calm waters, perfect for families and snorkeling enthusiasts.',
        image: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=80&w=1200',
        conditions: 'Very calm, protected from strong winds.',
        amenities: ['Restrooms', 'Showers', 'Snorkel Rentals'],
        accommodations: [
          {
            id: 'ritz-carlton-kapalua',
            name: 'The Ritz-Carlton Maui, Kapalua',
            type: 'hotel',
            description: 'A majestic resort overlooking the Pacific, offering a blend of luxury and Hawaiian culture.',
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
            priceRange: '$$$$',
            amenities: ['Golf', 'Spa', 'Hiking Trails', 'Fine Dining'],
            bookingUrl: '#',
            rating: 4.8
          }
        ]
      }
    ]
  },
  {
    id: 'kihei',
    name: 'Kihei',
    description: 'A vibrant beach town with a local feel, offering a wide range of condos, restaurants, and some of Maui\'s best sunset views.',
    image: 'https://images.unsplash.com/photo-1502726299822-6f583f972e02?auto=format&fit=crop&q=80&w=1200',
    beaches: [
      {
        id: 'kamaole-iii',
        name: 'Kamaole III',
        description: 'A popular local spot with a large grassy area, perfect for sunset picnics and family gatherings.',
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200',
        conditions: 'Good for bodyboarding and swimming.',
        amenities: ['Large Park', 'Restrooms', 'Showers', 'Lifeguards'],
        accommodations: [
          {
            id: 'kihei-surfside',
            name: 'Kihei Surfside Resort',
            type: 'condo',
            description: 'Oceanfront condos with spectacular views and a large lawn for whale watching.',
            image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800',
            priceRange: '$$',
            amenities: ['Kitchen', 'Ocean View', 'Pool', 'BBQ Area'],
            bookingUrl: '#',
            rating: 4.4
          }
        ]
      }
    ]
  }
];

export const blogPosts = [
  {
    id: 'best-time-to-visit',
    title: 'The Best Time to Visit Maui: A Seasonal Guide',
    excerpt: 'When is the best time to experience the magic of Maui? We break down the seasons by weather, crowds, and whale watching.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'top-snorkeling-spots',
    title: 'Hidden Gems: Top 5 Snorkeling Spots on Maui',
    excerpt: 'Beyond Molokini, Maui offers incredible snorkeling right off the beach. Discover our favorite secret spots.',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800'
  }
];
