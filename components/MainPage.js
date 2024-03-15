import Card from './Card';

const MainPage = () => {
  // Dummy data for your card components
  const cardData = [1,2,3,4,5,6,7,8,9,10];

  return (
    <main className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Map through your card data and render Card components */}
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </main>
  );
};

export default MainPage;
