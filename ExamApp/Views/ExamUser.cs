using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExamApp.Views
{
    public class ExamUser : ExamUserModel
    {
        public override void  Update()
        {
            using (Model1 model1 = new Model1())
            {
                model1.ExamUserModels.Add(this);
                model1.SaveChanges();
            }
        }
    }
}