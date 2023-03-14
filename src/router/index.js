import { createRouter, createWebHistory } from 'vue-router'
import RecordIndexView from '../views/record/RecordIndexView'
import RanklistIndexView from '../views/ranklist/RanklistIndexView'
import UserBotIndexView from '../views/user/bot/UserBotIndexView'
import NotFound from '../views/error/NotFound'
import PkIndexView from '../views/pk/PkIndexView'


const routes = [
  {
    path: "/",
    redirect: "/pk/"

  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"

  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView,

  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView,

  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotIndexView,

  },
  {
    path: "/404/",
    name: "404",
    component: NotFound,

  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
