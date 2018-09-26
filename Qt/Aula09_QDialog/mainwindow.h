#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

#include "dialog.h"

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();
    //void MainWindow::closeEvent(QCloseEvent * event);

private slots:
    void on_btnQDialogStack_clicked();
    void on_btnQDialogHeap_clicked();

private:
    Ui::MainWindow *ui;
    Dialog * dialog;
};

#endif // MAINWINDOW_H
