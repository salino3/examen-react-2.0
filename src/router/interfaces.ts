export interface Routes {
    root: string;
    dogs: string;
};

export const SwitchRoutes: Routes = {
 root: '/',
 dogs: '/dogs'
};

export const {root, dogs} = SwitchRoutes;