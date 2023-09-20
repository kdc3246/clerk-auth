// import { authMiddleware } from '@clerk/nextjs'
// export default authMiddleware({
//   publicRoutes: ['/', '/api/courses', '/api/repos'],
// })
// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// }

import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/api/courses'],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
