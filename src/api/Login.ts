import request from "../utils/request"

export const login = (name:string,password:string) => {
    return request({
        url:'/admin',
        method:'post',
        data:{name:name,password:password}
    })
}

