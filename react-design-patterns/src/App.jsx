import RenderPropOneDemo from './pattern/components/render-props/example-one/RenderPropOneDemo';
import UserList from './pattern/list-items-demo/UserList';
import ListItemsRenderPropDemo from './pattern/components/render-props/exmple-two/ListItemsRenderPropDemo';

import ListItemsRenderPropThreeDemo from './pattern/components/render-props/example-three/ListItemsRenderPropThreeDemo';
import MouseTracker from './pattern/components/render-props/exmple-four/MouseTracker';

function App() {
  return (
    <main className='my-4'>
      {/* <UserList /> */}
      {/* <RenderPropOneDemo /> */}
      {/* <ListItemsRenderPropDemo /> */}

      <ListItemsRenderPropThreeDemo />
      <MouseTracker />
    </main>
  );
}

export default App;
