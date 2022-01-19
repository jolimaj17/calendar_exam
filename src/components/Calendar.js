import CalendarHeader from "../components/CalendarHeader";
import CalendarContent from "../components/CalendarContent";
import CalendarFooter from "../components/CalendarFooter";
function App() {
  return (
      <div className="-my-2 overflow-x-auto sm:-mx-6 overflow-x-auto w-auto">
        <CalendarHeader />
        <CalendarContent />
        <CalendarFooter />
      </div>
  );
}

export default App;
