export function AdminHeader() {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-foreground">Welcome back!</h1>
          <p className="text-sm text-muted-foreground">Here's what's happening with your business</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-gradient-blend text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105">
            Generate Report
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-white">
            👤
          </div>
        </div>
      </div>
    </header>
  )
}
