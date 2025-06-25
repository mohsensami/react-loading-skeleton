// example/App.jsx
import LoadingSkeleton from "./components/LoadingSkeleton";

const App = () => {
  return (
    <div>
      <div>
        {/* Text skeleton */}
        <LoadingSkeleton width={200} height={20} variant="text" />

        {/* Circle skeleton */}
        <LoadingSkeleton width={40} height={40} variant="circle" />

        {/* Rectangle skeleton */}
        <LoadingSkeleton width={300} height={100} variant="rect" />
      </div>
    </div>
  );
};

export default App;
