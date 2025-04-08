let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

if (userRole == "admin"){
    accessLevel = "Full access";
}else if (userRole == "manager"){
    accessLevel = "Limited access";
}else{
    accessLevel = "No access";
}

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    }else{
        userMessage = "Welcome, User!";
    }
}else{
    userMessage = "Please log in to access the system";
}

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("Access level:",accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);