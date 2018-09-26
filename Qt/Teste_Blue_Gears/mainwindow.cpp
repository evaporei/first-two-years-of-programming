#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "item.h"
#include <QObject>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    //Conexão ao Banco de Dados
    m_itemDAO = new ItemDAO("banco_de_dados/database.db");

    //carregarLista();

    //Baixar arquivo fonte json
    m_FileDownloader = new FileDownloader(this);
    m_FileDownloader->downloadFile("http://bpixel.com.br/teste/itens.json", "/json/", "itens.json");

}

MainWindow::~MainWindow()
{
    delete ui;

    m_itemDAO->closeDatabase();
    delete m_itemDAO;

    delete m_FileDownloader;

    //esse objeto é deletado quando é rejeitado
    //se a aplicação for fechada sem fechar o diálogo
    //ele é deletado da mesma forma pois o padrão é que
    //as janelas sejam fechadas quando a aplicação for finalizada
    //http://doc.qt.io/qt-5/qguiapplication.html#quitOnLastWindowClosed-prop
    //http://doc.qt.io/qt-5/qwindow.html#close

    //delete m_addDialog;
}

//Carregar Lista
void MainWindow::carregarLista()
{
    QSqlTableModel * model = m_itemDAO->listar(this);

    //Lista
    ui->tbvItens->setModel(model);
    //Deleta a lista
    m_itemDAO->deletaLista(model);

    //Reajusta Tamanho
    ui->tbvItens->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
}

//Selecionar Item
void MainWindow::on_pbSelecionar_clicked()
{
}

//Adicionar Item
void MainWindow::on_pbAdicionar_clicked()
{
    //Chama o dialogo que possibilitará adicionar o item
    m_addDialog = new AddDialog(this);
    m_addDialog->show();
}

//Remover Item
void MainWindow::on_pbRemover_clicked()
{

}

//Mostrar Lista de Seleção
void MainWindow::on_pbListaSelecao_clicked()
{

}

//Atualiza a lista ao mudar o foco para a janela principal(MainWindow)
void MainWindow::changeEvent(QEvent * event)
{
    if(event->type() == QEvent::ActivationChange && this->isActiveWindow()){
        carregarLista();
    }
}
