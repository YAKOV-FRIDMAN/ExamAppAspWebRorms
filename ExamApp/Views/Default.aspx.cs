using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ExamApp.Views
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void ButSend_Click(object sender, EventArgs e)
        {
            var u = new ExamUser()
            {
                NameExam = Request.Form[hfName.UniqueID],
                UserName = TxtUserName.Text,
                Email =TxtEmail.Text,
                Custom = int.Parse(Request.Form[hfScore.UniqueID])
            };
            

            u.Update();
        }
    }
}