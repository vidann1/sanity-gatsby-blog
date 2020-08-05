export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2ac476e69f9a015c326174',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-akuyfrye',
                  apiId: 'cb967033-c513-49af-8a8c-1b0bf43cc3ce'
                },
                {
                  buildHookId: '5f2ac476e69f9a008d3260e4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5cp8275k',
                  apiId: 'a95be2b7-4119-4e01-b43a-9d821329bf19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vidann1/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5cp8275k.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
