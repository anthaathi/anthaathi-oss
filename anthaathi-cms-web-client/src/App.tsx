import { CommonAppProvider } from '@anthaathi/web-lib';
import { Button } from 'baseui/button';

function App() {
  return (
    <CommonAppProvider>
      <Button>Hello world</Button>
    </CommonAppProvider>
  );
}

export default App;
