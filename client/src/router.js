import Main from "./Main";
import About from "./About"

export const urls = {
    root: '/',
    about: '/about'
}

export const routes = [
    {
        path: urls.root,
        exact: true,
        // sidebar: () => <div>home!</div>,
        component: Main
    },
    {
        path: '/about',
        exact: true,
        // sidebar: () => <div>home!</div>,
        component: About
    }
]