# SPRINT - AI Hackathon Co-Pilot

AI Hackathon Co-Pilot is a web application that helps students go from idea to structured project plan and pitch during hackathons.

---

## Problem

Students in hackathons often struggle with:
- Choosing a project idea
- Structuring their ideas
- Planning execution
- Explaining their project clearly

General AI tools provide unstructured responses and require prompt knowledge.

---

## Solution

This application provides a guided workflow that:
- Generates project ideas
- Structures ideas into clear plans
- Creates step-by-step execution roadmaps
- Generates pitch scripts
- Stores projects in one place

---

## Comparison with Other AI Tools

| Feature | ChatGPT / Gemini | This Project |
|--------|-----------------|-------------|
| Prompt Required | Yes | Yes |
| Structured Workflow | No | Yes |
| Hackathon Focus | No | Yes |
| Saves Projects | No | Yes |
| Step-by-Step Guidance | Limited | Yes |

ChatGPT is strong in structured reasoning and content generation, while Gemini performs well in real-time and research-based tasks :contentReference[oaicite:2]{index=2}. However, both are general-purpose tools and do not provide a guided hackathon workflow.

---


## Features

- Idea Generator  
  Generates 2–3 project ideas based on a selected domain  

- Project Structuring  
  Provides problem statement, features, tech stack, and roadmap  

- Pitch Generator  
  Creates a concise pitch and explanation script  

- Dashboard  
  Stores and displays created projects  

- Custom Prompts  
  Allows users to use default prompts or modify them  

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Minimax M2.5 API
