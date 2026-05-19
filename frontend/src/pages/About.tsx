import { Heart, Shield, Users, Activity, Target, BookOpen, Handshake, MapPin, Mail, Phone } from 'lucide-react';

const values = [
  {
    icon: <Users size={24} />,
    title: 'Person-Centred',
    desc: 'Every decision starts with the participant.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <Shield size={24} />,
    title: 'Choice and Control',
    desc: 'Supporting informed decisions and dignity of risk.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: <Heart size={24} />,
    title: 'Cultural Safety',
    desc: 'Whadjuk Country acknowledged; CALD, Aboriginal and Torres Strait Islander, and LGBTIQA+ identities respected in every interaction.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: <Activity size={24} />,
    title: 'Quality & Continuous Improvement',
    desc: 'Internal audits, the Continuous Improvement Register, and outcome measurement drive how we work.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Accountability',
    desc: 'Clear governance, transparent reporting, and an open complaints culture.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: <Handshake size={24} />,
    title: 'Trauma-Informed',
    desc: 'Recognising lived experience and the impact of trauma in service design.',
    color: 'bg-violet-50 text-violet-600',
  },
];

const About = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen pb-20">

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#FAF5FF] to-white pt-20 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-6">
            <Shield size={15} />
            <span>An NDIS Service Provider · Whadjuk Noongar Country</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-500">DYAR</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            DYAR Pty Ltd is a Western Australian NDIS service provider operating on Whadjuk Country. We're an organisation built around one idea: people with disability deserve professional, accessible, person-centred supports that grow their independence — not their dependence on us.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20 mt-16">

        {/* Who We Are & Why DYAR Exists */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Who we are</h2>
            <div className="text-gray-600 leading-relaxed text-lg space-y-5">
              <p>
                DYAR delivers Specialist Behaviour Support, Specialist Disability Accommodation, Early Childhood Supports, Core Civic and Social Participation (Community Access), Core Support, Therapeutic Supports, Psychosocial Recovery Coaching, Consumables, and Transport.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r-xl">
                <p className="font-medium text-purple-900">
                  Our registration with the NDIS Quality and Safeguards Commission is in application with HDAA Australia as our audit body.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Why DYAR exists</h2>
            <div className="text-gray-600 leading-relaxed text-lg space-y-5">
              <p>
                Australia's disability sector is changing fast. The NDIS reform package — including the Getting the NDIS Back on Track Act 2024, the NDIS Replacement Rule, the Foundational Supports framework, and the Thriving Kids program rolling out from 1 October 2026 — means that registered, audited, capable providers will play an even more important role in participants' lives.
              </p>
              <p>
                DYAR was established as a separately-registered NDIS provider, with our own ABN, our own insurance, our own audit trail, and our own software licences, because that's what the new framework requires and what participants deserve. We compete for participants on the quality of our service and the strength of our audit history, not on inherited relationships or shortcuts.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              A community where people with disability are well connected to their communities, achieve their life goals, and improve their livelihood through high-quality, person-centred NDIS supports.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Heart size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To deliver professional and accessible NDIS services to people with disability that promote participation, exercise choice and control, and maximise the benefit of each participant's NDIS plan to build skills, independence, and quality of life.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our <span className="text-[#6A0DAD]">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Director & Country */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Director */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="text-[#6A0DAD]" /> Meet the Director
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              <strong>Mehdi Dabire — Director and Service Manager.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Mehdi has worked across the WA disability sector since 2014 in roles including Support Worker, Support Coordinator, and Behaviour Support Practitioner. He founded DYAR to deliver the kind of NDIS supports he believes participants deserve — clear, capability-building, culturally responsive, and genuinely person-centred.
            </p>
          </div>

          {/* Acknowledgement of Country */}
          <div className="bg-[#1e1b4b] rounded-3xl p-10 border border-gray-800 text-white">
            <h2 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-3">
              <MapPin className="text-purple-400" /> Acknowledgement of Country
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              DYAR acknowledges the Whadjuk Noongar people as the Traditional Custodians of the land on which we work and live, and pays respect to their Elders past, present, and emerging. We recognise Aboriginal and Torres Strait Islander peoples' continuing connection to land, water, and community.
            </p>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-violet-500"></div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Get in touch</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            We'd love to hear from you — whether you're a participant, family member, plan manager, allied health professional, or referrer.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
              <a href="tel:0470540306" className="text-purple-600 hover:text-purple-800 transition-colors font-medium">0470 540 306</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <a href="mailto:hello@dyar.com.au" className="text-purple-600 hover:text-purple-800 transition-colors font-medium">hello@dyar.com.au</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Address</h3>
              <div className="text-gray-600 text-sm text-center">
                <p className="mb-1"><span className="font-semibold">Office:</span> Unit 1, 136 Main Street, Osborne Park WA 6017</p>
                <p><span className="font-semibold">Postal:</span> PO Box 8052, East Subiaco WA 6008</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
