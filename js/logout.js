function logout()
{
    localStorage.removeItem("auth");
    location.replace("login.html");
}