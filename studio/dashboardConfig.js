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
                  buildHookId: '5d32c322256f98f9f17d43f1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vrw7fnek',
                  apiId: 'f1f08e5e-7fd0-4a30-befb-6f69d73b1ca4'
                },
                {
                  buildHookId: '5d32c322209e0d898b0586ce',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gxjzqwhs',
                  apiId: 'fb07a68c-7ed4-4c96-905b-ec39921f4d06'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/naokazuterada/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gxjzqwhs.netlify.com', category: 'apps'}
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
