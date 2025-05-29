import TravelPlan from "./components/travel/TravelPlan";
import ShowHide from "./components/challenges/show-hide/ShowHide";
import SwapForm from "./components/challenges/swap-form/SwapForm";
import Counter from "./topics/useRef/counter/Counter";
import Stopwatch from "./topics/useRef/stopwatch";
import CatFriends from "./topics/useRef/domManipulate";
import ChatServer from "./topics/useEffect/ChatServer";

function App() {
  return (
    <div>
      {/* <ShowHide /> */}
      {/* <TravelPlan/> */}
      {/* <SwapForm /> */}
      <ChatServer />
    </div>
  );
}

export default App;
