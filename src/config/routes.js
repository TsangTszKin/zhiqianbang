import Index from "../pages/Index.vue";
import Center from "../pages/Center.vue";
import Project from "../pages/project/Project.vue";
import ProjectDetail from "../pages/project/ProjectDetail.vue";
import Job from "../pages/job/Job.vue";
import JobDetailByCompany from "../pages/job/JobDetailByCompany.vue";
import JobDetail from "../pages/job/JobDetail.vue";
import PracticeHome from "../pages/practice/PracticeHome.vue";
import PracticeDetail from "../pages/practice/PracticeDetail.vue";
import PersonProject from "../pages/center/person/Project.vue";
import PersonResume from "../pages/center/person/Resume.vue";
import PersonFavorite from "../pages/center/person/Favorite.vue";
import PersonJob from "../pages/center/person/Job.vue";
import PersonPreviewResume from "../pages/center/person/PreviewResume.vue";
import CompanyHome from "../pages/center/company/Home.vue";
import CompanyProject from "../pages/center/company/Project.vue";
import ProjectEvaluate from "../pages/center/company/ProjectEvaluate.vue";
import CompanyJob from "../pages/center/company/Job.vue";
import CompanyBrief from "../pages/center/company/Brief.vue";
import CompanySaveJob from "../pages/center/company/SaveJob.vue";
import CompanyJobApply from "../pages/center/company/JobApply.vue";
import CompanyJobApplyDetail from "../pages/center/company/JobApplyDetail.vue";
import Exam from "../pages/center/company/Exam.vue";
import ExamQuestion from "../pages/center/company/ExamQuestion.vue";
import Cart from "../pages/trade/Cart.vue";
import Pay from "../pages/trade/Pay.vue";
import PersonPractice from "../pages/center/person/Practice.vue";
import NotFond from "../pages/404.vue";
import PersonPracticeProgress from "../pages/center/person/PracticeProgress";
import PersonTradeOrder from "../pages/center/person/Order.vue";
import Finish from "../pages/trade/Finish.vue";
import Submit from "../pages/trade/Submit.vue";
import ProjectReportList from "../pages/center/company/ProjectReportList.vue";
import ProjectApplyList from "../pages/center/company/ProjectApplyList.vue";
import ProjectAdd from "../pages/center/company/ProjectAdd.vue";
import CompanyCheckReport from "../pages/center/company/CheckReport";
import Setting from "../pages/center/person/Setting.vue";
import UserInfo from "../pages/center/person/UserInfo.vue";
import Message from "@/pages/Message";
import ShoppingMallCenter from "@/pages/shoppingMall/Center";
import SendSuccess from "@/pages/job/SendSuccess";
import ImportResume from "@/pages/center/person/ImportResume";
import ResumeEdit from "@/pages/center/person/ResumeEdit";
import SaveResume from "@/pages/center/person/SaveResume";
import PreviewResume from "@/pages/center/person/PreviewResume";
import ResumeAdmin from "@/pages/center/company/ResumeAdmin";
import PersonQuery from "@/pages/center/company/PersonQuery";
import PreviewResumeCompany from "@/pages/center/company/PreviewResume";
import JobAnalysis from "@/pages/job/Analysis";
import ExamCommon from "@/pages/exam/Exam";
import ExamDetailCommon from "@/pages/exam/ExamDetail";

var routes = [
  {
    path: "*",
    component: NotFond,
    meta: { requiresAuth: false }
  },
  {
    path: "/",
    title: "职塑云平台",
    component: Index,
    meta: { requiresAuth: false, topMenu: "index" }
  },
  {
    path: "/project",
    component: Project,
    meta: { requiresAuth: false, topMenu: "project" }
  },
  {
    path: "/projectDetail",
    component: ProjectDetail,
    meta: {
      requiresAuth: true,
      topMenu: "project"
    }
  },
  {
    path: "/job",
    component: Job,
    meta: { requiresAuth: false, topMenu: "job" }
  },
  {
    path: "/jobDetailByCompany",
    component: JobDetailByCompany,
    meta: {
      requiresAuth: true,
      topMenu: "job"
    }
  },
  {
    path: "/jobDetail",
    component: JobDetail,
    meta: {
      requiresAuth: true,
      topMenu: "job"
    }
  },
  {
    path: "/jobAnalysis",
    component: JobAnalysis,
    meta: {
      requiresAuth: true,
      topMenu: "job",
      role: "PERSON"
    }
  },
  {
    path: "/exam",
    component: ExamCommon,
    meta: {
        requiresAuth: false,
        topMenu: "exam",
      }
  },
  {
    path: "/examDetail",
    component: ExamDetailCommon,
    meta: {
        requiresAuth: false,
        topMenu: "exam",
      }
  },
  {
    path: "/sendSuccess",
    component: SendSuccess,
    meta: {
      requiresAuth: true,
      topMenu: "job"
    }
  },
  {
    path: "/practice",
    title: "实训营",
    component: PracticeHome,
    meta: { requiresAuth: false, topMenu: "practice" }
  },
  {
    path: "/practiceDetail",
    component: PracticeDetail,
    meta: {
      requiresAuth: false,
      topMenu: "practice"
    }
  },
  {
    path: "/message",
    component: Message,
    meta: { requiresAuth: true }
  },
  {
    path: "/shoppingMall/center",
    component: ShoppingMallCenter,
    meta: { requiresAuth: true, role: "COMPANY" }
  },
  {
    path: "/trade/cart",
    component: Cart,
    meta: { requiresAuth: true }
  },
  {
    path: "/trade/pay",
    component: Pay,
    meta: { requiresAuth: true }
  },
  {
    path: "/trade/finish",
    component: Finish,
    meta: { requiresAuth: true }
  },
  {
    path: "/trade/submit",
    component: Submit,
    meta: { requiresAuth: true }
  },
  {
    path: "*",
    component: NotFond,
    meta: { requiresAuth: false }
  },
  {
    path: "/",
    title: "职塑云平台",
    component: Index,
    meta: { requiresAuth: false, topMenu: "index" }
  },
  {
    path: "/project",
    component: Project,
    meta: { requiresAuth: false, topMenu: "project" }
  },
  {
    path: "/projectDetail/:id",
    component: ProjectDetail,
    meta: {
      requiresAuth: true,
      topMenu: "project"
    }
  },
  {
    path: "/job",
    component: Job,
    meta: { requiresAuth: false, topMenu: "job" }
  },
  {
    path: "/jobDetailByCompany/:id",
    component: JobDetailByCompany,
    meta: {
      requiresAuth: true,
      topMenu: "job"
    }
  },
  {
    path: "/jobDetail/:id",
    component: JobDetail,
    meta: {
      requiresAuth: true,
      topMenu: "job"
    }
  },
  {
    path: "/sendSuccess",
    component: SendSuccess,
    meta: {
      requiresAuth: true,
      topMenu: "job"
    }
  },
  {
    path: "/practice",
    title: "实训营",
    component: PracticeHome,
    meta: { requiresAuth: false, topMenu: "practice" }
  },
  {
    path: "/practice/:id",
    component: PracticeDetail,
    meta: {
      requiresAuth: false,
      topMenu: "practice"
    }
  },
  {
    path: "/message",
    component: Message,
    meta: { requiresAuth: true }
  },
  {
    path: "/center",
    title: "用户中心",
    component: Center,
    meta: { requiresAuth: true },
    // Center主要是提供左边菜单，下面的子路由将会复用左边菜单
    children: [
      {
        path: "person/404",
        component: NotFond,
        meta: { requiresAuth: true }
      },
      {
        path: "company/project",
        component: CompanyProject,
        meta: { requiresAuth: true, role: "COMPANY" }
      },
      {
        path: "company/project/reportList/:projectId/:projectName",
        component: ProjectReportList,
        meta: {
          requiresAuth: true,
          role: "COMPANY"
        }
      },
      {
        path: "company/project/checkReport/:reportId",
        component: CompanyCheckReport,
        meta: { requiresAuth: true, role: "COMPANY" }
      },
      {
        path: "company/project/applyList/:projectId/:projectName",
        component: ProjectApplyList,
        meta: {
          requiresAuth: true,
          role: "COMPANY"
        }
      },
      {
        path: "company/project/projectAdd/:projectId/:flag",
        component: ProjectAdd,
        meta: {
          requiresAuth: true,
          role: "COMPANY"
        }
      },
      {
        path: "company/project/projectEvaluate",
        component: ProjectEvaluate,
        meta: {
          requiresAuth: true,
          role: "COMPANY"
        }
      },
      {
        path: "company/home",
        component: CompanyHome,
        meta: { requiresAuth: true, role: "COMPANY" }
      },
      {
        path: "company/job",
        component: CompanyJob,
        meta: { requiresAuth: true, role: "COMPANY" }
      },
      {
        path: "company/brief",
        component: CompanyBrief,
        meta: { requiresAuth: true, role: "COMPANY" }
      },
      {
        path: "company/jobApply/:id",
        component: CompanyJobApply,
        meta: { requiresAuth: true, role: "COMPANY" }
      },
      {
        path: "company/jobApplyDetail/:userId/:resumeId/:applyId/:positionId",
        component: CompanyJobApplyDetail,
        meta: { requiresAuth: true, role: "COMPANY" }
      },
      {
        path: "company/job/save/:id",
        component: CompanySaveJob,
        meta: {
          requiresAuth: true,
          role: "COMPANY"
        }
      },
      {
        path: "company/resumeadmin",
        component: ResumeAdmin,
        meta: {
          requiresAuth: true,
          role: "COMPANY"
        }
      },
      {
        path: "company/personQuery",
        component: PersonQuery,
        meta: {
          requiresAuth: true,
          role: "COMPANY"
        }
      },
      {
        path: "person/project",
        component: PersonProject,
        meta: { requiresAuth: true, role: "PERSON" }
      },
      {
        path: "person/job",
        component: PersonJob,
        meta: { requiresAuth: true, role: "PERSON" }
      },
      {
        path: "person/resume",
        component: PersonResume,
        meta: { requiresAuth: true, role: "PERSON" }
      },
      {
        path: "person/resume/importResume",
        component: ImportResume,
        meta: {
          requiresAuth: true,
          role: "PERSON",
          role: "PERSON"
        }
      },
      {
        path: "person/resume/resumeEdit",
        component: ResumeEdit,
        meta: {
          requiresAuth: true,
          role: "PERSON",
          role: "PERSON"
        }
      },
      {
        path: "person/resume/saveResume",
        component: SaveResume,
        meta: {
          requiresAuth: true,
          role: "PERSON",
          role: "PERSON"
        }
      },
      {
        path: "person/resume/previewResume",
        component: PreviewResume,
        meta: {
          requiresAuth: true,
          role: "PERSON",
          role: "PERSON"
        }
      },
      {
        path: "person/resume/preview/:id",
        component: PersonPreviewResume,
        meta: {
          requiresAuth: true,
          role: "PERSON"
        }
      },
      {
        path: "person/favorite",
        component: PersonFavorite,
        meta: { requiresAuth: true, role: "PERSON" }
      },
      {
        path: "person/setting",
        component: Setting,
        meta: { requiresAuth: true, role: "PERSON,COMPANY" }
      },
      {
        path: "person/userInfo",
        component: UserInfo,
        meta: { requiresAuth: true, role: "PERSON,COMPANY" }
      },
      {
        path: "company/exam",
        component: Exam,
        meta: { requiresAuth: true, role: "COMPANY" }
      },
      {
        path: "company/examQuestion",
        component: ExamQuestion,
        meta: { requiresAuth: true, role: "COMPANY" }
      },
      {
        path: "person/practice",
        component: PersonPractice,
        meta: { requiresAuth: true, role: "PERSON" }
      },
      {
        path: "person/practice/progress/:planId",
        component: PersonPracticeProgress,
        meta: {
          requiresAuth: true,
          role: "PERSON"
        }
      },
      {
        path: "person/trade/orders",
        component: PersonTradeOrder,
        meta: { requiredsAuth: true, role: "PERSON" }
      }
    ]
  }
];
export default routes;
