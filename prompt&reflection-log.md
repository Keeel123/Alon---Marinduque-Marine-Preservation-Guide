## Task 1 — Sector Selection
Item	          - Description
Sector	          - Blue Economy & Marine Innovation
Local Challenge   - Residents need accessible information and practical ways to help preserve marine life, reduce ocean pollution, and participate in sustainable marine activities.
Target Users      -  Local residents of coastal communities, fishermen, students, and volunteers.
Proposed Project  -	Marine Preservation Guide
Key Features	  - Marine Life Conservation Hub, Ocean Pollution Reporting Form, and Community Action.


## Task 2 — Zero-Shot Prompting

**Objective:**
To observe what Copilot generates from basic prompt without examples 

**Exact Prompt:**
> Create a simple webpage for residents to learn how to preserve marine life. 

**Actual Copilot Output:**
 Created responsive marine conservation webpage called “Blue Neighbors” that educates residents about protecting marine life and reducing ocean pollution. It features practical conservation tips, responsible coastal practices, and community participation activities to promote environmental awareness and sustainable use of marine resources.

**What Worked:**
The webpage has a clear layout and practical marine conservation tips. It included information about reducing plastic waste, protecting marine wildlife, keeping coastal areas clean, and encouraging community participation. The output provided a useful starting point for a simple educational website.

**What Needs Improvement:**
The zero-shot prompt was too general, so it did not specify the key features, visual design, or interactive features. The generated webpage focused mainly on educational content for marine preservation.

**Next Action / Verification:**
Review the generated webpage to verify that its navigation links work, its layout adapts to mobile screens, and its conservation information is understandable. Improve the prompt by specifying the target users, required features, design requirements, and expected output to obtain a more complete webpage.


## Task 3 — Anatomy of Prompt
**Objective:**
To improve output relevance using structured prompt components.

**Exact Prompt:**
> Act as a frontend web developer. Create a responsive single-page Marine Preservation Guide for residents of Marinduque. Include a Marine Life Conservation Hub with educational tips, an Ocean Pollution Reporting Form for reporting pollution incidents, and Community Action section promoting sustainable marine practices. Use semantic HTML, CSS, and vanilla JavaScript. Do not use external frameworks, backend services, or live environmental data. Provide the required frontend files and implement basic form validation and submission confirmation for demonstration purposes only. The interface must remain readable on mobile screens, and all interactive elements must work through mouse and keyboard interaction.

**Actual Copilot Output:**
Implemented the responsive Marine Preservation Guide in index.html, style.css, and script.js.
It includes a marine conservation guide, sustainable community practices, mobile navigation, and a pollution-report form with client-side validation and a demo confirmation. Reports are not sent or saved. 

**What Worked:**
The structured prompt produced a responsive webpage tailored to Marinduque residents. It included marine conservation tips, a pollution reporting form with validation, and information about sustainable fishing, and community participation.

**What Needs Improvement:**
The website needs to implement better coloring to match theme of the chosen sector.Also, could provide more localized information about Marinduque's marine conservation programs and clearer guidance on contacting local authorities for actual pollution reports. The reporting form is only a demonstration and does not save or transmit submissions.

**Next Action / Verification:**
Test the navigation, form validation, and mobile layout. Verify that required fields display appropriate error messages and that the demo confirmation works. Next actions/ improvements could include improvements to css styling, verified local conservation resources and a secure backend for submitting reports to authorized agencies.

## Task 4A — Few-Shot Promptin[text](prompt&reflection-log.md)g
**Objective:**
To explore how examples and specialized perspectives influence AI output.

**Exact Prompt:**
>  Add two similar content entries to the existing Marine Preservation Guide website:
    Example 1:
    Section: Marine Life Conservation
    Content: Explain how residents can protect marine animals by avoiding disturbances to their habitats and observing wildlife from a safe distance.
    Example 2:
    Section: Sustainable Community Practices
    Content: Explain how residents can reduce plastic waste, participate in coastal cleanups, and help keep beaches clean.

**Actual Copilot Output:**
Added the two requested entries to the existing guide in index.html: marine-animal habitat protection and a new Sustainable Community Practices section covering plastic reduction, coastal clean-ups, and keeping beaches clean.

**What Worked:**
Copilot followed the examples and added the requested content to the existing website. It included information about protecting marine animals and reducing plastic waste.

**What Needs Improvement:**
The added content could include more specific examples of how residents can help protect marine life and keep their surroundings clean.

**Next Action / Verification:**
Check if the new sections appear correctly on the website and match the existing design. Also, verify that the content is clear and easy to understand.

## Task 4B — Role A
**Objective:**
To explore how examples and specialized perspectives influence AI output.

**Exact Prompt:**
> Act as a user experience and accessibility reviewer. Review the existing Marine Preservation Guide website for Marinduque residents. Evaluate whether the conservation information is easy to understand, the pollution reporting form is easy to complete, and the navigation works well on mobile devices. Identify the main usability problems and suggest practical improvements. Keep the existing project features and avoid unnecessary redesigns or additional functionality.

**Actual Copilot Output:**
The guide is logically organized and its conservation advice is practical and relevant to Marinduque, but the small text—especially 8–10px card descriptions, form labels, and help text—may be difficult to read on mobile. It recommends increasing text sizes and checking contrast, shortening dense conservation tips so their main actions are easier to scan, and clarifying why the demo pollution form requires an exact incident date. Although the mobile menu supports keyboard interaction, Escape-to-close, and closing after a link is selected, the desktop navigation may feel crowded at tablet widths, so its breakpoint should be checked. The form clearly states that submissions are not sent or saved and provides safety and local-reporting guidance; adding a privacy reminder beside the optional contact field would further reassure residents. The review also recognized the skip link, labeled form fields, and validation messages as strengths. These observations were based on the source code, not live browser or assistive-technology testing.

**What Worked:**
Copilot identified important usability and accessibility issues in the Marine Preservation Guide. It recognized the need for readable text, clear conservation tips, an understandable pollution reporting form, and mobile-friendly navigation. It also identified existing strengths, such as the skip link, labeled form fields, keyboard-accessible mobile menu, and validation messages.

**What Needs Improvement:**
The website needs larger text, better color contrast, and shorter conservation tips to improve readability. The pollution reporting form should explain why an exact incident date is required and include a privacy reminder beside the optional contact field. The navigation breakpoint should also be checked to prevent crowding on tablet-sized screens.

**Next Action / Verification:**
Increase the text sizes, review the color contrast, simplify the conservation tips, and clarify the form instructions. Then test the website on mobile and tablet screen sizes, verify keyboard navigation, and check whether form labels and validation messages are easy to understand. These improvements should be tested without adding new features or changing the project's scope.

## Task 5 — [Technique]
**Objective:**
Use AI-assisted analysis to identify and improve a specific implementation weakness.

**Exact Prompt:**
> Review my existing Marine Preservation Guide website for Marinduque residents against the original project requirements. Examine whether the conservation information is understandable, the pollution reporting form behaves correctly, and the navigation and layout work well on mobile devices. Based on the provided source code, identify the two most important implementation issues that could affect usability or accessibility. For each issue, explain the problem, recommend the smallest practical code correction without adding new features or changing the project scope, and provide a simple procedure to verify that the fix works. Distinguish confirmed code issues from potential problems that require browser testing.

**Actual Copilot Output:**
The page includes the requested conservation guidance, a pollution-report form, and community practices relevant to Marinduque residents. The wildlife tips give understandable actions—avoid disturbing habitats and observe animals from a distance—and the form code checks required fields, flags invalid inputs, focuses the first invalid field, and shows a demo-only confirmation without transmitting the report. These parts appear consistent with the project requirements based on the source code.

**What Worked:**


**What Needs Improvement:**


**Next Action / Verification:**

## Task 6 — [Technique]


