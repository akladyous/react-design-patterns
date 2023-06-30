import ListItemsHome from './pattern/components/list-items/ListItemsHome';
import ContainerComponentHome from './pattern/components/container-component/ContainerComponentHome';
import FunctionAsChildHome from './pattern/components/function-as-child-component/FunctionAsChildHome';
import RenderPropHome from './pattern/components/render-props/RenderPropHome';
import HigherOrderComponentHome from './pattern/components/higher-order-component/HigherOrderComponentHome';

function App() {
  return (
    <main className='my-4'>
      {/* <ListItemsHome /> */}
      {/* <ContainerComponentHome /> */}
      {/* <FunctionAsChildHome /> */}
      {/* <RenderPropHome /> */}
      <HigherOrderComponentHome />
    </main>
  );
}

export default App;
