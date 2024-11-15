import http from '@/api'
import { USER_SERVICE } from '@/api/helper/prefix'
import type { IUser } from '@/api/interface/user/user'

export const changePassword = (params: IUser.PasswordForm) => {
  return http.put(USER_SERVICE + `/changePassword`, params, { loading: false })
}
