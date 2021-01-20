namespace ExamApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ExamUserModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        NameExam = c.String(),
                        UserName = c.String(),
                        Email = c.String(),
                        Custom = c.Int(nullable: false),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ExamUserModels");
        }
    }
}
