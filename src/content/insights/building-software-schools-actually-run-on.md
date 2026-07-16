---
title: "Building Software Schools Actually Run On: Lessons from ManageWISE"
dek: "Two education projects and a product taught us that a school is not an enterprise with children in it. The processes that matter are the ones no generic system models."
category: "Industry Deep Dives"
publishDate: 2026-06-13
draft: true
bylined: true
author: "Umar Rana"
readingTime: "7 min read"
takeaways:
  - "A school management system fails when it is modelled as a small ERP. A school runs on attendance, timetabling, fee cycles and parent communication, not on modules a business would recognise."
  - "We built for the education sector in 2014 across two projects and a product, ManageWISE. The recurring lesson was that the timetable is the hard problem, not the database."
  - "Fee collection in a school is a relationship workflow, not an invoicing workflow. Treating it like accounts-receivable software is exactly how the misfit starts."
  - "The same fit-first logic applies whether the buyer is a single school or a group: model the real process, then decide what to own."
---
In 2014 we did two projects and built a product for the education sector. The product, ManageWISE, was a school management system. Going in, the assumption (ours and everyone else's) was that a school is basically a small organisation: it has people, it has money, it has records, so a scaled-down ERP should do the job. That assumption is wrong in a specific and instructive way and unlearning it is the whole lesson.

## A school is not an enterprise with children in it

An enterprise runs on transactions between mostly interchangeable actors. A school runs on a small number of deeply structured, repeating cycles that have almost no analogue in business software.

Consider attendance. In an ERP it would be a time-tracking module. In a school it is a daily, period-by-period record tied to timetables, to safeguarding obligations and to parent notification and it feeds directly into reporting that regulators and parents both expect. It is not "clock in." It is a structured daily event with consequences attached.

Consider the academic calendar. A business has a fiscal year and some holidays. A school has terms, exam windows, result cycles, parent-teacher schedules and a timetable that has to satisfy hundreds of simultaneous constraints. None of this maps onto a generic planning module. It is its own domain.

## The timetable is the hard problem

If there is one thing building ManageWISE taught us, it is that the timetable is where school software lives or dies. It looks like a scheduling feature. It is actually a constraint-satisfaction problem of real difficulty: every teacher in one place at a time, every class in a suitable room, subject rules respected, teacher availability honoured, load balanced fairly and the whole thing reshuffled the moment one teacher is absent.

Generic systems treat the timetable as a calendar you fill in by hand. That is precisely the point where the staff become the software. A deputy head spends the first week of term rebuilding the grid in a spreadsheet because the "system" cannot actually solve the constraints it pretends to manage. The timetable is not a view. It is an engine and if your software does not treat it as one, someone on staff is the engine instead.

<figure class="essay-figure">
  <div class="essay-figure-art">
    <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <rect width="640" height="300" fill="#F5F4EF"/>
      <g font-family="ui-monospace, monospace" font-size="11" fill="#13141E">
        <text x="60" y="50" font-size="13" fill-opacity="0.6">Constraints the timetable must satisfy at once</text>
        <rect x="60" y="70" width="150" height="40" fill="none" stroke="#0066CC" stroke-opacity="0.5" stroke-width="1.2"/>
        <text x="72" y="95" fill-opacity="0.8">teacher availability</text>
        <rect x="230" y="70" width="150" height="40" fill="none" stroke="#0066CC" stroke-opacity="0.5" stroke-width="1.2"/>
        <text x="242" y="95" fill-opacity="0.8">room capacity</text>
        <rect x="400" y="70" width="150" height="40" fill="none" stroke="#0066CC" stroke-opacity="0.5" stroke-width="1.2"/>
        <text x="412" y="95" fill-opacity="0.8">subject rules</text>
        <rect x="60" y="125" width="150" height="40" fill="none" stroke="#0066CC" stroke-opacity="0.5" stroke-width="1.2"/>
        <text x="72" y="150" fill-opacity="0.8">class load balance</text>
        <rect x="230" y="125" width="150" height="40" fill="none" stroke="#0066CC" stroke-opacity="0.5" stroke-width="1.2"/>
        <text x="242" y="150" fill-opacity="0.8">period sequencing</text>
        <rect x="400" y="125" width="150" height="40" fill="#BA7517" fill-opacity="0.1" stroke="#BA7517" stroke-width="1.2"/>
        <text x="412" y="150" fill="#BA7517" fill-opacity="0.9">absence reshuffle</text>
        <path d="M305 175 L305 205" stroke="#0066CC" stroke-opacity="0.5" stroke-width="1.4"/>
        <path d="M299 199 L305 209 L311 199 Z" fill="#0066CC" fill-opacity="0.6"/>
        <rect x="205" y="212" width="200" height="44" fill="#0066CC" fill-opacity="0.06" stroke="#0066CC" stroke-opacity="0.6" stroke-width="1.4"/>
        <text x="232" y="239" font-size="12" fill-opacity="0.85">one valid timetable</text>
      </g>
    </svg>
  </div>
  <figcaption>The timetable is a constraint-satisfaction engine, not a calendar. Every constraint holds at once and the amber one, an absent teacher, forces the whole grid to resolve again.</figcaption>
</figure>

## Fees are a relationship, not an invoice

The other place generic software misfits a school is money. An accounts-receivable system models an invoice, a due date and a debtor. A school fee cycle is a relationship managed over years with families, full of siblings on different plans, scholarships, instalments, late-fee grace that is applied with discretion and communication that has to be careful because the customer is also a parent you will see at the gate tomorrow.

Treat that as plain invoicing and you get two failures at once. The finance office ends up running fees in a spreadsheet because the system cannot hold the nuance and the parent communication turns transactional in a setting where it cannot afford to be. Fee collection in a school is a workflow about people and software that does not know that makes the staff paper over the difference.

## The fit-first lesson, regardless of size

The reason this still matters is that the education market keeps being sold the same near-fit. A general-purpose platform arrives, modules get switched on and within a term the real work has migrated back into spreadsheets and group chats because the system models a business and the school is not one.

The fix is not "buy a bigger education platform." It is the same discipline we apply everywhere: model the process that actually matters (the timetable engine, the attendance event, the fee relationship) and then decide, with real numbers, what is worth owning. A single school with a competent administrator may rationally stay on simple tools. A group running the same misfit across many sites is paying the near-fit tax at scale and is exactly the case where owning the model pays for itself. Either way, the decision starts the same way: stop pretending a school is an enterprise with children in it and build for what a school actually does.
