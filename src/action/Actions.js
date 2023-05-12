let empId=3;

export function salesFilter() {
    return{
        type: "SALES_FILTER",
    };
}
export function financeFilter() {
    return{
        type: "FINANCE_FILTER",
    };
}
export function managementFilter() {
    return{
        type: "MANAGEMENT_FILTER",
    };
}
export function itFilter() {
    return{
        type: "IT_FILTER",
    };
}
export function uidesigningFilter() {
    return{
        type: "UIDESIGNING_FILTER",
    };
}
export function marketingFilter() {
    return{
        type: "MARKETING_FILTER",
    };
}
export function businessdevelopmentFilter() {
    return{
        type: "BUSINESSDEVELOPMENT_FILTER",
    };
}



export function maleFilter() {
    return{
        type: "MALE_FILTER",
    };
}
export function femaleFilter() {
    return{
        type: "FEMALE_FILTER",
    };
}
export function availableFilter() {
    return{
        type: "AVAILABLE_FILTER",
    };
}
export function unavailableFilter() {
    return{
        type: "UNAVAILABLE_FILTER",
    };
}

export function searchFilter(query) {
    return{
        type: "SEARCH_FILTER",
        payload:{query},
    };
}
export function searchFilterNormal() {
    return{
        type: "SEARCH_FILTER_NORMAL",  
    };
}

export function selectUser(id) {
    return{
        type: "ADD_USER_TO_TEAM",
        id 
    };
}








