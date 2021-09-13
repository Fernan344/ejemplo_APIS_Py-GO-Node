import React from "react";
import NavVar from "../Components/NavVar";

class Pagina extends React.Component {
    constructor(props){
        super(props);
    }

    imprimir(){
        var email=document.getElementById("emailChange").value
        document.getElementById("exampleFormControlTextarea1").value = email;
    }

    render() {
        return (            
            <form>
                <NavVar/>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="emailChange" placeholder="name@example.com" onChange={this.imprimir}/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" onChange={this.imprimir} class="btn btn-outline-success btn-lg btn-block">Success</button>
            </form>
        );
    }
}

export default Pagina;