---
layout: default
---

[&larr; Back home](./index.html)

# Experience

Below are some of the things (technical and non-technical) I've undertaken across my career, that I feel have helped to shape me or that I felt were interesting highlights. 

## Building Things

### Clinical Trials Data Managament Support Tooling

For several years, I led the development of a web-based management system to enable a clinical trials research unit to gather, clean, and report on participant data for more than 30 long-running trials. Each trial had different needs and designs, and the system was built up over the years to be flexible enough to accomodate these -- focussing on modelling the key concepts of trial design, adapting as regulation and best practice demanded, and incorporating the feedback and observations on user behaviour to make the experience for end-users the best possible.

This was an opportunity to collaborate closely with data managers and research staff to understand their needs, pain-points, and potential improvements to any processes they worked through. Being close to stakeholders and end-users allowed us to work in an agile fashion, adapting quickly and prioritising the changes undertaken to be of the highest value. When issues occurred, we were close enough to understand the users and their needs immediatly, fixing problems or offering support in a collaborative fashion; this close working partnership also allowed us to find opportunities to shape the direction of the product.

Whether it was creating a domain-specific language for non-technical staff to review and help validate code (as part of regulatory review requirements), building a code generation utility (to take a trial specification and build models and views), or defining comprensive, human-readable test suites to support regulatory audits, there was always opportunities to push forward both in the technical and product realms, and to keep learning from those helping to run these trials for how they could best be supported.

### Kafka-streaming Microservices

When I moved away from [the health research domain](#clinical-trials-data-managament-support-tooling) and into the online gambling domain, I beganworking in teams where we developed and deployed a suite of Java and Scala-based microservices, streaming data from various Kafka topics relating to customer play, account, and payment events. The services needed to stateful, resiliant, sometimes interact with external APIs, all of which needed robust monitoring and careful planning for change impacts.

In addition, the teams were also responsible for providing the capabilities for operational teams within marketing to define promotions, taking complex configuration data and presenting it on an interface that would allow simple, and most importantly accurate, set-up of campaigns that customers could interact with.

This was a huge shift from the perspecitve of my technology experience, and I gained an understanding of the very different needs and considerations versus a web-application context. I was able to take the experience I gained forward to other teams, dealing more specifically with payments events (for finiancial checks) or accounts event (accounts updates and deletions); pushing forwards the strategic vision for reactive, real-time checks and updates for customers in different business areas.

The experience of maintaining and expanding this service network to accomodate new capabilities, and allow for better monitoring and alerting, gave me a solid foundation for working in a robust, real-time event-driven fashion which I still build on going forwards in my designs of solutions. 

### Customer Service Chatbot 

As part of an initative to improve customer satisfaction and ease information access, I was tasked with integrating an existing IBM Watson chatbot into our customer live-chat system, hosted on the Salesforce platform. Due to different constraints within the systems involved, this turned into a large research piece, talking to experts from both IBM and Salesforce, to see how best to achieve the customer operations vision and deliver cost savings and user journey improvments.

After a few proof-of-concepts, the final integration of the systems leveraged Salesforce's own chat automation offerings, backed by a conversation tree that would pass messages outwards to the IBM Watson service, consume the response, and act accordingly to interact with the user or transfer them onwards to human agents or specific help content. With this multi-layer, custom approach, we were able to carry out testing with small pools of customer interactions, choosing low-priority chat categories and monitoring outcomes and satisfactions closely to determine the fitness of the solution, but also the underlying conversation models within the IBM chatbot. Once correctness was established, we were able to launch ahead of a major business event, capitalising on the opportunity for savings and experience enhancement with satisfaction from business leaders that the solution was safe and robust.

This was my first encounter with the Salesforce platform, which I would continue to support and build upon for other projects; it was an opportunity to bring good engineering practices into the team supporting it, and show how to devliver one of the most complex and high-impact elements that was built into the them in a steady and continual manner. It was also my first opportunity to delve deeper into the customer operations space, and understand their drivers, goals and constraints, and to understand how we could serve customers outside of direct play interactions.

### Software Architecture Processes

I've always found that visual aids are a great way to kick-start meaningful conversations -- it's far easier to point to a diagram and say "does this look right?" than try to explain a process step-by-step verbally and get good feedback. Manual process mapping, system interactions, class relationships for data flows, and even psudo-code; all can be sketched out for a greater understanding.

I take pride in my diagrams and the calrity they can bring to people at all levels, and was excited to be given the opportunity to cover the role of Solutions Architect on a project involving integration of key customer service systems. What had been informal documentation to help teams and projects in the long term got the opportunity to become something far more key to a large project.

Taking on this challenge allowed me to gain a better understanding of what makes useful, robust documentation for the long term use; discussions of solutions and options in terms of benefits and trade-offs in a structured fashion for non-technical stakeholders to consume, as well as the construction of good illustrations of user and system interactions to convey ideas at different levels of detail. It also allowed me to gain first-hand experience enagaging with other business areas (InfoSec, Service Management) to ensure all processes have been considered and followed.

## Supporting People

### Stakeholder Empathy

In all of the roles that I've held, one of the aspects that I've been most proud of has been my focus and empathy for non-technical staff and users. Whilst building solutions to problems is fun and rewarding, those problems are rooted not in technology, but in people; their needs and wants and demands. Conversations lead to understanding of the context these problems exist in, which then should help to shape the focus of the solutions we produce. They can also help to challenge us and push us to look beyond our usual reflexes to build a specific type of thing, or to build anything at all -- as the concept of [Maslow's Hammer](https://en.wikipedia.org/wiki/Law_of_the_instrument) discusses, we tend to lean towards familiar tools when designing solutions, without always considering if they are best suited.

Framing problems and solutions in terms of the people involved, instead of the technology being used, helps me keep other focussed on _what_ is trying to be achieved, rather than _how_ it is trying to be achieved.

### Undergraduate and Graduate Teaching

Over the course of my career, I have successfully delivered parts of both undergraduate- and graduate-level software engineering courses, in both a University setting and a business setting (for onboarding of associate engineers switching careers into software engineering). In both of these cases, I needed to put together learning materials that met the course objectives, planned exercises and hands-on tasks, and delivered the material in a classroom setting.

This is a very different experience to day-to-day mentoring,;a condensed time in which specific content needed to be delivered, as opposed to two-way mentoring conversation that can explore many different aspects at a suitable pace. Preparation of materials, and a focus on what would be essential for students to know, were vitally important to success.

I am proud of my teaching efforts, and from speaking to others years later the feedback I've had has been good, bringing up aspects that could have gone better that I myself am aware of -- given more opportunities, I would want to do an even better job for those that were looking to learn.

### Engineering Squad Transformation

Whilst I was working alongside a small team of Salesforce-skilled engineers on [a chatbot](#customer-service-chatbot), they expressed an interest in learning more general software engineering skills, and gaining knowledge outside of direct Salesforce platform development. As such, I would pair with them on their work, offer insights into how challenges might be approached differently, and signpost them to other tools and possibilities that they could apply rather than sticking to what they knew.

Whilst I was mentoring and maturing the skillsets of the engineers, the team lead position became vacant. Voluntarily, I stepped in to fill this gap in leadership and direction, continuing to help the engineers grow themselves and ensuring that projects were being delivered to a high standard. Not long after, I was approached to make the position official, taking over as the interim engineering manager for the team, building on the work that I had put in already and the positive results that had been noticed amongst areas of the business that we collaborated with.