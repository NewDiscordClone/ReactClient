import {ServerProfileLookup} from "./ServerProfileLookup";
import {Role} from "./Role";
import {UserStatus} from "./UserDetails";
import {UserLookUp} from "./UserLookUp";

class ServerProfileLookupImpl implements ServerProfileLookup {
    id: string;
    userId: string;
    name: string;
    mainRole: Role;

    get avatarUrl(): string | undefined {
        return this.users[this.userId].avatar
    }

    get status(): UserStatus {
        return this.users[this.userId].status as UserStatus;
    }

    get textStatus(): string | undefined {
        return this.users[this.userId].textStatus;
    }

    constructor(profile: ServerProfileLookup, private users: { [id: string]: UserLookUp }) {
        this.id = profile.id;
        this.userId = profile.userId;
        this.name = profile.name;
        this.mainRole = profile.mainRole;
    }
}
export default ServerProfileLookupImpl;