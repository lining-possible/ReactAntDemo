export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
          {
            name: 'login',
            path: '/user/login/:name/:age',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'PuzzleCardsPage',
    icon: 'table',
    path: '/PuzzleCardsPage',
    component: './PuzzleCardsPage',
  },
  {
    name: 'HelloWorld',
    icon: 'table',
    path: '/HelloWorld/:name/:age',
    component: './HelloWorld',
  },
  {
    name: '查询表格',
    icon: 'smile',
    path: '/listtablelist',
    component: './ListTableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'list.table-list2',
    icon: 'table',
    path: '/list2',
    component: './TableList2',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '空白页面',
    icon: 'smile',
    path: '/emptypage',
    component: './EmptyPage',
  },
  {
    component: './404',
  },
];
