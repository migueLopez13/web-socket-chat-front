import { setupWorker } from "msw"
import handlerMessageMock from "./handlers/message.handler"
import handlerRoomMock from "./handlers/room.handler"
import handlerUserMock from "./handlers/user.handler"

export const worker = setupWorker(
  ...handlerMessageMock, ...handlerRoomMock, ...handlerUserMock
)
