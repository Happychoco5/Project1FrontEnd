
    const navBar = document.getElementById("navBar");
    const button = document.createElement("button");
    const meetingCreator = document.createElement("a");
    let loggedIn = false;
    checkLoggedIn();

    console.log()

    function loginUser(){
        //Take to login page
        window.location.assign("file:///D:/Notes/MarkdownNotes/Project1Frontend/Project1FrontEnd/login.html");
    }

    function logoutUser(){
        localStorage.clear();
        alert("Logged out successfully.");
        window.location.assign("file:///D:/Notes/MarkdownNotes/Project1Frontend/Project1FrontEnd/complaint-viewer.html")
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
            }
            navBar.appendChild(button);
            loggedIn = true;
        }
        else
        {
            //We are logged out.
            button.innerText = "Login";
            button.id = "logButton"
            navBar.appendChild(button);
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