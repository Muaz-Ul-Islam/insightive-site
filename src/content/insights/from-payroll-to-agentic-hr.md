---
title: "From 20,000 Payslips to Agentic HR: A Decade Inside the HR Misfit"
dek: "What we learned running payroll for 20,000 people on software we built and why the next HR system is an orchestra of AI agents rather than a bigger database."
category: "Industry Deep Dives"
publishDate: 2026-06-13
draft: true
bylined: true
author: "Umar Rana"
readingTime: "8 min read"
takeaways:
  - "Global HR platforms fail in this region for one structural reason: labour law here is complex and country-specific and the GCC increasingly demands real-time compliance, not a quarterly export."
  - "We built an HCM in 2019 that ran payroll for roughly 20,000 employees. The hard part was never the payslip. It was modelling the rules behind it."
  - "An ATS that screens thousands of CVs a day is a System-scale problem: it has to read, rank and route against your real hiring process, not a vendor's funnel."
  - "Agentic HR is the shift from software that stores HR data to software that does HR work: agents screen, draft, reconcile and flag, while humans keep the judgment."
---
We have spent more than a decade close to the unglamorous core of HR technology. Not the engagement-survey layer or the org-chart visualiser, but the part that has to be exactly right or people do not get paid: payroll, compliance and the rules underneath both. That vantage point taught us why most HR software in this region almost fits and never quite does.

## Why the global platforms almost fit

The standard explanation is that global HR platforms lack local features. That is the symptom, not the cause. The real reason is structural. Labour law in this region is genuinely complex and it is country-specific and the GCC is moving toward real-time compliance rather than the periodic, after-the-fact reporting most platforms were built around.

End-of-service gratuity is not a single formula. It varies by contract type, by length of service and by the reason employment ended. Wage protection regimes expect payroll data in a prescribed shape, on time, through the right channel. Visa status, work-permit categories and nationality-linked rules feed directly into what is legal to pay and what must be withheld. A platform built for a single-jurisdiction market treats all of this as configuration. So the labour law gets implemented as customisation, layered on top of a model that never expected it and the customisation never quite stabilises because the regulations keep moving.

The result is familiar. A global HCM goes in. A local team of consultants spends months bending it. And payroll still runs with a spreadsheet alongside it, because the spreadsheet is where the rules the platform could not hold actually live.

## What 20,000 payslips taught us

In 2019 we built an HCM that ran payroll for roughly 20,000 employees. At that scale you learn quickly that the payslip is the easy part. The difficulty is the machinery behind it: the rule engine that decides, for each person, what is owed, what is withheld and what must be reported, under regulations that differ by jurisdiction and change without asking permission.

The thing that made the system work was not a feature list. It was that the labour-law logic was the data model, not a layer bolted onto a foreign one. When a rule changed, we changed the rule, in one place and every downstream calculation followed. We were not customising toward compliance. We were compliant by construction. That is the difference between software that fits and software that has been beaten into approximately the right shape.

## The ATS problem is a System problem

The next piece is hiring. Shade, the applicant tracking system we are taking to build, starts from a deceptively simple requirement: screen thousands of CVs a day and route the right ones to the right people. The reason an off-the-shelf ATS struggles here is the same reason the HCM did. A generic ATS models a generic funnel. Your hiring process is not generic. It has its own stages, its own approvals, its own integration with the systems that already hold your people data.

Screening at volume is a System-scale build: it has to read unstructured CVs, rank them against the role as your team actually defines it and hand off into your existing HR stack without a human re-keying anything. Done well, the recruiter stops being a sorting machine and starts being a decision-maker. That is the whole point.

<figure class="essay-figure">
  <div class="essay-figure-art">
    <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <rect width="640" height="300" fill="#F5F4EF"/>
      <g font-family="ui-monospace, monospace" font-size="12" fill="#13141E">
        <text x="60" y="60" font-size="13" fill-opacity="0.5">Record-keeping HR</text>
        <rect x="60" y="80" width="200" height="44" fill="none" stroke="#0066CC" stroke-opacity="0.5" stroke-width="1.2"/>
        <text x="74" y="107" fill-opacity="0.8">stores the data</text>
        <rect x="60" y="136" width="200" height="44" fill="none" stroke="#0066CC" stroke-opacity="0.5" stroke-width="1.2"/>
        <text x="74" y="163" fill-opacity="0.8">people do the work</text>
        <path d="M300 130 L360 130" stroke="#0066CC" stroke-opacity="0.5" stroke-width="1.4"/>
        <path d="M352 124 L362 130 L352 136 Z" fill="#0066CC" fill-opacity="0.6"/>
        <text x="400" y="60" font-size="13" fill="#BA7517" fill-opacity="0.9">Agentic HR</text>
        <rect x="400" y="80" width="180" height="44" fill="#0066CC" fill-opacity="0.06" stroke="#0066CC" stroke-opacity="0.6" stroke-width="1.2"/>
        <text x="414" y="107" fill-opacity="0.85">agents do the work</text>
        <rect x="400" y="136" width="180" height="44" fill="#BA7517" fill-opacity="0.1" stroke="#BA7517" stroke-width="1.2"/>
        <text x="414" y="163" fill-opacity="0.85">humans keep judgment</text>
      </g>
    </svg>
  </div>
  <figcaption>The shift is in what the software does. Record-keeping HR stores data and leaves the work to people. Agentic HR runs the work with AI agents and reserves judgment for humans.</figcaption>
</figure>

## What "agentic HR" actually means

The HR system we are building now is not a bigger database. It is a shift in what the software does. For twenty years HR software has been a system of record: it remembers things and asks people to act on what it remembers. Agentic HR turns that around. The software does the work and asks people for the judgment calls.

Concretely: an agent screens the inbound CVs and drafts a shortlist with its reasoning attached. An agent reconciles payroll against the rule engine and flags the three cases that do not look right, instead of leaving a human to check 20,000. An agent watches for a regulatory change and prepares the impact analysis before the deadline rather than after the penalty. The human stays exactly where human judgment belongs, on the decisions and leaves the volume to the agents.

This is why the lineage matters. You do not arrive at trustworthy agentic HR by adding a chatbot to a record system. You arrive at it by already owning a model that encodes the rules correctly, because an agent acting on a wrong model just makes wrong decisions faster. The decade we spent getting payroll exactly right for 20,000 people is the foundation the agents now stand on.

## The takeaway for anyone choosing HR software

If you operate across this region, test any HR platform against one question: where does the labour law live? If the answer is "in customisation" or "in a spreadsheet beside the system," you are looking at the near-fit tax and it will grow every time a regulation moves. If the answer is "in the model," you have something that fits. And once it fits, it is ready for the only upgrade that actually changes the economics of an HR team: handing the volume to agents and keeping the judgment for people.
