# ATS

# Overview

- Brief description of the ATS platform, SaaS model, and main features including hybrid resume sorting, stage time tracking, process management, and standard ATS features.

# Designs

- [Dashboard 1](https://tinyurl.com/28m6j4tp)
- [Kanban + Dashboard](https://www.figma.com/community/file/1579567791995079299)
- [Dashboard design 2](https://www.figma.com/community/file/1530261325896087183)

# Folder Structure

```
/
├─ .gitignore
├─ .prettierrc
├─ .prettierignore
├─ package.json # root tooling only
│
├─ frontend/
│ ├─ package.json
│ ├─ public/
│ └─ src/
│ ├─ main.ts/
│ ├─ App.tsx/jsx
│ └─ index.css
│
├─ backend/
│ ├─ package.json
│ └─ src/
│ ├─ server.ts/
│ ├─ app.ts
│ ├─ routes/
│ ├─ controllers/
│ ├─ services/
│ ├─ middlewares/
│ └─ config/
│
└─ worker/
├─ package.json
└─ src/
├─ index.ts/
├─ jobs/
└─ queues/
```

# User Roles

- Recruiter
- Candidate

# Dashboard Sections

- Candidate pipeline overview
- Stage time tracking analytics
- Process bottleneck indicators
- Weekly progress summary

# Main Pages

- Candidate management (list, details, profile)
- Kanban board for process management
- Resume upload and parsing
- Job postings management
- Interview scheduling
- Analytics and reports
- User settings

# Data Structure Confirmation

- Candidate profile (personal info, experience, education, skills, certifications, references, projects)
- Job postings
- Application stages and workflow
- Notes and comments
- Stage time logs
- User accounts and roles

# Resume Parsing Methods

- Keyword-based parsing
- Machine learning parsing
- Rule-based parsing
- Hybrid sorting method

# Kanban Board Interactions

- Drag and drop candidates between stages
- Add notes/comments to candidate cards
- Send interview emails from interview stage

# Integrations

- Email service
- Authentication providers (OAuth, SSO)

# Security and Compliance

- General data protection measures for storage and access

# Technology Stack

- JavaScript, React, TailwindCSS, Node.js, MongoDB
