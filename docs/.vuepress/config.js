module.exports = {
    title: 'VuePressMap',
    description: '',
    plugins: ['@vuepress/nprogress'],
    themeConfig: {
      nav: [
        { 
          text: 'Home', 
          link: '/' },
        { 
          text: '文化', 
          link: '/culture/' 
        },
        { 
          text: '经济', 
          link: '/economy/' 
        },
        { 
          text: '教育', 
          link: '/education/' 
        },
        { 
          text: '政治', 
          link: '/politics/' 
        },
        { 
          text: '技术', 
          link: '/technology/' 
        },
        { 
          text: '医疗', 
          link: '/medical/' 
        },
        { 
          text: '国防', 
          link: '/defense/' 
        },
        {
          text: '思考',
          link: '/thinking/'
        },
        {
          text: '学科',
          items: [
            { 
              text: '数学', 
              link: '/subject/math/' 
            },
            { 
              text: '英语', 
              link: '/subject/english/' 
            }
          ]
        }
      ],
      smoothScroll: true,
      sidebar: {
        '/subject/english/': [
          'word-analysis',
          'incomprehensible-sentence'
        ]
      }
    }
  }