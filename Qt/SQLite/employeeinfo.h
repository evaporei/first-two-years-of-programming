#ifndef EMPLOYEEINFO_H
#define EMPLOYEEINFO_H

#include <QDialog>

namespace Ui {
class EmployeeInfo;
}

class EmployeeInfo : public QDialog
{
    Q_OBJECT

public:
    explicit EmployeeInfo(QWidget *parent = 0);
    ~EmployeeInfo();

private:
    Ui::EmployeeInfo *ui;
};

#endif // EMPLOYEEINFO_H
