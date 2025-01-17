/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Basic Chinese',
      items: [
        'pronunciation',
        'basic-phrases',
        'numbers'
      ],
    },
    {
      type: 'category',
      label: 'Grammar',
      items: [
        'sentence-structure',
        'measure-words',
        'tenses'
      ],
    },
  ],
};

module.exports = sidebars;
