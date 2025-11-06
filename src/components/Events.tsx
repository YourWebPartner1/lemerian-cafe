import { Users, Presentation, PartyPopper, Sparkles } from 'lucide-react';

export default function Events() {
  const events = [
    {
      icon: Users,
      title: 'Networking Mixers',
      description: 'Connect with professionals and entrepreneurs in a relaxed atmosphere',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Presentation,
      title: 'Workshops & Talks',
      description: 'Learn from industry experts and expand your skillset',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: PartyPopper,
      title: 'Private Events',
      description: 'Host your team meetings, launches, or celebrations',
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Sparkles className="w-12 h-12 text-[#FFD700] mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">
              Events & Gatherings
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just a workspace—join our vibrant community through exclusive events and gatherings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-200">{event.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#f44545] to-[#265999] rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Event with Us
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Looking for the perfect venue for your next meeting, workshop, or celebration? Our flexible space can accommodate groups of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#f44545] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Request Event Info
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
              View Event Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
