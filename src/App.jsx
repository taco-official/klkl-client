import React from 'react'
import GlobalStyle from './style/GlobalStyle'
import PictureSlide from './components/Common/PictureSlide'
import NavBar from './components/Navbar/NavBar'

const images = [
  'https://i.namu.wiki/i/JgWTqpOqbzXdjiGUEEZ80wi9gAMJttIooCaDD6XZEstpwrtsiIBpxALQfkbYj-yyR12ZkIlL7Qg3KF6K81eYxqtzmWV02uWv1gYkdVAJHineWxfLtV2JxAfLPaLD3bhLgtDHgWIq3C5ktA9rOEchsg.webp',
  'https://i.namu.wiki/i/0bYN1M7LgvJdhVnc96Doahg6idl6u97dvB11gIie-dMLePTK7qnmjC3G4d75TPVP1AYsULvgP6wHGyeMoIycs3WZiFzHoDcKauMDtnr5g837vZIxdiQZ_r5RTGgb7Z4Lp4ePeTmILcG0ge-grmop5g.webp',
  'https://i.namu.wiki/i/-qyjNVeCaOjbLOFZKwyHQS-jLhRW0gv8QcNJluGTbZZ7fonQkE_6NyfWE2aSZU0hFwig1mguplqgpiy9aB8lGaWl5lmh8syD_Zz2g5caAQA1QehB3YcVI-CIL0AlCGH63D3bDbVlv1HIW6OiLJgHug.webp',
]

function App() {
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <PictureSlide
        images={images}
        $width="300px"
        $height="450px"
      />
    </>
  )
}

export default App
