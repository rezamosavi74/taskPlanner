import {
    MemoryRouter,
    Link,
    matchPath,
    useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

//Styles 
import styles from './navbar.module.css'
// import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";

// function Router(props) {
//     const { children } = props;
//     if (typeof window === 'undefined') {
//         return <StaticRouter location="/todo">{children}</StaticRouter>;
//     }

//     return (
//         <MemoryRouter initialEntries={['/todo']} initialIndex={0}>
//             {children}
//         </MemoryRouter>
//     );
// }


// function useRouteMatch(patterns) {
//     const { pathname } = useLocation();

//     for (let i = 0; i < patterns.length; i += 1) {
//         const pattern = patterns[i];
//         const possibleMatch = matchPath(pattern, pathname);
//         if (possibleMatch !== null) {
//             return possibleMatch;
//         }
//     }

//     return null;
// }
const Navbar = () => {

    // const routeMatch = useRouteMatch(['/', '/todo', '/tasks']);
    // const currentTab = routeMatch?.pattern?.path;
    return (
        <div className={styles.nav}>
            <ul>
                <li>
                    <Link to="/">main</Link>
                </li>
                <li>
                    <Link to="todo">Todo</Link>
                </li>
                <li>
                    <Link to="tasks">tasks</Link>
                </li>
            </ul>
        </div>
        // <>
        //     <AppBar>
        //         <Toolbar>
        //             <Tabs value={currentTab}>
        //                     <Tab label="home" value="/" to="/" component={Link} />
        //                     <Tab label="todo" value="/todo" to="todo" component={Link} />
        //                     <Tab label="tasks" value="/tasks" to="tasks" component={Link} />
        //             </Tabs>
        //         </Toolbar>
        //     </AppBar>
        // </>
    )
}
export default Navbar;