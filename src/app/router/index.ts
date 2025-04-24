import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { propertyRoute } from '../modules/property/property.route';
import { AuthRouters } from '../modules/auth/auth.route';
import { ReviewRoutes } from '../modules/review/review.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/properties',
    route: propertyRoute,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
