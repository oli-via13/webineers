import gambar1 from "../public/assets/diagram.png";
import gambar2 from "../public/assets/streak.png";
import Box from "./components/box";
import TigaBox from "./components/TigaBox";
import ListBox from "./components/ListBox";
import Test from "./components/Test";
import Komponen from "./components/Komponen";
import { Navigasi } from "./components/Navigasi";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Form from "./components/Form";

function App() {

  return (
    <>

      <div className="flex gap-5 h-auto">

        <div className="hidden sm:block">
          <Sidebar />
        </div>
        
        <div className="">
          <div className="block"><Navigasi/></div>

          <div className="mt-40 ml-15">
            <div> <TigaBox/> </div>

            <div className="sm:flex justify-center items-center gap-6 mt-5">
              <div>
                <ListBox nomor="1" kegiatan="Ujian Math" waktu="09:00 - 11:00" />
                <ListBox nomor="2" kegiatan="Konsultasi Unity" waktu="22:00 - 22:30" />
                <ListBox nomor="3" kegiatan="Date with U" waktu="19.00" />
              </div>
              <div>
                <Box kegiatan="Reminder" mapel="Ujian IPA" hari="(Kamis)"/>
                <Box kegiatan="Reminder" mapel="Praktek Kimia" hari="(Jumat)"/>
              </div>
            </div>
            <div>
              <Form/>
            </div>

          </div>
        </div>
        
      </div>

    </>

  );
}

export default App;
