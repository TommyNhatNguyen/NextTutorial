import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* This child can either be a page or another layout. In your case, the pages inside /dashboard will automatically be nested inside a <Layout /> like so: */}
        {children}
      </div>
    </div>
  );
}
