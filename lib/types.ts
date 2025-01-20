export interface TypeUser {
    id?:number;
    first_name: String;
    last_name: String;
    full_name: String;
    email: String;
    password: String;
    phone: String;
    position: String;
    role: String;
    avatar?: String;
    dob: String;
    address: String;
    city: String;
    state: String;
    country: String;
    zip_code: String;
    status?: String;
}

export interface TypeClient {
    id: number;
    full_name: String;
    password: String;
    business_name: String;
    personal_address: String;
    business_address: String;
    position: String;
    email: String;
    phone: String;
    preferred_contact_method: String;
    timezone: String;
    default_services: String[];
    other_services: String[];
    priorities: String;
    support_hours: String;
    use_tools: String[];
    access_specific: Boolean;
    file_share_method: String;
    required_access: String;
    often: String;
    receive_updates: String;
    key_people: String[];
    particular_task: String;
    start_date: String;
    billing_method: String;
    billing_cycle: String;
    invoice_email: String;
    emergency_contact_name: String;
    emergency_contact_phone: String;
    emergency_relationship: String;
    digital_sign: String;
    sign_date: String;
}

export interface TypeProject {
    id?:number;
    project_name: String;
    clientId: number;
    package_type: String;
    monthly_hours?: number;
    rate?: number;
    start_date?: String;
    rollover?: Boolean;
    platforms?: String[];
    duration?: String;
    package_level?: String;
    services?: String[];
    project_type?: String;
    technology?: String[];
    additional_setting?: String[];
    portal_access?: String[];
}

export interface TypeTask {
    id?: number;
    task_name: String;
    projectId: number;
    due_date: String;
    priority?: String;
    description?: String;
    estimated_time?: number;
    state: String;
}
