import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="font-rubik text-gray-800 bg-gradient-to-r from-yellow-500 to-gray-800 min-h-screen">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
