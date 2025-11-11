export function FeatureCard({ feature }: { feature: { title: string; description: string; icon: string } }) {
  return (
    <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 text-center space-y-4 group card-hover">
      <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
        {feature.icon}
      </div>
      <h4 className="text-xl font-bold">{feature.title}</h4>
      <p className="text-foreground/60">{feature.description}</p>
    </div>
  )
}
