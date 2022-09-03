import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavItems } from '.';
import { CreateNavMenu } from './CreateNavMenu';

type NavMenuProps = {
  items: NavItems[];
  type: 'primary' | 'secondary';
};

export const NavMenu = (props: NavMenuProps) => {
  const { items, type } = props;
  const [activeTab, setActiveTab] = useState<number>();
  const navigate = useNavigate();
  const navBarClickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: number
  ) => {
    navigate(`/watchlist/${id}`);
    setActiveTab(id);
  };

  return (
    <ul className="tabs tabs-boxed bg-transparent">
      {items.map((item) => (
        <li
          key={item.id}
          className={`tab text-black ${
            activeTab === item.id ? 'rounded-lg bg-blue-300' : ''
          }`}
          onClick={(e) => navBarClickHandler(e, item.id)}
        >
          {item.linkName}
        </li>
      ))}
      <li className="tab ml-auto">
        <CreateNavMenu label="Create New WatchList" type="primary" />
      </li>
      {type === 'primary' && (
        <li className="tab ">
          <CreateNavMenu label="Create New Sub-WatchList" type="secondary" />
        </li>
      )}
    </ul>
  );
};
