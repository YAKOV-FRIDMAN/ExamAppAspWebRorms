<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ExamApp.Views.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="../Style/style.css" rel="stylesheet" />
    <title></title>
     
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
  
    
</head>
<body>
  
    <div class="grid ">
        <div>

            <form id="form1" runat="server">
                <div id="divf" class="divFrom">
                    <asp:HiddenField ID = "hfName" runat = "server" />
                    <asp:HiddenField ID = "hfScore" runat = "server" />

                    <div class="divInput">
                        <h3  >name exam: </h3>
                        <asp:Label ID="LblNameExam" runat="server" Text="Label"></asp:Label>
                    </div>
                    <div class="divInput">
                        <h3>enter user name: </h3>
                        <asp:TextBox ID="TxtUserName" class="textboxinput"   runat="server"></asp:TextBox>
                    </div>
                    <div class="divInput">
                        <h3>enter email: </h3>
                        <asp:TextBox ID="TxtEmail" class="textboxinput"   runat="server"></asp:TextBox>
                    </div>
                    <div class="divInput">

                        <h3>yuer score is : </h3>
                        <asp:Label ID="LblScore" runat="server" Text="Label"></asp:Label>
                    </div>
                    <div class="divInput">
                        <div style="text-align: center">
                        <asp:Button ID="ButSend" OnClick="ButSend_Click"  runat="server" Text="Button" />

                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div id="quiz">
            <div>
                <h2>select exam </h2>
                <select id="selectExam"></select>
            </div>
            <h1>Quiz</h1>
            <hr style="margin-bottom: 20px">

            <p id="question"></p>

            <div class="buttons" id="buts">
            </div>
            <div style="margin-top: 30px;">
                <button id="goPrev"><</button>
                <button id="goTo" style="float: right;">></button>

            </div>
            <hr style="margin-top: 50px">
            <footer>
                <p id="progress">Question x of y</p>
            </footer>
        </div>
    </div>

</body>
<script type="module" src="../JavaScript/app.js"></script>

</html>
