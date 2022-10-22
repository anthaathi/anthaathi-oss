import { Outlet } from 'react-router-dom';
import { Header } from './Features/Content/Components/Header';
import { useStyletron } from 'baseui';
import { CartProductList } from './Features/ECommerce/Components/CartProductList';
import { CartSummary } from './Features/ECommerce/Components/CartTotal';
import { DiscountCode } from './Features/ECommerce/Components/DiscountCode';
import { Breadcrumb } from './Features/Content/Components/Breadcrumb';

function App() {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <Header />

      <div
        className={css({
          flexGrow: 1,
          position: 'relative',
          display: 'flex',
          ':after': {
            backgroundColor: '#f1fff1',
            width: '38%',
            height: '100%',
            top: 0,
            bottom: 0,
            position: 'absolute',
            right: 0,
            zIndex: 0,
            content: "''",
            boxShadow: '1px 0 0 rgba(0,0,0,0.1) inset',
          },
        })}
      >
        <div
          className={css({
            display: 'flex',
            maxWidth: '1200px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            zIndex: 1,
            flexGrow: 1,
          })}
        >
          <div className={css({ width: 'calc(100% - 38%)', padding: '2rem' })}>
            <Breadcrumb />

            <div className={css({ marginBottom: '12px' })} />

            <Outlet />
          </div>
          <div
            className={css({
              width: '38%',
              backgroundColor: '#f1fff1',
              padding: '2rem',
            })}
          >
            <CartProductList />
            <div
              className={css({
                width: '100%',
                paddingBottom: '1px',
                backgroundColor: $theme.borders.border200.borderColor,
              })}
            />
            <DiscountCode />
            <div
              className={css({
                width: '100%',
                paddingBottom: '1px',
                backgroundColor: $theme.borders.border200.borderColor,
              })}
            />
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
