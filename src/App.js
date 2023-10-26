import "./App.css";
import Element1 from "./Components/Element1";
import Element2 from "./Components/Element2";
import Element3 from "./Components/Element3";
export const string1 = "Ovo je prvi string";
export const string2 = "Ovo je drugi string";
function App() {
  return (
    <div className="App">
      <Element1 />
      <Element2 />
      <Element3 />
    </div>
  );
}

export default App;
// 1.	Napraviti novu React aplikaciju
// 2.	Unutar App komponente napraviti dvije varijable koje sadrže neki string
// 3.	Napraviti JSX element koji će prikazati neki tekst na ekranu
// 4.	Napraviti JSX element koji će prikazati neki tekst na ekranu + vrijednost jedne od varijabli
// 5.	Napraviti JSX element koji će prikazati obje varijable odvojene razmakom
// 6. instalirati loadash pa se poigrati sa stringom
