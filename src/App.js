import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "AS";
  const recipeItem = {
    title: "Baklava",
    date: "5 Mayıs 2021, Cumartesi",
    image: food,
    description:
      "Türk mutfağı denince ilk akla gelen lezzetlerden bir diğeri ise hiç şüphesiz ki baklava. Şerbetli tatlıların şahı baklava, ülkemizde olduğu gibi yurt dışında da oldukça popüler bir tarif.Öte yandan ince ince açılmış, tam kıvamında şerbetiyle taçlandırılmış, Antep fıstığı ile lezzetine lezzet katılmış baklava için en doğru adres, elbette Türkiye.",
  };

  const likeCount = 193;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card 
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          liked={isLiked}
          likeCount={likeCount}
        />
      </header>
    </div>
  );
}

export default App;
