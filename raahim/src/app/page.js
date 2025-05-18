// app/page.js
export default function Home() {
  const featureList = [
    { title: 'Fast Performance', desc: 'Optimized builds and server-side rendering for the best speed.' },
    { title: 'Scalable Architecture', desc: 'Server Components, API Routes, and more.' },
    { title: 'Easy Customization', desc: 'Tailwind CSS, styled-components, or your own setup.' },
    { title: 'Developer Experience', desc: 'Hot reload, TypeScript support, and first-class DX.' },
  ];

  const testimonials = [
    { name: 'Alice Johnson', role: 'CEO, TechCorp', quote: 'NextPro transformed our development workflow and boosted performance!' },
    { name: 'Mark Lee', role: 'CTO, Webify', quote: 'The DX and speed are phenomenal. Highly recommend.' },
    { name: 'Sara Smith', role: 'Founder, StartupX', quote: 'Beautiful templates and unbeatable support.' },
  ];

  const plans = [
    { name: 'Starter', price: '$19/mo', features: ['Basic Support', 'Optimized Builds', '2 Projects'] },
    { name: 'Pro', price: '$49/mo', features: ['Priority Support', 'All Features', 'Unlimited Projects'] },
    { name: 'Enterprise', price: 'Custom', features: ['Dedicated Support', 'Custom Integrations', 'Unlimited Projects'] },
  ];

  return (
    <main className="antialiased text-gray-800 bg-white">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between py-6 px-8 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-600">NextPro</div>
        <ul className="flex space-x-6">
          {['Features', 'Pricing', 'Testimonials', 'Contact'].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-600 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition">
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-50 to-white px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Empower Your Web Presence
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          NextPro helps you build lightning-fast, SEO-friendly websites with modern tools and best practices.
        </p>
        <div className="flex space-x-4">
          <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition shadow">
            View Pricing
          </a>
          <a href="#features" className="border border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-full transition hover:bg-blue-50">
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Features</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((f) => (
            <div key={f.title} className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
              <footer className="text-gray-800 font-semibold">
                {t.name}, <span className="text-gray-500">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Pricing Plans</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div key={p.name} className="p-6 border rounded-lg hover:shadow-xl transition flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{p.name}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-6">{p.price}</p>
              <ul className="flex-1 space-y-2 mb-6">
                {p.features.map((f) => <li key={f} className="text-gray-600">• {f}</li>)}
              </ul>
              <a href="#" className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition text-center">
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-800 text-gray-400">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} NextPro. All rights reserved.</p>
          <div className="flex space-x-4">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a key={link} href="#" className="hover:text-white transition">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
} 
