import HeaderClean from './HeaderClean';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutClean({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderClean />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}