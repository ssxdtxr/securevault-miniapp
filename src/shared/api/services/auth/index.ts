import { api } from '../../api'
import type { AuthTokens, ISignInBody } from './types'

export const AuthService = {
  async signIn(body: ISignInBody) {
    return await api.post<AuthTokens>('/auth/signin', body)
  },
}
