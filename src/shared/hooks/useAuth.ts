import { useMutation } from '@tanstack/react-query'
import { AuthService } from '../api/services/auth'
import type { AuthTokens, ISignInBody } from '../api/services/auth/types'
import { SIGN_IN_TAG_ARR } from '../api/services/auth/tags'
import { toast } from 'react-toastify'
import type { AxiosResponse } from 'axios'

export const useAuth = () => {
  const onSuccess = ({ data }: AxiosResponse<AuthTokens>) => {
    toast('Авторизация прошла успешно')
    localStorage.setItem('access_token', data.accessToken)
    localStorage.setItem('refresh_token', data.refreshToken)
  }

  const { mutate: mutateSignIn } = useMutation({
    mutationKey: SIGN_IN_TAG_ARR,
    mutationFn: (body: ISignInBody) => AuthService.signIn(body),
    onSuccess,
  })

  return { mutateSignIn }
}
