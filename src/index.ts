import server from './server'

server.listen(server.get('PORT'), () => {
  console.log(`Listening in the port ${server.get('PORT')}`)
})
