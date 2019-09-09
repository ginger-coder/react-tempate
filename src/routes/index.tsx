import * as React from "react";
import { Route, Switch, RouteProps } from "react-router-dom";
// import history from './history';
import Menu from '@components/menu';

const { lazy, Suspense } = React;

const Demo = lazy(() =>
    import("@components/demo")
);
const Login = lazy(() =>
    import("@components/login")
);
const Home = lazy(() =>
    import("@components/home")
);

export const routes: RouteProps[] = [
    {
        path: "/demo",
        exact: true,
        component: Demo,
    },
    {
        path: "/login",
        exact: true,
        component: Login,
    },
    {
        path: "/home",
        exact: true,
        component: Home,
    },
];

const Routes = () => (
    <Suspense fallback={<span>Loading</span>}>
        <Menu />
        <Switch>
            {routes.map((r) => {
                const { path, exact, component } = r;
                const LazyCom = component;
                return (
                    <Route
                        key={`${path}`}
                        exact={exact}
                        path={path}
                        render={(props) => <LazyCom {...props} />}
                    />
                );
            })}
        </Switch>
    </Suspense>
);

export default Routes;