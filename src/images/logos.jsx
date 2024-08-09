import React from 'react'

function NaverLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      style={{ height: '100%' }}
    >
      <polygon
        className="logo"
        fill="white"
        points="115.9,145.8 83.7,98.4 83.7,145.8 50,145.8 50,54.3 84.2,54.3 116.4,101.6 116.4,54.3    150,54.3 150,145.8 115.9,145.8"
      />
    </svg>
  )
}

function KakaoLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-75 -90 350 350"
      style={{ height: '100%' }}
    >
      <polygon
        fill="black"
        points="45 140 40 185 90 150 45 140"
      />
      <ellipse
        fill="black"
        cx="100"
        cy="80"
        rx="100"
        ry="80"
      />
    </svg>
  )
}

export { NaverLogo, KakaoLogo }
