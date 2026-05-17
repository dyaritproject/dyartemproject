import { Users, Activity, CheckCircle, ArrowRight, Laptop, ShieldCheck, Mail, Calendar, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">Our NDIS Services</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">Providing specialized, compassionate, and evidence-based support to help you navigate your NDIS plan.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          
          {/* Core Civic & Social Participation */}
          <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-transform group-hover:scale-110">
              <Users size={200} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 shrink-0 bg-purple-100 text-purple-600 rounded-3xl flex items-center justify-center">
                <Users size={40} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Civic &amp; Social Participation</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  We provide highly personalised community access supports that enable participants to engage meaningfully with their local community. Whether it's attending a local event, joining a club, or building social skills, we focus on genuine inclusion and capacity building.
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                  {['Supported group activities and events', '1:1 individual community access', 'Skill-building for social independence', 'Civic engagement and volunteering support', 'Recreational and leisure activities'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={20} className="text-purple-500 mt-1 mr-3 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-purple-600 hover:bg-purple-700 shadow-md transition-all active:scale-95">
                  Request Community Access <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Positive Behaviour Support */}
          <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-transform group-hover:scale-110">
              <Activity size={200} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 shrink-0 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center">
                <Activity size={40} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Positive Behaviour Support (PBS)</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Our practitioners use evidence-based frameworks to understand why challenging behaviors occur. We focus on proactive strategies that improve quality of life and create supportive environments.
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                  {['Comprehensive functional behavioural assessments', 'Development of individualised PBS plans', 'Training for families and support workers', 'Restrictive practice reduction strategies', 'Ongoing monitoring and evaluation'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={20} className="text-blue-500 mt-1 mr-3 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all active:scale-95">
                  Request PBS Services <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Software Services (Coming Soon) */}
          <div className="group bg-slate-50 rounded-3xl shadow-sm border border-slate-200 transition-all duration-300 relative overflow-hidden mt-12">
            
            {/* Header Area */}
            <div className="bg-[#1e1b4b] p-8 md:p-12 text-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Server size={150} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Laptop className="text-purple-400" size={32} />
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Software Services</h2>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold border tracking-widest uppercase bg-amber-500/20 text-amber-300 border-amber-500/50 ml-2">Coming Soon</span>
                </div>
                <h3 className="text-xl text-purple-200 font-semibold mb-6">More than an NDIS provider</h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                  DYAR Pty Ltd operates two distinct business lines. The first is the NDIS service delivery you can read about above. The second is a software-as-a-service business currently in development — built around a simple belief: <strong>technology should make disability supports easier to find, easier to access, and easier to navigate.</strong>
                </p>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-12 space-y-12">
              
              {/* What we're building */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What we're building</h3>
                <p className="text-gray-600 mb-6">Our SaaS platform has two customer pathways:</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-bold text-purple-900 mb-3">For providers — Pro tools and training</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Software tools and training resources designed for NDIS providers, allied health practices, support coordinators, and disability-adjacent organisations. The tools help providers manage compliance, audit-readiness, participant records, and quality systems. The training helps frontline workers build the skills the NDIS Practice Standards expect. This pathway is a commercial offer, priced at a level that small and medium providers can sustain.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-bold text-emerald-800 mb-3">For participants — Free access</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      A free-of-charge participant tool that helps NDIS participants discover, navigate, and connect with local and mainstream services in their community — recreation, education, health, employment, advocacy, and more. We believe access to community shouldn't depend on who you know or what your NDIS funding will stretch to. The participant pathway is free, will always be free, and is funded by the revenue from our pro-tools customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why & Security */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why we're building this</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>1. We use these tools ourselves.</strong> We license Splose, Centro Assist, and other professional systems for our own NDIS work, and we know first-hand which gaps need filling.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>2. Policy shifts.</strong> The Foundational Supports reform direction (including the Thriving Kids program) makes it clearer than ever that participants benefit from being well-connected to mainstream services, not just to NDIS-funded supports. Good software can help close that gap.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-blue-600" /> Information security — built in
                  </h3>
                  <p className="text-blue-800 leading-relaxed text-sm">
                    DYAR has passed <strong>ISO 27001 Stage 1</strong>, the international standard for information security management. Stage 2 is in progress. That means our software is being designed and built against the same global security framework used by enterprise organisations — encryption in transit and at rest, multi-factor authentication, code-review controls, separate data architecture for NDIS and SaaS data, and a documented incident response process.
                  </p>
                </div>
              </div>

              {/* Separation */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How we separate software from NDIS service delivery</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Because DYAR holds both an NDIS registration and a commercial software business under the same legal entity, we maintain explicit separation:
                </p>
                <ul className="space-y-4">
                  {[
                    "Software tools offered to DYAR NDIS participants are always FREE — there is no charge against any participant's NDIS plan",
                    "DYAR workers do not promote or sell software products to DYAR NDIS participants",
                    "Software development is performed outside NDIS service-delivery hours, by a separate workforce",
                    "Financial records are kept in separate ledgers — no NDIS funding cross-subsidises the software business",
                    "DYAR's full Conflict of Interest Management Plan is published on the Resources Hub for anyone to read"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <CheckCircle size={20} className="text-purple-500 mt-0.5 mr-4 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer / CTA Area */}
              <div className="grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-10">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Mail className="text-purple-500" size={20} /> Register your interest
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">Want to be told when our software launches?</p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-gray-100">
                      <p className="font-bold text-sm text-gray-800 mb-1">For providers:</p>
                      <p className="text-sm text-gray-600">Email <a href="mailto:hello@dyar.com.au?subject=Software waitlist — provider" className="text-purple-600 font-bold hover:underline">hello@dyar.com.au</a> with subject <em>"Software waitlist — provider"</em>.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-100">
                      <p className="font-bold text-sm text-gray-800 mb-1">For participants & families:</p>
                      <p className="text-sm text-gray-600">Email <a href="mailto:hello@dyar.com.au?subject=Software waitlist — participant" className="text-purple-600 font-bold hover:underline">hello@dyar.com.au</a> with subject <em>"Software waitlist — participant"</em>.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="text-purple-500" size={20} /> Expected timeline
                  </h4>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 h-[calc(100%-2rem)]">
                    <ul className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                      <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white bg-slate-300 text-slate-500 group-[.is-active]:bg-purple-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-even:pr-4 md:group-odd:pl-4 text-sm font-bold text-gray-800">Q4 2026: Closed Beta (Providers)</div>
                      </li>
                      <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-even:pr-4 md:group-odd:pl-4 text-sm text-gray-600">ISO 27001 Stage 2 Certification</div>
                      </li>
                      <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-even:pr-4 md:group-odd:pl-4 text-sm text-gray-600">Early 2027: Public Release</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
