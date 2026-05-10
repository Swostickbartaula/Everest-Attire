export default function EverestAttireWebsite() {
  const products = [
    // HOW TO ADD YOUR OWN PRODUCTS:
    // name: Product Name
    // price: Product Price (customize any price you want)
    // image: Paste your own image link here (you can use your own product photos)
    // whatsapp: Your WhatsApp number with country code

    {
      name: 'Premium Oversized T-Shirt',
      price: 'Rs. 1,499',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
      whatsapp: '9779769457742',
    },
    {
      name: 'Urban Hoodie',
      price: 'Rs. 2,499',
      image:
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop',
      whatsapp: '9779769457742',
    },
    {
      name: 'Streetwear Tracksuit',
      price: 'Rs. 3,999',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
      whatsapp: '9779769457742',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur z-50">
        <div>
          <h1 className="text-2xl font-black tracking-widest">EVEREST ATTIRE</h1>
          <p className="text-xs text-gray-400">Wear Confidence.</p>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#products" className="hover:text-gray-300">Products</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center text-center px-6"
      >
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop"
          alt="Fashion"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[8px] text-sm mb-4 text-gray-300">
            Nepal Streetwear Brand
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            EVEREST
            <br />
            ATTIRE
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Premium fashion built for confidence, style, and modern streetwear culture.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Shop Now
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Collection</h2>
          <p className="text-gray-400 text-lg">
            Trending fashion pieces from Everest Attire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.price}</p>

                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${item.whatsapp}?text=Hello%20Everest%20Attire%2C%20I%20want%20to%20order%20${item.name}`}
                    target="_blank"
                    className="w-full bg-green-500 text-white py-3 rounded-xl font-bold text-center hover:scale-[1.02] transition"
                  >
                    Order on WhatsApp
                  </a>

                  <button className="w-full bg-white text-black py-3 rounded-xl font-bold hover:scale-[1.02] transition">
                    Pay with Khalti / eSewa
                  </button>

                  <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold hover:scale-[1.02] transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-8 py-20 bg-gradient-to-b from-black to-zinc-900"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">About Everest Attire</h2>

          <p className="text-lg text-gray-300 leading-8">
            Everest Attire is a youth-driven Nepali clothing brand focused on premium
            fashion, confidence, and modern streetwear culture. Our mission is to
            create stylish clothing that represents ambition, boldness, and the spirit
            of the new generation.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 max-w-5xl mx-auto">
        <div className="bg-white/5 rounded-3xl p-10 border border-white/10">
          <h2 className="text-4xl font-black mb-6 text-center">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-3">📍 Chitwan, Nepal</p>
              <p className="text-gray-300 mb-3">📞 +977 9769457742</p>
              <p className="text-gray-300">📧 contact.everstattire@gmail.com</p>
            </div>

            <div className="flex flex-col gap-4">
              <input
                placeholder="Your Name"
                className="bg-black border border-white/10 rounded-xl px-4 py-3"
              />
              <input
                placeholder="Your Email"
                className="bg-black border border-white/10 rounded-xl px-4 py-3"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="bg-black border border-white/10 rounded-xl px-4 py-3"
              />

              <button className="bg-white text-black py-3 rounded-xl font-bold hover:scale-[1.02] transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        <p>© 2026 Everest Attire. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
