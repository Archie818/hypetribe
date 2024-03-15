const Header = () => {
	return (
	  <header className="bg-gray-800 text-white p-4">
		<nav className="container mx-auto flex justify-between">
		  <div className="flex items-center space-x-4">
			<a href="/" className="text-xl font-bold">Hypetribe</a>
			<a href="/latest" className="hover:underline">Latest</a>
			<a href="/explore" className="hover:underline">Explore</a>
		  </div>
		  <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded">Connect Wallet</button>
		</nav>
	  </header>
	);
  };
  
  export default Header;
  