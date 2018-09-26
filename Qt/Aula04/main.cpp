#include "mainwindow.h"
#include <QApplication>
//#include <QMainWindow>
#include <QLabel>

int main(int argc, char *argv[])
{
    QApplication program(argc, argv);
    MainWindow window;
    window.setWindowTitle("title");
    window.show();
    return program.exec();
}
