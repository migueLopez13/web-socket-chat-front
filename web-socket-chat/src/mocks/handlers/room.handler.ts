import { rest } from 'msw'

export default [
  rest.get('http://localhost:8000/room', (req, res, ctx) => {
    const rooms = [
      {
        createdAt: Date(),
        id: 'as',
        admin: "example1@gmail.com",
        members: [
          "example1@gmail.com",
          "example2@gmail.com",
          "example3@gmail.com"
        ],
        messages: [
          {
            createdAt: Date(),
            id: "as1",
            owner: "example2@gmail.com",
            text: "hola grupo 1"
          }
        ]
      },
      {
        createdAt: Date(),
        id: 'am',
        admin: "example2@gmail.com",
        members: [
          "example4@gmail.com",
          "example2@gmail.com",
          "example3@gmail.com"
        ],
        messages: [
          {
            createdAt: Date(),
            id: "am1",
            owner: "example2@gmail.com",
            text: "hola grupo 2"
          }
        ]
      },
    ]
    if (req.params.id) {
      return res(
        ctx.json(rooms.find(
          ({ id }) => id === req.params.id)
        )
      )
    }

    return res(
      ctx.json({
        data: rooms,
      })
    )
  })
]