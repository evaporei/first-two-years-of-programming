#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QMessageBox>

/*
    void                about
    void                aboutQt
    StandardButton      critical
    StandardButton      information
    StandardButton      question
    StandardButton      warning
*/


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

void MainWindow::on_aboutButton_clicked()
{
    QMessageBox::about(this, "Title of the Core Message", "Save the Planet ;)");
}

void MainWindow::on_aboutQtButton_clicked()
{
    QMessageBox::aboutQt(this, "Titleeeee");
}

void MainWindow::on_criticalButton_clicked()
{
    QMessageBox::critical(this, "YOUR COMPUTER IS GOING TO EXPLOOOODE!!", "jk");
}

void MainWindow::on_informationButton_clicked()
{
    QMessageBox::information(this, "Life is good!!", "jk");
}

void MainWindow::on_questionButton_clicked()
{
    if(QMessageBox::question(this, "Question", "Do you want to quit the app?", QMessageBox::Yes | QMessageBox::No) == QMessageBox::Yes){

        QApplication::quit();

    }
}

void MainWindow::on_warningButton_clicked()
{
    QMessageBox::critical(this, "Warining", "yuup, just a warning. Btw your pc has virus ;)");
}

void MainWindow::on_quittingButton_clicked()
{
    QApplication::quit();
}
