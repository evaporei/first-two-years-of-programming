#include "mainwindow.h"
#include "ui_mainwindow.h"

#include "person.h"
#include <QMessageBox>
#include <QDebug>
MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
    if(loginDialog != nullptr){
        delete loginDialog;
    }
}

void MainWindow::on_btnLogin_clicked()
{
qDebug() << "here it works";
    Person * person = new Person(ui->leUsername->text(), ui->lePassword->text());//this line has a problem
qDebug() << person->getUsername();
    if(person->getUsername() == "admin" && person->getPassword() == "admin"){

        loginDialog = new LoginDialog(this);
        loginDialog->loadPerson(*person);
        loginDialog->show();

    } else {

        QMessageBox::critical(this, "Login Failed", "Username and Password do not match");

    }
}
