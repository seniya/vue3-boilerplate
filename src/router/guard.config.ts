import { Router } from 'vue-router'
import { logger } from '@/utils/instance.logger'

const needsLoginPages = ['/member/example']

/* router settring
  router 이동전 체크 or 처리해야될것들을 setup
*/
export function setupRouterGuard (router: Router): void {
  createPermissionGuard(router) // 로그인 권한 체크
  createParamMenuGuard(router) // 메뉴 권한 체크
}

// 사용자의 로그인여부에 따른 처리.(ex. 로그인필요메뉴 로그인여부 or jwt토큰 체크)
export function createPermissionGuard (router: Router): void {
  router.beforeEach(async (to, from, next) => {
    logger.debug('router.beforeEach createPermissionGuard')
    logger.debug('to.path :' + to.path + ' from.path :' + from.path)
    logger.debug(
      'needsLoginPages.indexOf(to.path) : ',
      needsLoginPages.indexOf(to.path)
    )

    /* 토큰이 없는가 ===> 비로그인 상태인가 */
    const token = localStorage.getItem('OSP_TOKEN') || null
    if (!(token && token.length > 1)) {
      if (needsLoginPages.indexOf(to.path) > -1) {
        next('/auth/example')
        return
      }
    }
    next()
  })
}

// 사용자의 메뉴 보유권한 처리
export function createParamMenuGuard (router: Router): void {
  router.beforeEach(async (to, from, next) => {
    logger.debug('router.beforeEach createParamMenuGuard')
    logger.debug('to.path :' + to.path + ' from.path :' + from.path)
    next()
  })
}
