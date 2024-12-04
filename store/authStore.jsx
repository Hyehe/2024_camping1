import {create} from 'zustand'

const useAuthStore = create((set) => ({
  user:null,             // 사용자정보
  token:null,            // JWT 토큰
  isAuthenticated:false, // 로그인 여부
  login : (user, token) => set({user,token,isAuthenticated: true}),     // 로그인 성공시 처리
  logout : () => set({user:null, token:null, isAuthenticated : false})  // 로그아웃 실패시 처리
}))

export default useAuthStore;
// 미리 만들어 놓고 권한이 필요한 애들을 이걸로 검사함
