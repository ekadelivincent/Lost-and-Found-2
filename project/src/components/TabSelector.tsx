import React from 'react';

interface TabSelectorProps {
  activeTab: 'lost' | 'found';
  onTabChange: (tab: 'lost' | 'found') => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ activeTab, onTabChange }) => (
  <div className="flex space-x-4">
    <button
      onClick={() => onTabChange('found')}
      className={`px-4 py-2 rounded-md ${
        activeTab === 'found'
          ? 'bg-indigo-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      Found Items
    </button>
    <button
      onClick={() => onTabChange('lost')}
      className={`px-4 py-2 rounded-md ${
        activeTab === 'lost'
          ? 'bg-indigo-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      Lost Items
    </button>
  </div>
);

export default TabSelector;