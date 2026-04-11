import {
  RiHtml5Line, RiCss3Line, RiJavascriptLine, RiReactjsLine,
  RiDatabase2Line, RiLayoutLine, RiStackLine, RiPaintLine
} from 'react-icons/ri'

const skills = [
  { name: 'HTML5', icon: <RiHtml5Line />, level: 95, color: '#e34f26', category: 'Core' },
  { name: 'CSS3', icon: <RiCss3Line />, level: 90, color: '#264de4', category: 'Core' },
  { name: 'JavaScript', icon: <RiJavascriptLine />, level: 85, color: '#f7df1e', category: 'Core' },
  { name: 'React', icon: <RiReactjsLine />, level: 82, color: '#61dafb', category: 'Framework' },
  { name: 'Tailwind CSS', icon: <RiPaintLine />, level: 88, color: '#06b6d4', category: 'Framework' },
  { name: 'Bootstrap', icon: <RiLayoutLine />, level: 78, color: '#7952b3', category: 'Framework' },
  { name: 'Supabase', icon: <RiDatabase2Line />, level: 70, color: '#3ecf8e', category: 'Backend' },
  { name: 'Node.js', icon: <RiStackLine />, level: 60, color: '#83ba00', category: 'Backend' },
]

function SkillBar({ skill, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group card-glass rounded-xl p-5 hover:border-brand-500/40 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
          <div>
            <div className="font-semibold text-slate-200 text-sm">{skill.name}</div>
            <div className="text-xs text-slate-600 font-mono">{skill.category}</div>
          </div>
        </div>
        <span className="font-mono text-sm font-bold" style={{ color: skill.color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <div
          data-aos="skill-bar"
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
            boxShadow: `0 0 8px ${skill.color}50`
          }}
        />
      </div>
    </div>
  )
}

const badges = [
  'Git & GitHub', 'REST APIs', 'Responsive Design', 'UI/UX Basics',
  'Figma', 'VS Code', 'npm', 'Vite', 'Accessibility', 'Performance'
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">

        <div data-aos="fade-down" className="flex items-center gap-4 mb-6">
          <h2 className="font-display text-4xl font-bold text-white">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-brand-500/30 to-transparent" />
        </div>

        <p data-aos="fade-up" className="text-slate-400 mb-16 max-w-xl">
          Technologies I work with daily — continuously learning and levelling up.
        </p>

        {/* Progress Bars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 80} />
          ))}
        </div>

        {/* Also familiar with badges */}
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-slate-500 text-sm font-mono mb-4">// also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {badges.map((b, i) => (
              <span
                key={b}
                data-aos="zoom-in"
                data-aos-delay={i * 50}
                className="px-3 py-1.5 bg-dark-700/60 border border-dark-500/40 text-slate-400 text-xs rounded-lg font-mono hover:border-brand-500/40 hover:text-brand-400 transition-all cursor-default"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
