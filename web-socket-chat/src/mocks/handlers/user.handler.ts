import { rest } from "msw"

export default [
  rest.get("http://localhost:8000/user", (req, res, ctx) => {
    const users = [
      {
        createdAt: Date(),
        name: "miguel",
        avatar: "example.png",
        email: "example1@gmail.com",
      },
      {
        createdAt: Date(),
        name: "antonio",
        avatar: "example.png",
        email: "example2@gmail.com",
      },
      {
        createdAt: Date(),
        name: "german",
        avatar: "example.png",
        email: "example3@gmail.com",
      },
      {
        createdAt: Date(),
        name: "sergio",
        avatar: "example.png",
        email: "example4@gmail.com",
      },
      {
        createdAt: Date(),
        name: "juan",
        avatar: "example.png",
        email: "example5@gmail.com",
      },
    ]

    if (req.params.email) {
      return res(
        ctx.json(users.find(
          ({ email }) => email === req.params.email)
        )
      )
    }

    return res(
      ctx.json({
        data: users,
      })
    )
  }),
]
