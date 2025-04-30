import Profile from "./components/Profile"

export default function App() {
  return(
    <>
      <Profile nome='Shota Aizawa' idade='31' profissão='Professor' foto='./aiw.png'/>
      <Profile nome='Nanami Kento' idade='28' profissão='Feiticeiro' foto='./nana.png'/>
      <Profile nome='Kang Soohwa' idade='26' profissão='Garçon' foto= './soo.png'/>
    </>
  )
}