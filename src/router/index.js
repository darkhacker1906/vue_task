import { createWebHistory, createRouter } from 'vue-router'
import ParentComp from '@/pages/ParentComp.vue';
import AboutPage from '@/pages/AboutPage.vue';
import ContactPage from '@/pages/ContactPage.vue'
import NewsPage from '@/pages/NewsPage.vue'
import ReactivityPage from '@/pages/ReactivityPage.vue';
const routes = [
  { path: '/', component: ParentComp },
  { path: '/about', component: AboutPage },
  {path:'/contact',component:ContactPage},
  {path:'/news',component:NewsPage},
  {path:'/reactive',component:ReactivityPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;