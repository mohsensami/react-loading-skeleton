import React from "react";
import LoadingSkeleton from "@mohsensami/loading-skeleton";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <h1>My App</h1>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div>
          <p>Content Loaded!</p>
        </div>
      )}
    </div>
  );
};

export default App;
