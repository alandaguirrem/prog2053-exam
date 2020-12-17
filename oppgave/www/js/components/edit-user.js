import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html`
    <div class="jumbotron centered">
      <form onsubmit="javascript: return false;" id="userForm" method="POST" text-align: right;>
        <div class="form-group pt-2 ml-5" style="width: 20rem;">
          <label for="email">Username/mail</label>
          <input class="form-control" id="uname" name="uname" type="text" value="${this.user.uname}" required>
          <input type="hidden" id="uid" name="uid" value="${this.user.uid}">
        </div>
        <div class="form-group pt-1 ml-5" style="width: 20rem;">
        <label for="firstName">First Name</label>
          <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
        </div>
        <div class="form-group pt-1 ml-5" style="width: 20rem;">
          <label for="lastName">Last Name</label>
          <input class="form-control" id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
        </div>
        <div class="form-group pt-1 ml-5" style="width: 20rem;">
        <label for="oldpwd">Old Password</label>
          <input type="password" class="form-control" id="oldpwd" name="oldpwd" type="text" value="">
        </div>
        <div class="form-group pt-1 ml-5" style="width: 20rem;">
          <label for="newpwd">New Password</label>
          <input type="password" class="form-control" id="pwd" name="pwd" type="text" value="">
        </div>
        <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn btn-info mt-4 ml-2" value="Edit User"></input>
      </form>
    </div>
    `;
  }

  // Updates the information user info
  updateUser(e) {
    // Data from the HTML form
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('../api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("The user was updated");
        } else {
            console.log("The user was not updated");
        }
      })
  }

}
customElements.define('edit-user', EditUser);
