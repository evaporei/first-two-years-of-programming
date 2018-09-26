#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include "filedownloader.h"
#include "adddialog.h"
#include "itemdao.h"
#include <QSqlTableModel>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();
    void carregarLista();

private slots:
    void on_pbSelecionar_clicked();

    void on_pbAdicionar_clicked();

    void on_pbRemover_clicked();

    void on_pbListaSelecao_clicked();

private:
    Ui::MainWindow *ui;
    FileDownloader * m_FileDownloader;
    AddDialog * m_addDialog;
    //ListDialog * listDialog;
    ItemDAO * m_itemDAO;
    void changeEvent(QEvent * event);
};

#endif // MAINWINDOW_H
