import React from 'react'
import {AiOutlinePlus ,AiOutlineMinus}from "react-icons/ai"

export default function Vozvrat() {
  return (
    <div>
      <div className="vozvrat">
        <div className="vozvrat-chap">
        <div className="titles">
        <b>Стройоптторг</b>/ <p>Возврат</p>
      </div>
          <h1>Возврат</h1>
          <p>Возврат или обмен товара надлежащего качества, возможен в течение 14 дней с момента покупки в соответствие со ст.26.1 Закона «О защите прав потребителей», сохранивший товарный вид и потребительские свойства при наличии документов:</p>
          <ul>
            <li><p>подтверждающих покупку и оплату товара;</p></li>
            <li><p>документа подтверждающего личность.</p></li>
          </ul>
          <p>Для этого достаточно приехать в часы работы наших складов и ТЦ и оформить возврат.</p>
          <p>Возврат товара возможен без упаковки, но при условии сохранения всей комплектации и потребительских свойств товара.</p>
          <p>Возврат денежных средств за товар оплаченных банковской картой, осуществляется на ту же карту.</p>
          <p>При заказе товара с доставкой вы можете отказаться от заказа до его передачи. Если же машина с вашим заказом уже выехала на адрес, мы вернем вам стоимость товара за исключением расходов на доставку.</p>
          <p>Ограничения по возврату товара</p>
          <p>Мы не принимаем на возврат товары, имеющие индивидуально-определенные свойства, если указанный товар может быть использован исключительно потребителем, который купил его.</p>
          <p>Например, товары под заказ, колерованная краска, строительные и отделочные материала отпускаемые на метраж, уцененный товар, а так же все виды заказного материала.</p>
          <h3>Обращение по гарантии</h3>
          <div className="srok-plus-minus">
            <div className="srok-plus">
              <b>Куда обращаться в случае поломки в течении гарантийного срока?</b>
              <button><AiOutlinePlus/></button>
            </div>
            <div className="srok-minus">
              <b>Куда обращаться в случае поломки в течении гарантийного срока?</b>
              <button><AiOutlineMinus/></button>
            </div>
            <p>Проводится платная диагностика и ремонт товара</p>
            <div className="garantya-minus">
              <b>Есть ли гарантийный ремонт?</b>
              <button><AiOutlineMinus/></button>
            </div>
            <div className="garantya-minus">
              <b>Какой срок действия гарантии?</b>
              <button><AiOutlineMinus/></button>
            </div>
          </div>
        </div>
        <div className="vozvrat-ong">
        <div className="oplata-C">
          <img src="./glavniy IMG/vintel.png" alt="img" />
          <div className="oplata-do">
            <h2>Все для отоплления</h2>
            <b>до -30%</b>
          </div>
        </div>
        <div className="oplata-C">
          <img src="./glavniy IMG/kraska.png" alt="img" />
          <div className="oplata-do">
            <h2>Лакокрасочные материалы</h2>
            <b>до -30%</b>
          </div>
        </div>
        <div className="oplata-CX">
          <form>
            <h3>Подпишитесь на рассылку</h3>
            <p>Регулярные скидки и спецпредложения, а так же новости компании.</p>
            <input type="text" name="" id="pochta" placeholder="Email" />
            <button className="obuna">Подписаться</button>
            <div className="soglasen">
              <input type="checkbox" name="" id="chekcc" />
              <p>Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности</p>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}
