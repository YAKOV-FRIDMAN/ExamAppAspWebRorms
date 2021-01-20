namespace ExamApp
{
    using ExamApp.Views;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class Model1 : DbContext
    {
        // Your context has been configured to use a 'Model1' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'ExamApp.Model1' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'Model1' 
        // connection string in the application configuration file.
        public Model1()
            : base(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=ExamData;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False")
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        public virtual DbSet<ExamUserModel> ExamUserModels { get; set; }
    }

    public class ExamUserModel
    {
        public int Id { get; set; }
        public string NameExam { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public int Custom { get; set; }

        public virtual void Update()
        {
           

        }
    }
}