export interface ISignInBody {
  username: string
  email: string
  password: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}
