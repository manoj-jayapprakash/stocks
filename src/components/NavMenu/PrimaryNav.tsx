import React, { useState } from 'react';

type PrimaryNavProps = {
  items: { id: number; linkName: string }[];
};

export const PrimaryNav = (props: PrimaryNavProps) => {
  const { items } = props;
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <ul className="tabs tabs-boxed bg-transparent">
      {items.map((item) => (
        <li
          key={item.id}
          className={`tab text-black ${
            activeTab === item.id ? 'rounded-lg bg-blue-300' : ''
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.linkName}
        </li>
      ))}
      <li className="tab ml-auto bg-gray-200 rounded-lg text-black">
        Add Watchlist
      </li>
    </ul>
  );
};
