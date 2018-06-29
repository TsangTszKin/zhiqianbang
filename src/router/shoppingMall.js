import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Center from "@/pages/shoppingMall/Center";
import Plan from "@/pages/shoppingMall/lesson/Plan";
import Publish from "@/pages/shoppingMall/lesson/Publish";
import Video from "@/pages/shoppingMall/lesson/Video";
import VideoAdd from "@/pages/shoppingMall/lesson/VideoAdd";
import PlanSave from "@/pages/shoppingMall/lesson/PlanSave";
import PublishSave from "@/pages/shoppingMall/lesson/PublishSave";
import PlanShow from "@/pages/shoppingMall/lesson/PlanShow";
import VideoSelect from "@/pages/shoppingMall/lesson/VideoSelect";
import List from "@/pages/shoppingMall/sale/List";
import Order from "@/pages/shoppingMall/trade/Order";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/videoSelect",
      component: VideoSelect,
      meta: { requiresAuth: true, role: "COMPANY" }
    },
    {
      path: "/planShow",
      component: PlanShow,
      meta: {
        requiresAuth: true,
        role: "COMPANY",
        nav: {
          module: "课程管理",
          itemList: [
            { name: "课程计划", path: "/center/lesson/plan" },
            { name: "课程计划预览", path: "/planShow" }
          ]
        }
      }
    },
    {
      path: "/center",
      component: Center,
      meta: { requiresAuth: true, role: "COMPANY" },
      children: [
        {
          path: "lesson/plan",
          component: Plan,
          title: "课程计划",
          meta: {
            requiresAuth: true,
            role: "COMPANY",
            nav: {
              module: "课程管理",
              itemList: [{ name: "课程计划", path: "/center/lesson/plan" }]
            }
          }
        },
        {
          path: "lesson/publish",
          component: Publish,
          title: "课程发布",
          meta: {
            requiresAuth: true,
            role: "COMPANY",
            nav: {
              module: "课程管理",
              itemList: [{ name: "课程发布", path: "/center/lesson/publish" }]
            }
          }
        },
        {
          path: "lesson/video",
          component: Video,
          title: "视频管理",
          meta: {
            requiresAuth: true,
            role: "COMPANY",
            nav: {
              module: "课程管理",
              itemList: [{ name: "视频管理", path: "/center/lesson/video" }]
            }
          }
        },
        {
          path: "lesson/videoAdd",
          component: VideoAdd,
          title: "新建视频",
          meta: {
            requiresAuth: true,
            role: "COMPANY",
            nav: {
              module: "课程管理",
              itemList: [
                { name: "视频管理", path: "/center/lesson/video" },
                { name: "新建视频", path: "/center/lesson/videoAdd" }
              ]
            }
          }
        },
        {
          path: "lesson/planSave",
          component: PlanSave,
          title: "新建课程计划",
          meta: {
            requiresAuth: true,
            role: "COMPANY",
            nav: {
              module: "课程管理",
              itemList: [
                { name: "课程计划", path: "/center/lesson/plan" },
                { name: "新建课程计划", path: "/center/lesson/planSave" }
              ]
            }
          }
        },
        {
          path: "lesson/planSave/:id",
          component: PlanSave,
          title: "编辑课程计划",
          meta: {
            requiresAuth: true,
            role: "COMPANY",
            nav: {
              module: "课程管理",
              itemList: [
                { name: "课程计划", path: "/center/lesson/plan" },
                { name: "编辑课程计划", path: "/center/lesson/planSave" }
              ]
            }
          }
        },
        {
          path: "lesson/publishSave",
          component: PublishSave,
          title: "新建课程",
          meta: {
            requiresAuth: true,
            role: "COMPANY",
            nav: {
              module: "课程管理",
              itemList: [
                { name: "课程发布", path: "/center/lesson/publish" },
                { name: "新建课程", path: "/center/lesson/publishSave" }
              ]
            }
          }
        },
        {
          path: "lesson/publishSave/:id",
          component: PublishSave,
          title: "编辑课程",
          meta: {
            requiresAuth: true,
            role: "COMPANY",
            nav: {
              module: "课程管理",
              itemList: [
                { name: "课程发布", path: "/center/lesson/publish" },
                { name: "编辑课程", path: "/center/lesson/publishSave" }
              ]
            }
          }
        },
        {
          path: "sale/list",
          component: List,
          title: "促销列表",
          meta: {
            requiresAuth: true,
            role: "COMPANY",
            nav: {
              module: "促销管理",
              itemList: [{ name: "促销列表", path: "/center/sale/list" }]
            }
          }
        },
        {
          path: "trade/order",
          component: Order,
          title: "订单管理",
          meta: {
            requiresAuth: true,
            role: "COMPANY",
            nav: {
              module: "交易管理",
              itemList: [{ name: "订单管理", path: "/center/trade/order" }]
            }
          }
        }
      ]
    }
  ]
});
