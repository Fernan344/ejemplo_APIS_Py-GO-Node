import React from "react";
import NavVar from "../Components/NavVar";

class Principal extends React.Component {
    constructor(props){
        super(props);
    }

    login(){
        var email=document.getElementById("emailLogin").value
        var pass=document.getElementById("passLogin").value
        let credenciales = {"email":email, "pass":pass}
        fetch('http://localhost:4000/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access.Control-Allow-Methods': 'GET, PUT, POST, DELETE',
                'Access-Control-Allow-Headers': ''
            },
            body: JSON.stringify(credenciales)            
        }).then(res => res.json()).then((data) => {
            if(data["aut"]===true){
                window.location.href = "/pagina1";
            }else{
                alert('Credenciales Incorrectas')
                document.getElementById("emailLogin").value = "Tus Credenciales son incorrectas";
            }
        })
    }

    render() {
        return (
            <form>
                <NavVar/>
                <div class="form-group">
                    <label for="emailLogin">Email address</label>
                    <input type="email" class="form-control" id="emailLogin" aria-describedby="emailHelp"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="passLogin">Password</label>
                    <input type="password" class="form-control" id="passLogin"/>
                </div>
                <button type="button" onClick={this.login} class="btn btn-outline-success btn-lg btn-block">LOGIN</button>
            </form>
        );
    }
}

export default Principal;