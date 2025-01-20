import { TypeClient, TypeProject, TypeTask, TypeUser } from "@/lib/types";

export interface ProjectState {
    projects: Array<TypeProject>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface UserState {
    users: Array<TypeUser>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface TaskState {
    tasks: Array<TypeTask>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface ClientState {
    clients: Array<TypeClient>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}