export default {
  widgets: [
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
                  buildHookId: '5fe867bc69f90d030c7cd4f1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5j6qr7ku',
                  apiId: '888986b2-a75e-4a7d-8b7e-7c1b6d3591db'
                },
                {
                  buildHookId: '5fe867bd02f86e45281ccc3a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1kn7ntec',
                  apiId: 'f7d4b3b7-ce56-42c9-892e-71a612d59eea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/charlielukman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1kn7ntec.netlify.app', category: 'apps'}
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
