import { supabase } from "./supabase";

// Fallback demo data when Supabase is not configured
const DEMO_PROJECTS = [
  {
    id: 1,
    title: "Calculator App",
    description:
      "A simple and responsive calculator app for performing basic arithmetic operations with a clean and intuitive interface.",
    image: "https://images.pexels.com/photos/5491023/pexels-photo-5491023.jpeg",
    tech_stack: ["HTML", "CSS", "JS"],
    live_url: "https://basic-calculator-app-function.netlify.app/",
    github_url:
      "https://github.com/Muhammad-Umer-soo/LinkedIn-post/tree/Basic-Calculator-App",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A clean and responsive weather app that shows real-time updates with dynamic visuals and geolocation, powered by REST APIs.",
    image:
      "https://media.istockphoto.com/id/531889697/photo/weather-forecast-concept.jpg?b=1&s=612x612&w=0&k=20&c=RTYw121OxBGY2XdlD4Zyyl3EuoElE6unr7chjK9Yt_I=",
    tech_stack: ["HTML", "JavaScript", "CSS", "REST API"],
    live_url: "https://muhammad-umer-soo.github.io/LinkedIn-post/",
    github_url:
      "https://github.com/Muhammad-Umer-soo/LinkedIn-post/tree/weather-app",
  },
  {
    id: 3,
    title: "ToDo App",
    description:
      "A simple and responsive todo app built with React, allowing users to add, edit, and manage tasks efficiently.",
    image: "https://images.pexels.com/photos/7718755/pexels-photo-7718755.jpeg",
    tech_stack: ["React", "JS", "CSS", "HTML"],
    live_url: "https://todo-app-react-with-css.netlify.app/",
    github_url: "https://github.com/Muhammad-Umer-soo/ToDo-React-App",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "Markdown-powered blog platform with a rich text editor, tagging system, and SEO-optimized pages.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
    tech_stack: ["React", "JavaScript", "Bootstrap", "HTML"],
    live_url: "",
    github_url: "https://github.com",
  },
  {
    id: 5,
    title: "Portfolio Generator",
    description:
      "A SaaS tool that lets developers auto-generate polished portfolios from their GitHub profile data.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    tech_stack: ["React", "Tailwind", "Supabase", "GitHub API"],
    live_url: "https://demo.example.com",
    github_url: "https://github.com",
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "Real-time messaging app with rooms, direct messages, file sharing, and online presence indicators.",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
    tech_stack: ["React", "Supabase", "JavaScript", "Tailwind"],
    live_url: "https://demo.example.com",
    github_url: "https://github.com",
  },
];

export async function fetchProjects() {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return { data: data?.length ? data : DEMO_PROJECTS, error: null };
  } catch {
    return { data: DEMO_PROJECTS, error: null };
  }
}
