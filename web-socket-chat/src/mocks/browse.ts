import { setupWorker } from 'msw'
import handlerMessageMock from './message/handler-message.mock'

export const worker = setupWorker(...handlerMessageMock)