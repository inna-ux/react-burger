import { getCookie } from "../../utils/cooke";
import { Middleware } from "redux";

interface IWebSocket {
  wsStart: string;
  onOpen: string;
  onError: string;
  onClose: string;
  getOrders: string;
}

export const socketMiddleware = (
  wsActions: IWebSocket,
  auth: boolean
): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload }: any = action;
      const { wsStart, onOpen, onClose, onError, getOrders } = wsActions;

      if (type === wsStart) {
        const token = getCookie("accessToken");
        const accessToken = token?.split("Bearer ")[1];
        socket = !auth
          ? new WebSocket(payload)
          : new WebSocket(`${payload}?token=${accessToken}`);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event: MessageEvent<string>) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: getOrders, payload: restParsedData });
        };

        socket.onclose = (event: CloseEvent) => {
          dispatch({ type: onClose, payload: event });
        };
      }
      next(action);
    };
  };
};
