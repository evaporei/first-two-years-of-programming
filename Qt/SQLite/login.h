#ifndef LOGIN_H
#define LOGIN_H

#include <QMainWindow>
#include <QtSql>
#include <QDebug>
#include <QFileInfo>

namespace Ui {
class Login;
}

class Login : public QMainWindow
{
    Q_OBJECT

public:
    explicit Login(QWidget *parent = 0);
    ~Login();
    void connectDatabase();
    void disconnectDatabase();
private slots:
    void on_pbLogin_clicked();

private:
    Ui::Login *ui;
    QSqlDatabase database;

    void connectToDatabase();

};

#endif // LOGIN_H
