import {ChatContainer} from "./containers/ChatContainer";

export function getRoutes() {
    return {
        retailPoints: {
            path: '/chat',
            index: true,
            exact: true,
            component: ChatContainer,
        },
    };
}