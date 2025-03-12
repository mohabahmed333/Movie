import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./navbar/navbar";
import ScrollToTop from "../utls/scrollToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
      </QueryClientProvider>
    </div>
  );
};

export default Layout;
