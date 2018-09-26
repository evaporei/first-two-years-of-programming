#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pushButton_clicked()
{
    if(ui->label->text() == "Text"){
        ui->label->setText("Chaaanged ;)");
    } else {
        ui->label->setText("Text");
    }
}

void MainWindow::on_pushButton_2_clicked()
{
    MainWindow::close();
}
