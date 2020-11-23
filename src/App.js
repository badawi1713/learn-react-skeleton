import React from "react";
import Articles from "./views/components/Articles";
import User from "./views/components/User";
const App = () => {
  return (
    <div className="App">
      <header>
        <h1>React Skeleton</h1>
      </header>
      <main>
        <div className="content">
          <Articles />
          <User />
        </div>
      </main>
    </div>
  );
};

export default App;
