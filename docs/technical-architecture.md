# ZAN Website — Technical Architecture

## 1. Project Type

Phase 1 is a frontend corporate website.

The application should be designed as a maintainable React frontend.

---

## 2. Technology Direction

Preferred stack:

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Framer Motion when justified

Avoid unnecessary dependencies.

---

## 3. Phase 1 Architecture Principles

The project should be:

- Component-based
- Reusable
- Maintainable
- Responsive
- Multilingual
- Easy to update
- Easy to extend in future phases

---

## 4. No Backend in Phase 1

Phase 1 does NOT require:

- Backend application
- Database
- Authentication
- Dashboard
- CMS
- Admin panel

Do not introduce backend architecture unless a specific Phase 1 requirement technically requires it.

---

## 5. Content/Data

Temporary content should be separated from UI components where practical.

Projects, opportunities, services, and partners should be represented using structured data.

The architecture should make replacing placeholder content with final content easy.

---

## 6. Internationalization

The website must support:

- Arabic
- English
- Russian

Arabic must support RTL.

English and Russian must support LTR.

The architecture should avoid duplicating entire pages for each language.

---

## 7. Routing

Each major website page should have its own route.

Expected routes:

- /
- /about
- /projects
- /opportunities
- /services
- /partners
- /partnerships
- /contact

The final routing architecture may be adjusted if needed.

---

## 8. Components

The application should distinguish between:

- Global layout components
- Navigation components
- Reusable UI components
- Reusable content components
- Page-level components

Avoid creating components simply for the sake of having many files.

---

## 9. Styling

The design system in:

/docs/design-system.md

is the visual source of truth.

Colors, spacing, typography, radii, buttons, cards, and responsive behavior should follow it.

---

## 10. Assets

Images, fonts, logos, and other project assets should have a clear and predictable location.

Partner logos and company assets should not be mixed randomly with application code.

---

## 11. Future Compatibility

The architecture should leave a clean path for future phases.

Future phases may introduce:

- Database
- Authentication
- Dashboard
- CMS
- Content management
- Request management
- Advanced search
- Analytics
- Notifications

However, Phase 1 must not implement these features prematurely.

---

## 12. Code Quality

Prefer:

- Clear naming
- Small reusable components
- Simple data structures
- Semantic HTML
- Accessible interactions
- Avoiding unnecessary abstraction
- Avoiding duplicated code

The project should remain understandable to a junior frontend developer.

---

## 13. AI Development Rule

AI tools may generate code and project files.

However, generated code must follow the documented project requirements and architecture.

The AI must not introduce:

- Unrequested features
- Unnecessary libraries
- Backend systems
- Complex abstractions
- Dashboard functionality
- Authentication
- Database systems

without explicit approval.

Before major architectural changes, explain the reason and wait for approval.