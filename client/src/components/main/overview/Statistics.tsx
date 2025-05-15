import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { HiUserGroup } from 'react-icons/hi';
import { MdEmojiEvents } from 'react-icons/md';
import { BsCashStack } from 'react-icons/bs';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, iconBgColor }) => {
  return (
    <div className="bg-zinc-800 rounded-lg px-5 py-5 flex items-center">
      <div
        className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mr-6`}
      >
        <div className="text-3xl">{icon}</div>
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <p className="text-white text-4xl font-bold">{value}</p>
      </div>
    </div>
  );
};

interface StatisticsProps {
  currentPrizeTotal?: string;
  activeTournaments?: number;
  activeUsers?: number;
  totalTournaments?: number;
  allTimePrizesPaid?: string;
  yourBalance?: string;
}

const Statistics: React.FC<StatisticsProps> = ({
  currentPrizeTotal = '$240.32',
  activeTournaments = 20,
  activeUsers = 8909,
  totalTournaments = 304,
  allTimePrizesPaid = '$17,406.6',
  yourBalance = '$0',
}) => {
  return (
    <div className="w-full  mt-10 common-padding !py-30 relative">
      <h1 className="text-white text-5xl font-furore font-bold mb-12">Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <StatCard
          icon={<FaTrophy className="text-yellow-400" />}
          label="Current prize total"
          value={currentPrizeTotal}
          iconBgColor="bg-yellow-900/30"
        />

        <StatCard
          icon={<IoGameController className="text-orange-500" />}
          label="Active Tournaments"
          value={activeTournaments.toString()}
          iconBgColor="bg-orange-900/30"
        />

        <StatCard
          icon={<HiUserGroup className="text-blue-400" />}
          label="Active users"
          value={activeUsers.toLocaleString()}
          iconBgColor="bg-blue-900/30"
        />

        <StatCard
          icon={<MdEmojiEvents className="text-orange-500" />}
          label="Total Tournaments"
          value={totalTournaments.toString()}
          iconBgColor="bg-orange-900/30"
        />

        <StatCard
          icon={<BsCashStack className="text-green-400" />}
          label="All-time prizes paid"
          value={allTimePrizesPaid}
          iconBgColor="bg-yellow-900/30"
        />

        <StatCard
          icon={<FaTrophy className="text-yellow-400" />}
          label="Your Balance"
          value={yourBalance}
          iconBgColor="bg-yellow-900/30"
        />
      </div>

      <div className="absolute top-0 bottom-0 right-0 -left-50 -z-10 bg-zinc-900"></div>
    </div>
  );
};

export default Statistics;
