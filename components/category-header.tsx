interface CategoryHeaderProps {
  icon: string
  title: string
  description: string
  color: string
}

export function CategoryHeader({ icon, title, description, color }: CategoryHeaderProps) {
  return (
    <div className={`py-12 px-4 md:px-8 bg-gradient-to-r ${color} text-white rounded-2xl mb-12`}>
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        <div className="text-6xl">{icon}</div>
        <div>
          <h1 className="text-4xl md:text-5xl font-black mb-2">{title}</h1>
          <p className="text-xl text-white/90">{description}</p>
        </div>
      </div>
    </div>
  )
}
