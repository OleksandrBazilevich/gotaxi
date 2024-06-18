interface User{
    id: number
    role: 'user' | 'admin'
}

export const useAuth = () => {
    return {
        id: 1,
        role: 'user'
    } as User
}