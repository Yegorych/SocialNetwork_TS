import {ActionsTypes} from "./state";

export type UsersType = {
    id: number
    name: string
    uniquerUrlName: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    status: string
    location: {
        city: string
        country: string

    }
}

export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
export type initialStateType = typeof initialState

export const follow = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unFollow = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsers = (users: Array<UsersType>) => ({type: 'SET-USERS', users}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const
export const setUsersTotalCount = (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS', totalUsersCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: 'IS_FETCHING', isFetching}) as const

export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map(u =>  {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map(u =>  {
                    if(u.id === action.userId) {
                        return {...u, unfollowed: false}
                    }
                    return u
                })
            }
        }
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage }
        }
        case 'SET_TOTAL_USERS': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case 'IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}