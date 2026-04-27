# LMS Dashboard - UI Wireframe & Layout Guide

This document serves as a structural reference for developers working on the AlgoAscend LMS Dashboard.

## 📐 Overall Layout Structure

The dashboard follows a 3-column responsive layout:

1. **Sidebar (Fixed Left)**: Navigation, User Profile, and Logo.
2. **Main Content (Center Scrollable)**:
   - **Header**: Welcome Banner with user progress and streak.
   - **Top Row**: Stats Grid (Courses, Hours, Assignments, Certificates).
   - **Middle Section (Grid 2 cols)**: Skill Progress, Career Readiness, AI Insights.
   - **Bottom Section**: Learning Progress Chart & Course Recommendation List.
3. **Right Panel (Contextual Right)**: Resume Score, Deadlines, and Upcoming Live Classes.

## 🧱 Component Wireframe

### Header (Welcome Banner)

[ Greeting (H1) ] [ Progress Circular % ]
[ Motivating Quote ] [ "X" Weeks to Graduation ]
[ ---------------- Progress Bar ---------------- ]

### Stats Grid (4 Cards)

+-------------+ +-------------+ +-------------+ +-------------+
| Icon | H2 | | Icon | H2 | | Icon | H2 | | Icon | H2 |
| Label | | Label | | Label | | Label |
+-------------+ +-------------+ +-------------+ +-------------+

### Skill Progress (Card)

- Skill Name: [ ######---- ] 60%
- Skill Name: [ ########-- ] 80%

### Career Readiness (Card)

- Resume Score: 85/100
- Profile Strength: [ #######--- ]

## 🎨 Design System

- **Primary**: #3b82f6 (Blue)
- **Background**: #ffffff (Light) / #0a0a0a (Dark)
- **Cards**: Border-radius: 0.5rem (md), Shadow: subtle.
- **Spacing**: standard 1rem (4) between sections.

## 🛠 Developer Workflow

1. Use `@/components/ui` for base elements.
2. Use `@/components/dashboard` for complex widgets.
3. All path aliases now resolve via `vite.config.ts` using the `@/` prefix.
