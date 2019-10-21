export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dae33c02e796ab0cab1577c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3etnpnp9',
                  apiId: '54a85df3-f742-449d-ad44-9d3ea9c82938'
                },
                {
                  buildHookId: '5dae33c0f468c1b25c82fb0b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kdyzfoxd',
                  apiId: '6e42d4b5-dd31-44c2-9d88-8355b2dc577e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickcooley/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kdyzfoxd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
