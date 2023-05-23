import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & AI prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />

          <main className="app">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
