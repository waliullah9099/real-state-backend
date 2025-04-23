import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { propertyRoute } from '../modules/property/property.route';

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
    path: '/properties',
    route: propertyRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
