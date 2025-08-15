import {IndustryType} from "../enums/industry-type.enum";
import {RoleType} from "../enums/role-type.enum";

export interface IStep2FormData {
    industry: IndustryType;
    yourRole:RoleType,
    experienceInYears: number
}