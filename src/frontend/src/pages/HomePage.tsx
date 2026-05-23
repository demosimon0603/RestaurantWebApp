import { MenuCard } from "../components/MenuCard";
import { ReservationForm } from "../components/ReservationForm";
import { SiteHeader } from "../components/SiteHeader";
import { menuItems, serviceHighlights } from "../data/menuItems";

export function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <SiteHeader />
        <div className="hero__content">
          <p className="eyebrow">Modern Western Dining</p>
          <h1>La Rue 57</h1>
          <p>
            熟成牛排、手工義大利麵與精選酒款，在城市夜色裡慢慢上桌。
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#reservation">
              預約今晚
            </a>
            <a className="button button--secondary" href="#menu">
              查看菜單
            </a>
          </div>
        </div>
      </section>

      <section className="highlights" aria-label="餐廳重點資訊">
        {serviceHighlights.map((highlight) => (
          <div className="highlight" key={highlight.label}>
            <span>{highlight.label}</span>
            <strong>{highlight.value}</strong>
          </div>
        ))}
      </section>

      <section className="section menu-section" id="menu">
        <div className="section__heading">
          <p className="eyebrow">Signature Menu</p>
          <h2>本季推薦</h2>
        </div>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuCard item={item} key={item.name} />
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-section__image" aria-hidden="true" />
        <div className="story-section__content">
          <p className="eyebrow">Table Experience</p>
          <h2>從第一杯酒開始，讓晚餐有自己的節奏。</h2>
          <p>
            開放式爐台、低調燈光與細緻服務，讓約會、聚餐與商務晚宴都能保持剛好的距離感。
          </p>
          <dl className="story-list">
            <div>
              <dt>料理風格</dt>
              <dd>歐陸技法與台灣季節食材</dd>
            </div>
            <div>
              <dt>座位配置</dt>
              <dd>吧檯、雙人桌、半開放包廂</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section reservation-section" id="reservation">
        <div className="section__heading">
          <p className="eyebrow">Reservation</p>
          <h2>訂位</h2>
        </div>
        <ReservationForm />
      </section>
    </main>
  );
}
