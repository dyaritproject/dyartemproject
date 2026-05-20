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


            <!-- MODULE SECTION: Response Strategies -->
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">3</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">Response Strategies</h3>
              </div>
              <p class="text-gray-600 text-sm font-medium mb-6 ml-11">Response strategies are specific actions taken in reaction to certain behaviours or situations. Effective response strategies are critical for managing incidents when they occur and for preventing escalation. Here are some key strategies:</p>

              <div class="rounded-2xl border-2 border-blue-900 overflow-hidden">
                <div class="bg-blue-900 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">⚡ Response Strategies</h4>
                </div>
                <div class="divide-y divide-gray-100">

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Calm and Measured Reaction</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Respond to behaviours calmly and without heightened emotion. A calm demeanour can help de-escalate situations.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Avoid raising your voice or showing frustration, as this can exacerbate the behaviour.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Immediate and Appropriate Response</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Remain vigilant for the early warning signs of escalation.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Ensure only one person at a time is responding to early warning signs to avoid overwhelming the participant or accidentally reinforcing the behaviour.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Address the behaviour as soon as it occurs, ensuring that the response is appropriate to the severity and nature of the behaviour.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">The response should be consistent with previously established guidelines or plans.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Safety First</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Prioritise safety for the participant, others involved, and yourself. If a behaviour poses a risk of harm, take necessary steps to ensure everyone's safety.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">If behaviours are observed that are not causing serious physical harm, do not physically stop or restrain the participant — as this can cause more distress and increase risk.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Understanding and Empathy</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Try to understand the reason behind the behaviour. Acknowledge the participant's feelings and emotions, showing empathy while still addressing the behaviour.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Sometimes, underlying needs or frustrations might be driving the behaviour.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Effective Communication</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Use soft, positive and low tones of voice.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Use clear and simple language to communicate with the participant.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Verbalise understanding of their feelings, and if possible, offer alternatives or solutions to their concerns.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Reinforce good communication instead of the behaviour of concern.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Reduce the amount of demands or prompts on the participant. Avoid saying things like <strong>"calm down"</strong> or <strong>"stop hitting yourself"</strong>.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Avoid using reprimanding language.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Redirect and Distract</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Redirect their attention to a different, more positive activity when feasible.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Distraction can be an effective tool in preventing the escalation of behaviours.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">De-escalation Techniques</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Employ de-escalation techniques such as offering space, speaking softly, and maintaining a non-threatening body posture.</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-900 font-bold shrink-0">•</span><span class="leading-relaxed">Know when to give the participant a moment to cool down if they are becoming increasingly agitated.</span></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <!-- MODULE SECTION: Appendix B — Triggers -->
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">4</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">Understanding Triggers</h3>
              </div>
              <p class="text-gray-600 text-sm font-medium mb-6 ml-11">In PBS, understanding triggers is crucial for effectively analysing and formulating interventions for behaviours of concern. Triggers are specific events, situations, or environmental factors that precede or provoke a behaviour, providing critical insights into why a behaviour occurs. By identifying these triggers through careful observation and assessment, PBS practitioners can develop targeted strategies that prevent the occurrence of challenging behaviours by altering environmental conditions or teaching alternative, more adaptive responses.</p>

              <!-- 3-Column Trigger Table -->
              <div class="rounded-2xl border-2 border-blue-900 overflow-hidden">
                <div class="bg-blue-900 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">🔍 Types of Triggers</h4>
                </div>

                <!-- Table Header -->
                <div class="grid grid-cols-3 divide-x divide-gray-200 bg-purple-50 border-b border-gray-200">
                  <div class="px-5 py-3"><span class="font-black text-gray-900 text-sm">Trigger Type</span></div>
                  <div class="px-5 py-3"><span class="font-black text-gray-900 text-sm">What It Is</span></div>
                  <div class="px-5 py-3"><span class="font-black text-gray-900 text-sm">Impact</span></div>
                </div>

                <div class="divide-y divide-gray-100">

                  <!-- Environmental -->
                  <div class="grid grid-cols-3 divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4">
                      <span class="font-black text-gray-800 text-sm">Environmental</span>
                    </div>
                    <div class="bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Environmental triggers encompass various physical and situational aspects of the surroundings that can elicit behavioural responses. These include sensory stimuli such as loud noises, bright lighting, and crowded spaces, as well as other factors like room temperature, decor, or the presence of certain individuals or objects.</p>
                    </div>
                    <div class="bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Individuals sensitive to these triggers may experience heightened anxiety, distress, or even physical discomfort, leading to a range of behaviours aimed at managing their environment. This could involve seeking isolation, becoming confrontational, or attempting to modify the environment to reduce discomfort. Non-sensory elements like a cluttered room or an unfamiliar setting can also trigger confusion or disorientation.</p>
                    </div>
                  </div>

                  <!-- Stimulatory -->
                  <div class="grid grid-cols-3 divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4">
                      <span class="font-black text-gray-800 text-sm">Stimulatory</span>
                    </div>
                    <div class="bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Stimulatory triggers include both overstimulation and under-stimulation. Overstimulation occurs from excessive sensory or cognitive stimuli, such as loud music or intense activities. Under-stimulation happens due to a lack of engagement or boredom, often in monotonous settings.</p>
                    </div>
                    <div class="bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Both types can disrupt emotional balance. Overstimulation may lead to anxiety, restlessness, or impulsive behaviours aimed at escaping the excessive input. Under-stimulation can cause restlessness, dissatisfaction, or depression, prompting individuals to seek new stimuli or exhibit irritability to alleviate feelings of boredom.</p>
                    </div>
                  </div>

                  <!-- Social -->
                  <div class="grid grid-cols-3 divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4">
                      <span class="font-black text-gray-800 text-sm">Social</span>
                    </div>
                    <div class="bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Interactions with others that can provoke a certain behaviour. This could be criticism, teasing, or even a specific person whose presence is unsettling.</p>
                    </div>
                    <div class="bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Negative social interactions can lead to feelings of anger, sadness, or withdrawal, influencing behaviours aimed at escaping or confronting the social stressors.</p>
                    </div>
                  </div>

                  <!-- Emotional -->
                  <div class="grid grid-cols-3 divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4">
                      <span class="font-black text-gray-800 text-sm">Emotional</span>
                    </div>
                    <div class="bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Internal emotional responses that set off a particular behaviour. Examples include feelings of failure, rejection, or abandonment.</p>
                    </div>
                    <div class="bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Emotional triggers can lead to defensive or protective behaviours, such as aggression or isolation, as ways to cope with painful emotions.</p>
                    </div>
                  </div>

                  <!-- Physical -->
                  <div class="grid grid-cols-3 divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4">
                      <span class="font-black text-gray-800 text-sm">Physical</span>
                    </div>
                    <div class="bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Physical sensations or conditions that can lead to specific behaviours, such as pain, hunger, or fatigue.</p>
                    </div>
                    <div class="bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Discomfort might prompt behaviours that seek relief, such as eating, resting, or using medication.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <!-- MODULE SECTION: Appendix C — De-escalation Strategies -->
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">5</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">Strategies for Effectively Diffusing Behavioural Escalation</h3>
              </div>
              <p class="text-gray-600 text-sm font-medium mb-6 ml-11">De-escalating situations involving behavioural escalation requires a combination of communication skills, empathy, and an understanding of the individual's needs and triggers. Here are some strategies that are often effective in diffusing behavioural escalation:</p>

              <div class="rounded-2xl border-2 border-blue-900 overflow-hidden mb-6">
                <div class="bg-blue-900 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">🧩 De-escalation Strategies</h4>
                </div>
                <div class="bg-white px-6 py-6">
                  <ol class="space-y-4">
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Remain Calm and Composed:</strong> Your own calm demeanour can have a calming effect on others. Speak softly, maintain a non-threatening body posture, and ensure your facial expressions convey empathy and understanding.</p>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Establish a Safe Environment:</strong> Make sure the environment is safe for both the individual and others around. Remove any potential hazards or items that could be used harmfully.</p>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Listen Actively:</strong> Show that you are listening and trying to understand their perspective. Sometimes, just feeling heard can significantly reduce a person's agitation.</p>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Acknowledge Their Feelings:</strong> Validate their emotions without necessarily agreeing with the behaviour. Phrases like <em>"I can see you're upset"</em> or <em>"It sounds like this is really frustrating for you"</em> can be helpful.</p>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Use Non-Threatening Body Language:</strong> Avoid direct eye contact, which can be perceived as confrontational. Instead, use a sideways stance and keep a respectful distance.</p>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Use Simple and Clear Communication:</strong> When someone is agitated, they may not be able to process complex information. Use short, simple sentences and avoid jargon or overly technical language.</p>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">7</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Offer Choices and Control:</strong> If possible, give the person options. This can provide a sense of control, which can be calming. For example, ask if they would like to talk in a different location or if there's something specific that would help them feel more at ease.</p>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">8</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Set Boundaries:</strong> While it's important to be empathetic, it's also crucial to set clear boundaries. If the behaviour is unsafe or unacceptable, communicate this calmly but firmly.</p>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">9</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Identify Triggers:</strong> If you are familiar with the individual, use your knowledge of their triggers to avoid exacerbating the situation. If not, try to identify potential triggers in the environment and address them if possible.</p>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">10</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Seek Support:</strong> If the situation escalates beyond your ability to manage safely, don't hesitate to ask for help from colleagues or, if necessary, professional crisis intervention teams.</p>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-7 h-7 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">11</span>
                      <p class="text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Follow-Up:</strong> After the situation has de-escalated, it's important to follow up. This can involve discussing the incident with the individual to understand what triggered it and how similar situations might be avoided in the future.</p>
                    </li>
                  </ol>
                  <div class="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p class="text-sm text-blue-900 font-semibold leading-relaxed">💡 Remember, every individual and situation is unique, and what works in one case may not be effective in another. It's important to remain flexible and adapt your approach as needed. Additionally, maintaining a non-judgmental attitude and respecting the dignity of the individual are key in successfully de-escalating behavioural escalations.</p>
                  </div>
                </div>
              </div>

              <!-- Escalation Cycle Visual -->
              <div class="rounded-2xl border-2 border-gray-200 overflow-hidden">
                <div class="bg-gray-800 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">📊 The Escalation Cycle</h4>
                </div>
                <div class="bg-white px-6 py-6">
                  <div class="flex flex-col md:flex-row rounded-xl overflow-hidden border border-gray-200 text-center text-sm font-black">
                    <div class="flex-1 bg-green-500 text-white py-4 px-3">
                      <div class="text-lg mb-1">😌</div>
                      Calm
                    </div>
                    <div class="flex-1 bg-yellow-400 text-gray-900 py-4 px-3">
                      <div class="text-lg mb-1">😟</div>
                      Agitation
                    </div>
                    <div class="flex-1 bg-orange-500 text-white py-4 px-3">
                      <div class="text-lg mb-1">😠</div>
                      Escalation
                    </div>
                    <div class="flex-1 bg-red-600 text-white py-4 px-3">
                      <div class="text-lg mb-1">🚨</div>
                      Crisis
                    </div>
                    <div class="flex-1 bg-sky-400 text-white py-4 px-3">
                      <div class="text-lg mb-1">🌿</div>
                      Recovery
                    </div>
                  </div>
                  <p class="text-xs text-gray-500 font-medium mt-3 text-center">Understanding where someone is in the cycle helps workers choose the most appropriate response strategy.</p>
                </div>
              </div>
            </div>

            <!-- Gamma: Money-Related Triggers -->
            <div class="rounded-2xl border-2 border-blue-900 overflow-hidden">
              <div class="bg-blue-900 px-6 py-3 flex items-center gap-3">
                <span class="text-white text-lg">💰</span>
                <div>
                  <h4 class="text-white font-black text-base tracking-wide">Understanding Money-Related Triggers in Behaviour Support</h4>
                  <p class="text-blue-200 text-xs font-semibold mt-0.5">Interactive Training Presentation</p>
                </div>
              </div>
              <div class="bg-gray-50 p-4">
                <div class="rounded-xl overflow-hidden shadow-sm">
                  <iframe
                    src="https://gamma.app/embed/1gxrmkrl392ccko"
                    style="width: 100%; height: 450px; border: none; display: block;"
                    allow="fullscreen"
                    title="Understanding Money-Related Triggers in Behaviour Support">
                  </iframe>
                </div>
                <p class="text-gray-500 text-xs mt-2 text-center">Use fullscreen mode for the best experience. Navigate slides using the arrows inside the presentation.</p>
              </div>
            </div>

            <!-- Gamma: Behavioural Escalation Cycle -->
            <div class="rounded-2xl border-2 border-blue-900 overflow-hidden">
              <div class="bg-blue-900 px-6 py-3 flex items-center gap-3">
                <span class="text-white text-lg">📈</span>
                <div>
                  <h4 class="text-white font-black text-base tracking-wide">Understanding the Behavioural Escalation Cycle</h4>
                  <p class="text-blue-200 text-xs font-semibold mt-0.5">Interactive Training Presentation</p>
                </div>
              </div>
              <div class="bg-gray-50 p-4">
                <div class="rounded-xl overflow-hidden shadow-sm">
                  <iframe
                    src="https://gamma.app/embed/4kvgqgpv3abv8wo"
                    style="width: 100%; height: 450px; border: none; display: block;"
                    allow="fullscreen"
                    title="Understanding the Behavioural Escalation Cycle">
                  </iframe>
                </div>
                <p class="text-gray-500 text-xs mt-2 text-center">Use fullscreen mode for the best experience. Navigate slides using the arrows inside the presentation.</p>
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
          <div class="space-y-8">

            <div class="bg-rose-50 border border-rose-100 rounded-2xl p-5">
              <p class="text-rose-900 font-semibold leading-relaxed">Restrictive practices are a <strong>last resort</strong>. All DYAR support workers and practitioners must understand the legal obligations, authorisation requirements, and the strict reporting and monitoring framework that governs their use under the NDIS Quality and Safeguards Commission.</p>
            </div>

            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
              <span class="text-amber-600 font-black text-lg shrink-0">⚠️</span>
              <p class="text-amber-800 text-sm font-semibold">This training is mandatory for any staff member involved in delivering supports to participants who have a Behaviour Support Plan that includes a regulated restrictive practice.</p>
            </div>

            <!-- MODULE 1: What is a Restrictive Practice? -->
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="w-8 h-8 bg-rose-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">1</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">What is a Restrictive Practice?</h3>
              </div>
              <p class="text-gray-600 text-sm font-medium mb-6 ml-11">Source: NDIS Quality and Safeguards Commission — Understanding behaviour support and restrictive practices</p>

              <div class="rounded-2xl border-2 border-rose-800 overflow-hidden">
                <div class="bg-rose-800 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">🔒 Definition</h4>
                </div>
                <div class="bg-white px-6 py-5 space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>A <strong>restrictive practice</strong> is any action that limits a person's human rights or freedom of movement. They are sometimes used to keep a person with disability or others safe.</p>
                  <p>Restrictive practices can have <strong>serious human rights impacts</strong> and should only be used as a <strong>last resort</strong> to prevent harm to the person or others.</p>
                  <div class="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p class="font-black text-red-800 text-sm mb-2">Restrictive practices do NOT:</p>
                    <ul class="space-y-1">
                      <li class="flex items-start gap-2"><span class="text-red-600 font-bold shrink-0">✗</span><span>Result in lasting positive change</span></li>
                      <li class="flex items-start gap-2"><span class="text-red-600 font-bold shrink-0">✗</span><span>Meet the person's needs or improve their quality of life</span></li>
                      <li class="flex items-start gap-2"><span class="text-red-600 font-bold shrink-0">✗</span><span>Address the reasons for the behaviour — and can sometimes make it worse</span></li>
                    </ul>
                  </div>
                  <p>NDIS participants subject to restrictive practices <strong>must have a Behaviour Support Plan in place</strong>. When restrictive practices are used, they must be implemented within a PBS framework, with robust safeguards and a focus on <strong>reducing and eliminating their use</strong>.</p>
                </div>
              </div>
            </div>

            <!-- MODULE 2: 5 Types of Regulated Restrictive Practices -->
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="w-8 h-8 bg-rose-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">2</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">The 5 Types of Regulated Restrictive Practices</h3>
              </div>
              <p class="text-gray-600 text-sm font-medium mb-6 ml-11">The NDIS Commission regulates 5 types of restrictive practices. All 5 must be authorised and documented in a Behaviour Support Plan.</p>

              <div class="rounded-2xl border-2 border-rose-800 overflow-hidden">
                <div class="bg-rose-800 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">📋 Regulated Restrictive Practices</h4>
                  <p class="text-rose-200 text-xs font-semibold mt-1">Source: NDIS Quality and Safeguards Commission</p>
                </div>
                <div class="divide-y divide-gray-100">

                  <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-rose-50 px-5 py-4 flex flex-col justify-center">
                      <span class="text-2xl mb-1">🚪</span>
                      <span class="font-black text-rose-900 text-sm">1. Seclusion</span>
                    </div>
                    <div class="col-span-3 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">A person is left alone in a room or place and is not allowed to leave. For example, a door may be locked, or the person may be told they cannot leave — or believe they cannot leave even if the door is open.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-rose-50 px-5 py-4 flex flex-col justify-center">
                      <span class="text-2xl mb-1">💊</span>
                      <span class="font-black text-rose-900 text-sm">2. Chemical Restraint</span>
                    </div>
                    <div class="col-span-3 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">A person is given medicine to stop or reduce their behaviour. This does not include medication prescribed for a diagnosed health condition.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-rose-50 px-5 py-4 flex flex-col justify-center">
                      <span class="text-2xl mb-1">🔗</span>
                      <span class="font-black text-rose-900 text-sm">3. Mechanical Restraint</span>
                    </div>
                    <div class="col-span-3 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Equipment or a device is used to stop or reduce a person's behaviour. It may limit how the person moves or uses part of their body.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-rose-50 px-5 py-4 flex flex-col justify-center">
                      <span class="text-2xl mb-1">✋</span>
                      <span class="font-black text-rose-900 text-sm">4. Physical Restraint</span>
                    </div>
                    <div class="col-span-3 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">A person, or part of their body, is held so they cannot move freely. This is done to stop or reduce behaviour. This does not include the use of physical guides to assist movement.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-rose-50 px-5 py-4 flex flex-col justify-center">
                      <span class="text-2xl mb-1">🚧</span>
                      <span class="font-black text-rose-900 text-sm">5. Environmental Restraint</span>
                    </div>
                    <div class="col-span-3 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">A person is stopped from having or doing certain things. It can also mean being stopped from going to certain places in their home or community.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- MODULE 3: High Risk Practices — Never Use -->
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="w-8 h-8 bg-rose-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">3</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">High Risk Practices — Never Permitted</h3>
              </div>

              <div class="rounded-2xl border-2 border-red-700 overflow-hidden">
                <div class="bg-red-700 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">🚫 High Risk Practices</h4>
                </div>
                <div class="bg-white px-6 py-5 space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>Some practices place people with disability at a <strong>high risk of harm</strong>. This harm can include serious long-term physical or mental injury. In some cases, it can even lead to death.</p>
                  <p>For example, some types of physical restraint and harsh punishment may be considered <strong>abuse or neglect</strong>. These practices must never be used. In some states and territories, these practices are against the law.</p>
                  <div class="bg-red-50 border-2 border-red-300 rounded-xl p-4">
                    <p class="font-black text-red-800 text-sm">The NDIS Commission clearly states that practices which place NDIS participants at a high risk of harm must <u>not</u> be used. If these practices occur, the NDIS Commission will take compliance action — including issuing banning orders and infringement notices.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- MODULE 4: Authorisation Requirements -->
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="w-8 h-8 bg-rose-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">4</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">Authorisation Requirements</h3>
              </div>
              <p class="text-gray-600 text-sm font-medium mb-6 ml-11">Before any regulated restrictive practice can be used, it must be properly authorised. Authorisation requirements vary by state and territory.</p>

              <div class="rounded-2xl border-2 border-rose-800 overflow-hidden">
                <div class="bg-rose-800 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">✅ Authorisation Checklist</h4>
                </div>
                <div class="divide-y divide-gray-100">

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Behaviour Support Plan</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">The participant must have a current, NDIS Commission–approved Behaviour Support Plan (BSP) that includes the specific restrictive practice. Using a restrictive practice without an approved BSP is an <strong>unauthorised restrictive practice</strong> and is a reportable incident.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">State/Territory Authorisation Body</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Each state and territory has its own authorisation body (e.g. VCAT in Victoria, NCAT in NSW, QCAT in Queensland). The implementing provider must ensure the appropriate authorisation has been obtained before using any regulated restrictive practice.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Consent</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Where possible, informed consent must be obtained from the participant or their authorised representative (guardian, nominee). The participant's wishes must be respected and documented.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Registered Provider</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Only registered NDIS providers can implement regulated restrictive practices. Unregistered providers must never use restrictive practices. If an unregistered provider is using restrictive practices, this must be reported to the NDIS Commission immediately at <strong>behavioursupport@ndiscommission.gov.au</strong>.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- MODULE 5: Reporting Requirements -->
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="w-8 h-8 bg-rose-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">5</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">Reporting Requirements</h3>
              </div>
              <p class="text-gray-600 text-sm font-medium mb-6 ml-11">There are two reporting streams for restrictive practices. Knowing which applies is critical to your legal compliance obligations.</p>

              <!-- Authorised = Monthly Reporting -->
              <div class="rounded-2xl border-2 border-blue-800 overflow-hidden mb-4">
                <div class="bg-blue-800 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">📅 Authorised Restrictive Practices — Monthly Reporting</h4>
                  <p class="text-blue-200 text-xs font-semibold mt-1">For restrictive practices that ARE included in an approved Behaviour Support Plan</p>
                </div>
                <div class="divide-y divide-gray-100">

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Who must report?</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">The <strong>implementing provider</strong> — that is, the registered NDIS provider delivering the support to the participant — must submit monthly reports to the NDIS Commission via the provider portal.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">What to report?</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-blue-800 font-bold shrink-0">•</span><span>Each use of the regulated restrictive practice during the reporting period</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-800 font-bold shrink-0">•</span><span>The type of restrictive practice used</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-800 font-bold shrink-0">•</span><span>The date and duration of each use</span></li>
                        <li class="flex items-start gap-2"><span class="text-blue-800 font-bold shrink-0">•</span><span>The name of the participant</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">When to report?</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Monthly reports must be submitted by the <strong>last business day of each calendar month</strong> for the preceding month. Reports must be submitted even if the restrictive practice was not used during the reporting period (nil returns required).</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Why monthly reports matter</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">Monthly reporting data is used by the NDIS Commission to monitor whether restrictive practices are being reduced over time, and to identify where additional support or oversight may be needed. Failure to report is a breach of NDIS registration conditions.</p>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Unauthorised = Reportable Incident -->
              <div class="rounded-2xl border-2 border-red-700 overflow-hidden">
                <div class="bg-red-700 px-6 py-3">
                  <h4 class="text-white font-black text-base tracking-wide">🚨 Unauthorised Restrictive Practices — Reportable Incident</h4>
                  <p class="text-red-200 text-xs font-semibold mt-1">For restrictive practices used WITHOUT authorisation or outside the approved BSP</p>
                </div>
                <div class="divide-y divide-gray-100">

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">What makes it unauthorised?</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-red-700 font-bold shrink-0">•</span><span>The participant does not have an approved Behaviour Support Plan</span></li>
                        <li class="flex items-start gap-2"><span class="text-red-700 font-bold shrink-0">•</span><span>The practice is not included or documented in the existing BSP</span></li>
                        <li class="flex items-start gap-2"><span class="text-red-700 font-bold shrink-0">•</span><span>The required state/territory authorisation has not been obtained</span></li>
                        <li class="flex items-start gap-2"><span class="text-red-700 font-bold shrink-0">•</span><span>The BSP has expired and has not been renewed</span></li>
                        <li class="flex items-start gap-2"><span class="text-red-700 font-bold shrink-0">•</span><span>An unregistered provider is using any restrictive practice</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">Reporting timeframes</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <ul class="space-y-3 text-sm text-gray-700">
                        <li class="flex items-start gap-2">
                          <span class="font-bold text-red-700 shrink-0 w-20">Within 24 hrs</span>
                          <span class="leading-relaxed">Notify the NDIS Commission via the registered provider portal for all reportable incidents involving unauthorised restrictive practices.</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="font-bold text-red-700 shrink-0 w-20">Within 5 days</span>
                          <span class="leading-relaxed">Submit a full written report with details of the incident, contributing factors, and actions taken or planned.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div class="bg-gray-50 px-5 py-4 flex items-start pt-5">
                      <span class="font-black text-gray-800 text-sm">What happens next?</span>
                    </div>
                    <div class="col-span-2 bg-white px-5 py-4">
                      <p class="text-sm text-gray-700 leading-relaxed">The NDIS Commission will review the report and may investigate. Providers may be required to submit a Corrective Action Plan. Repeated unauthorised use may result in compliance action, including suspension or cancellation of registration.</p>
                    </div>
                  </div>

                  <div class="bg-red-50 px-6 py-4">
                    <p class="text-sm font-black text-red-800">⚡ Remember: Using a restrictive practice while waiting for a BSP to be developed is automatically classed as an unauthorised restrictive practice and must be reported as a reportable incident — even if a BSP is being worked on.</p>
                  </div>

                </div>
              </div>
            </div>

            <!-- Gamma: Legal & Administrative Orders WA -->
            <div class="rounded-2xl border-2 border-rose-800 overflow-hidden">
              <div class="bg-rose-800 px-6 py-3 flex items-center gap-3">
                <span class="text-white text-lg">⚖️</span>
                <div>
                  <h4 class="text-white font-black text-base tracking-wide">Legal &amp; Administrative Orders for NDIS Participants — Western Australia</h4>
                  <p class="text-rose-200 text-xs font-semibold mt-0.5">Interactive Training Presentation</p>
                </div>
              </div>
              <div class="bg-gray-50 p-4">
                <div class="rounded-xl overflow-hidden shadow-sm">
                  <iframe
                    src="https://gamma.app/embed/yqfyrold4msgl6u"
                    style="width: 100%; height: 450px; border: none; display: block;"
                    allow="fullscreen"
                    title="Understanding Legal and Administrative Orders for NDIS Participants in Western Australia">
                  </iframe>
                </div>
                <p class="text-gray-500 text-xs mt-2 text-center">Use fullscreen mode for the best experience. Navigate slides using the arrows inside the presentation.</p>
              </div>
            </div>

            <!-- MODULE 6: Quick Reference -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="w-8 h-8 bg-rose-600 text-white rounded-lg flex items-center justify-center font-black text-sm shrink-0">6</span>
                <h3 class="text-xl font-black text-gray-900 tracking-tight">Quick Reference — Key Contacts & Resources</h3>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p class="font-black text-gray-900 text-sm mb-2">📧 Behaviour Support Enquiries</p>
                  <p class="text-sm text-gray-700">behavioursupport@ndiscommission.gov.au</p>
                </div>
                <div class="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p class="font-black text-gray-900 text-sm mb-2">🚨 Emergency</p>
                  <p class="text-sm text-gray-700">If a participant's life is at risk — call <strong>000</strong> immediately.</p>
                </div>
                <div class="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p class="font-black text-gray-900 text-sm mb-2">📋 NDIS Commission Portal</p>
                  <p class="text-sm text-gray-700">Submit monthly reports and reportable incidents via the registered provider portal.</p>
                </div>
              </div>
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

            <!-- Gamma Presentation Embed -->
            <div class="rounded-2xl border-2 border-blue-800 overflow-hidden">
              <div class="bg-blue-800 px-6 py-3 flex items-center gap-3">
                <span class="text-white text-lg">🎯</span>
                <div>
                  <h4 class="text-white font-black text-base tracking-wide">NDIS Person Centred Approach</h4>
                  <p class="text-blue-200 text-xs font-semibold mt-0.5">Interactive Training Presentation</p>
                </div>
              </div>
              <div class="bg-gray-50 p-4">
                <div class="rounded-xl overflow-hidden shadow-sm" style="position: relative; width: 100%; padding-top: 0;">
                  <iframe 
                    src="https://gamma.app/embed/la1tdomfsrcjb1q" 
                    style="width: 100%; height: 450px; border: none; display: block;" 
                    allow="fullscreen" 
                    title="NDIS Person Centred Approach">
                  </iframe>
                </div>
                <p class="text-gray-500 text-xs mt-2 text-center">Use fullscreen mode for the best experience. Navigate slides using the arrows inside the presentation.</p>
              </div>
            </div>

            <!-- Gamma Presentation 2 -->
            <div class="rounded-2xl border-2 border-blue-800 overflow-hidden">
              <div class="bg-blue-800 px-6 py-3 flex items-center gap-3">
                <span class="text-white text-lg">💬</span>
                <div>
                  <h4 class="text-white font-black text-base tracking-wide">Communication with People with Disabilities</h4>
                  <p class="text-blue-200 text-xs font-semibold mt-0.5">Interactive Training Presentation</p>
                </div>
              </div>
              <div class="bg-gray-50 p-4">
                <div class="rounded-xl overflow-hidden shadow-sm">
                  <iframe 
                    src="https://gamma.app/embed/g8r0rn9rlrxi5d7" 
                    style="width: 100%; height: 450px; border: none; display: block;" 
                    allow="fullscreen" 
                    title="Communication with People with Disabilities">
                  </iframe>
                </div>
                <p class="text-gray-500 text-xs mt-2 text-center">Use fullscreen mode for the best experience. Navigate slides using the arrows inside the presentation.</p>
              </div>
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
