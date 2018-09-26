#include "adddialog.h"
#include "ui_adddialog.h"
#include "item.h"
#include <QFile>
#include <QFileDialog>
#include <QMessageBox>

AddDialog::AddDialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::AddDialog)
{
    ui->setupUi(this);

    itemDAO = new ItemDAO("banco_de_dados/database.db");
}

AddDialog::~AddDialog()
{
    delete ui;
    delete itemDAO;
}

void AddDialog::reject()
{
    delete this;
}

//Adicionar
void AddDialog::on_pbAdicionar_clicked()
{

    //QDateTime dataAtual = QDateTime::currentDateTime();
    //query.bindValue(":data", QDateTime::currentDateTime().toString("dd/MM/yyyy hh:mm:ss"));
    QString * fotoString = &ui->leFoto->text(),
            * nome       = &ui->leNome->text(),
            * descricao  = &ui->leDescricao->text();


    if(fotoString->isEmpty() || nome->isEmpty() || descricao->isEmpty()){
        qDebug() << "heyyyy";
        QMessageBox::information(this, "Verifique os campos", "Existem um ou mais campos vazios");
        return;
    }
    qDebug() << "Teste";
    Item item;

    item.setNome(*nome);

    QFile file(*fotoString);
    if(!file.open(QIODevice::ReadOnly)){
        qDebug() << "deu ruim na escolha da imagem";
        QMessageBox::information(this, "Imagem não encontrada", "Por favor escolha outra imagem.");
        return;
    }

    item.setFoto(file.readAll());

    item.setDescricao(*descricao);

    itemDAO->inserir(item);//não por referência já que o objeto aqui não será modificado, apenas utilizado -> (item)
    QMessageBox::about(this, "Sucesso!", "O item foi adicionado!");

}

//Escolher Foto/Imagem
void AddDialog::on_pbCaminhoFoto_clicked()
{
    QString fotoString;

    //abre Dialog
    fotoString = QFileDialog::getOpenFileName(this,                     //parent
                                               tr("Escolha uma imagem"),//título
                                               QDir::homePath(),        //diretório que abre
                                               tr("*.jpg *.png"));      //tipos de arquivos filtrados

    ui->leFoto->setText(fotoString);
}
