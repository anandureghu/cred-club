import { TFooterItem } from "../../../../types/landing.types";

interface FooterItemProps {
  title: string;
  items: TFooterItem[];
}

const FooterItem: React.FC<FooterItemProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-[22px] font-gilroy uppercase font-bold tracking-[3px] mt-[50px] opacity-80">
        {title}
      </h3>
      <ul className="mt-[20px]">
        {items.map((item) => {
          return (
            <a
              href={item.link}
              className="opacity-40 font-gilroy text-[20px] tracking-[1px]"
            >
              <li className="my-[10px]">{item.label}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterItem;
