import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Business Branding',
    category: 'Branding',
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Product Packaging',
    category: 'Packaging',
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Marketing Materials',
    category: 'Marketing',
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    title: 'Event Signage',
    category: 'Signage',
    image: '/api/placeholder/400/300'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600">See our latest printing projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-blue-600 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}