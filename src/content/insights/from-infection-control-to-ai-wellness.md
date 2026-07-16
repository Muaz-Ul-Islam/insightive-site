---
title: "From Infection Control to AI-Driven Wellness: A Healthcare Build Story"
dek: "A ventilator-associated pneumonia tracker and a telehealth platform taught us where healthcare software fits and where it fights the clinician. The next build is wellness for organisations."
category: "Industry Deep Dives"
publishDate: 2026-06-14
draft: true
bylined: true
author: "Umar Rana"
readingTime: "7 min read"
takeaways:
  - "Clinical software lives or dies on whether it fits the clinical workflow. An infection-control tool that adds steps at the bedside gets abandoned, however good its dashboard."
  - "We built a VAP infection-control system and worked on Sehat Kahani, a telehealth platform. Both reinforced the same rule: capture data where care already happens, not in a parallel system."
  - "Telehealth is not video plus a database. It is the whole encounter, from triage to prescription to follow-up, modelled for how care is actually delivered at a distance."
  - "Our forward focus is AI-driven wellness for organisations: shifting from treating illness after the fact to managing the energy and health of a workforce continuously."
---
Healthcare is the clearest test of the fit-first thesis, because in healthcare a misfit is not just expensive. It is dangerous. Software that does not fit the clinical workflow does not get tolerated and worked around the way a misfit CRM does. It gets abandoned at the bedside and the data it was supposed to capture simply never appears. We learned this directly, building two very different healthcare systems.

## The bedside test: infection control

We built a system to track ventilator-associated pneumonia, one of the most serious hospital-acquired infections. On paper it is a data problem: record the right clinical signals for ventilated patients, surface the patterns and help the infection-control team intervene earlier.

In practice the entire project lived or died on one question: does capturing this data add steps to what the clinician is already doing, or does it ride along with the existing workflow? Every extra screen, every duplicate entry, every "log into the other system" is a place where, under real pressure on a real ward, the data stops being entered. A dashboard fed by data nobody has time to enter is worse than no dashboard, because it looks like coverage and is not.

The build that works is the one that captures the signal where care already happens and turns it into surveillance the infection-control team can act on, without asking the bedside to do clerical work it will not sustain. Fit here is not a preference. It is the difference between a system that catches an outbreak early and a system that quietly goes empty.

## The encounter is the product: telehealth

The second system was Sehat Kahani, a telehealth platform. The naive model of telehealth is "video call plus a patient database." That model misfits care the same way a generic timetable misfits a school. A remote encounter is a whole clinical process: intake and triage, the consultation itself, a prescription that has to be valid and traceable, a referral path when remote is not enough and a follow-up that closes the loop. Stitch that out of a video tool, a separate notes app and a messaging thread and you have rebuilt the five-tool stitch, except now a patient's care is what falls through the gaps between the tools.

Telehealth that fits models the encounter end to end, because the encounter is the product. The video is the easy, commoditised part. The hard, valuable part is everything around it that makes the remote visit a real episode of care rather than a phone call with extra screens.

<figure class="essay-figure">
  <div class="essay-figure-art">
    <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <rect width="640" height="300" fill="#F5F4EF"/>
      <g font-family="ui-monospace, monospace" font-size="12" fill="#13141E">
        <text x="60" y="60" font-size="13" fill-opacity="0.5">Treat after the fact</text>
        <rect x="60" y="78" width="210" height="46" fill="none" stroke="#0066CC" stroke-opacity="0.5" stroke-width="1.2"/>
        <text x="74" y="100" fill-opacity="0.8">illness appears</text>
        <text x="74" y="116" font-size="10" fill-opacity="0.5">episodic, reactive</text>
        <path d="M285 101 L350 101" stroke="#0066CC" stroke-opacity="0.45" stroke-width="1.4"/>
        <path d="M342 95 L352 101 L342 107 Z" fill="#0066CC" fill-opacity="0.6"/>
        <text x="375" y="60" font-size="13" fill="#BA7517" fill-opacity="0.9">Manage continuously</text>
        <rect x="375" y="78" width="200" height="46" fill="#0066CC" fill-opacity="0.06" stroke="#0066CC" stroke-opacity="0.6" stroke-width="1.2"/>
        <text x="389" y="100" fill-opacity="0.85">workforce wellness</text>
        <text x="389" y="116" font-size="10" fill-opacity="0.5">continuous, preventive</text>
        <rect x="375" y="138" width="200" height="46" fill="#BA7517" fill-opacity="0.1" stroke="#BA7517" stroke-width="1.2"/>
        <text x="389" y="160" fill-opacity="0.85">AI surfaces the signal</text>
        <text x="389" y="176" font-size="10" fill-opacity="0.5">before it becomes a cost</text>
      </g>
    </svg>
  </div>
  <figcaption>The forward shift: from treating illness episodically after it appears to managing a workforce's health continuously, with AI surfacing the signal before it becomes a cost.</figcaption>
</figure>

## Where we are taking this: AI-driven wellness for organisations

Both projects sit behind us and the lessons point forward. Our focus in healthcare now is not the hospital or the clinic. It is the organisation and the shift from treating illness after it appears to managing the health and energy of a workforce continuously.

The logic is the same fit-first logic, applied to a new problem. Most corporate wellness today is the near-fit version of a real idea: an annual checkup, a gym subsidy and a dashboard nobody reads. It is episodic and reactive, bolted onto the side of work. AI-driven wellness, done with fit in mind, is continuous and preventive. It reads the signals an organisation already generates about workload, fatigue and health, surfaces the patterns that predict burnout and breakdown and prompts the intervention before the cost lands as absence, attrition or a medical event.

This is not a wearable with a leaderboard. It is workforce health modelled as a system, owned by the organisation, built around how that organisation actually works. The same discipline that made an infection tracker usable at the bedside and a telehealth platform coherent end to end is what separates real wellness infrastructure from another dashboard nobody opens.

## The throughline

Across infection control, telehealth and now organisational wellness, the rule has not changed. Healthcare software earns its place only when it fits the way care is actually delivered. Add steps and it goes empty. Fragment the encounter and patients fall through the gaps. Bolt wellness onto the side of work and it gets ignored. Build for the real process, capture the signal where it already lives and reserve the human judgment for the decisions that need it. In healthcare more than anywhere, fit is not a nicety. It is the whole job.
