import { CategoryList } from '~/Features/CMSComponents/Components/CategoryList';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';
import { useStyletron } from '@anthaathi/solid-styletron';
import categoryJson from '../../config/category.json';

export default function CategoryListPage() {
  const [css, $theme] = useStyletron();

  return (
    <>
      <Breadcrumbs
        list={[
          { key: '1', title: 'Home', link: '/' },
          { key: '2', title: 'Collections', link: '/' },
        ]}
      />

      <CategoryList items={categoryJson.categoryList} />
    </>
  );
}
