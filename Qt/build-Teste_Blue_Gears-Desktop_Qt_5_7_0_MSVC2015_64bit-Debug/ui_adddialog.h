/********************************************************************************
** Form generated from reading UI file 'adddialog.ui'
**
** Created by: Qt User Interface Compiler version 5.7.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_ADDDIALOG_H
#define UI_ADDDIALOG_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QDialog>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_AddDialog
{
public:
    QLabel *lblTitulo;
    QLabel *lblFoto;
    QLabel *lblNome;
    QLabel *lblDescricao;
    QPushButton *pbAdicionar;
    QLineEdit *leNome;
    QLineEdit *leFoto;
    QLineEdit *leDescricao;
    QPushButton *pbCaminhoFoto;

    void setupUi(QDialog *AddDialog)
    {
        if (AddDialog->objectName().isEmpty())
            AddDialog->setObjectName(QStringLiteral("AddDialog"));
        AddDialog->resize(381, 340);
        lblTitulo = new QLabel(AddDialog);
        lblTitulo->setObjectName(QStringLiteral("lblTitulo"));
        lblTitulo->setGeometry(QRect(20, 10, 341, 16));
        lblFoto = new QLabel(AddDialog);
        lblFoto->setObjectName(QStringLiteral("lblFoto"));
        lblFoto->setGeometry(QRect(11, 81, 26, 16));
        lblNome = new QLabel(AddDialog);
        lblNome->setObjectName(QStringLiteral("lblNome"));
        lblNome->setGeometry(QRect(11, 107, 31, 16));
        lblDescricao = new QLabel(AddDialog);
        lblDescricao->setObjectName(QStringLiteral("lblDescricao"));
        lblDescricao->setGeometry(QRect(11, 133, 46, 16));
        pbAdicionar = new QPushButton(AddDialog);
        pbAdicionar->setObjectName(QStringLiteral("pbAdicionar"));
        pbAdicionar->setGeometry(QRect(140, 200, 75, 23));
        leNome = new QLineEdit(AddDialog);
        leNome->setObjectName(QStringLiteral("leNome"));
        leNome->setGeometry(QRect(63, 107, 261, 20));
        leFoto = new QLineEdit(AddDialog);
        leFoto->setObjectName(QStringLiteral("leFoto"));
        leFoto->setGeometry(QRect(63, 81, 261, 20));
        leDescricao = new QLineEdit(AddDialog);
        leDescricao->setObjectName(QStringLiteral("leDescricao"));
        leDescricao->setGeometry(QRect(63, 133, 261, 20));
        pbCaminhoFoto = new QPushButton(AddDialog);
        pbCaminhoFoto->setObjectName(QStringLiteral("pbCaminhoFoto"));
        pbCaminhoFoto->setGeometry(QRect(330, 80, 31, 23));
#ifndef QT_NO_SHORTCUT
        lblFoto->setBuddy(leFoto);
        lblNome->setBuddy(leNome);
        lblDescricao->setBuddy(leDescricao);
#endif // QT_NO_SHORTCUT
        QWidget::setTabOrder(leFoto, leNome);
        QWidget::setTabOrder(leNome, leDescricao);
        QWidget::setTabOrder(leDescricao, pbAdicionar);

        retranslateUi(AddDialog);

        QMetaObject::connectSlotsByName(AddDialog);
    } // setupUi

    void retranslateUi(QDialog *AddDialog)
    {
        AddDialog->setWindowTitle(QApplication::translate("AddDialog", "Dialog", 0));
        lblTitulo->setText(QApplication::translate("AddDialog", "Adicionar Item", 0));
        lblFoto->setText(QApplication::translate("AddDialog", "Foto:", 0));
        lblNome->setText(QApplication::translate("AddDialog", "Nome:", 0));
        lblDescricao->setText(QApplication::translate("AddDialog", "Descri\303\247\303\243o", 0));
        pbAdicionar->setText(QApplication::translate("AddDialog", "Adicionar", 0));
        leNome->setPlaceholderText(QApplication::translate("AddDialog", "Nome do item", 0));
        leFoto->setInputMask(QString());
        leFoto->setPlaceholderText(QApplication::translate("AddDialog", "Caminho da imagem", 0));
        leDescricao->setPlaceholderText(QApplication::translate("AddDialog", "Descri\303\247\303\243o do item", 0));
        pbCaminhoFoto->setText(QApplication::translate("AddDialog", "...", 0));
    } // retranslateUi

};

namespace Ui {
    class AddDialog: public Ui_AddDialog {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_ADDDIALOG_H
