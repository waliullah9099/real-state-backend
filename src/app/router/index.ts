import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { propertyRoute } from '../modules/property/property.route';
import { AuthRouters } from '../modules/auth/auth.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/properties',
    route: propertyRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
