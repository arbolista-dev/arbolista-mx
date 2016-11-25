import resume from 'shared/components/layouts/resume/resume.component'

export function defineRoutes(i18n) {
  return [{
    name:"eric",
    path:"/:language?/eric",
    component:resume
  },{
    name:"manuel",
    path:"/:language?/manuel",
    component:resume
  },{
    name:"danyel",
    path:"/:language?/danyel",
    component:resume
  },{
    name:"Resume",
    path:"/:language?",
    component:resume
  }
  ]
}