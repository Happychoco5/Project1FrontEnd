
    const navBar = document.getElementById("navBar");
    const button = document.createElement("button");
    const appUserViewer = document.createElement("a");
    const meetingCreator = document.createElement("a");
    const myProfile = document.createElement("a");

    const regisButton = document.createElement("button");

    let loggedIn = false;
    checkLoggedIn();

    console.log()

    function loginUser(){
        //Take to login page
        window.location.assign("https://terryblob.z13.web.core.windows.net/project1/login.html");
    }

    function logoutUser(){
        localStorage.clear();
        alert("Logged out successfully.");
        window.location.assign("https://terryblob.z13.web.core.windows.net/project1/complaint-viewer.html")
        //refresh
        //location.reload();
    }

    function checkLoggedIn(){
        appUser = localStorage.getItem("appUser");
        if(appUser != null){
            //We are logged in
            button.innerText = "Logout";
            button.id = "logButton";
            if(JSON.parse(appUser).role === "COUNCIL"){
                meetingCreator.innerText = "Meeting Creator";
                meetingCreator.href = "meeting-submission.html";
                navBar.appendChild(meetingCreator);

                appUserViewer.innerText = "AppUser Viewer";
                appUserViewer.href = "appuser-viewer.html";
                navBar.appendChild(appUserViewer);
            }
            myProfile.innerText = "My Profile";
            myProfile.href = "profile.html";
            navBar.appendChild(myProfile);

            navBar.appendChild(button);
            loggedIn = true;
        }
        else
        {
            //We are logged out.
            //Create the login button
            button.innerText = "Login";
            button.id = "logButton"
            navBar.appendChild(button);
            
            //Create the register account button
            regisButton.innerText = "Register Account";
            regisButton.id = "regisAccount";
            navBar.appendChild(regisButton);

            loggedIn = false;
        }
    }
    const logButton = document.getElementById("logButton");
    logButton.addEventListener("click", event =>{
        if(loggedIn){
            //Log out
            logoutUser();
        }
        else{
            //log in
            loginUser();
        }
    });

    const newRegisButton = document.getElementById("regisAccount");
    if(newRegisButton !== null){
        newRegisButton.addEventListener("click", event=>{
            window.location.assign("https://terryblob.z13.web.core.windows.net/project1/register-account.html")
        });
    }