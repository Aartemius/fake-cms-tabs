import { FC } from "react";
import { Link } from "react-router-dom";
import './NavigationTabs.css';
import { ComponentData } from "../DataLazyComponent/DataLazyComponent";

interface NavigationTabsProps {
  tabs: ComponentData[];
  activeTabIndex: number;
}

const NavigationTabs: FC<NavigationTabsProps> = ({
  tabs,
  activeTabIndex
}) => {
  const isActiveTab = (index: number) => activeTabIndex === index;
  
  return (
  <nav>
    <ul className="nav-tabs">
      { tabs.map((tab, index) => (
        <li
          key={ tab.id }
          className={`nav-item ${isActiveTab(index) ? 'active' : ''}`}
          style={ { width: `calc(100% / ${ tabs.length })` } }
        >
          {
            isActiveTab(index) 
            ? 
            <span>{ tab.title }</span>
            :
            <Link to={`${ tab.id }`}>
              { tab.title }
            </Link>
          }
        </li>
      )) }
    </ul>
  </nav>
)};

export default NavigationTabs;