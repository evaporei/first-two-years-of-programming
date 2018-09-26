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
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QTableView>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralwidget;
    QVBoxLayout *verticalLayout;
    QLabel *lblListaItens;
    QTableView *tbvItens;
    QHBoxLayout *horizontalLayout;
    QPushButton *pbSelecionar;
    QPushButton *pbAdicionar;
    QPushButton *pbRemover;
    QPushButton *pbListaSelecao;
    QMenuBar *menubar;
    QStatusBar *statusbar;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName(QStringLiteral("MainWindow"));
        MainWindow->resize(563, 431);
        centralwidget = new QWidget(MainWindow);
        centralwidget->setObjectName(QStringLiteral("centralwidget"));
        verticalLayout = new QVBoxLayout(centralwidget);
        verticalLayout->setObjectName(QStringLiteral("verticalLayout"));
        lblListaItens = new QLabel(centralwidget);
        lblListaItens->setObjectName(QStringLiteral("lblListaItens"));

        verticalLayout->addWidget(lblListaItens);

        tbvItens = new QTableView(centralwidget);
        tbvItens->setObjectName(QStringLiteral("tbvItens"));

        verticalLayout->addWidget(tbvItens);

        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setObjectName(QStringLiteral("horizontalLayout"));
        pbSelecionar = new QPushButton(centralwidget);
        pbSelecionar->setObjectName(QStringLiteral("pbSelecionar"));

        horizontalLayout->addWidget(pbSelecionar);

        pbAdicionar = new QPushButton(centralwidget);
        pbAdicionar->setObjectName(QStringLiteral("pbAdicionar"));

        horizontalLayout->addWidget(pbAdicionar);

        pbRemover = new QPushButton(centralwidget);
        pbRemover->setObjectName(QStringLiteral("pbRemover"));

        horizontalLayout->addWidget(pbRemover);


        verticalLayout->addLayout(horizontalLayout);

        pbListaSelecao = new QPushButton(centralwidget);
        pbListaSelecao->setObjectName(QStringLiteral("pbListaSelecao"));

        verticalLayout->addWidget(pbListaSelecao);

        MainWindow->setCentralWidget(centralwidget);
        menubar = new QMenuBar(MainWindow);
        menubar->setObjectName(QStringLiteral("menubar"));
        menubar->setGeometry(QRect(0, 0, 563, 21));
        MainWindow->setMenuBar(menubar);
        statusbar = new QStatusBar(MainWindow);
        statusbar->setObjectName(QStringLiteral("statusbar"));
        MainWindow->setStatusBar(statusbar);

        retranslateUi(MainWindow);

        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QApplication::translate("MainWindow", "MainWindow", 0));
        lblListaItens->setText(QApplication::translate("MainWindow", "Lista de Itens", 0));
        pbSelecionar->setText(QApplication::translate("MainWindow", "Selecionar", 0));
        pbAdicionar->setText(QApplication::translate("MainWindow", "Adicionar", 0));
        pbRemover->setText(QApplication::translate("MainWindow", "Remover", 0));
        pbListaSelecao->setText(QApplication::translate("MainWindow", "Visualizar Lista de Sele\303\247\303\243o/Data e Hora", 0));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
