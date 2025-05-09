import './index.css'
import gambar1 from '../public/assets/diagram.png'
import gambar2 from '../public/assets/streak.png'
import Box from './components/box'
import TigaBox from './components/TigaBox'
import ListBox from './components/ListBox'
import Test from './components/Test'

function App() {

  return (
    <>
    <TigaBox/>
    <ListBox nomor="1" kegiatan="Ujian Math" waktu="09:00 - 11:00"/>
    <ListBox nomor="2" kegiatan="Konsultasi Unity" waktu="22:00 - 22:30"/>
    <ListBox nomor="3" kegiatan="Date with U" waktu="19:00"/>
    </>
  )
}

export default App