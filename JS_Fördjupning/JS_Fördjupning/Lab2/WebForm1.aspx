<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="JS_Fördjupning.Lab2.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="StyleSheet1.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <p>USers in DB: <span id="userDb">0</span></p>
        <p>
            <input type="button" id="autoFillbtn" class="hide" value="AutoFill" onclick="Autofill()" />
        </p>
        <table>
            <tr>
                <td>
                    <label for="Username">UserName: </label>
                </td>
                <td>
                    <input type="text" onchange="CheckAutofill()" id="Username" /><br />
                </td>
            </tr>
            <tr>
                <td>
                    <label for="Firstname">Firstname: </label>
                </td>
                <td>
                    <input type="text" id="Firstname" /><br />
                </td>
            </tr>
            <tr>
                <td>
                    <label for="Lastname">Lastname: </label>
                </td>
                <td>
                    <input type="text" id="Lastname" /><br />
                </td>
            </tr>
              <tr>
                <td>
                     <label for="Phone">Phonenumber: </label>
                </td>
                <td>
                  <input type="text" id="Phone" /><br />
                </td>
            </tr>
               <tr>
                <td>
                       <label for="City">City: </label>
                </td>
                <td>
                  <input type="text" id="City" /><br />
                </td>
            </tr>
               <tr>
                <td>
                      <label for="Age">Age: </label>
                </td>
                <td>
                  <input type="text" id="Age" /><br />
                </td>
            </tr>
            <tr>
                <td>
                           <input type="button" value="Send" onclick="SubmitForm()" /><br />
                </td>
            </tr>
        </table>     
      
 
        <div class="hide" id="resultDiv">
            <textarea id="resulttxt" rows="8" cols="50" style="background-color: lightgreen"></textarea>
            <input type="button" value="Save user?" onclick="SaveUser()" id="btnSave" />

        </div>
        <div class="hide" id="errorDiv" style="background-color: red">
            <h2>Error</h2>
            <p>Age får endast innerhålla siffror</p>
        </div>
    </form>
    <script src="JavaScript.js"></script>
</body>
</html>
