import express from 'express'
import { globalError } from './src/utils/globalError.js'
import { dbConnection } from './db/connection.js'
import userRouter from './src/modules/user/user.route.js'
import messageRouter from './src/modules/message/message.router.js'



const app = express()
const port = 3000


app.use(express.json())
dbConnection()
app.use('/users', userRouter)


app.use('/api', messageRouter)


app.use(globalError);
app.listen(port, () => {
  console.log('server is running on port', port);
})

