#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private slots:
    void on_aboutButton_clicked();
    void on_aboutQtButton_clicked();

    void on_criticalButton_clicked();

    void on_informationButton_clicked();

    void on_questionButton_clicked();

    void on_warningButton_clicked();

    void on_quittingButton_clicked();

private:
    Ui::MainWindow *ui;
};

#endif // MAINWINDOW_H
