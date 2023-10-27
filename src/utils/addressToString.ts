import { UserAddress } from "../hooks/useUsers";

export const addressToString = (address: UserAddress) => `${ address.street }, ${ address.city }`;