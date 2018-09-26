#include "mainwindow.h"
#include <QApplication>
//#include <QLabel>
//#include <QPushButton>



int main(int argc, char *argv[])
{
    QApplication program(argc, argv);
/*
    QPushButton * button = new QPushButton("Heyy, this will end the program");

    QObject::connect(button, SIGNAL(clicked()), &program, SLOT(quit()));

    button->show();
*/
    MainWindow window;
    window.show();


    return program.exec();
}

