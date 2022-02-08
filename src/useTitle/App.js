import { useTitle } from "./useTitle";

function App() {
  const titleUpdater = useTitle("Loading...");
  // setTimeout : 5초 뒤 titleUpdater 실행
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div>
      <div>Hi</div>
    </div>
  );
}

export default App;
