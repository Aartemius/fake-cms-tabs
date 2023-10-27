import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import tabs from '../data/tabs';
import DataLazyComponent from './DataLazyComponent/DataLazyComponent';
import NavigationTabs from './NavigationTabs/NavigationTabs';

const AppContainer: FC = () => {
  const location = useLocation();

  const sortedTabs = tabs.sort((a, b) => a.order - b.order);

  const activeTab = (
    sortedTabs.find(tab => tab.id === location.pathname.replace('/', '')) || sortedTabs[0]
  );

  const activeTabIndex = sortedTabs.findIndex(item => item.id === activeTab.id);

  return (
    <div id="app-container">
      <NavigationTabs 
        tabs={ sortedTabs }
        activeTabIndex={ activeTabIndex }
      />
      <div id="data-wrap">
        <DataLazyComponent 
          componentPath={ activeTab.path }
        />
      </div>
    </div>
  );
};

export default AppContainer;
