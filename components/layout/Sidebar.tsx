export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6 fixed">
      <h1 className="text-2xl font-bold mb-10">Nexora</h1>
      <nav className="space-y-4 text-sm">
        <div className="hover:text-slate-300 cursor-pointer">Dashboard</div>
        <div className="hover:text-slate-300 cursor-pointer">Analytics</div>
        <div className="hover:text-slate-300 cursor-pointer">Users</div>
        <div className="hover:text-slate-300 cursor-pointer">Audit Logs</div>
      </nav>
    </aside>
  );
}