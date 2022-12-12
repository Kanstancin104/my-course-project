import "./App.css";
import NewReview from "./components/NewReview";
import Review from "./components/Review";

function App() {
  return (
    <>
      <div className="App">Вітаю, Сьвет!</div>
      <div>Гэта ёсьць маім курсавым праектам</div>
      <Review />
      <NewReview />
    </>
  );
}

export default App;
