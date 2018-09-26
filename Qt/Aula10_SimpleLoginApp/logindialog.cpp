#include "logindialog.h"
#include "ui_logindialog.h"

LoginDialog::LoginDialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::LoginDialog)
{
    ui->setupUi(this);

}

LoginDialog::~LoginDialog()
{
    delete ui;
}

void LoginDialog::reject()
{
    delete this;
}

void LoginDialog::loadPerson(Person person)
{
    this->person = person;
    ui->lblUsername->setText("Heyy: " + person.getUsername());
    ui->lblPassword->setText("Your password is: " + person.getPassword());
}
