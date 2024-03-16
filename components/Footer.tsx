const Footer = () => {
  return (
    <footer className=" bg-blue-500 text-white p-4">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Hypetribe
      </div>
    </footer>
  );
};

export default Footer;
