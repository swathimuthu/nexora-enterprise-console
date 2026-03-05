import FeatureGuard from "../access/FeatureGuard";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6 fixed">
      <h1 className="text-2xl font-bold mb-10">Nexora</h1>
      <nav className="space-y-4 text-sm">

  <div className="hover:text-slate-300 cursor-pointer">
    Dashboard
  </div>

  <FeatureGuard flag="analytics">
    <div className="hover:text-slate-300 cursor-pointer">
      Analytics
    </div>
  </FeatureGuard>

  <FeatureGuard flag="auditLogs">
    <div className="hover:text-slate-300 cursor-pointer">
      Audit Logs
    </div>
  </FeatureGuard>

</nav>
    </aside>
  );
}