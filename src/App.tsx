import { Profile } from "./One/Profile";

function App() {
  return (
    <div className="w-full h-screen bg-[#7562c9] flex justify-center items-start overflow-auto">
      <div className="flex flex-col space-y-4 p-4 max-h-full overflow-y-auto">
        <Profile name="GET ME YOUR FIRST NAME" description="THE FIRST FRIEND WAS ADD." img="./teu.jpg" />
        <Profile name="PHAM DUC LOC" description="THE SECOND FRIEND WAS ADD" img="./12s.jpg" />
        <Profile name="VÍ DỤ " description="THE THIRD FRIEND WAS ADD" img="./cde.jpg" />
        {/* Thêm các Profile khác ở đây */}
      </div>
    </div>
  );
}

export default App;
