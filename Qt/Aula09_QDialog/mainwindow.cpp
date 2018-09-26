#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QCloseEvent>
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
    delete dialog;
}

//because of the scope you can't access the MainWindow without destroying this Dialog
void MainWindow::on_btnQDialogStack_clicked()
{
    Dialog dialogStack;
    dialogStack.setModal(true);
    dialogStack.exec();
}

//allows to switch windows
void MainWindow::on_btnQDialogHeap_clicked()
{
    dialog = new Dialog(this);
    dialog->show();
}

