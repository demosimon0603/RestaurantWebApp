import type { MenuItem } from "../types/restaurant";

interface MenuCardProps {
  item: MenuItem;
}

const currencyFormatter = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0
});

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className={item.imageSrc ? "menu-card menu-card--with-image" : "menu-card"}>
      {item.imageSrc ? (
        <img className="menu-card__image" src={item.imageSrc} alt={item.imageAlt ?? item.name} />
      ) : null}
      <div className="menu-card__body">
        <p className="menu-card__accent">{item.accent}</p>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <strong>{currencyFormatter.format(item.price)}</strong>
    </article>
  );
}
