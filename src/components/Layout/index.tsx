import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="font-rubik text-gray-800 bg-gradient-to-r from-yellow-500 to-gray-800 min-h-screen">
      <Header />
      <div className="pt-24">{children}</div>
    </div>
  );
};

export default Layout;
