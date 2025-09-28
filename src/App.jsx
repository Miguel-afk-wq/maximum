import { useState } from 'react'
import './App.css'
import hellsing from './assets/LUVA 1.png'
import HP from './assets/LUVA 2.png'
import React from 'react'
import HxH from './assets/LUVA 3.png'
import Slider1 from './assets/LUVA 1.PNG'
import Slider2 from './assets/LUVA 2.PNG'
import Slider3 from './assets/LUVA 3.PNG'
import Slider4 from './assets/LUVA 4.PNG'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
        <Swiper
        modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
    autoplay={{
      delay:3000,
      disableOnInteraction:false,
  }}
loop={true}
className='mySwiper'
    >
      <SwiperSlide>
        <img src={Slider1} alt='slide 1' />
      </SwiperSlide>
      <SwiperSlide>
      <img src={Slider2} alt='Slide 2' />
      </SwiperSlide>
      <SwiperSlide> <img src={Slider3} alt='slide3' />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlide> <img src={Slider4} alt='slide3' />
         </SwiperSlide>
      <SwiperSlide></SwiperSlide>
      </SwiperSlide>
    </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={hellsing} alt="" className="img-card" />
              <h2 className="titulo-card">Luva de Boxe</h2>
              <p className="desc">Classic White Power Face</p>
              <p className="preco">R$ 239,00</p>
              <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
             
            </div>
          </a>

          {/* Produto 2 */}
          <a header="#" className="img-card">
          <div className="card">
            <img src={HP} alt="" className="img-card" />
            <h2 className="titulo-card">Luva de Boxe</h2>
            <p className="desc">Classic Black Power Face.</p>
            <p className="preco">R$ 300,00</p>
            <div className="avaliacao"> ★ ★ ★ ★ ★</div>
            
          </div>
          </a>
          {/* Produto 3 */}
          <a header="#" className="link-card">
            <div className="card">
              <img src={HxH} alt="" className="img-card" />
              <h2 className="titulo-card">Luva de Boxe</h2>
              <p className="desc">MXM - Cor Azul Power Face</p>
              <p className="preco">R$  ̶(2̶.̶2̶5̶0̶,̶0̶0̶) 500,00</p>
              <div className="avaliacao"> ★ ★ ★ ★ ★</div>
              <div className="off">- 10%</div>
            </div>
          </a>
        </section>
        <section className="destaque">

        <iframe src="https://www.youtube.com/embed/f01jwclVjZw?autoplay=1&mute=1&controls=0&loop=1&playlist=f01jwclVjZw&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>
</section>
        <footer>
    <img src="" alt="" className="logo footer" />

<div className="social-icons">

  <div className="icon">
    <img src="" alt="" id="instagran" />
  </div>

  <div className="icon">
    <img src="" alt="" id="discord" />
  </div>

  <div className="icon">
     <img src="" alt="" id="X" />
  </div>
  
  <div className="icon"></div>
  <img src="" alt="" id="youtube  " />
</div>

        </footer>
      </main>
    </>
  )
}

export default App
