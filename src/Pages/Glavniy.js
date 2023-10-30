import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BiRightArrowAlt } from "react-icons/bi";
import { BsCreditCard2Front, BsBox2Fill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { TbDiscount } from "react-icons/tb";
import { PiShoppingCartSimple } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi"
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Glavniy() {
  let cardBir = [
    {
      img: "./glavniy IMG/image 12 (1).png",
      nomi: "Сантехника"
    },
    {
      img: "./glavniy IMG/out (1) 1.png",
      nomi: "Отделочные материалы"
    },
    {
      img: "./glavniy IMG/image 2.png",
      nomi: "Электротовары"
    },
    {
      img: "./glavniy IMG/image 3.png",
      nomi: "Инструменты"
    },
    {
      img: "./glavniy IMG/klipartz 1.png",
      nomi: "Столярные изделия"
    },
    {
      img: "./glavniy IMG/pngegg 1.png",
      nomi: "Общестроительные материалы"
    },
    {
      img: "./glavniy IMG/image 13.png",
      nomi: "Все для сауныи бани"
    },
  ]
  cardBir = cardBir.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )
  let skidka = [
    {
      skidka: 15,
      nomi: "Метизные изделия",
      img: "./glavniy IMG/Rectangle 31.png"
    },
    {
      skidka: 30,
      nomi: "Лакокрасочные материалы",
      img: "./glavniy IMG/Rectangle 31 (1).png"
    },
    {
      skidka: 25,
      nomi: "Напольные покрытия",
      img: "./glavniy IMG/Rectangle 31 (2).png"
    },
    {
      skidka: 30,
      nomi: "Все для отоплления",
      img: "./glavniy IMG/Rectangle 31 (3).png"
    },
  ]
  skidka = skidka.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )
  let CardData = [
    {
      img: "./glavniy IMG/Rectangle 22.png",
      art: "Артикул: XJ89YHGO",
      nomi: "Перфоратор универсальный Wander X645-46 GF 1450W",
      narxi: 15999,
      skidka: "15"
    },
    {
      img: "./glavniy IMG/Rectangle 22 (8).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Смеситель Faris G-120 для раковины",
      narxi: 1789
    },
    {
      img: "./glavniy IMG/Rectangle 22 (5).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Триммерная леска «Спираль-100»",
      narxi: 312,
      skidka: 10
    },
    {
      img: "./glavniy IMG/Rectangle 22 (1).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999
    },
    {
      img: "./glavniy IMG/Rectangle 22 (7).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Водно-дисперсионный клей Cob",
      narxi: 15999,
      skidka: 12
    },
  ]
  CardData = CardData.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )
  let bosch = [
    {
      img: "./glavniy IMG/image 22.png"
    },
    {
      img: "./glavniy IMG/image 19.png"
    },
    {
      img: "./glavniy IMG/image 18.png"
    },
    {
      img: "./glavniy IMG/image 17.png"
    },
    {
      img: "./glavniy IMG/image 20.png"
    },
    {
      img: "./glavniy IMG/image 21.png"
    },
    {
      img: "./glavniy IMG/image 19.png"
    },
    {
      img: "./glavniy IMG/image 22.png"
    },
    {
      img: "./glavniy IMG/image 23.png"
    },
    {
      img: "./glavniy IMG/image 20.png"
    },
  ]
  bosch = bosch.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )
  let CardData1 = [
    {
      img: "./glavniy IMG/Rectangle 22.png",
      art: "Артикул: XJ89YHGO",
      nomi: "Перфоратор универсальный Wander X645-46 GF 1450W",
      narxi: 15999,
      skidka: "15",
      getting: false,
      rasp: false
    },
    {
      img: "./glavniy IMG/Rectangle 22 (8).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Смеситель Faris G-120 для раковины",
      narxi: 1789,
      getting: true,
      rasp: false
    },
    {
      img: "./glavniy IMG/Rectangle 22 (5).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Триммерная леска «Спираль-100»",
      narxi: 312,
      skidka: 10
    },
    {
      img: "./glavniy IMG/Rectangle 22 (1).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999,
      getting: false,
      rasp: true
    },
    {
      img: "./glavniy IMG/Rectangle 22 (7).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Водно-дисперсионный клей Cob",
      narxi: 15999,
      skidka: 12,
      getting: false,
      rasp: false
    },
  ]
  CardData1 = CardData1.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )
  return (
    <div>
      <div className="swiper-slide-page">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
        >
          <SwiperSlide><img src="./glavniy IMG/Rectangle 10.png" alt="img" /><div className="drel">
            <h1>Электроинструмент для любых нужд</h1>
            <p>У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.</p>
            <button className="pereyte">перейти к товарам <BiRightArrowAlt /></button>
          </div></SwiperSlide>
          <SwiperSlide><img src="./glavniy IMG/Rectangle 38.png" alt="img" /><div className="drel">
            <h1>Электроинструмент для любых нужд</h1>
            <p>У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.</p>
            <button className="pereyte">перейти к товарам <BiRightArrowAlt /></button>
          </div></SwiperSlide>
        </Swiper>
      </div>
      <div className="tolov">
        <div className="t-usuli">
          <BsCreditCard2Front className="kok-icons" />
          <b>Оплата любым удобным способом</b>
        </div>
        <div className="t-usuli">
          <FaRegAddressCard className="kok-icons" />
          <b>Большой выбор товаров в каталоге</b>
        </div>
        <div className="t-usuli">
          <BsBox2Fill className="kok-icons" />
          <b>Осуществляем быструю доставку</b>
        </div>
        <div className="t-usuli">
          <TbDiscount className="kok-icons" />
          <b>Делаем скидки на крупные покупки</b>
        </div>
      </div>
      <div className="katalog1">
        {cardBir.map((elem) => {
          return (
            <div key={elem.id}>
              <div className="katalog-card" >
                <img src={elem.img} alt={elem.nomi} />
                <b>{elem.nomi}</b>
              </div>
            </div>
          );
        })}
        <div className="katalog-cards">
          <button className='strelka'><BsArrowRightCircleFill /></button>
          <b>Перейти в каталог</b>
        </div>
      </div>
      <div className="skidkas">
        {skidka.map((elem) => {
          return (
            <div key={elem.id}>
              <img src={elem.img} alt={elem.nomi} />
              <div className="skidka">
                <h2>{elem.nomi}</h2>
                <b>до-{elem.skidka}%</b>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cardN">
        <h1>Хиты продаж</h1>
        <div className="btn-filters">
          <button className='vse-btn'>Все товары</button>
          <button>Инструменты</button>
          <button>Сантехника</button>
          <button>Для дома</button>
          <button>Для сада</button>
        </div>
        <div className="slide-card">
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={4}
            navigation
            loop={true}
          >
            {CardData.map((elem) => {
              return (
                <div key={elem.id}>
                  <SwiperSlide>
                    <div className="cardBig" >
                      <div className="card-Big">
                        <button className='xit'>хит</button>
                        <img src={elem.img} alt={elem.nomi} />
                        <div className="cardMiddle">
                          <p>{elem.art}</p>
                          <h1>{elem.nomi}</h1>
                          {elem.skidka ? (<b className='b1'>
                            <del>{elem.narxi}₽</del>
                            {(
                              elem.narxi - (elem.narxi / 100) * elem.skidka
                            ).toFixed(2)}₽<b>-{elem.skidka}%</b>
                          </b>) : (<span>{elem.narxi}₽</span>)}
                          <div className="btn-cards">
                            <div className="btn-cardsx">
                              <button className='kupit'><PiShoppingCartSimple /> Купить</button>
                            </div>
                            <div className="btn-card">
                              <button><AiOutlineHeart /></button>
                              <button><FiBarChart2 /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              )
            })}
          </Swiper>
          <div className="kley">
            <div className="skidka-kupit">
              <b>Успейте купить по скидке</b>
              <p>12%</p>
            </div>
            <img src="./glavniy IMG/image 16.png" alt="img" />
            <b>Клей для напольных покрытий Porret</b>
            <div className="narx-skidka">
              <del>15 999 ₽</del><b>12 789 ₽</b>
            </div>
            <button className='korzina'><PiShoppingCartSimple />Добавить в корзину</button>
          </div>
        </div>
      </div>
      <div className="boschX">
        <div className="tepa-bosch">
          <h1>Популярные бренды</h1>
        </div>
        <div className="bosch">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={6}
            spaceBetween={0}
            centeredSlides={true}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
          >
            {bosch.map((elem) => {
              return (
                <SwiperSlide key={elem.id}>
                  <div className='bosch'>
                    <img src={elem.img} alt="img" />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div className="deals">
        <div className="tepa-deals">
          <h1>Лучшие предложения</h1>
          <div className="btn-filters">
            <button className='vse-btn'>Все товары</button>
            <button>Инструменты</button>
            <button>Сантехника</button>
            <button>Для дома</button>
            <button>Для сада</button>
          </div>
        </div>

        <div className="cardBigs">
          {CardData1.map((elem) => {
            return (
              <div key={elem.id}>
                <div className="card-Bigs" >
                  {elem.getting ? (
                    <div className="rasp">распродажа</div>
                  ) : elem.rasp ? (
                    <div className="news">новинка</div>
                  ) : (
                    ""
                  )}
                  <img src={elem.img} alt={elem.nomi} />
                  <div className="cardMiddle">
                    <p>{elem.art}</p>
                    <h1>{elem.nomi}</h1>
                    {elem.skidka ? (<b className='b1'>
                      <del>{elem.narxi}₽</del>
                      {(
                        elem.narxi - (elem.narxi / 100) * elem.skidka
                      ).toFixed(2)}₽<b>-{elem.skidka}%</b>
                    </b>) : (<span>{elem.narxi}₽</span>)}
                    <div className="btn-cards">
                      <div className="btn-cardsx">
                        <button className='kupit'><PiShoppingCartSimple /> Купить</button>
                      </div>
                      <div className="btn-card">
                        <button><AiOutlineHeart /></button>
                        <button><FiBarChart2 /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
