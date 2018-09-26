#ifndef ITEM_H
#define ITEM_H

#include <QByteArray>
#include <QString>

class Item
{
public:
    Item();
    ~Item();


    QByteArray getFoto() const;
    void setFoto(QByteArray foto);

    QString getNome() const;
    void setNome(QString nome);

    QString getDescricao() const;
    void setDescricao(QString descricao);


private:
    QByteArray m_foto;
    QString m_nome;
    QString m_descricao;
};

#endif // ITEM_H
