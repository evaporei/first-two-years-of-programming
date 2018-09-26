/********************************************************************************
** Form generated from reading UI file 'login.ui'
**
** Created by: Qt User Interface Compiler version 5.7.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_LOGIN_H
#define UI_LOGIN_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QGroupBox>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QToolBar>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Login
{
public:
    QWidget *centralWidget;
    QGroupBox *gbSignIn;
    QWidget *widget;
    QVBoxLayout *verticalLayout;
    QHBoxLayout *horizontalLayout;
    QLabel *lblUsername;
    QLineEdit *leUsername;
    QHBoxLayout *horizontalLayout_2;
    QLabel *lblPassword;
    QLineEdit *lePassword;
    QPushButton *pbLogin;
    QWidget *widget1;
    QHBoxLayout *horizontalLayout_3;
    QLabel *lblDatabaseStatus;
    QLabel *lblAccountStatus;
    QMenuBar *menuBar;
    QToolBar *mainToolBar;
    QStatusBar *statusBar;

    void setupUi(QMainWindow *Login)
    {
        if (Login->objectName().isEmpty())
            Login->setObjectName(QStringLiteral("Login"));
        Login->resize(509, 387);
        centralWidget = new QWidget(Login);
        centralWidget->setObjectName(QStringLiteral("centralWidget"));
        gbSignIn = new QGroupBox(centralWidget);
        gbSignIn->setObjectName(QStringLiteral("gbSignIn"));
        gbSignIn->setGeometry(QRect(10, 10, 491, 281));
        widget = new QWidget(gbSignIn);
        widget->setObjectName(QStringLiteral("widget"));
        widget->setGeometry(QRect(10, 20, 471, 251));
        verticalLayout = new QVBoxLayout(widget);
        verticalLayout->setSpacing(6);
        verticalLayout->setContentsMargins(11, 11, 11, 11);
        verticalLayout->setObjectName(QStringLiteral("verticalLayout"));
        verticalLayout->setContentsMargins(0, 0, 0, 0);
        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setSpacing(6);
        horizontalLayout->setObjectName(QStringLiteral("horizontalLayout"));
        lblUsername = new QLabel(widget);
        lblUsername->setObjectName(QStringLiteral("lblUsername"));

        horizontalLayout->addWidget(lblUsername);

        leUsername = new QLineEdit(widget);
        leUsername->setObjectName(QStringLiteral("leUsername"));

        horizontalLayout->addWidget(leUsername);


        verticalLayout->addLayout(horizontalLayout);

        horizontalLayout_2 = new QHBoxLayout();
        horizontalLayout_2->setSpacing(6);
        horizontalLayout_2->setObjectName(QStringLiteral("horizontalLayout_2"));
        lblPassword = new QLabel(widget);
        lblPassword->setObjectName(QStringLiteral("lblPassword"));

        horizontalLayout_2->addWidget(lblPassword);

        lePassword = new QLineEdit(widget);
        lePassword->setObjectName(QStringLiteral("lePassword"));
        lePassword->setEchoMode(QLineEdit::Password);

        horizontalLayout_2->addWidget(lePassword);


        verticalLayout->addLayout(horizontalLayout_2);

        pbLogin = new QPushButton(widget);
        pbLogin->setObjectName(QStringLiteral("pbLogin"));

        verticalLayout->addWidget(pbLogin);

        widget1 = new QWidget(centralWidget);
        widget1->setObjectName(QStringLiteral("widget1"));
        widget1->setGeometry(QRect(10, 300, 491, 31));
        horizontalLayout_3 = new QHBoxLayout(widget1);
        horizontalLayout_3->setSpacing(6);
        horizontalLayout_3->setContentsMargins(11, 11, 11, 11);
        horizontalLayout_3->setObjectName(QStringLiteral("horizontalLayout_3"));
        horizontalLayout_3->setContentsMargins(0, 0, 0, 0);
        lblDatabaseStatus = new QLabel(widget1);
        lblDatabaseStatus->setObjectName(QStringLiteral("lblDatabaseStatus"));

        horizontalLayout_3->addWidget(lblDatabaseStatus);

        lblAccountStatus = new QLabel(widget1);
        lblAccountStatus->setObjectName(QStringLiteral("lblAccountStatus"));

        horizontalLayout_3->addWidget(lblAccountStatus);

        Login->setCentralWidget(centralWidget);
        menuBar = new QMenuBar(Login);
        menuBar->setObjectName(QStringLiteral("menuBar"));
        menuBar->setGeometry(QRect(0, 0, 509, 21));
        Login->setMenuBar(menuBar);
        mainToolBar = new QToolBar(Login);
        mainToolBar->setObjectName(QStringLiteral("mainToolBar"));
        Login->addToolBar(Qt::TopToolBarArea, mainToolBar);
        statusBar = new QStatusBar(Login);
        statusBar->setObjectName(QStringLiteral("statusBar"));
        Login->setStatusBar(statusBar);

        retranslateUi(Login);

        QMetaObject::connectSlotsByName(Login);
    } // setupUi

    void retranslateUi(QMainWindow *Login)
    {
        Login->setWindowTitle(QApplication::translate("Login", "Login", 0));
        gbSignIn->setTitle(QApplication::translate("Login", "Sign In", 0));
        lblUsername->setText(QApplication::translate("Login", "Username", 0));
        lblPassword->setText(QApplication::translate("Login", "Password", 0));
        pbLogin->setText(QApplication::translate("Login", "Login", 0));
        lblDatabaseStatus->setText(QApplication::translate("Login", "[ + ] Status", 0));
        lblAccountStatus->setText(QApplication::translate("Login", "Status:", 0));
    } // retranslateUi

};

namespace Ui {
    class Login: public Ui_Login {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_LOGIN_H
