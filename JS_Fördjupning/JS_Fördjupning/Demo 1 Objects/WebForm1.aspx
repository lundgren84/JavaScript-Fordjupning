<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="JS_Fördjupning.Demo_1_Objects.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="StyleSheet1.css" rel="stylesheet" />
    <title></title>
</head>
<body >
    <form id="form1" runat="server">
        <div>
            Name:
            <input id="NameInput" type="text" />
            Country:
            <input id="CountryInput" type="text" />
            <input type="button" value="FillForm" onclick="FillForm()" />
        </div>

    </form>
    <script src="JavaScript.js"></script>
   
</body>
</html>
