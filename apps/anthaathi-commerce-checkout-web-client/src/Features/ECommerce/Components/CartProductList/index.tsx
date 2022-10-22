import { useStyletron } from 'baseui';
import { Link } from 'react-router-dom';
import { LabelMedium, LabelSmall } from 'baseui/typography';

export function CartProductList() {
  const [css, $theme] = useStyletron();

  return (
    <ul
      className={css({
        paddingLeft: 0,
        marginLeft: 0,
        listStyle: 'none',
        height: '320px',
        overflowY: 'auto',
        paddingTop: '.6rem',
        paddingRight: '.6rem',
        paddingBottom: '.6rem',
      })}
    >
      <li>
        {Array.from({ length: 10 }).map((item, index) => (
          <Link
            key={index}
            className={css({
              textDecoration: 'none',
              color: '#000',
              display: 'flex',
              paddingBottom: $theme.sizing.scale200,
            })}
            to="/"
          >
            <div className={css({ position: 'relative' })}>
              <p
                className={css({
                  position: 'absolute',
                  top: '-24px',
                  right: '-12px',
                  borderRadius: '50%',
                  ...$theme.typography.LabelSmall,
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  placeContent: 'center',
                  backgroundColor: '#EEE',
                })}
              >
                1
              </p>

              <img
                src="https://cdn.shopify.com/s/files/1/0601/2849/3784/products/3337875597210-1_e5c873bb-e89d-474f-a455-324125dbd4fc_small.jpg?v=1664885728"
                alt=""
                className={css({
                  width: '68px',
                  borderRadius: '12px',
                })}
              />
            </div>

            <div
              className={css({
                display: 'flex',
                flexDirection: 'column',
                placeContent: 'center',
                marginLeft: $theme.sizing.scale400,
                flexGrow: 1,
              })}
            >
              <LabelMedium>Omkar</LabelMedium>
              <LabelSmall>Omkar</LabelSmall>
            </div>

            <div
              className={css({
                display: 'flex',
                placeContent: 'center',
                alignItems: 'center',
              })}
            >
              <LabelMedium>AED 12.00</LabelMedium>
            </div>
          </Link>
        ))}
      </li>
    </ul>
  );
}
