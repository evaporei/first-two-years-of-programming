#ifndef ADDDIALOG_H
#define ADDDIALOG_H

#include <QDialog>
#include "itemdao.h"

namespace Ui {
class AddDialog;
}

class AddDialog : public QDialog
{
    Q_OBJECT

public:
    explicit AddDialog(QWidget *parent = 0);
    ~AddDialog();

private:
    Ui::AddDialog *ui;
    ItemDAO * itemDAO;

//Função que representa a saída do dialogo
protected:
    void reject();
private slots:
    void on_pbAdicionar_clicked();
    void on_pbCaminhoFoto_clicked();
};

#endif // ADDDIALOG_H
