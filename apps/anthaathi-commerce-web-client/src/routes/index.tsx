import { RenderCMSComponents } from '~/Features/CMSComponents';
import { useStyletron } from '@anthaathi/solid-styletron';

export default function Home() {
  const [css] = useStyletron();

  return (
    <main class={css({ overflowY: 'hidden' })}>
      <RenderCMSComponents />
    </main>
  );
}
