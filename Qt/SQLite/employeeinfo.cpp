#include "employeeinfo.h"
#include "ui_employeeinfo.h"

EmployeeInfo::EmployeeInfo(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::EmployeeInfo)
{
    ui->setupUi(this);
}

EmployeeInfo::~EmployeeInfo()
{
    delete ui;
}
