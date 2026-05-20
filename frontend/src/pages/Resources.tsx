import { useState } from 'react';
import { Plus, Minus, Globe, AlertTriangle, Bell, Info, Download } from 'lucide-react';
import { languages, resourceTranslations } from '../data/resourcesData';

const newResourcesTabs = [
  {
    id: 'emp',
    title: 'Emergency Management Plan (EMP)',
    accordions: [
      { id: 'emp-1', title: 'Emergency Management Plan (EMP)', content: '<p>Download the Emergency Management Plan documents below.</p>', pdf: '/documents/resources/06 — Emergency Management Plan (EMP).pdf', docx: '/documents/resources/06 — Emergency Management Plan (EMP).docx' },
      { id: 'emp-2', title: 'Templates', content: '<p>Download the EMP templates below.</p>', pdf: '/documents/resources/07 — EMP Templates.pdf', docx: '/documents/resources/07 — EMP Templates.docx' },
      { id: 'emp-3', title: 'FAQ', content: '<p>Download the EMP FAQ below.</p>', pdf: '/documents/resources/08 — EMP FAQ.pdf', docx: '/documents/resources/08 — EMP FAQ.docx' },
      { id: 'emp-4', title: 'PEEP Form to be completed', content: '<p>Download the Personal Emergency Evacuation Plan (PEEP) Form below.</p>', pdf: '/documents/resources/09 — Personal Emergency Evacuation Plan (PEEP) Form.pdf', docx: '/documents/resources/09 — Personal Emergency Evacuation Plan (PEEP) Form.docx' },
    ]
  },
  { 
    id: 'contact', title: 'Emergency Contact Details', 
    accordions: [{ id: 'contact-1', title: 'Emergency Contact Details', content: '<p>Download the Emergency Contact Details form below.</p>', pdf: '/documents/resources/10 — Emergency Contact Details.pdf', docx: '/documents/resources/10 — Emergency Contact Details.docx' }]
  },
  { 
    id: 'checklist', title: 'Check List', 
    accordions: [{ id: 'check-1', title: 'Emergency Preparedness Checklist', content: '<p>Download the Emergency Preparedness Checklist below.</p>', pdf: '/documents/resources/11 — Emergency Preparedness Checklist.pdf', docx: '/documents/resources/11 — Emergency Preparedness Checklist.docx' }]
  },
  { 
    id: 'training', title: 'Training Materials', 
    accordions: [
      { 
        id: 'train-pbs', 
        title: '🧠 Positive Behaviour Support (PBS)', 
        content: `
          <div class="space-y-8">

            <div class="bg-purple-50 border border-purple-100 rounded-2xl p-5">
              <p class="text-purple-900 font-semibold leading-relaxed">Positive Behaviour Support (PBS) is a person-centred framework that focuses on improving quality of life and understanding the reasons behind behaviours of concern — not just managing them. All DYAR practitioners delivering behaviour support must complete this training.</p>
            </div>

            <!-- MODULE SECTION: Preventative Strategies -->
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">1</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">Preventative Strategies</h3>
              </div>
              <p class="text-gray-600 text-sm font-medium mb-6 ml-11">Preventative strategies are strategies that we can use <strong>before</strong> the behaviour happens — also known as proactive strategies. Through the use of preventative strategies, we can avoid potential incidents and create more enriched and fulfilled lives.</p>

              <!-- SLIDE CARD: Health and Wellbeing -->
              <div class="rounded-2xl border-2 border-blue-900 overflow-hidden mb-4">
                <div class="bg-blue-900 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">🏥 Health and Wellbeing</h4>
                  <p class="text-blue-200 text-xs font-semibold mt-1">When addressing difficulties in regulating negative emotions, a holistic approach that includes both health and psychological assessment is essential. Here is a structured strategy:</p>
                </div>
                <div class="divide-y divide-gray-100">

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-center">
                      <span class="font-black text-gray-800 text-sm">Heath and psychological evaluation</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-gray-700 text-sm leading-relaxed">A thorough evaluation by a General Practitioner (GP) and/or Practitioner is crucial to understand the participant's overall health and psychological state. This evaluation will help identify any underlying health issues or psychological conditions, such as anxiety or depression, that may be impacting their behaviour.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-center">
                      <span class="font-black text-gray-800 text-sm">Development of a tailored care plan</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-gray-700 text-sm leading-relaxed">A care treatment plan should be created, focusing on specific conditions identified during the assessment. This plan should offer tailored strategies and interventions suitable for the participant's needs.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Medication assessment and management</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-3 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="font-bold text-blue-900 shrink-0">a)</span><span class="leading-relaxed">A review of the participant's medication should be conducted, considering its effectiveness and side effects. This includes understanding how the medication is administered and its impact on their overall health.</span></li>
                        <li class="flex items-start gap-2"><span class="font-bold text-blue-900 shrink-0">b)</span><span class="leading-relaxed">A comprehensive medication management plan should be developed, providing clear instructions on how to administer these medications effectively.</span></li>
                        <li class="flex items-start gap-2"><span class="font-bold text-blue-900 shrink-0">c)</span><span class="leading-relaxed">Regular reviews of the participant's medication should be conducted, ideally every six months. This ensures that their treatment remains effective and is adjusted according to any changes in their condition or new developments in medical research.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Nutrition and physical activity</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-gray-700 text-sm leading-relaxed">In consultation with the GP, a balanced diet and exercise program should be developed. This should be designed to improve overall health and potentially mitigate some of the symptoms experienced.</p>
                      <p class="text-gray-700 text-sm leading-relaxed mt-2">A healthy lifestyle can have a significant impact on mental health and emotional regulation.</p>
                    </div>
                  </div>

                </div>
              </div>

              <!-- SLIDE CARD: Relationship Management -->
              <div class="rounded-2xl border-2 border-blue-900 overflow-hidden">
                <div class="bg-blue-900 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">🤝 Relationship Management and Conflict Resolution</h4>
                  <p class="text-blue-200 text-xs font-semibold mt-1">Relationship management and conflict resolution are effective in managing concerning behaviours. These strategies, when practised consistently, can significantly enhance relationship management and conflict resolution abilities, leading to more harmonious and productive interactions.</p>
                </div>
                <div class="divide-y divide-gray-100">

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Effective communication</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-3 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Encourage open, honest, and respectful communication. It's important to listen actively and validate others' feelings while expressing your own needs and perspectives clearly.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Use <strong>"I" statements</strong> to express feelings without placing blame — such as <em>"I feel upset when..."</em> instead of <em>"You make me upset."</em></span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Empathy and understanding</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-3 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Try to understand the participant's perspective. Empathy involves putting yourself in their shoes and acknowledging their feelings and viewpoints, even if you don't agree with them.</span></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>


            <!-- MODULE SECTION: Environmental Strategies -->
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">2</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">Environmental Strategies</h3>
              </div>
              <p class="text-gray-600 text-sm font-medium mb-6 ml-11">Environments can have significant influences on mental states, well-being, engagement, and physical health. By shaping the environment, we can improve quality of life and reduce behaviours of concern.</p>

              <!-- SLIDE CARD: Home Environment -->
              <div class="rounded-2xl border-2 border-blue-900 overflow-hidden">
                <div class="bg-blue-900 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">🏠 Home Environment</h4>
                  <p class="text-blue-200 text-xs font-semibold mt-1">By shaping the home environment to be engaging and calming on the nervous system, behaviours of concern can be reduced. Giving options and choices can help to personalise the home and make the participant feel more comfortable in this environment.</p>
                </div>
                <div class="divide-y divide-gray-100">

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Engaging items and activities</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Considering the participant's interests, include items and activities in the home that they may enjoy and are likely to engage with. This could include TV, touchscreen devices, and simple games.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Talk to the participant and find out what things they may enjoy having in the home. Take them to the shops and look at different toys, games, or other items that may make the home more pleasant and engaging.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Explore what sensory items may suit the participant. This could include soft and fluffy items, weighted blankets, or fidget toys.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Place these items in locations around the home where the participant sees them regularly and is able to access them when they want to.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Offer sensory items or activities to engage in if it is a stressful time, triggers are present, or you notice the first signs of escalation.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Music</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Talk to the participant to discover their music preferences. Show an interest in their taste and ask if you can listen to some of their preferences together. Introduce them to music similar to their taste or that you feel they may enjoy.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Ask the participant if they would mind if you played some music. If they agree, play music that is likely to be calming or uplifting such as classical, downtempo, ambient, or pop.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">If playing music in the home is disruptive to others, organise a set of headphones for the participant.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Decoration</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Adding colour to the home can improve mood and make the space more interesting. This can be done with furniture, blankets, pots, and trinkets.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Include items in the home that are related to the participant's interests (e.g. models of motorbikes, and posters).</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Add photos to the home of people or things the participant likes, including photos of the participant themselves.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Nature in the home</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Including natural items in the home can be calming. Caring for plants can have multiple benefits including feelings of purpose/meaning, connection to nature, inspiration, and interest.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Houseplants can be added to improve air quality and decorate the home.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">A garden bed can be filled with plants — shopping and planting could be a good activity to do with the participant.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Support the participant to assist in caring for plants if necessary.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">If out in nature with the participant, pieces of nature can be collected to decorate the home (sticks, shells, feathers, etc).</span></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
              <span class="text-amber-600 font-black text-lg shrink-0">📌</span>
              <p class="text-amber-800 text-sm font-semibold">More modules coming — send through your next section and it will be added here.</p>
            </div>

          </div>
        `, 
        pdf: '/documents/resources/training/PBS-Training-Module.pdf', 
        docx: '/documents/resources/training/PBS-Training-Module.docx' 
      },
      { 
        id: 'train-rp', 
        title: '🔒 Restrictive Practices', 
        content: `
          <div class="space-y-6">
            <div class="bg-rose-50 border border-rose-100 rounded-2xl p-5">
              <p class="text-rose-900 font-semibold leading-relaxed">Restrictive practices are a last resort. All DYAR support workers and practitioners must understand the legal obligations, authorisation requirements, and the strict reporting and monitoring framework that governs their use under the NDIS.</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
              <span class="text-amber-600 font-black text-lg shrink-0">⚠️</span>
              <p class="text-amber-800 text-sm font-semibold">This training is mandatory for any staff member involved in delivering supports to participants who have a Behaviour Support Plan that includes a regulated restrictive practice.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-3 text-base">📋 What This Training Covers</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><span class="text-gray-700">Definition and types of regulated restrictive practices (chemical, mechanical, physical, environmental, seclusion)</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><span class="text-gray-700">The legal framework — NDIS Act, State/Territory authorisation requirements</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><span class="text-gray-700">When a restrictive practice can and cannot be used</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><span class="text-gray-700">The role of the Behaviour Support Practitioner and NDIS Commission</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><span class="text-gray-700">Reporting obligations — reportable incidents and NDIS Commission notifications</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><span class="text-gray-700">Transitioning away from restrictive practices — reduction plans</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><span class="text-gray-700">Supporting participants and families through the process</span></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-3 text-base">✅ Learning Outcomes</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-3"><span class="text-green-600 font-bold shrink-0">✓</span><span class="text-gray-700">Identify the 5 types of regulated restrictive practices and when each applies</span></li>
                <li class="flex items-start gap-3"><span class="text-green-600 font-bold shrink-0">✓</span><span class="text-gray-700">Understand the authorisation and reporting obligations for your state</span></li>
                <li class="flex items-start gap-3"><span class="text-green-600 font-bold shrink-0">✓</span><span class="text-gray-700">Know your responsibilities when a restrictive practice is in a BSP</span></li>
                <li class="flex items-start gap-3"><span class="text-green-600 font-bold shrink-0">✓</span><span class="text-gray-700">Contribute to reducing and eliminating restrictive practices over time</span></li>
              </ul>
            </div>
          </div>
        `, 
        pdf: '/documents/resources/training/Restrictive-Practices-Training.pdf', 
        docx: '/documents/resources/training/Restrictive-Practices-Training.docx' 
      },
      { 
        id: 'train-ndis-orientation', 
        title: '📘 NDIS Worker Orientation Module', 
        content: `
          <div class="space-y-6">
            <div class="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p class="text-blue-900 font-semibold leading-relaxed">The NDIS Worker Orientation Module "Quality, Safety and You" is mandatory for all new DYAR staff before they begin working with participants. It covers the rights of people with disability and the responsibilities of NDIS workers.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-3 text-base">📋 What This Training Covers</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span><span class="text-gray-700">Rights of people with disability under the NDIS</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span><span class="text-gray-700">NDIS Code of Conduct — your obligations as a worker</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span><span class="text-gray-700">Recognising and responding to abuse, neglect and exploitation</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span><span class="text-gray-700">Supported decision making and person-centred practice</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span><span class="text-gray-700">How to raise concerns and report incidents</span></li>
              </ul>
            </div>
            <a href="https://www.ndiscommission.gov.au/workers/training-and-education/worker-orientation-module" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm">
              🔗 Access via NDIS Commission Website
            </a>
          </div>
        `, 
        pdf: '/documents/resources/training/NDIS-Worker-Orientation-Guide.pdf', 
        docx: null
      },
      { 
        id: 'train-safeguarding', 
        title: '🛡️ Safeguarding & Mandatory Reporting', 
        content: `
          <div class="space-y-6">
            <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
              <p class="text-emerald-900 font-semibold leading-relaxed">All DYAR staff are mandatory reporters. This training ensures every team member knows how to identify signs of abuse, neglect and exploitation — and what to do when they suspect a participant is at risk.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-3 text-base">📋 What This Training Covers</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span><span class="text-gray-700">Types of abuse, neglect and exploitation — indicators and warning signs</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span><span class="text-gray-700">Your legal duty to report under the NDIS and state legislation</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span><span class="text-gray-700">How to make a report — internally and to the NDIS Commission</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span><span class="text-gray-700">Supporting participants through a disclosure</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span><span class="text-gray-700">Whistleblower protections for staff who report</span></li>
              </ul>
            </div>
          </div>
        `, 
        pdf: '/documents/resources/training/Safeguarding-Mandatory-Reporting.pdf', 
        docx: '/documents/resources/training/Safeguarding-Mandatory-Reporting.docx' 
      },
      { 
        id: 'train-cultural', 
        title: '🌏 Cultural Safety & Inclusion', 
        content: `
          <div class="space-y-6">
            <div class="bg-orange-50 border border-orange-100 rounded-2xl p-5">
              <p class="text-orange-900 font-semibold leading-relaxed">DYAR serves participants from diverse cultural and linguistic backgrounds including Aboriginal and Torres Strait Islander communities. This training builds the skills to deliver culturally safe, respectful and inclusive supports.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-3 text-base">📋 What This Training Covers</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span><span class="text-gray-700">Understanding cultural safety vs cultural awareness</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span><span class="text-gray-700">Working with Aboriginal and Torres Strait Islander participants</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span><span class="text-gray-700">Supporting CALD (Culturally and Linguistically Diverse) participants</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span><span class="text-gray-700">Using interpreters and translated materials effectively</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span><span class="text-gray-700">Addressing unconscious bias in service delivery</span></li>
              </ul>
            </div>
          </div>
        `, 
        pdf: '/documents/resources/training/Cultural-Safety-Training.pdf', 
        docx: '/documents/resources/training/Cultural-Safety-Training.docx' 
      },
      { 
        id: 'train-manual', 
        title: '💪 Manual Handling & Personal Care', 
        content: `
          <div class="space-y-6">
            <div class="bg-sky-50 border border-sky-100 rounded-2xl p-5">
              <p class="text-sky-900 font-semibold leading-relaxed">Safe manual handling protects both participants and workers. This training is required for all staff providing physical supports, personal care, or high-intensity daily activities.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-3 text-base">📋 What This Training Covers</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></span><span class="text-gray-700">Safe manual handling principles and risk assessment</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></span><span class="text-gray-700">Use of assistive equipment — hoists, transfer belts, slide sheets</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></span><span class="text-gray-700">Dignity and consent in personal care routines</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></span><span class="text-gray-700">Injury prevention for workers — posture, technique, fatigue management</span></li>
                <li class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></span><span class="text-gray-700">Incident reporting for near-misses and injuries</span></li>
              </ul>
            </div>
          </div>
        `, 
        pdf: '/documents/resources/training/Manual-Handling-Training.pdf', 
        docx: '/documents/resources/training/Manual-Handling-Training.docx' 
      }
    ]
  },
  { 
    id: 'advocacy', title: 'Statement on Advocacy Services', 
    accordions: [{ id: 'adv-1', title: 'Statement on Advocacy Services', content: '<p>Download the Statement on Advocacy Services below.</p>', pdf: '/documents/resources/14 — Statement on Advocacy Services.pdf', docx: '/documents/resources/14 — Statement on Advocacy Services.docx' }]
  },
  { 
    id: 'conflict', title: 'Conflict of Interest Statement & Service Delivery', 
    accordions: [{ id: 'coi-1', title: 'Conflict of Interest Statement', content: '<p>Download the Conflict of Interest Statement below.</p>', pdf: '/documents/resources/15 — Conflict of Interest Statement & Service Delivery.pdf', docx: '/documents/resources/15 — Conflict of Interest Statement & Service Delivery.docx' }]
  },
  { 
    id: 'feedback', title: 'EMP Feedback Form', 
    accordions: [{ id: 'feed-1', title: 'EMP Feedback Form', content: '<p>Download the EMP Feedback Form below.</p>', pdf: '/documents/resources/16 — EMP Feedback Form.pdf', docx: '/documents/resources/16 — EMP Feedback Form.docx' }]
  }
];

const Resources = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [activeTabId, setActiveTabId] = useState('rights');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  const t = resourceTranslations[selectedLang as keyof typeof resourceTranslations] || resourceTranslations.en;
  const currentDir = ['ar', 'fa'].includes(selectedLang) ? 'rtl' : 'ltr';

  // Construct the Top Tabs array
  const topTabs = [
    { id: 'rights', title: `${t.pageTitle} ${t.pageTitleHL}` },
    ...newResourcesTabs.map(item => ({
      id: item.id,
      title: item.title
    }))
  ];

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const activeNewTab = newResourcesTabs.find(tab => tab.id === activeTabId);

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen pb-24">
      {/* Header Area */}
      <section className="relative bg-gradient-to-b from-[#FAF5FF] to-white pt-20 pb-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-6">
              <AlertTriangle size={15} />
              <span>Participant Empowerment Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6" dir={currentDir}>
              {t.pageTitle} <span className="text-[#6A0DAD]">{t.pageTitleHL}</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto" dir={currentDir}>
              {t.pageSubtitle}
            </p>

            {/* Language Selector */}
            <div className="flex justify-center overflow-x-auto no-scrollbar pb-2">
              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-200">
                <Globe size={18} className="text-gray-400 mx-2 shrink-0" />
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLang(lang.code)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${selectedLang === lang.code ? 'bg-[#6A0DAD] text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Layout Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24 flex flex-col lg:flex-row gap-8" dir={currentDir}>
        
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-1/3 shrink-0">
          <div className="sticky top-24 bg-white rounded-3xl border border-gray-100 shadow-sm p-4 flex flex-col gap-2">
            {topTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  setExpandedItem(null);
                }}
                className={`w-full text-left px-5 py-4 rounded-2xl text-sm font-bold transition-all ${
                  activeTabId === tab.id
                    ? 'bg-[#6A0DAD] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
        
        {/* Render Participant Rights & Resources */}
        {activeTabId === 'rights' && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-6">
              {t.pageTitle} {t.pageTitleHL}
            </h2>
            <div className="space-y-4">
              {t.categories.map((item) => {
                const isExpanded = expandedItem === item.id;
                return (
                  <div 
                    key={item.id} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-purple-300 shadow-sm' : 'border-gray-200 hover:border-purple-200'}`}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isExpanded ? 'bg-purple-50 text-purple-900' : 'bg-white text-gray-800'}`}
                    >
                      <span className="font-bold text-base pr-4">{item.title}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? 'bg-purple-200 text-purple-700' : 'bg-gray-100 text-gray-500'}`}>
                        {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 pt-0 bg-purple-50 border-t border-purple-100">
                        <div 
                          className="mt-4 text-gray-700 leading-relaxed text-base"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Render Announcements Custom View */}
        {activeTabId === 'announcements' && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                <Bell size={24} strokeWidth={2} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Updates &amp; Emergency Announcements
              </h2>
            </div>
            
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mb-8 flex flex-col md:flex-row gap-5 items-start">
              <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm">
                <AlertTriangle size={20} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Emergency Communication Protocol</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  In the event of an emergency or natural disaster, this page will be immediately updated with critical information. You will also receive an urgent <strong>SMS text message</strong> and <strong>email notification</strong> outlining the situation and any necessary steps to stay safe.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info size={18} className="text-[#6A0DAD]" /> Recent Announcements
              </h3>
              
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">Welcome to the New Resources Hub</h4>
                  <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded-md">General</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We have updated our Resources hub to make it easier for you to find important forms and emergency plans. Check back here for future news and updates from DYAR!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Render New Resource Tabs */}
        {activeTabId !== 'rights' && activeTabId !== 'announcements' && activeNewTab && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-6">
              {activeNewTab.title}
            </h2>
            {activeNewTab.accordions.length > 0 ? (
              <div className="space-y-4">
                {activeNewTab.accordions.map((item) => {
                  const isExpanded = expandedItem === item.id;
                  
                  return (
                    <div key={item.id} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-purple-300 shadow-sm' : 'border-gray-200 hover:border-purple-200'}`}>
                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isExpanded ? 'bg-purple-50 text-purple-900' : 'bg-white text-gray-800'}`}
                      >
                        <span className="font-bold text-base pr-4">{item.title}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? 'bg-purple-200 text-purple-700' : 'bg-gray-100 text-gray-500'}`}>
                          {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </button>
                      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 pt-0 bg-purple-50 border-t border-purple-100">
                          <div className="mt-4 text-gray-700 leading-relaxed text-base">
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                            
                            {(item.pdf || item.docx) && (
                              <div className="flex flex-wrap gap-4 mt-6">
                                {item.pdf && (
                                  <a href={item.pdf} download className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-50 text-rose-700 rounded-xl font-bold hover:bg-rose-100 transition-colors shadow-sm border border-rose-100">
                                    <Download size={18} /> Download PDF
                                  </a>
                                )}
                                {item.docx && (
                                  <a href={item.docx} download className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 rounded-xl font-bold hover:bg-blue-100 transition-colors shadow-sm border border-blue-100">
                                    <Download size={18} /> Download Word (DOCX)
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center bg-purple-50 rounded-2xl border border-purple-100 text-purple-800 text-sm font-medium">
                Content for {activeNewTab.title} is coming soon.
              </div>
            )}
          </div>
        )}

        </div>
      </div>
    </div>
  );
};

export default Resources;
