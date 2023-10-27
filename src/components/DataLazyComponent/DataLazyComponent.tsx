import { 
  FC, 
  lazy, 
  Suspense 
} from 'react';
import './DataLazyComponent.css';

export interface ComponentData {
  id: string;
  title: string;
  order: number;
  path: string;
}

interface DataLazyComponentProps {
  componentPath: string;
}

const DataLazyComponent: FC<DataLazyComponentProps> = ({ componentPath }) => {
  const Component = lazy(() => import(`./${componentPath}`));

  return (
    <Suspense fallback={ <div>Loading...</div> }>
      <Component />
    </Suspense>
  );
};

export default DataLazyComponent;