import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="font-rubik text-gray-800 gradient">
      <Header />
      <div className="mt-24 min-h-partial">{children}</div>
    </div>
  );
};

export default Layout;
