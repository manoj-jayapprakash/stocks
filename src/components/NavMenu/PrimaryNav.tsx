import React, { useState } from 'react';
import { CreateNavMenu } from './CreateNavMenu';

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
      <li className="tab ml-auto ">
        <CreateNavMenu label="Create New Sub-WatchList" />
      </li>
      <li className="tab">
        <CreateNavMenu label="Create New WatchList" />
      </li>
    </ul>
  );
};
