import { rest } from 'msw'

export default [
  rest.get('http://localhost:8000/message/*', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'it works'
      })
    )
  })
]