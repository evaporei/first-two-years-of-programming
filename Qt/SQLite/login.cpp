#include "login.h"
#include "ui_login.h"
#include "employeeinfo.h"

Login::Login(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::Login)
{
    ui->setupUi(this);

    //connectToDatabase();
    connectDatabase();
}

Login::~Login()
{
    delete ui;
    //delete database;
}


void Login::connectToDatabase()
{
    database = QSqlDatabase::addDatabase("QSQLITE");

    database.setDatabaseName("C:\\Users\\SemAcento\\Desktop\\Projetos\\Qt\\SQLite\\database.db");//C:\\Users\\SemAcento\\Desktop\\Projetos\\Qt\\SQLite\\database.db

    if(database.open()){
        ui->lblDatabaseStatus->setText("[ + ] Status: Connected to the database");
    }
    else
    {
        ui->lblDatabaseStatus->setText("[ + ] Status: Connection Failed :(");
    }
}

void Login::connectDatabase()
{
    database = QSqlDatabase::addDatabase("QSQLITE");

    database.setDatabaseName("C:\\Users\\SemAcento\\Desktop\\Projetos\\Qt\\SQLite\\database.db");//C:\\Users\\SemAcento\\Desktop\\Projetos\\Qt\\SQLite\\database.db

    if(database.open()){
        ui->lblDatabaseStatus->setText("[ + ] Status: Connected to the database");
        return true;
    }
    else
    {
        ui->lblDatabaseStatus->setText("[ + ] Status: Connection Failed :(");
        return false;
    }
}


void Login::disconnectDatabase()
{
    database.close();
    database.removeDatabase(QSqlDatabase::defaultConnection);
}


void Login::on_pbLogin_clicked()
{
    QString * username,
            * password;

    username = &ui->leUsername->text();
    password = &ui->lePassword->text();

    if(!database.isOpen()){
        qDebug() << "Failed to open database";
        return;
    }

    connectDatabase();


    QSqlQuery query;

    query.prepare("SELECT * FROM employeeinfo WHERE username = '" + (*username) + "' AND password = '" + (*password) + "'");

    if(query.exec()){

        qDebug() << (*username);
        qDebug() << (*password);

        int count = 0;
        qDebug() << count;

        while(query.next()){

            count++;

        }
        qDebug() << count;
        if(count < 1){

            ui->lblAccountStatus->setText("Account status: does not exist");

        } else if(count == 1) {

            ui->lblAccountStatus->setText("Account status: logged in");
            disconnectDatabase();
            this->hide();
            EmployeeInfo employeeInfo;
            employeeInfo.setModal(true);
            employeeInfo.exec();

        } else if(count > 1){

            ui->lblAccountStatus->setText("Account status: multiple occurrences");

        }

    }

    //qDebug() << query.lastError().text();//VERY USEFUL THO
}

