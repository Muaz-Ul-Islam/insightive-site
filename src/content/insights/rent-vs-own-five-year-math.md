---
title: "Rent vs. Own: The Five-Year Math"
dek: "The TCO argument for fit-built software, with the model you can run yourself."
category: "Ownership Economics"
publishDate: 2026-06-10
draft: false
bylined: true
author: "Umar Rana"
readingTime: "6 min read"
takeaways:
  - "Off-the-shelf wins year one. Across five years, per-seat licensing plus workaround labour often overtakes the cost of building and owning."
  - "The honest comparison isn't build cost vs. zero. It is build cost vs. renting a near-fit forever, plus the staff that near-fit requires."
  - "A fit-built system is an asset you own. SaaS is an expense that renews and escalates."
  - "Run the model with your own seat count, renewal escalator and workaround headcount before you sign another multi-year term."
---
Most build-vs-buy decisions are settled in year one, where off-the-shelf always wins. A subscription starts Monday for the price of a dinner; a build is months of cost before it returns a thing. If the comparison ended there, nobody sane would build.

The comparison doesn't end there. Software is a multi-year commitment whichever way you go. Eventually the curves cross.

## The comparison everyone gets wrong

The instinctive framing is *build cost vs. zero*: the new system costs money, the status quo is free. It isn't free. The status quo is renting a near-fit forever, plus the [near-fit tax](/insights/the-near-fit-tax) you pay to keep it usable: the workaround headcount, the reconciliation hours, the integration glue.

So the real comparison is:

> Renting (licences plus escalation plus workaround labour, every year, forever) versus owning (a one-time build plus modest maintenance, on an asset you keep).

Put both on a five-year horizon and the question stops being "which is cheaper to start?" and becomes "which is cheaper to live with?"

## A worked example

Numbers are illustrative. Plug in your own. Take an operations platform for an 80-person team.

**Rent.** 80 seats at $120/seat/month is about $115k in year one. Assume a 10% annual increase (renewals rarely go down). Add the workaround layer the near-fit requires (call it 1.5 full-time-equivalents at $60k, so $90k a year), because that cost belongs to the rented tool even though it hides in payroll.

- Year 1: about $205k
- Five-year total: roughly **$1.15M**. Year six keeps running.

**Own.** A fit-built system for that operation: a one-time build of, say, $300k, then 15% of that per year in maintenance and iteration (about $45k).

- Year 1: about $345k, more than renting, as expected.
- Five-year total: roughly **$480k**. You own the asset.

The crossover lands somewhere in year two to three. After it, every year widens the gap. The owned system is also doing something the rental never does: appreciating in fit as you extend it, instead of escalating in price as you renew it.

## When renting is the right answer

The math doesn't always favour building. Pretending it does would be the same dishonesty in reverse. Rent when the fit gap is small (the tool genuinely matches how you work), when the function is a true commodity (email, payroll runs, accounting ledgers), when scale is low enough that licences stay trivial or when the domain is changing so fast that you would be rebuilding anyway. For the common 80%, off-the-shelf is correct and you should not build it.

Build when the misfit is structural and permanent: when the software runs a core operation, the workaround layer has become a department and the customisation quotes have started arriving with commas in them.

<figure class="essay-figure">
<div class="essay-figure-art" aria-hidden="true"><svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg"><rect width="760" height="320" fill="#F5F4EF"/><text x="40" y="44" style="font-family:var(--mono),monospace;font-size:12px;letter-spacing:.14em;text-transform:uppercase;fill:#0066CC">Five-year cost</text><g stroke="#0066CC" stroke-opacity="0.4" stroke-width="1" fill="none"><line x1="80" y1="64" x2="80" y2="270"/><line x1="80" y1="270" x2="700" y2="270"/></g><polyline points="100,244 250,196 420,150 680,80" fill="none" stroke="#BA7517" stroke-width="2"/><polyline points="100,150 270,136 460,128 680,122" fill="none" stroke="#0066CC" stroke-width="2"/><circle cx="500" cy="125" r="6" fill="#0066CC"/><text x="694" y="80" style="font-family:var(--sans),sans-serif;font-size:14px;fill:#BA7517">Rent</text><text x="694" y="124" style="font-family:var(--sans),sans-serif;font-size:14px;fill:#0066CC">Own</text><text x="356" y="108" style="font-family:var(--sans),sans-serif;font-size:13px;fill:#45474F">Crossover near year 3</text><text x="92" y="290" style="font-family:var(--sans),sans-serif;font-size:12px;fill:#76787F">Year 1</text><text x="654" y="290" style="font-family:var(--sans),sans-serif;font-size:12px;fill:#76787F">Year 5</text></svg></div>
<figcaption>Renting starts cheaper. Across five years the lines cross and owning pulls ahead.</figcaption>
</figure>

## Run it before you renew

Before the next multi-year term, build the table yourself. Three inputs decide it: your real seat count, the renewal escalator in your contract and the headcount that exists only to bridge the gaps. Most teams have never added the third line. It is the one that moves the answer.

The question, once the curves are in front of you, is the one the [thesis](/thesis) ends on: not "can we afford to build?" but "can we afford not to own?"

*A two-week Fit Assessment builds this model on your actual numbers and returns the call (stay, extend or build) with the five-year figure attached.*
