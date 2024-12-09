import Footer from "@/features/global/Footer";
import Navbar from "@/features/global/Navbar";

export default function WebsiteTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
