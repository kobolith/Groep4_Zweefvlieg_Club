document.addEventListener("DOMContentLoaded", function(event){
    function signIn() {
        console.log("Hi")

        let email = document.getElementById("email_field").value;
        let password = document.getElementById("password_field").value;

        if (email.length == 0 || password.length == 0) {
            console.log("empty");
            return;
        } else {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "./signin.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    //window.location.href = "./index.php";
                } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 403) {
                    alert("Ongeldige inloggegevens ingevoerd.");
                }
            }

            xhr.send(`email=${email}&password=${password}`);
        }
    }

    document.getElementById("submit_button").onclick = signIn;
});