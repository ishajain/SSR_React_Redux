
import About from "../components/About";
import App from "../components/App";

// export default () => {
//     return(
//         <div>
//             <Switch>
//                 <Route path="/" exact component={ App } />
//                 <Route path="/about" component={ About } />
//             </Switch>
//         </div>
//     );
// };

export default [
    {
        component: App,
        path: '/',
        exact: true
    },
    {
        component: About,
        path: '/about'
    }
];