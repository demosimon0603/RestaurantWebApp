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
    <article className="menu-card">
      <div>
        <p className="menu-card__accent">{item.accent}</p>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <strong>{currencyFormatter.format(item.price)}</strong>
    </article>
  );
}
