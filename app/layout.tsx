import LeftSidebar from "@/components/LeftSidebar";
import "./globals.css";
import RightSidebar from "@/components/RightSidebar";

export const metadata = {
  title: "Twitter Clone",
  description: "Twitter Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className=" h-screen bg-black select-none">
          <div className=" max-h-screen  ">
            <div className=" flex  items-start">
              <LeftSidebar />
              <div className=" flex w-full lg:w-9/12">
                {children}
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
