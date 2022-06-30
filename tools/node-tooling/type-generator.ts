const carbonIcons = require('@carbon/icons-react');
const fs = require('fs');
const path = require('path');

const fileContent = `${Object.keys(carbonIcons).reduce(
  (result, iconName) => `${result}  export const ${iconName}: ComponentType;\n`,
  `/* eslint-disable */
  declare module '@carbon/icons-react' {
    type SizeType = 16 | 20 | 24 | 32;
    type ComponentType = React.ForwardRefExoticComponent<
      {
        size: SizeType | \`\${SizeType}\`;
      } & React.RefAttributes<SVGSVGElement>
    >;
`,
)}\n}`;

fs.writeFileSync(path.resolve('./../../src/carbon-icons.d.ts'), fileContent);

export {};
