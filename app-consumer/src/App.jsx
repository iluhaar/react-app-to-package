import "./App.css";
import { MyComponent } from "my-library";
import { LibraryComponent } from "library";
import { ButtonWrapper } from "test-ts";
import { LibraryTSComponent } from "library-ts";

function App() {
  return (
    <>
      <MyComponent />
      <LibraryComponent />
      <ButtonWrapper />
      <LibraryTSComponent />
    </>
  );
}

export default App;
