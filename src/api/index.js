import { post } from "@/api/axios";

export const reqLogin = query => post("auth/userlogin", query);
