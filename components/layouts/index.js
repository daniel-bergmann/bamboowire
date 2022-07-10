import Navbar from "./nav";
import Footer from "./footer";

export default function Index({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
