import NavBar from "./components/NavBar";
import AuthContext from "./context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "Book My Table",
  description: "Restaurant Table Booking App using Next.JS 13",
  author: "Debasish Pothal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-white min-h-screen w-screen">
          <AuthContext>
            <main className="max-w-screen-2xl m-auto bg-white">
              <NavBar />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
