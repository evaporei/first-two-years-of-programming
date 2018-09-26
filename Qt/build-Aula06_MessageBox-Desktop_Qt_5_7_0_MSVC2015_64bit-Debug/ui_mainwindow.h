/********************************************************************************
** Form generated from reading UI file 'mainwindow.ui'
**
** Created by: Qt User Interface Compiler version 5.7.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralWidget;
    QLabel *label;
    QPushButton *quittingButton;
    QWidget *widget;
    QGridLayout *gridLayout;
    QPushButton *questionButton;
    QPushButton *warningButton;
    QPushButton *informationButton;
    QPushButton *aboutButton;
    QPushButton *aboutQtButton;
    QPushButton *criticalButton;
    QMenuBar *menuBar;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName(QStringLiteral("MainWindow"));
        MainWindow->resize(400, 300);
        centralWidget = new QWidget(MainWindow);
        centralWidget->setObjectName(QStringLiteral("centralWidget"));
        label = new QLabel(centralWidget);
        label->setObjectName(QStringLiteral("label"));
        label->setGeometry(QRect(146, 10, 91, 20));
        quittingButton = new QPushButton(centralWidget);
        quittingButton->setObjectName(QStringLiteral("quittingButton"));
        quittingButton->setGeometry(QRect(160, 250, 75, 23));
        widget = new QWidget(centralWidget);
        widget->setObjectName(QStringLiteral("widget"));
        widget->setGeometry(QRect(10, 20, 381, 221));
        gridLayout = new QGridLayout(widget);
        gridLayout->setSpacing(6);
        gridLayout->setContentsMargins(11, 11, 11, 11);
        gridLayout->setObjectName(QStringLiteral("gridLayout"));
        gridLayout->setContentsMargins(0, 0, 0, 0);
        questionButton = new QPushButton(widget);
        questionButton->setObjectName(QStringLiteral("questionButton"));

        gridLayout->addWidget(questionButton, 1, 1, 1, 1);

        warningButton = new QPushButton(widget);
        warningButton->setObjectName(QStringLiteral("warningButton"));

        gridLayout->addWidget(warningButton, 1, 2, 1, 1);

        informationButton = new QPushButton(widget);
        informationButton->setObjectName(QStringLiteral("informationButton"));

        gridLayout->addWidget(informationButton, 1, 0, 1, 1);

        aboutButton = new QPushButton(widget);
        aboutButton->setObjectName(QStringLiteral("aboutButton"));

        gridLayout->addWidget(aboutButton, 0, 0, 1, 1);

        aboutQtButton = new QPushButton(widget);
        aboutQtButton->setObjectName(QStringLiteral("aboutQtButton"));

        gridLayout->addWidget(aboutQtButton, 0, 1, 1, 1);

        criticalButton = new QPushButton(widget);
        criticalButton->setObjectName(QStringLiteral("criticalButton"));

        gridLayout->addWidget(criticalButton, 0, 2, 1, 1);

        MainWindow->setCentralWidget(centralWidget);
        menuBar = new QMenuBar(MainWindow);
        menuBar->setObjectName(QStringLiteral("menuBar"));
        menuBar->setGeometry(QRect(0, 0, 400, 21));
        MainWindow->setMenuBar(menuBar);

        retranslateUi(MainWindow);

        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QApplication::translate("MainWindow", "MainWindow", 0));
        label->setText(QApplication::translate("MainWindow", "Message Boxes :D", 0));
        quittingButton->setText(QApplication::translate("MainWindow", "Quit", 0));
        questionButton->setText(QApplication::translate("MainWindow", "Question", 0));
        warningButton->setText(QApplication::translate("MainWindow", "Warning", 0));
        informationButton->setText(QApplication::translate("MainWindow", "Information", 0));
        aboutButton->setText(QApplication::translate("MainWindow", "About", 0));
        aboutQtButton->setText(QApplication::translate("MainWindow", "About Qt", 0));
        criticalButton->setText(QApplication::translate("MainWindow", "Critical", 0));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
