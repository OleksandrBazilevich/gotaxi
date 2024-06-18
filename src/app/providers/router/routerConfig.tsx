import { RouteProps } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import { LoginPage } from "../../../pages/LoginPage";
import AuthLayout from "../../../widgets/Auth/Layout/AuthLayout";
import { RegisterPage } from "../../../pages/RegisterPage";
import { FleetRegisterPage } from "../../../pages/FleetRegisterPage";
import { HomePage } from "../../../pages/HomePage";
import MainLayout from "../../../widgets/Main/Layout/ui/MainLayout";
import CarDetailsPage from "../../../pages/CarDetailsPage/CarDetailsPage";
import BusinessPage from "../../../pages/BusinessPage/BusinessPage";
import DashboardLayout from "../../../widgets/Dashboard/Layout/DashboardLayout";
import BusinessDashboardPage from "../../../pages/BusinessDashboardPage/BusinessDashboardPage";
import RequestsPage from "../../../pages/RequestsPage/RequestsPage";
import PostsPage from "../../../pages/PostsPage/PostsPage";
import CalendarPage from "../../../pages/CalendarPage/CalendarPage";

import BusinessSettingsPage from "../../../pages/BusinessSettingsPage/BusinessSettingsPage";
import DriverSettingsPage from "../../../pages/DriverSettingsPage/DriverSettingsPage";
import DriverDashboardPage from "../../../pages/DriverDashboardPage/DriverDashboardPage";
import DriverPostsPage from "../../../pages/DriverPostsPage/DriverPostsPage";
import UserAgreementPage from "../../../pages/UserAgreementPage/UserAgreementPage";
import PrivacyPolicyPage from "../../../pages/PrivacyPolicyPage/PrivacyPolicyPage";
import FAQPage from "../../../pages/FAQPage/FAQPage";
import RequirementsPage from "../../../pages/RequirementsPage/RequirementsPage";

enum Routes {
  HOME = "home",
  CAR = "car",
  BUSINESS = "business",
  LOGIN = "login",
  REGISTER = "register",
  FLEET_REGISTER = "fleet_register",
  BUSINESS_DASHBOARD = "business_dashboard",
  REQUESTS = "requests",
  POSTS = "posts",
  CALENDAR = "calendar",
  BUSINESS_SETTINGS = "business_settings",
  DRIVER_SETTINGS = "driver_settings",
  DRIVER_DASHBOARD = "driver_dashboard",
  DRIVER_POSTS = "driver_posts",
  USER_AGREEMENT = "user_agreement",
  PRIVACY_POLICY = "privacy_policy",
  FAQ = "faq",
  REQUIREMENTS = "requirements"
}

type PathType = Record<Routes, string>;

type RouterConfigType = Record<Routes, RouteProps>;

const Paths: PathType = {
  home: "/",
  car: "/car/:id",
  business: "/business",
  user_agreement: "/user_agreement",
  business_dashboard: "/:fleetName/dashboard",
  requests: "/:fleetName/requests",
  posts: "/:fleetName/posts",
  calendar: "/:fleetName/calendar",
  business_settings: "/:fleetName/settings",
  driver_settings: "/driver/:driverId/settings",
  register: "/register",
  login: "/login",
  fleet_register: "/fleet_register",
  driver_dashboard: "/driver/:driverId/dashboard",
  driver_posts: "/driver/:driverId/posts",
  privacy_policy: "/privacy_policy",
  faq: "/faq",
  requirements: "/requirements"
};

export const routerConfig: RouterConfigType = {
  [Routes.HOME]: {
    path: Paths.home,
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    )
  },
  [Routes.CAR]: {
    path: Paths.car,
    element: (
      <MainLayout>
        <CarDetailsPage />
      </MainLayout>
    )
  },
  [Routes.BUSINESS]: {
    path: Paths.business,
    element: (
      <MainLayout>
        <BusinessPage />
      </MainLayout>
    )
  },
  [Routes.USER_AGREEMENT]: {
    path: Paths.user_agreement,
    element: (
      <MainLayout>
        <UserAgreementPage />
      </MainLayout>
    )
  },
  [Routes.PRIVACY_POLICY]: {
    path: Paths.privacy_policy,
    element: (
      <MainLayout>
        <PrivacyPolicyPage />
      </MainLayout>
    )
  },
  [Routes.FAQ]: {
    path: Paths.faq,
    element: (
      <MainLayout>
        <FAQPage />
      </MainLayout>
    )
  },
  [Routes.REQUIREMENTS]: {
    path: Paths.requirements,
    element: (
      <MainLayout>
        <RequirementsPage />
      </MainLayout>
    )
  },
  [Routes.BUSINESS_DASHBOARD]: {
    path: Paths.business_dashboard,
    element: (
      <DashboardLayout>
        <BusinessDashboardPage />
      </DashboardLayout>
    )
  },
  [Routes.REQUESTS]: {
    path: Paths.requests,
    element: (
      <DashboardLayout>
        <RequestsPage />
      </DashboardLayout>
    )
  },
  [Routes.POSTS]: {
    path: Paths.posts,
    element: (
      <DashboardLayout>
        <PostsPage />
      </DashboardLayout>
    )
  },
  [Routes.CALENDAR]: {
    path: Paths.calendar,
    element: (
      <DashboardLayout>
        <CalendarPage />
      </DashboardLayout>
    )
  },
  [Routes.BUSINESS_SETTINGS]: {
    path: Paths.business_settings,
    element: (
      <DashboardLayout>
        <BusinessSettingsPage />
      </DashboardLayout>
    )
  },
  [Routes.DRIVER_SETTINGS]: {
    path: Paths.driver_settings,
    element: (
      <DashboardLayout>
        <DriverSettingsPage />
      </DashboardLayout>
    )
  },
  [Routes.DRIVER_DASHBOARD]: {
    path: Paths.driver_dashboard,
    element: (
      <DashboardLayout>
        <DriverDashboardPage />
      </DashboardLayout>
    )
  },
  [Routes.DRIVER_POSTS]: {
    path: Paths.driver_posts,
    element: (
      <DashboardLayout>
        <DriverPostsPage />
      </DashboardLayout>
    )
  },
  [Routes.REGISTER]: {
    path: Paths.register,
    element: (
      <AuthLayout>
        <RegisterPage />
      </AuthLayout>
    )
  },

  [Routes.LOGIN]: {
    path: Paths.login,
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    )
  },

  [Routes.FLEET_REGISTER]: {
    path: Paths.fleet_register,
    element: (
      <AuthLayout>
        <FleetRegisterPage />
      </AuthLayout>
    )
  }
};
